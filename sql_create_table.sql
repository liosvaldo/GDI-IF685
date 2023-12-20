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
);
