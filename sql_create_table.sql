DROP TABLE produto_energia;
DROP TABLE modelo_inversor;
DROP TABLE modelo_painel;
DROP TABLE conjunto;

CREATE TABLE produto_energia(
    id_produto NUMBER NOT NULL,
    prazo_de_entrega VARCHAR2(8),
    quantidade_kw NUMBER,
    data_de_venda VARCHAR2(8),
    CONSTRAINT produto_energia_pk PRIMARY KEY (id_produto)
);

CREATE TABLE modelo_inversor(
    modelo VARCHAR2(15) NOT NULL,
    fabricante VARCHAR2(30),
    tensao_max_cc NUMBER,
    pot_max_cc NUMBER,
    pot_max_ca NUMBER,
    pot_nom_ca NUMBER,
    num_entradas_cc NUMBER,
    CONSTRAINT modelo_inversor_pk PRIMARY KEY (modelo)
);

CREATE TABLE modelo_painel(
    modelo VARCHAR2(15) NOT NULL,
    fabricante VARCHAR2(30),
    corrente_pico NUMBER,
    tensao_max NUMBER,
    pot_max NUMBER,
    temp_max NUMBER,
    temp_min NUMBER,
    CONSTRAINT ModeloPainel_pk PRIMARY KEY (modelo)
);

CREATE TABLE conjunto(
    id_conjunto             NUMBER                  NOT NULL,
    mod_inv         VARCHAR2(15)            NOT NULL,
    mod_pnl           VARCHAR2(15)            NOT NULL,
    CONSTRAINT conjunto_pk  PRIMARY KEY         (id_conjunto),
    CONSTRAINT conjunto_mod_inv_fk FOREIGN KEY (mod_inv) REFERENCES modelo_inversor(modelo),
    CONSTRAINT conjunto_mod_pnl_fk FOREIGN KEY (mod_pnl) REFERENCES modelo_painel (modelo),
=======
CREATE TABLE operador(
    matricula               varchar2(10)                    ,
    nome                    varchar2(60)            NOT NULL,
    cpf                     varchar2(14)            NOT NULL,
    rua                     varchar2(30)            NOT NULL,
    numero                  number                  NOT NULL,
    complemento             varchar2(30)                    ,
    cidade                  varchar2(30)            NOT NULL,
    cep                     varchar2(9)             NOT NULL,
    CONSTRAINT  matricula_pk                        PRIMARY KEY     (matricula),
    CONSTRAINT  cpf_ck                              CHECK           (cpf LIKE '___.___.___-__'),
    CONSTRAINT  cep_ck                              CHECK           (cep LIKE '_____-___')
);

CREATE TABLE instalacao(
    id                      number                          ,
    id_conjunto             number                  NOT NULL,
    id_operador             number                  NOT NULL,
    id_supervisor           number                  NOT NULL,
    id_eletrocentro         number                  NOT NULL,
    latitude                number                  NOT NULL,
    longitude               number                  NOT NULL,
    CONSTRAINT  id_pk                               PRIMARY KEY     (id),
    CONSTRAINT  id_conjunto_fk                      FOREIGN KEY     (id_conjunto)       REFERENCES  conjunto(id),
    CONSTRAINT  id_operador_fk                      FOREIGN KEY     (id_operator)       REFERENCES  operador(id),
    CONSTRAINT  id_supervisor_fk                    FOREIGN KEY     (id_supervisor)     REFERENCES  operador(id),
    CONSTRAINT  id_eletrocentro_fk                  FOREIGN KEY     (id_eletrocentro)   REFERENCES  eletrocentro(id)
);

CREATE TABLE eletrocentro(
    id                      number                          ,
    id_modelo_eletrocentro  number                  NOT NULL,
    id_operador             number                  NOT NULL,
    id_supervisor           number                  NOT NULL,
    id_coletora             number                  NOT NULL,
    latitude                number                  NOT NULL,
    longitude               number                  NOT NULL,
    CONSTRAINT  id_pk                               PRIMARY KEY     (id),
    CONSTRAINT  id_modelo_eletrocentro_fk           FOREIGN KEY     (id_modelo_eletrocentro)    REFERENCES  ModeloEletrocentro(id),
    CONSTRAINT  id_operador_fk                      FOREIGN KEY     (id_operator)               REFERENCES  operador(id),
    CONSTRAINT  id_supervisor_fk                    FOREIGN KEY     (id_supervisor)             REFERENCES  operador(id),
    CONSTRAINT  id_eletrocentro_fk                  FOREIGN KEY     (id_eletrocentro)           REFERENCES  eletrocentro(id)

);

CREATE TABLE ponto_conexao(
    id                      number                          ,
    id_modelo_eletrocentro  number                  NOT NULL,
    id_operador             number                  NOT NULL,
    id_supervisor           number                  NOT NULL,
    id_coletora             number                  NOT NULL,
    latitude                number                  NOT NULL,
    longitude               number                  NOT NULL,
    CONSTRAINT  id_pk                               PRIMARY KEY     (id),
    CONSTRAINT  id_modelo_eletrocentro_fk           FOREIGN KEY     (id_modelo_eletrocentro)    REFERENCES  ModeloEletrocentro(id),
    CONSTRAINT  id_operador_fk                      FOREIGN KEY     (id_operator)               REFERENCES  operador(id),
    CONSTRAINT  id_supervisor_fk                    FOREIGN KEY     (id_supervisor)             REFERENCES  operador(id),
    CONSTRAINT  id_eletrocentro_fk                  FOREIGN KEY     (id_eletrocentro)           REFERENCES  eletrocentro(id)

);

CREATE TABLE cep ( 
	cep 					NUMBER 					NOT NULL,
	rua 					VARCHAR2(6)						, 
	cidade 					VARCHAR2(6)						, 
	CONSTRAINT cep_pk 		PRIMARY KEY (cep)
);

CREATE TABLE modeloeletrocentro (
	modelo					NUMBER					NOT NULL,
	fabricante				VARCHAR(6)						,
	pot_nom					NUMBER							,
	tensao_nominal			NUMBER							,
	autonomia_baterias		NUMBER							,
	corrente_max_baterias	NUMBER							
);

CREATE TABLE secoletora (
	id 						NUMBER					NOT NULL,
	nome_parque				VARCHAR2(6)						,
	id_ponto_conexao		NUMBER					NOT NULL,
	pot_nom					NUMBER							,
	tensao_nom				NUMBER					

