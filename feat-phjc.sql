CREATE TABLE ProdutoEnergia(
    id_produto NUMBER NOT NULL,
    prazo_de_entrega VARCHAR2(8),
    quantidade_kw NUMBER,
    data_de_venda VARCHAR2(8),
    CONSTRAINT ProdutoEnergia_pk PRIMARY KEY (id_produto)
);

CREATE TABLE ModeloInversor(
    modelo NUMBER NOT NULL,
    fabricante VARCHAR2(30),
    tensao_max_cc NUMBER,
    pot_max_cc NUMBER,
    pot_max_ca NUMBER,
    pot_nom_ca NUMBER,
    num_entradas_cc NUMBER,
    CONSTRAINT ModeloInversor_pk PRIMARY KEY (modelo)
);
