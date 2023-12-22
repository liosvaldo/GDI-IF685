--INSERINDO PONTO CONEXAO

INSERT INTO ponto_conexao (id, nome, pot_nom, estado, cidade, latitude, longitude) VALUES (0003, "Conexão 1", 300, "Pernambuco", "Recife", -8, -34);
INSERT INTO ponto_conexao (id, nome, pot_nom, estado, cidade, latitude, longitude) VALUES (0005, "Conexão 2", 300, "Pernambuco", "Recife", -8, -34);
INSERT INTO ponto_conexao (id, nome, pot_nom, estado, cidade, latitude, longitude) VALUES (0008, "Conexão 3", 300, "Pernambuco", "Caruaru", -8, -35);
INSERT INTO ponto_conexao (id, nome, pot_nom, estado, cidade, latitude, longitude) VALUES (0013, "Conexão 4", 300, "Pernambuco", "Caruaru", -8, -35);

--INSERINDO PACOTES PRODUTO ENERGIA

INSERT INTO produto_energia (id_produto, prazo_de_entrega, quantidade_kw, data_de_venda, id_ponto_conexao) VALUES (0001, "12/01/24", 300, "12/12/23", 0003);
INSERT INTO produto_energia (id_produto, prazo_de_entrega, quantidade_kw, data_de_venda, id_ponto_conexao) VALUES (0002, "12/02/24", 300, "12/01/24", 0005);
INSERT INTO produto_energia (id_produto, prazo_de_entrega, quantidade_kw, data_de_venda, id_ponto_conexao) VALUES (0003, "02/01/24", 400, "02/12/23", 0008);
INSERT INTO produto_energia (id_produto, prazo_de_entrega, quantidade_kw, data_de_venda, id_ponto_conexao) VALUES (0004, "02/02/24", 300, "02/01/24", 0013);


--INSERINDO OPERADORES

INSERT INTO operador (matricula, nome, cpf, rua, numero, complemento, cidade, cep) VALUES (0001, "José Valente", "123.456.789-00", "Rua Brazil", 333, "Recife", "53123-456");
INSERT INTO operador (matricula, nome, cpf, rua, numero, complemento, cidade, cep) VALUES (0002, "Saulo Monela", "445.556.667-77", "Rua Outôno", 413, "Jaboatão", "53134-567");
INSERT INTO operador (matricula, nome, cpf, rua, numero, complemento, cidade, cep) VALUES (0004, "Jacinto Sono", "987.543.109-62", "Avenida Silva", 003, "Caruaru", "53884-556");
INSERT INTO operador (matricula, nome, cpf, rua, numero, complemento, cidade, cep) VALUES (0008, "Malvo Olhado", "776.455.903-24", "BR-101", 84, "Paulista", "53444-111");

--INSERINDO CEP

INSERT INTO cep (cep, rua, cidade) VALUES ("53123-456", "Rua Brazil", "Recife");
INSERT INTO cep (cep, rua, cidade) VALUES ("53134-567", "Rua Outôno", "Jaboatão");
INSERT INTO cep (cep, rua, cidade) VALUES ("53884-556", "Avenida Silva", "Caruaru");
INSERT INTO cep (cep, rua, cidade) VALUES ("53444-111", "BR-101", "Paulista");
