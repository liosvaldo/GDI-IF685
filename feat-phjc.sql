
CREATE TABLE ProdutoEnergia(
    id_produto NUMBER NOT NULL,
    prazo_de_entrega VARCHAR2(30),
    quantidade_kw NUMBER,
    data_de_venda VARCHAR2(30),
    CONSTRAINT ProdutoEnergia_pk PRIMARY KEY (id_produto)
);

