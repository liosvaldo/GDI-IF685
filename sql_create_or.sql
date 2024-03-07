-- Criação de tipos
CREATE OR REPLACE TYPE tp_endereco AS OBJECT
(
    cidade VARCHAR2(50),
    estado CHAR(2), -- Só permitido siglas de estado
    
    MEMBER PROCEDURE atualizar_endereco(novo_cep NUMBER, nova_cidade VARCHAR2, nova_rua VARCHAR2, novo_numero NUMBER, novo_complemento VARCHAR2)
) NOT FINAL;
/

CREATE OR REPLACE TYPE BODY tp_endereco AS
    MEMBER PROCEDURE atualizar_endereco(novo_cep NUMBER, nova_cidade VARCHAR2, nova_rua VARCHAR2, novo_numero NUMBER, novo_complemento VARCHAR2) IS
    BEGIN
        -- Implementação da MEMBER PROCEDURE
        NULL; -- Adicione a lógica de atualização aqui conforme necessário
    END atualizar_endereco;
END;
/

-- Agora você pode criar o subtipo tp_enderecoOperador
CREATE OR REPLACE TYPE tp_enderecoOperador UNDER tp_endereco (
    cep NUMBER,
    rua VARCHAR2(40),
    numero NUMBER,
    complemento VARCHAR2(50),

    OVERRIDING MEMBER PROCEDURE atualizar_endereco(novo_cep NUMBER, nova_cidade VARCHAR2, nova_rua VARCHAR2, novo_numero NUMBER, novo_complemento VARCHAR2)
);
/

CREATE OR REPLACE TYPE BODY tp_enderecoOperador AS
    OVERRIDING MEMBER PROCEDURE atualizar_endereco(novo_cep NUMBER, nova_cidade VARCHAR2, nova_rua VARCHAR2, novo_numero NUMBER, novo_complemento VARCHAR2) IS
    BEGIN
        -- Implementação da OVERRIDING MEMBER PROCEDURE
        -- Pode chamar o método na superclasse usando o seguinte
        SELF AS tp_endereco.MEMBER PROCEDURE atualizar_endereco(novo_cep, nova_cidade, nova_rua, novo_numero, novo_complemento);
        -- Adicione a lógica específica do subtipo aqui
    END atualizar_endereco;
END;
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
    cod_area VARCHAR2(2), -- não utiliza cod area em telefone
    fone VARCHAR2(10),

    -- ORDER MEMBER FUNCTION
    ORDER MEMBER FUNCTION compare(another_telefone tp_telefone) RETURN NUMBER -- Porque?
);
/

CREATE TYPE BODY tp_telefone AS
    -- ORDER MEMBER FUNCTION Implementation
    ORDER MEMBER FUNCTION compare(another_telefone tp_telefone) RETURN NUMBER IS
    BEGIN
        -- Implemente a lógica de comparação aqui e retorne -1, 0 ou 1
            -- dependendo da relação de ordem entre o telefone atual e outro_telefone.
        -- Exemplo simples:
        IF SELF.cod_area < another_telefone.cod_area THEN
            RETURN -1;
        ELSIF SELF.cod_area > another_telefone.cod_area THEN
            RETURN 1;
        ELSE
            RETURN 0;
        END IF;
    END compare;
END;
/

CREATE TYPE lista_tp_fone AS VARRAY(2) OF tp_telefone;
/

CREATE OR REPLACE TYPE tp_pessoa AS OBJECT
(
    id NUMBER,
    nome VARCHAR2(50),
    telefones lista_tp_fone,

    CONSTRUCTOR FUNCTION tp_pessoa(SELF IN OUT NOCOPY tp_pessoa, ID NUMBER, Nome VARCHAR2, Telefones lista_tp_fone) RETURN SELF AS RESULT,
    MAP MEMBER FUNCTION obter_cod_area RETURN VARCHAR2
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
    
    MAP MEMBER FUNCTION obter_cod_area RETURN VARCHAR2 IS
        result VARCHAR2(4000);
    BEGIN
        result := '';
        FOR i IN 1..self.telefones.COUNT LOOP
            result := result || self.telefones(i).cod_area || ', ';
        END LOOP;
        RETURN RTRIM(result, ', '); -- Remover a última vírgula e espaço
    END obter_cod_area;
END;
/
    
CREATE OR REPLACE TYPE tp_pessoaFisica UNDER tp_pessoa
(
    cpf NUMBER
) FINAL;
/ 
-- caso fosse criar clientes.

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

CREATE OR REPLACE TYPE tp_medidorPontoDeConexao AS OBJECT -- atenção nele
(
    id_medidor NUMBER,
    num_de_serie NUMBER,
    num_prioridade NUMBER,
    timestamp_geracao timestamp,
    potencia NUMBER,
    geracaopontodeconexao REF tp_pontoConexao
);
/

CREATE OR REPLACE TYPE tp_MedidorSEColetora AS OBJECT -- atenção nele
(
    id_medidor NUMBER,
    num_prioridade NUMBER,
    num_serie NUMBER,
    potencia NUMBER,
    timestamp_geracao timestamp,
    geracaoSeColetora REF tp_seColetora
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

CREATE OR REPLACE TYPE tp_modeloinversor AS OBJECT
(
    modelo varchar2(40),
    pot_nom_ca number,
    num_entradas_cc number,
    pot_max_ca number,
    pot_max_cc number,
    tensao_max_cc number,
    fabricante varchar2(40)
);
/

CREATE OR REPLACE TYPE tp_temp_operacao AS OBJECT
(
    temp_max number,
    temp_min number
);
/

CREATE OR REPLACE TYPE tp_modelopainel AS OBJECT
(
    modelo varchar2(40),
    fabricante varchar2(40),
    pot_max number,
    tensao_max_func number,
    corrente_pico number,
    temp_operacao tp_temp_operacao
);
/

CREATE OR REPLACE TYPE tp_medidorinstalacao AS OBJECT
(
    id_medidor number,
    num_serie number,
    num_prioridade number,
    potencia number,
    registro_timestamp timestamp
);
/

CREATE TYPE tp_nt_medidorinstalacao AS TABLE of tp_medidorinstalacao;
/

    
CREATE OR REPLACE TYPE tp_operador AS OBJECT
(
    matricula number,
    nome varchar2(40),
    cpf number,
    endereco tp_enderecoOperador,
    supervisor REF tp_operador
);
/

CREATE OR REPLACE TYPE tp_nt_operador AS TABLE of tp_operador;
/

CREATE OR REPLACE TYPE tp_eletrocentro AS OBJECT
(
    id_eletrocentro NUMBER,
    localizacao tp_localizacao,
    eletrocentro REF tp_modeloEletrocentro,
    eletrocentroseconectacoletora REF tp_secoletora,
    lista_operadores tp_nt_operador
);
/

CREATE OR REPLACE TYPE tp_medidorEletrocentro AS OBJECT -- atenção nele
(
    id_medidor NUMBER,
    num_serie NUMBER,
    num_prioridade NUMBER,
    geracaoeletrocentro REF tp_eletrocentro
);
/

CREATE OR REPLACE TYPE tp_instalacao AS OBJECT -- isso ta errado, falta operador, e não o aocontrario. Necessário uma lista de operadores e um supervisor
(
    id_instalacao number,
    localizacao tp_localizacao,
    seconectaeletrocentro REF tp_eletrocentro,
    geracao_medidorinstalacao tp_nt_medidorinstalacao,
    lista_operadores tp_nt_operador
    
);
/

CREATE OR REPLACE TYPE tp_conjunto AS OBJECT
(
    id number,
    seconectaModeloinversor REF tp_modeloinversor,
    possuimodelopainel REF tp_modelopainel,
    produz_conjunto REF tp_instalacao
);
/

--Criando tabelas:

-- Tabela para tb_pessoa
CREATE TABLE tb_pessoa OF tp_pessoa
(
    id PRIMARY KEY
);
/

-- Tabela para tb_pontodeConexao
CREATE TABLE tb_pontodeConexao of tp_pontoConexao
(
    id PRIMARY KEY
);
/

-- Tabela para tp_produtoEnergia
CREATE TABLE tb_produtoEnergia OF tp_produtoEnergia
(
    id_produto PRIMARY KEY
);
/

-- Tabela para tp_modeloEletrocentro
CREATE TABLE tb_modeloEletrocentro OF tp_modeloEletrocentro
(
    modelo PRIMARY KEY
);
/

-- Tabela para tb_modeloinversor
CREATE TABLE tb_modeloinversor OF tp_modeloinversor
(
    modelo PRIMARY KEY
);
/

-- Tabela para tb_modelopainel
CREATE TABLE tb_modelopainel OF tp_modelopainel
(
    modelo PRIMARY KEY
);
/

-- Tabela para tp_negocia
CREATE TABLE tb_negocia OF tp_negocia
(
    idNegociacao PRIMARY KEY,
    pessoaNegocia WITH ROWID REFERENCES tb_pessoa,
    produtoEnergiaNegocia WITH ROWID REFERENCES tb_produtoEnergia,
    pontoConexaoNegocia WITH ROWID REFERENCES tb_pontodeConexao

);
/ 

-- Tabela para tb_seColetora
CREATE TABLE tb_seColetora OF tp_seColetora
(
    id PRIMARY KEY,
    seConecta WITH ROWID REFERENCES tb_pontodeConexao
);
/

-- Tabela para tp_eletrocentro
CREATE TABLE tb_eletrocentro OF tp_eletrocentro
(
    id_eletrocentro PRIMARY KEY,
    eletrocentro WITH ROWID REFERENCES tb_modeloEletrocentro,
    eletrocentroseconectacoletora WITH ROWID REFERENCES tb_secoletora
)NESTED TABLE lista_operadores STORE AS nt_operador;
/ 

-- Tabela para tb_medidorEletrocentro
CREATE TABLE tb_medidorEletrocentro of tp_medidorEletrocentro
(
    id_medidor PRIMARY KEY,
    geracaoeletrocentro WITH ROWID REFERENCES tb_eletrocentro
    
);
/

-- Tabela para tp_instalacao
CREATE TABLE tb_instalacao OF tp_instalacao
(
    id_instalacao PRIMARY KEY,
    seconectaeletrocentro WITH ROWID REFERENCES tb_eletrocentro
) NESTED TABLE geracao_medidorinstalacao STORE AS nt_medidorinstalacao 
NESTED TABLE lista_operadores STORE AS nt_lista_operadores;
/

-- Tabela para tp_operador
CREATE TABLE tb_operador OF tp_operador
(
    matricula PRIMARY KEY,
    supervisor SCOPE IS tb_operador

);
/

-- Tabela para tp_conjunto
CREATE TABLE tb_conjunto OF tp_conjunto
(
    id PRIMARY KEY,
    seconectaModeloinversor WITH ROWID REFERENCES tb_modeloinversor,
    possuimodelopainel WITH ROWID REFERENCES tb_modelopainel,
    produz_conjunto WITH ROWID REFERENCES tb_instalacao
);
/

-- Tabela para tp_medidorPontoDeConexao
CREATE TABLE tb_medidorPontoDeConexao of tp_medidorPontoDeConexao
(
    id_medidor PRIMARY KEY,
    geracaopontodeconexao WITH ROWID REFERENCES tb_pontodeconexao
);
/

-- Tabela para tb_medidorsecoletora
CREATE TABLE tb_medidorsecoletora of tp_MedidorSEColetora
(
    id_medidor PRIMARY KEY,
    geracaosecoletora WITH ROWID REFERENCES tb_seColetora
);
/ 

--Alteração:
ALTER TYPE tp_modeloinversor DROP ATTRIBUTE pot_max_cc CASCADE;


--Inserindo valores!


-- Inserindo dados na tb_pessoa
INSERT INTO tb_pessoa VALUES (1, 'João', lista_tp_fone(tp_telefone('11', '123456789'), tp_telefone('22', '987654321')));
INSERT INTO tb_pessoa VALUES (2, 'Maria', lista_tp_fone(tp_telefone('22', '123456789'), tp_telefone('33', '987654321')));
INSERT INTO tb_pessoa VALUES (3, 'Pedro', lista_tp_fone(tp_telefone('33', '123456789'), tp_telefone('44', '987654321')));

-- Inserindo dados na tb_produtoEnergia
INSERT INTO tb_produtoEnergia VALUES (1, 500, TO_DATE('2024-03-07', 'YYYY-MM-DD'), 30);
INSERT INTO tb_produtoEnergia VALUES (2, 700, TO_DATE('2024-03-08', 'YYYY-MM-DD'), 25);
INSERT INTO tb_produtoEnergia VALUES (3, 300, TO_DATE('2024-03-09', 'YYYY-MM-DD'), 20);


-- Inserindo dados na Tb_pontodeConexao
INSERT INTO tb_pontodeConexao VALUES (1, tp_endereco('São Paulo', 'SP'), tp_localizacao(10.0, 20.0), tp_identificacaoSistema('Parque1', '100 kW'));
INSERT INTO tb_pontodeConexao VALUES (2, tp_endereco('Rio de Janeiro', 'RJ'), tp_localizacao(30.0, 40.0), tp_identificacaoSistema('Parque2', '150 kW'));
INSERT INTO tb_pontodeConexao VALUES (3, tp_endereco('Belo Horizonte', 'MG'), tp_localizacao(40.0, 50.0), tp_identificacaoSistema('Parque3', '200 kW'));

-- Inserindo dados na tb_medidorPontoDeConexao
INSERT INTO tb_medidorPontoDeConexao VALUES (1, 1234, 1, TO_DATE('05/04/2024 12:34:00', 'DD/MM/YYYY HH24:MI:SS'), 35, (SELECT REF(pc) FROM tb_pontodeConexao pc WHERE pc.id = 1));
INSERT INTO tb_medidorPontoDeConexao VALUES (2, 5678, 2, TO_DATE('06/04/2024 13:45:00', 'DD/MM/YYYY HH24:MI:SS'), 40, (SELECT REF(pc) FROM tb_pontodeConexao pc WHERE pc.id = 2));
INSERT INTO tb_medidorPontoDeConexao VALUES (3, 9876, 3, TO_DATE('07/04/2024 14:30:00', 'DD/MM/YYYY HH24:MI:SS'), 50, (SELECT REF(pc) FROM tb_pontodeConexao pc WHERE pc.id = 3));

-- Inserindo dados na tb_seColetora
INSERT INTO tb_seColetora VALUES (1, 12000, 1.5, tp_localizacao(15.9123, 45.9013), tp_id_sistema('SERRA DAS VACAS', 750), (SELECT REF(pc) FROM tb_pontodeConexao pc WHERE pc.id = 1));
INSERT INTO tb_seColetora VALUES (2, 15000, 1.1, tp_localizacao(15.9133, 45.6013), tp_id_sistema('SERRA DO MEL', 550), (SELECT REF(pc) FROM tb_pontodeConexao pc WHERE pc.id = 2));
INSERT INTO tb_seColetora VALUES (3, 22000, 1.3, tp_localizacao(15.9143, 45.6113), tp_id_sistema('RIO DAS VACAS', 650), (SELECT REF(pc) FROM tb_pontodeConexao pc WHERE pc.id = 3));
INSERT INTO tb_seColetora VALUES (4, 220, 0.95, tp_localizacao(10.0, 20.0), tp_id_sistema('Parque1', 100), NULL);

-- Inserindo dados na tb_medidorsecoletora
INSERT INTO tb_medidorsecoletora VALUES (1, 1, 1234, 35, TO_DATE('05/04/2024 12:34:00', 'DD/mm/yyyy HH24:MI:SS'), (SELECT REF(se) FROM tb_seColetora se WHERE se.id = 1));
INSERT INTO tb_medidorsecoletora VALUES (2, 2, 5678, 40, TO_DATE('06/04/2024 13:45:00', 'DD/mm/yyyy HH24:MI:SS'), (SELECT REF(se) FROM tb_seColetora se WHERE se.id = 5));
INSERT INTO tb_medidorsecoletora VALUES (3, 3, 9876, 50, TO_DATE('07/04/2024 14:30:00', 'DD/mm/yyyy HH24:MI:SS'), (SELECT REF(se) FROM tb_seColetora se WHERE se.id = 6));

-- Inserindo dados na tb_modeloEletrocentro
INSERT INTO tb_modeloEletrocentro VALUES ('ModeloX', 'FabricanteX', 220, '4 horas', 100, 100);
INSERT INTO tb_modeloEletrocentro VALUES ('ModeloY', 'FabricanteY', 380, '2 horas', 100, 50);
INSERT INTO tb_modeloEletrocentro VALUES ('ModeloZ', 'FabricanteZ', 500, '7 horas', 100, 300);

-- Inserindo dados na tb_eletrocentro
INSERT INTO tb_eletrocentro VALUES (2, tp_localizacao(12.9714, 77.5946), (SELECT REF(me) FROM tb_modeloEletrocentro me WHERE me.modelo = 'ModeloX'), (SELECT REF(sc) FROM tb_seColetora sc WHERE sc.id = 1), tp_nt_operador(tp_operador(789, 'OperadorX', 987, NULL, NULL)));
INSERT INTO tb_eletrocentro VALUES (1, tp_localizacao(10.0, 20.0), (SELECT REF(me) FROM tb_modeloEletrocentro me WHERE me.modelo = 'Modelo1'), (SELECT REF(sc) FROM tb_seColetora sc WHERE sc.id = 1), (SELECT tp_nt_operador(tp_operador(123, 'Supervisor1', 456, NULL, NULL)) FROM dual));
INSERT INTO tb_eletrocentro VALUES (3, tp_localizacao(14.9714, 79.5946), (SELECT REF(me) FROM tb_modeloEletrocentro me WHERE me.modelo = 'ModeloY'), (SELECT REF(sc) FROM tb_seColetora sc WHERE sc.id = 2), tp_nt_operador(tp_operador(456, 'OperadorY', 654, NULL, NULL)));
INSERT INTO tb_eletrocentro VALUES (4, tp_localizacao(13.9714, 78.5946), (SELECT REF(me) FROM tb_modeloEletrocentro me WHERE me.modelo = 'ModeloZ'), (SELECT REF(sc) FROM tb_seColetora sc WHERE sc.id = 3), tp_nt_operador(tp_operador(321, 'OperadorZ', 789, NULL, NULL)));

-- Inserindo dados na tb_medidorEletrocentro
INSERT INTO tb_medidorEletrocentro VALUES (1, 1234, 1, (SELECT REF(ele) FROM tb_eletrocentro ele WHERE ele.id_eletrocentro = 1));
INSERT INTO tb_medidorEletrocentro VALUES (2, 1134, 1, (SELECT REF(ele) FROM tb_eletrocentro ele WHERE ele.id_eletrocentro = 2));
INSERT INTO tb_medidorEletrocentro VALUES (3, 2234, 1, (SELECT REF(ele) FROM tb_eletrocentro ele WHERE ele.id_eletrocentro = 3));

-- Inserindo dados na tb_modeloinversor
INSERT INTO tb_modeloinversor VALUES ('modeloinversorX', 220, 2, 380, 1300, 'vestas');
INSERT INTO tb_modeloinversor VALUES ('modeloinversorY', 127, 3, 220, 3800, 'siemens');
INSERT INTO tb_modeloinversor VALUES ('modeloinversorZ', 440, 5, 580, 4300, 'rockwell');

-- Inserindo dados na tb_modelopainel
INSERT INTO tb_modelopainel VALUES ('modelopainelX', 'vestas', 220, 250, 150, tp_temp_operacao(100, -20));
INSERT INTO tb_modelopainel VALUES ('modelopainelY', 'siemens', 380, 400, 200, tp_temp_operacao(100, -20));
INSERT INTO tb_modelopainel VALUES ('modelopainelZ', 'rockwell', 127, 150, 110, tp_temp_operacao(100, -20));

-- Inserindo dados na tb_negocia
INSERT INTO tb_negocia VALUES (1, (SELECT REF(p) FROM tb_pessoa p WHERE p.id = 1), (SELECT REF(pe) FROM tb_produtoEnergia pe WHERE pe.id_produto = 1), (SELECT REF(pc) FROM tb_pontodeConexao pc WHERE pc.id = 1));
INSERT INTO tb_negocia VALUES (2, (SELECT REF(p) FROM tb_pessoa p WHERE p.id = 2), (SELECT REF(pe) FROM tb_produtoEnergia pe WHERE pe.id_produto = 2), (SELECT REF(pc) FROM tb_pontodeConexao pc WHERE pc.id = 2));
INSERT INTO tb_negocia VALUES (3, (SELECT REF(p) FROM tb_pessoa p WHERE p.id = 3), (SELECT REF(pe) FROM tb_produtoEnergia pe WHERE pe.id_produto = 3), (SELECT REF(pc) FROM tb_pontodeConexao pc WHERE pc.id = 3));

-- Inserindo dados na tb_instalacao
INSERT INTO tb_instalacao VALUES (1, tp_localizacao(10.0, 20.0), (SELECT REF(ec) FROM tb_eletrocentro ec WHERE ec.id_eletrocentro = 1), NULL, (SELECT tp_nt_operador(tp_operador(789, 'Operador1', 012, NULL, NULL)) FROM dual));
INSERT INTO tb_instalacao VALUES (2, tp_localizacao(30.0, 40.0), (SELECT REF(ec) FROM tb_eletrocentro ec WHERE ec.id_eletrocentro = 3), NULL, (SELECT tp_nt_operador(tp_operador(654, 'Operador2', 987, NULL, NULL)) FROM dual));
INSERT INTO tb_instalacao VALUES (3, tp_localizacao(40.0, 50.0), (SELECT REF(ec) FROM tb_eletrocentro ec WHERE ec.id_eletrocentro = 4), NULL, (SELECT tp_nt_operador(tp_operador(789, 'Operador3', 012, NULL, NULL)) FROM dual));

-- Inserindo dados na tb_conjunto
INSERT INTO tb_conjunto VALUES (1, (SELECT REF(mi) FROM tb_modeloinversor mi WHERE mi.modelo = 'ModeloinversorX'), (SELECT REF(pn) FROM tb_modelopainel pn WHERE pn.modelo = 'modelopainelX'), (SELECT REF(i) FROM tb_instalacao i WHERE i.id_instalacao = 1));
INSERT INTO tb_conjunto VALUES (2, (SELECT REF(mi) FROM tb_modeloinversor mi WHERE mi.modelo = 'ModeloinversorY'), (SELECT REF(pn) FROM tb_modelopainel pn WHERE pn.modelo = 'modelopainelY'), (SELECT REF(i) FROM tb_instalacao i WHERE i.id_instalacao = 2));
INSERT INTO tb_conjunto VALUES (3, (SELECT REF(mi) FROM tb_modeloinversor mi WHERE mi.modelo = 'ModeloinversorZ'), (SELECT REF(pn) FROM tb_modelopainel pn WHERE pn.modelo = 'modelopainelZ'), (SELECT REF(i) FROM tb_instalacao i WHERE i.id_instalacao = 3));

-- Inserindo dados na tb_operador
INSERT INTO tb_operador VALUES (123, 'Supervisor1', 456, NULL, NULL);
INSERT INTO tb_operador VALUES (1233, 'Supervisor2', 456, NULL, NULL);
INSERT INTO tb_operador VALUES (789, 'Operador1', 012, NULL, (SELECT REF(o) FROM tb_operador o WHERE o.matricula = 123));


-- Consultas

-- Consulta simples:

SELECT p.nome, T.cod_area AS cod_area, T.fone AS fone FROM tb_pessoa p, TABLE(p.telefones) T;

-- consulta usando REF
SELECT
    o.matricula,
    o.nome,
    o.cpf,
    o.endereco.cidade AS cidade_operador,
    o.endereco.estado AS estado_operador
FROM
    tb_operador o
WHERE
    REF(o) IS NOT NULL;


-- consulta com DEREF

SELECT
  nc.idNegociacao,
  DEREF(nc.pontoConexaoNegocia).id AS pontoConexaoId,
  DEREF(nc.pontoConexaoNegocia).endereco.cidade AS pontoConexaoCidade,
  DEREF(nc.pontoConexaoNegocia).endereco.estado AS pontoConexaoEstado,
  DEREF(nc.pontoConexaoNegocia).localizacao.latitude AS pontoConexaoLatitude,
  DEREF(nc.pontoConexaoNegocia).localizacao.longitude AS pontoConexaoLongitude
FROM
  tb_negocia nc
WHERE
  nc.idNegociacao = 1;


-- consulta à VARRAY

SELECT
  p.id,
  p.nome,
  T.cod_area AS cod_area_telefone1,
  T.fone AS telefone1,
  T.cod_area AS cod_area_telefone2,
  T.fone AS telefone2
FROM
  tb_pessoa p, TABLE(p.telefones) T

-- consulta à NESTED TABLE
SELECT
    ec.id_eletrocentro,
    o.matricula AS matricula_operador,
    o.nome AS nome_operador,
    o.cpf AS cpf_operador,
    o.endereco.cidade AS cidade_operador,
    o.endereco.estado AS estado_operador,
    o.endereco.cep AS cep_operador,
    o.endereco.rua AS rua_operador,
    o.endereco.numero AS numero_operador,
    o.endereco.complemento AS complemento_operador
FROM
    tb_eletrocentro ec,
    TABLE(ec.lista_operadores) o;