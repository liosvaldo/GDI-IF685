/* Criação da base da entidade 
pessoa,
endereco, 
localizacao, 
identificaçãoSistema, 
telefone, 
pessoaFisica, 
pessoaJuridica, 
produtoEnergia, 
medidorPontoDeConexao, 
PontoConexao,
tb_possuiGeracaoPontoDeConexao,
tp_negocia,
tp_lista_negociacoes,
tb_lista_negociacoes,
 ainda precisa modificar*/

CREATE OR REPLACE TYPE tp_endereco AS OBJECT
(
    cidade VARCHAR2(50),
    estado VARCHAR2(2) -- Só permitido a sigla
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
    nome_parque varchar2(40),
    pot_nom number
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
/*Aqui o array só permite 2 telefones diferentes*/
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

/* NOT INSTANTIABLE, pois por meio desses tipos não será gerado nenhuma tabela*/
CREATE OR REPLACE TYPE tp_pessoaFisica UNDER tp_pessoa
(
    cpf NUMBER
) FINAL;
/

CREATE TABLE tb_pessoaFisica OF tp_pessoaFisica;
/

CREATE OR REPLACE TYPE tp_pessoaJuridica UNDER tp_pessoa
(
    cnpj VARCHAR2(14),
    nome_fantasia VARCHAR2(20)
) FINAL;
/

CREATE TABLE tb_pessoaJuridica OF tp_pessoaJuridica;
/

CREATE TABLE tb_pessoa OF tp_pessoa
(
    id PRIMARY KEY
);
/

CREATE OR REPLACE TYPE tp_produtoEnergia AS OBJECT
(
    id_produto NUMBER,
    quantidade_kw INTEGER,
    data_venda DATE,
    prazo_entrega NUMBER
);
/

CREATE OR REPLACE TYPE tp_medidorPontoDeConexao AS OBJECT
(
    id_medidor NUMBER,
    num_de_serie NUMBER,
    num_prioridade NUMBER
);
/

CREATE TABLE tb_possuiGeracaoPontoDeConexao OF tp_medidorPontoDeConexao;
/
    
CREATE OR REPLACE TYPE tp_pontoConexao AS OBJECT
(
    id NUMBER,
    endereco tp_endereco,
    localizacao tp_localizacao,
    identificacao_sistema tp_identificacaoSistema,
    possui_geracao_ponto_de_conexao tp_medidorPontoDeConexao
);
/

CREATE OR REPLACE TYPE tp_seColetora AS OBJECT
(
    id number,
    tensao_nom number,
    taxa_de_conversao number,
    localização tp_localizacao,
    id_sistema tp_id_sistema,
    seConecta REF tp_pontoConexao
);
/

CREATE TABLE tb_seColetora OF tp_seColetora
(
    PRIMARY KEY (id)
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

CREATE TABLE tb_lista_negociacoes 
(
    idNegociacao NUMBER PRIMARY KEY,
    negociacoes tp_lista_negociacoes
) NESTED TABLE negociacoes STORE AS tb_negociacao_negociacoes;
/

