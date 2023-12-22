DROP TABLE telefone_pessoa;
DROP TABLE pessoa_juridica;
DROP TABLE pessoa_fisica;
DROP TABLE pessoa;
DROP TABLE gerecao_ponto_conexao;
DROP TABLE medidor_ponto_conexao;
DROP TABLE gerecao_se_coletora;
DROP TABLE medidor_se_coletora;
DROP TABLE gerecao_eletrocentro;
DROP TABLE medidor_eletrocentro;
DROP TABLE gerecao_instalacao;
DROP TABLE medidor_instalacao;
DROP TABLE produto_energia;
DROP TABLE instalacao;
DROP TABLE eletrocentro;
DROP TABLE se_coletora;
DROP TABLE ponto_conexao;
DROP TABLE conjunto;
DROP TABLE modelo_eletrocentro;
DROP TABLE modelo_painel;
DROP TABLE modelo_inversor;
DROP TABLE operador;
DROP TABLE cep;


CREATE TABLE cep(

	cep 					varchar2(9) 					NOT NULL,
	rua 					VARCHAR2(50)						,
	cidade 					VARCHAR2(50)						,
	CONSTRAINT cep_pk 		PRIMARY KEY (cep),
	CONSTRAINT cep_fk       CHECK (cep LIKE '_____-___')

);


CREATE TABLE operador(
    matricula               number                    ,
    nome                    varchar2(60)            NOT NULL,
    cpf                     varchar2(14)            NOT NULL,
    numero                  number                  NOT NULL,
    complemento             varchar2(30)                    ,
    cep                     varchar2(20)             NOT NULL,
    CONSTRAINT  matricula_pk                        PRIMARY KEY     (matricula),
    CONSTRAINT  cpf_ck                              CHECK           (cpf LIKE '___.___.___-__'),
    CONSTRAINT  cep_operador_fk                              FOREIGN KEY     (cep)   REFERENCES          cep(cep)
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

	modelo					VARCHAR2(30)					        ,
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
    id_modelo_eletrocentro  VARCHAR2(30)                  NOT NULL,
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

CREATE TABLE produto_energia(

    id                      NUMBER                  NOT NULL,
    id_ponto_conexao        NUMBER                  NOT NULL,
    quantidade_kw           NUMBER                  NOT NULL,
    data_venda              DATE                    NOT NULL,
    prazo_entrega           DATE                    NOT NULL,
    CONSTRAINT id_produto_energia_pk                PRIMARY KEY     (id),
    CONSTRAINT id_ponto_conexao_produto_energia_fk                  FOREIGN KEY     (id_ponto_conexao)  REFERENCES ponto_conexao(id)

);

CREATE TABLE medidor_instalacao(
    id_medidor          NUMBER                      NOT NULL,
    id_conexao          NUMBER                      NOT NULL,
    numero_de_serie     NUMBER                      NOT NULL,
    numero_de_prioridade NUMBER                     NOT NULL,
    CONSTRAINT id_medidor_instalacao_pk             PRIMARY KEY     (id_medidor),
    CONSTRAINT id_conexao_instalacao_fk             FOREIGN KEY     (id_conexao)        REFERENCES instalacao(id)
);

CREATE TABLE gerecao_instalacao(
    timestemp           DATE                        NOT NULL,
    id_conexao          NUMBER                      NOT NULL,
    potência            NUMBER                      NOT NULL,
    CONSTRAINT geracao_instalacao_pk              PRIMARY KEY     (timestemp, id_conexao),
    CONSTRAINT id_geracao_instalacao_fk             FOREIGN KEY     (id_conexao)        REFERENCES instalacao(id)
);

CREATE TABLE medidor_eletrocentro(
    id_medidor          NUMBER                      NOT NULL,
    id_conexao          NUMBER                      NOT NULL,
    numero_de_serie     NUMBER                      NOT NULL,
    numero_de_prioridade NUMBER                     NOT NULL,
    CONSTRAINT id_medidor_eletrocentro_pk           PRIMARY KEY     (id_medidor),
    CONSTRAINT id_conexao_eletrocentro_fk           FOREIGN KEY     (id_conexao)        REFERENCES eletrocentro(id)
);

CREATE TABLE gerecao_eletrocentro(
    timestemp           DATE                        NOT NULL,
    id_conexao          NUMBER                      NOT NULL,
    potência            NUMBER                      NOT NULL,
    CONSTRAINT geracao_eletrocentro_pk              PRIMARY KEY     (timestemp, id_conexao),
    CONSTRAINT id_geracao_eletrocentro_fk           FOREIGN KEY     (id_conexao)        REFERENCES eletrocentro(id)
);


CREATE TABLE medidor_se_coletora(
    id_medidor          NUMBER                      NOT NULL,
    id_conexao          NUMBER                      NOT NULL,
    numero_de_serie     NUMBER                      NOT NULL,
    numero_de_prioridade NUMBER                     NOT NULL,
    CONSTRAINT id_medidor_se_coletora_pk            PRIMARY KEY     (id_medidor),
    CONSTRAINT id_conexao_se_coletora_fk            FOREIGN KEY     (id_conexao)        REFERENCES se_coletora(id)
);

CREATE TABLE gerecao_se_coletora(
    timestemp           DATE                        NOT NULL,
    id_conexao          NUMBER                      NOT NULL,
    potência            NUMBER                      NOT NULL,
    CONSTRAINT geracao_se_coletora_pk               PRIMARY KEY     (timestemp, id_conexao),
    CONSTRAINT id_geracao_se_coletora_fk            FOREIGN KEY     (id_conexao)        REFERENCES se_coletora(id)
);

CREATE TABLE medidor_ponto_conexao(
    id_medidor          NUMBER                      NOT NULL,
    id_conexao          NUMBER                      NOT NULL,
    numero_de_serie     NUMBER                      NOT NULL,
    numero_de_prioridade NUMBER                     NOT NULL,
    CONSTRAINT id_medidor_pk                        PRIMARY KEY     (id_medidor),
    CONSTRAINT id_conexao_ponto_conexao_fk          FOREIGN KEY     (id_conexao)        REFERENCES ponto_conexao(id)
);

CREATE TABLE gerecao_ponto_conexao(
    timestemp           DATE                        NOT NULL,
    id_conexao          NUMBER                      NOT NULL,
    potência            NUMBER                      NOT NULL,
    CONSTRAINT geracao_ponto_conexao_pk             PRIMARY KEY     (timestemp, id_conexao),
    CONSTRAINT id_geracao_ponto_conexao_fk          FOREIGN KEY     (id_conexao)        REFERENCES  ponto_conexao(id)
);

CREATE TABLE pessoa(

    id                  NUMBER                      NOT NULL,
    nome                VARCHAR2(100)               NOT NULL,
    CONSTRAINT id_pessoa_pk                         PRIMARY KEY     (id,nome)
);

CREATE TABLE pessoa_fisica(

    id                  NUMBER                      NOT NULL,
    nome                VARCHAR2(100)               NOT NULL,
    cpf                 varchar2(20)                NOT NULL,
    CONSTRAINT pessoa_fisica_pk                     PRIMARY KEY     (id, nome),
    CONSTRAINT id_pessoa_fisica_fk                  FOREIGN KEY     (id, nome)                REFERENCES pessoa(id, nome),
    CONSTRAINT  cpf_pessoa_fisica_ck                CHECK           (cpf LIKE '___.___.___-__')

);

CREATE TABLE pessoa_juridica(

    id                  NUMBER                      NOT NULL,
    nome_fantasia       VARCHAR2(100)               NOT NULL,
    cnpj                varchar2(20)                NOT NULL,
    CONSTRAINT id_pessoa_juridica_pk                PRIMARY KEY     (id, nome_fantasia),
    CONSTRAINT id_pessoa_juridica_fk                FOREIGN KEY     (id, nome_fantasia)                REFERENCES pessoa(id, nome ),
    CONSTRAINT  cnpj_pessoa_juridica_ck             CHECK           (cnpj LIKE '__.___.___/000_-__')

);

CREATE TABLE telefone_pessoa(

    id                  NUMBER                      NOT NULL,
    id_pessoa           NUMBER                      NOT NULL,
    nome                VARCHAR2(100)               NOT NULL,
    ddd                 NUMBER                      NOT NULL,
    telefone            NUMBER                      NOT NULL,
    CONSTRAINT id_telefone_pessoa_pk                PRIMARY KEY     (id),
    CONSTRAINT id_telefone_pessoa_fk                FOREIGN KEY     (id_pessoa, nome)         REFERENCES pessoa(id, nome)
);
