CREATE TABLE cep ( 
	cep 					NUMBER 					NOT NULL,
	rua 					VARCHAR2(6)				NOT NULL, 
	cidade 					VARCHAR2(6)				NOT NULL, 
	CONSTRAINT cep_pk 		PRIMARY KEY (cep)
);