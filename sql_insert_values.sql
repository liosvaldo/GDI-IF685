INSERT INTO cep(cep, rua, cidade) VALUES ('50123-000', 'Recife', 'Rua mateus');
INSERT INTO cep(cep, rua, cidade) VALUES ('50124-000', 'Recife', 'Rua guedes');
INSERT INTO cep(cep, rua, cidade) VALUES ('50125-000', 'Recife', 'Rua joao');

INSERT INTO operador(matricula, nome, cpf, numero, complemento, cep) VALUES
(0001,'Lucas rodrigues', '123.345.789-10', 15, 'bloco B', '50123-000');
INSERT INTO operador(matricula, nome, cpf, numero, complemento, cep) VALUES
(0002,'Mateus Araujo', '123.345.789-10', 21, 'bloco B', '50124-000');
INSERT INTO operador(matricula, nome, cpf, numero, complemento, cep) VALUES
(0003,'Anderson amaral', '123.345.789-10', 40, 'bloco B', '50125-000');

INSERT INTO modelo_inversor(modelo, fabricante, tensao_maxima_cc, pot_max_cc, pot_max_ca, pot_nom_ca,  num_entradas_cc) VALUES
('ABC123', 'WEG', 123, 220, 380, 2, 2);
INSERT INTO modelo_inversor(modelo, fabricante, tensao_maxima_cc, pot_max_cc, pot_max_ca, pot_nom_ca, num_entradas_cc) VALUES
('ABC456', 'GROWAT', 456, 220, 380, 1, 1);
INSERT INTO modelo_inversor(modelo, fabricante, tensao_maxima_cc, pot_max_cc, pot_max_ca, pot_nom_ca, num_entradas_cc) VALUES
('ABC789', 'GROWAT', 789, 220, 380, 4, 1);

INSERT INTO modelo_painel(modelo, fabricante, corrente_pico, tensao_max_func, pot_max, temp_max, temp_min) VALUES
('DEF123', 'WEG', 20, 20, 220, 380, 2);
INSERT INTO modelo_painel(modelo, fabricante, corrente_pico, tensao_max_func, pot_max, temp_max, temp_min) VALUES
('GHI123', 'ANTOM', 123, 20, 220, 380, 2);
INSERT INTO modelo_painel(modelo, fabricante, corrente_pico, tensao_max_func, pot_max, temp_max, temp_min) VALUES
('LFJ123', 'EDUS', 123, 20, 220, 380, 2);

INSERT INTO modelo_eletrocentro(modelo, fabricante, pot_nom, tensao_nom, autonomia_baterias, corrente_max_baterias) VALUES
('AAA', 'WEG', 30, 220, 2000, 10);
INSERT INTO modelo_eletrocentro(modelo, fabricante, pot_nom, tensao_nom, autonomia_baterias, corrente_max_baterias) VALUES
('BBB', 'WEG1', 30, 220, 2000, 10);
INSERT INTO modelo_eletrocentro(modelo, fabricante, pot_nom, tensao_nom, autonomia_baterias, corrente_max_baterias) VALUES
('CCC', 'WEG2', 30, 220, 2000, 10);

INSERT INTO conjunto(id, modelo_inversor, modelo_painel) VALUES
(0001, 'ABC123', 'DEF123');
INSERT INTO conjunto(id, modelo_inversor, modelo_painel) VALUES
(0002, 'ABC456', 'GHI123');
INSERT INTO conjunto(id, modelo_inversor, modelo_painel) VALUES
(0003, 'ABC789', 'LFJ123');

INSERT INTO ponto_conexao(id, nome, pot_nom, estado, cidade, latitude, longitude) VALUES
(0001, 'ITAU', 500, 'BH', 'salvador', 2.12345, -1.23456);
INSERT INTO ponto_conexao(id, nome, pot_nom, estado, cidade, latitude, longitude) VALUES
(0002, 'ITAU', 230, 'MG', 'salvador', 2.12345, -1.23456);
INSERT INTO ponto_conexao(id, nome, pot_nom, estado, cidade, latitude, longitude) VALUES
(0003, 'ITAU', 69, 'AL', 'salvador', 2.12345, -1.23456);

INSERT INTO se_coletora(id, nome_parque, id_ponto_conexao, pot_nom, tensao_nom, taxa_conversao, latitude, longitude) VALUES
(001, 'ITABAIANA', 0001, 500, 13400, 50, 2.12345, -1.23456);
INSERT INTO se_coletora(id, nome_parque, id_ponto_conexao, pot_nom, tensao_nom, taxa_conversao, latitude, longitude) VALUES
(002, 'ITABAIANA', 0002, 230, 13400, 50, 2.12345, -1.23456);
INSERT INTO se_coletora(id, nome_parque, id_ponto_conexao, pot_nom, tensao_nom, taxa_conversao, latitude, longitude) VALUES
(003, 'ITABAIANA', 0003, 69, 13400, 50, 2.12345, -1.23456);

INSERT INTO eletrocentro(id, id_modelo_eletrocentro, id_operador, id_supervisor, id_coletora, latitude, longitude) VALUES
(0001, 'AAA', 0001, 0002, 2.12345, -1.23456);
INSERT INTO eletrocentro(id, id_modelo_eletrocentro, id_operador, id_supervisor, id_coletora, latitude, longitude) VALUES
(0002, 'BBB', 0002, 0003, 2.12345, -1.23456);
INSERT INTO eletrocentro(id, id_modelo_eletrocentro, id_operador, id_supervisor, id_coletora, latitude, longitude) VALUES
(0003, 'CCC', 0003, 0001, 2.12345, -1.23456);

INSERT INTO instalacao(id, id_conjunto, id_operador, id_supervisor, id_eletrocentro, latitude, longitude) VALUES
(0001, 0001, 0001, 0002, 0001, 2.12345, -1.23456);
INSERT INTO instalacao(id, id_conjunto, id_operador, id_supervisor, id_eletrocentro, latitude, longitude) VALUES
(0002, 0002, 0002, 0003, 0002, 2.12345, -1.23456);
INSERT INTO instalacao(id, id_conjunto, id_operador, id_supervisor, id_eletrocentro, latitude, longitude) VALUES
(0002, 0003, 0002, 0003, 0003, 2.12345, -1.23456);

INSERT INTO produto_energia(id, id_ponto_conexao, quantidade_kw, data_venda, prazo_entrega) VALUES
(0001, 0001, 32, to_date('13/12/2005', 'dd/mm/yy'), to_date('13/04/2006', 'dd/mm/yy'));
INSERT INTO produto_energia(id, id_ponto_conexao, quantidade_kw, data_venda, prazo_entrega) VALUES
(0002, 0002, 21, to_date('21/12/2005', 'dd/mm/yy'), to_date('21/04/2006', 'dd/mm/yy'));
INSERT INTO produto_energia(id, id_ponto_conexao, quantidade_kw, data_venda, prazo_entrega) VALUES
(0003, 0003, 15, to_date('18/12/2005', 'dd/mm/yy'), to_date('18/04/2006', 'dd/mm/yy'));

INSERT INTO ponto_conexao (id, nome, pot_nom, estado, cidade, latitude, longitude) VALUES 
(0003, "Conexão 1", 300, "Pernambuco", "Recife", -8, -34);
INSERT INTO ponto_conexao (id, nome, pot_nom, estado, cidade, latitude, longitude) VALUES 
(0005, "Conexão 2", 300, "Pernambuco", "Recife", -8, -34);
INSERT INTO ponto_conexao (id, nome, pot_nom, estado, cidade, latitude, longitude) VALUES 
(0008, "Conexão 3", 300, "Pernambuco", "Caruaru", -8, -35);

INSERT INTO medidor_instalacao(id_medidor, id_conexao, numero_de_serie, numero_de_prioridade) VALUES
(0001, 0003, 123, 111);
INSERT INTO medidor_instalacao(id_medidor, id_conexao, numero_de_serie, numero_de_prioridade) VALUES
(0002, 0005, 456, 222);
INSERT INTO medidor_instalacao(id_medidor, id_conexao, numero_de_serie, numero_de_prioridade) VALUES
(0003, 0008, 789, 333);

INSERT INTO gerecao_instalacao(timestemp,id_conexao, potência) VALUES
(to_date('21/12/2005', 'dd/mm/yy'), 0003, 300);
INSERT INTO gerecao_instalacao(timestemp,id_conexao, potência) VALUES
(to_date('21/01/2005', 'dd/mm/yy'), 0005, 300);
INSERT INTO gerecao_instalacao(timestemp,id_conexao, potência) VALUES
(to_date('21/02/2005', 'dd/mm/yy'), 0008, 300);

INSERT INTO medidor_eletrocentro(id_medidor, id_conexao, numero_de_serie, numero_de_prioridade) VALUES
(0001, 0003, 321, 111);
INSERT INTO medidor_eletrocentro(id_medidor, id_conexao, numero_de_serie, numero_de_prioridade) VALUES
(0002, 0005, 654, 222);
INSERT INTO medidor_eletrocentro(id_medidor, id_conexao, numero_de_serie, numero_de_prioridade) VALUES
(0003, 0008, 987, 333);

INSERT INTO gerecao_eletrocentro(timestemp, id_conexao, potência) VALUES
(to_date('21/12/2005', 'dd/mm/yy'), 0003, 300);
INSERT INTO gerecao_eletrocentro(timestemp, id_conexao, potência) VALUES
(to_date('21/01/2005', 'dd/mm/yy'), 0005, 300);
INSERT INTO gerecao_eletrocentro(timestemp, id_conexao, potência) VALUES
(to_date('21/02/2005', 'dd/mm/yy'), 0008, 300);

INSERT INTO medidor_se_coletora(id_medidor, id_conexao, numero_de_serie, numero_de_prioridade) VALUES
(0001, 0003, 333, 111);
INSERT INTO medidor_se_coletora(id_medidor, id_conexao, numero_de_serie, numero_de_prioridade) VALUES
(0002, 0005, 334, 222);
INSERT INTO medidor_se_coletora(id_medidor, id_conexao, numero_de_serie, numero_de_prioridade) VALUES
(0003, 0008, 335, 333);

INSERT INTO gerecao_se_coletora(timestemp, id_conexao, potência) VALUES
(to_date('21/12/2005', 'dd/mm/yy'), 0003, 300);
INSERT INTO gerecao_se_coletora(timestemp, id_conexao, potência) VALUES
(to_date('21/01/2005', 'dd/mm/yy'), 0003, 300);
INSERT INTO gerecao_se_coletora(timestemp, id_conexao, potência) VALUES
(to_date('21/02/2005', 'dd/mm/yy'), 0003, 300);

INSERT INTO medidor_ponto_conexao(id_medidor, id_conexao, numero_de_serie, numero_de_prioridade) VALUES
(0001, 0003, 553, 111);
INSERT INTO medidor_ponto_conexao(id_medidor, id_conexao, numero_de_serie, numero_de_prioridade) VALUES
(0002, 0005, 554, 222);
INSERT INTO medidor_ponto_conexao(id_medidor, id_conexao, numero_de_serie, numero_de_prioridade) VALUES
(0003, 0008, 555, 333);

INSERT INTO gerecao_ponto_conexao(timestemp, id_conexao, potência) VALUES
(to_date('21/12/2005', 'dd/mm/yy'), 0003, 300);
INSERT INTO gerecao_ponto_conexao(timestemp, id_conexao, potência) VALUES
(to_date('21/01/2005', 'dd/mm/yy'), 0003, 300);
INSERT INTO gerecao_ponto_conexao(timestemp, id_conexao, potência) VALUES
(to_date('21/02/2005', 'dd/mm/yy'), 0003, 300);

INSERT INTO pessoa(id, nome) VALUES
(0001, 'José dos Santos');
INSERT INTO pessoa(id, nome) VALUES
(0002, 'Maria dos Santos');
INSERT INTO pessoa(id, nome) VALUES
(0003, 'Ednaldo Moreira');
INSERT INTO pessoa(id, nome) VALUES
(0004, 'Norval Eletro');
INSERT INTO pessoa(id, nome) VALUES
(0005, 'California Hidro');
INSERT INTO pessoa(id, nome) VALUES
(0006, 'Ares Energia');

INSERT INTO pessoa_fisica(id, nome, cpf) VALUES
(0001, 'José dos Santos', '111.232.445-88');
INSERT INTO pessoa_fisica(id, nome, cpf) VALUES
(0002, 'Maria dos Santos', '555.441.889-00');
INSERT INTO pessoa_fisica(id, nome, cpf) VALUES
(0003, 'Ednaldo Moreira', '909.222.545-22');

INSERT INTO pessoa_juridica(id, nome_fantasia, cnpj) VALUES
(0004, 'Norval Eletro', '32.414.586/0004-00');
INSERT INTO pessoa_juridica(id, nome_fantasia, cnpj) VALUES
(0005, 'California Hidro', '45.789.453/0001-20');
INSERT INTO pessoa_juridica(id, nome_fantasia, cnpj) VALUES
(0006, 'Ares Energia', '21.797.455/0003-03');

INSERT INTO telefone_pessoa (id, id_pessoa, nome, ddd, telefone) VALUES
(0001, 0001, 'José dos Santos', 081, 91235467);
INSERT INTO telefone_pessoa (id, id_pessoa, nome, ddd, telefone) VALUES
(0002, 0002, 'Maria dos Santos', 081, 93216548);
INSERT INTO telefone_pessoa (id, id_pessoa, nome, ddd, telefone) VALUES
(0003, 0003, 'Ednaldo Moreira', 081, 999998888);
INSERT INTO telefone_pessoa (id, id_pessoa, nome, ddd, telefone) VALUES
(0004, 0004, 'Norval Eletro', 081, 21195555);
INSERT INTO telefone_pessoa (id, id_pessoa, nome, ddd, telefone) VALUES
(0005, 0005, 'California Hidro', 081, 21169403);
INSERT INTO telefone_pessoa (id, id_pessoa, nome, ddd, telefone) VALUES
(0006, 0006, 'Ares Energia', 081, 21110560);

