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
);