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

