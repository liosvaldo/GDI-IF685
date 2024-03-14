CREATE OR REPLACE TYPE tp_endereco AS OBJECT
(
    cep number,
    numero number,
    rua varchar2(20),
    complemento varchar2(20)
);
/

CREATE OR REPLACE TYPE tp_telefone AS OBJECT
(
    cod_area varchar2(2),
    numero varchar2(10)
);
/

CREATE OR REPLACE TYPE tv_telefones_pessoa AS VARRAY(2) OF tp_telefone;/
CREATE OR REPLACE TYPE tv_telefones_fornecedor AS VARRAY(2) OF tp_telefone;
/

CREATE OR REPLACE TYPE tp_pessoa AS OBJECT
(
    cpf number,
    nome varchar2(30),
    data_nascimento date,
    endereco tp_endereco,
    telefone tv_telefones_pessoa
)NOT FINAL NOT INSTANTIABLE;
/


CREATE OR REPLACE TYPE tp_cliente UNDER tp_pessoa
(
    n_atendimentos number
)FINAL INSTANTIABLE;
/

CREATE OR REPLACE TYPE tp_cargo AS OBJECT
(
    cargo varchar2(20),
    salario float
);
/

CREATE OR REPLACE TYPE tp_funcionario UNDER tp_pessoa
(
    cargo REF tp_cargo,
    supervisor REF tp_funcionario
)FINAL INSTANTIABLE;
/

CREATE OR REPLACE TYPE tp_carro AS OBJECT
(
    placa varchar2(10),
    marca varchar2(20),
    modelo varchar2(20),
    cor varchar2(20),
    proprietario REF tp_cliente
);
/

CREATE OR REPLACE TYPE tp_fornecedor AS OBJECT
(
    cnpj number,
    nome_empresa varchar2(20),
    telefones tv_telefones_fornecedor
);
/

CREATE OR REPLACE TYPE tp_produto AS OBJECT
(
    nome varchar2(20),
    preco float,
    fonecedor REF tp_fornecedor
);
/

CREATE OR REPLACE TYPE tp_nt_produtos AS TABLE OF tp_produto;
/

CREATE OR REPLACE TYPE tp_servico AS OBJECT
(
    codigo number,
    valor float,
    nome varchar2(20),
    lista_produtos tp_nt_produtos
);
/

CREATE OR REPLACE TYPE tp_maquina AS OBJECT
(
    codigo number,
    nome varchar2(20),
    fabricante varchar2(20)
);
/

CREATE OR REPLACE TYPE tp_atendimento AS OBJECT
(
    data date,
    custo_total float,
    servico REF tp_servico,
    carro REF tp_carro,
    funcionario REF tp_funcionario,
    aciona_maquina REF tp_maquina
);
/

CREATE TABLE tb_cargo OF tp_cargo
(
    cargo PRIMARY KEY
);

CREATE TABLE tb_funcionario OF tp_funcionario
(
    cpf PRIMARY KEY,
    cargo WITH ROWID REFERENCES tb_cargo,
    supervisor SCOPE IS tb_funcionario
);
/

CREATE TABLE tb_cliente of tp_cliente
(
    cpf PRIMARY KEY
);
/

CREATE TABLE tb_carro of tp_carro
(
    placa PRIMARY KEY,
    proprietario with rowid references tb_cliente
);
/

CREATE TABLE tb_maquina of tp_maquina
(
    codigo PRIMARY KEY
);
/

CREATE TABLE tb_servico of tp_servico
(
    codigo PRIMARY KEY
)NESTED TABLE lista_produtos STORE AS nt_produtos;
/

CREATE TABLE tb_fornecedor of tp_fornecedor
(
    cnpj PRIMARY KEY
);
/

CREATE TABLE tb_atendimento of tp_atendimento
(
    servico with rowid references tp_servico,
    carro with rowid references tp_carro,
    funcionario with rowid references tp_funcionario,
    aciona_maquina with rowid references tp_maquina,
    data not null,
    custo_total not null,
);
/