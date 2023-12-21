DROP TABLE operador;
DROP TABLE cep;
DROP TABLE modelo_inversor;
DROP TABLE modelo_painel;
DROP TABLE modelo_eletrocentro;
DROP TABLE conjunto;
DROP TABLE instalacao;
DROP TABLE eletrocentro;
DROP TABLE se_coletora;
DROP TABLE ponto_conexao;

CREATE TABLE operador(
    matricula               number                    ,
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

CREATE TABLE cep(

	cep 					NUMBER 					NOT NULL,
	rua 					VARCHAR2(6)						,
	cidade 					VARCHAR2(6)						,
	CONSTRAINT cep_pk 		PRIMARY KEY (cep),
	CONSTRAINT cep_fk       CHECK (cep LIKE '______-___)')

);

CREATE TABLE modelo_inversor(

    modelo                  varchar2(20)                    ,
    fabricante              varchar2(30)                    ,
    tensao_maxima_cc        number                  NOT NULL,
    pot_max_cc              number                  NOT NULL,
    pot_max_ca              number                  NOT NULL,
    pot_nom_ca              number                  NOT NULL,
    num_entradas_cc         number                  NOT NULL,
    CONSTRAINT modelo_inversor_pk                 PRIMARY KEY     (modelo)
);

CREATE TABLE modelo_painel(

    modelo                  varchar2(20)                    ,
    fabricante              varchar2(30)                    ,
    corrente_pico           number                  NOT NULL,
    tensao_max_func         number                  NOT NULL,
    pot_max                 number                  NOT NULL,
    temp_max                number                  NOT NULL,
    temp_min                number                  NOT NULL,
    CONSTRAINT modelo_painel_pk                 PRIMARY KEY     (modelo)
);

CREATE TABLE modelo_eletrocentro(

	modelo					NUMBER					        ,
	fabricante				VARCHAR2(6)						,
	pot_nom					NUMBER				    NOT NULL,
	tensao_nom  			NUMBER					NOT NULL,
	autonomia_baterias		NUMBER					NOT NULL,
	corrente_max_baterias	NUMBER                  NOT NULL,
	CONSTRAINT modelo_eletrocentro_pk                            PRIMARY KEY     (modelo)

);

CREATE TABLE conjunto(
    id                      number                          ,
    modelo_inversor         varchar2(30)                    ,
    modelo_painel           varchar2(30)                    ,
    CONSTRAINT id_conjutno_pk                               PRIMARY KEY     (id),
    CONSTRAINT modelo_inversor_fk                   FOREIGN KEY     (modelo_inversor) REFERENCES modelo_inversor(modelo),
    CONSTRAINT modelo_painel_fk                     FOREIGN KEY     (modelo_painel)  REFERENCES modelo_painel(modelo)
);

CREATE TABLE ponto_conexao(
    id                      number                          ,
	nome    				VARCHAR2(20)	        NOT NULL,
    pot_nom                 NUMBER                  NOT NULL,
    estado                  VARCHAR2(20)            NOT NULL,
    cidade                  VARCHAR2(20)            NOT NULL,
    latitude                number                  NOT NULL,
    longitude               number                  NOT NULL,
    CONSTRAINT  id_ponto_conexao_pk                               PRIMARY KEY     (id),
    CONSTRAINT  estado_ponto_conexao_ck                           CHECK   (estado IN ('BH', 'MG', 'AL'))
);

CREATE TABLE se_coletora(
	id 						NUMBER					NOT NULL,
	nome_parque				VARCHAR2(20)	        NOT NULL,
	id_ponto_conexao		NUMBER					NOT NULL,
	pot_nom					NUMBER					NOT NULL,
	tensao_nom				NUMBER                  NOT NULL,
	taxa_conversao          NUMBER                  NOT NULL,
	latitude                number                  NOT NULL,
    longitude               number                  NOT NULL,
    CONSTRAINT  id_se_coletora_pk                               PRIMARY KEY     (id),
    CONSTRAINT  id_ponto_conexao_fk                 FOREIGN KEY     (id_ponto_conexao)          REFERENCES  ponto_conexao(id)

);

CREATE TABLE eletrocentro(
    id                      number                          ,
    id_modelo_eletrocentro  number                  NOT NULL,
    id_operador             number                  NOT NULL,
    id_supervisor           number                  NOT NULL,
    id_coletora             number                  NOT NULL,
    latitude                number                  NOT NULL,
    longitude               number                  NOT NULL,
    CONSTRAINT  id_eletrocentro_pk                  PRIMARY KEY     (id),
    CONSTRAINT  id_modelo_eletrocentro_fk           FOREIGN KEY     (id_modelo_eletrocentro)    REFERENCES  modelo_eletrocentro(modelo),
    CONSTRAINT  id_operador_eletrocentro_fk         FOREIGN KEY     (id_operador)               REFERENCES  operador(matricula),
    CONSTRAINT  id_supervisor_eletrocentro_fk       FOREIGN KEY     (id_supervisor)             REFERENCES  operador(matricula),
    CONSTRAINT  id_se_coletora_fk                   FOREIGN KEY     (id_coletora)               REFERENCES  se_coletora(id)
);

CREATE TABLE instalacao(
    id                      number                          ,
    id_conjunto             number                  NOT NULL,
    id_operador             number                  NOT NULL,
    id_supervisor           number                  NOT NULL,
    id_eletrocentro         number                  NOT NULL,
    latitude                number                  NOT NULL,
    longitude               number                  NOT NULL,
    CONSTRAINT  id_instalacao_pk                    PRIMARY KEY     (id),
    CONSTRAINT  id_conjunto_fk                      FOREIGN KEY     (id_conjunto)       REFERENCES  conjunto(id),
    CONSTRAINT  id_operador_instalacao_fk           FOREIGN KEY     (id_operador)       REFERENCES  operador(matricula),
    CONSTRAINT  id_supervisor_instalacao_fk         FOREIGN KEY     (id_supervisor)     REFERENCES  operador(matricula),
    CONSTRAINT  id_eletrocentro_fk                  FOREIGN KEY     (id_eletrocentro)   REFERENCES  eletrocentro(id)
);





