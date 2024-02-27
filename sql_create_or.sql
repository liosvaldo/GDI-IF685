--Criação de tipos:
CREATE OR REPLACE TYPE tp_endereco AS OBJECT
(
    cidade VARCHAR2(50),
    estado CHAR(2) -- Só permitido siglas de estado
);
/

CREATE OR REPLACE TYPE tp_localizacao AS OBJECT
(
    latitude NUMBER,
    longitude NUMBER
);
/

CREATE OR REPLACE TYPE tp_id_sistema AS OBJECT
(
    nome_parque VARCHAR2(40),
    pot_nom NUMBER
);
/

CREATE OR REPLACE TYPE tp_identificacaoSistema AS OBJECT
(
    nome VARCHAR2(40),
    pot_nome VARCHAR2(40)
);
/

CREATE OR REPLACE TYPE tp_telefone AS OBJECT 
(
    cod_area VARCHAR2(2),
    fone VARCHAR2(10)
);
/

CREATE TYPE lista_tp_fone AS VARRAY(2) OF tp_telefone;
/

CREATE OR REPLACE TYPE tp_pessoa AS OBJECT
(
    id NUMBER,
    nome VARCHAR2(50),
    telefones lista_tp_fone,

    CONSTRUCTOR FUNCTION tp_pessoa(SELF IN OUT NOCOPY tp_pessoa, ID NUMBER, Nome VARCHAR2, Telefones lista_tp_fone) RETURN SELF AS RESULT
) NOT FINAL;
/

CREATE OR REPLACE TYPE BODY tp_pessoa AS
    CONSTRUCTOR FUNCTION tp_pessoa(SELF IN OUT tp_pessoa, ID NUMBER, Nome VARCHAR2, Telefones lista_tp_fone) RETURN SELF AS RESULT IS
    BEGIN
        SELF.id := ID;
        SELF.nome := Nome; 
        SELF.telefones := Telefones;
        RETURN;
    END;
END;
/

CREATE OR REPLACE TYPE tp_pessoaFisica UNDER tp_pessoa
(
    cpf NUMBER
) FINAL;
/

CREATE OR REPLACE TYPE tp_pessoaJuridica UNDER tp_pessoa
(
    cnpj VARCHAR2(14),
    nome_fantasia VARCHAR2(20)
) FINAL;
/

CREATE OR REPLACE TYPE tp_produtoEnergia AS OBJECT
(
    id_produto NUMBER,
    quantidade_kw INTEGER,
    data_venda DATE,
    prazo_entrega NUMBER
);
/

CREATE OR REPLACE TYPE tp_pontoConexao AS OBJECT
(
    id NUMBER,
    endereco tp_endereco,
    localizacao tp_localizacao,
    identificacao_sistema tp_identificacaoSistema
);
/

CREATE OR REPLACE TYPE tp_eletrocentro AS OBJECT
(
    id_eletrocentro NUMBER,
    localizacao tp_localizacao
);
/

CREATE OR REPLACE TYPE tp_medidorPontoDeConexao AS OBJECT
(
    id_medidor NUMBER,
    num_de_serie NUMBER,
    num_prioridade NUMBER,
    pontoConexao REF tp_pontoConexao
);
/

CREATE OR REPLACE TYPE tp_seColetora AS OBJECT
(
    id NUMBER,
    tensao_nom NUMBER,
    taxa_de_conversao NUMBER,
    localizacao tp_localizacao,
    id_sistema tp_id_sistema,
    seConecta REF tp_pontoConexao
);
/

CREATE OR REPLACE TYPE tp_MedidorseColetora AS OBJECT
(
    id_medidor NUMBER,
    num_prioridade NUMBER,
    num_serie NUMBER,
    geracaoSeColetora REF tp_seColetora
);
/

CREATE OR REPLACE TYPE tp_medidorEletrocentro AS OBJECT
(
    id_medidor NUMBER,
    num_serie NUMBER,
    num_prioridade NUMBER,
    eletrocentro REF tp_eletrocentro
);
/

CREATE OR REPLACE TYPE tp_modeloEletrocentro AS OBJECT
(
    modelo VARCHAR2(40),
    fabricante VARCHAR2(40),
    tensao_nom NUMBER,
    autonomia_baterias VARCHAR2(40),
    corr_max_baterias NUMBER,
    pont_nom NUMBER
);
/

CREATE OR REPLACE TYPE tp_negocia AS OBJECT
(
    idNegociacao NUMBER,
    pessoaNegocia REF tp_pessoa,
    produtoEnergiaNegocia REF tp_produtoEnergia,
    pontoConexaoNegocia REF tp_pontoConexao
);
/

CREATE TYPE tp_lista_negociacoes AS TABLE OF tp_negocia;
/

CREATE TYPE tp_lista_medidorPontoDeConexao AS TABLE OF tp_medidorPontoDeConexao;
/

CREATE TYPE tp_lista_medidorEletrocentro AS TABLE OF tp_medidorEletrocentro;
/

CREATE TYPE tp_lista_MedidorseColetora AS TABLE OF tp_MedidorseColetora;
/

--Criando tabelas:

CREATE TABLE tb_pessoaFisica OF tp_pessoaFisica;
/

CREATE TABLE tb_pessoaJuridica OF tp_pessoaJuridica;
/

CREATE TABLE tb_pessoa OF tp_pessoa
(
    id PRIMARY KEY
);
/

CREATE TABLE tb_possuiGeracaoPontoDeConexao
(
    timestamp_geracao DATE,
    potencia NUMBER,
    GeracaoPontoConexao tp_lista_medidorPontoDeConexao
) NESTED TABLE GeracaoPontoConexao STORE AS tb_pontoConexao;
/
    
CREATE TABLE tb_seColetora OF tp_seColetora
(
    PRIMARY KEY (id)
);
/

CREATE TABLE tb_geracaoEletrocentro
(
    potencia NUMBER,
    timestamp_geracao DATE,
    medidorEletrocentro tp_lista_medidorEletrocentro
) NESTED TABLE medidorEletrocentro STORE AS tb_medidorEletrocentro;
/

CREATE TABLE tb_geracaoSEColetora
(
    potencia NUMBER,
    timestamp_medidor DATE,
    geracaoMedidor tp_lista_MedidorseColetora
) NESTED TABLE geracaoMedidor STORE AS tb_medidorseColetora;
/

CREATE TABLE tb_lista_negociacoes 
(
    idNegociacao NUMBER PRIMARY KEY,
    negociacoes tp_lista_negociacoes
) NESTED TABLE negociacoes STORE AS tb_negociacoes;
/
