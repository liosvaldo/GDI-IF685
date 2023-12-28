/*registre nome de operadores exceto o primeiro, ordena-os em tabela, conta via function com loop, bloco anônimo
utiliza loop exit when e exception when*/
DECLARE
CREATE TYPE r_opr IS RECORD(
    matricula               operador.matricula%TYPE         ,
    nome                    operador.nome%TYPE              ,
    cpf                     operador.cpf%TYPE               ,
    );
V_opr r_opr;
TYPE tabela_operadores IS TABLE OF r_opr
    INDEX BY BINARY_INTEGER;
C_opr tabela_operadores;
indice BINARY_INTEGER;
BEGIN
Set serveroutput on;
--indice começa em 1 ao inves de 0 para pular a primeira tabela
indice := 1;
end_loop := 0; 
SELECT matricula, nome, cpf INTO V_opr.matricula, V_opr.nome, V_opr.cpf, FROM operador WHERE matricula >= 0002;
LOOP    
    ALTER TABLE C_opr ADD(indice FROM V_opr.nome);
    EXCEPTION
        WHEN NO_DATA_FOUND THEN
        end_loop := 1; 
        END
    indice := indice +1;
    EXIT WHEN end_loop == 1;
    END LOOP;

dbms_output.put(C_opr);
END

--fazendo-se o mesmo com rowtype e while loop
DECLARE
V_opr2 operador%ROWTYPE;
TYPE tabela_operadores2 IS TABLE OF operador%ROWTYPE
    INDEX BY BINARY_INTEGER;
C_opr2 tabela_operadores2;
indice2 BINARY_INTEGER;
BEGIN
Set serveroutput on;
--indice2 começa em 1 ao inves de 0 para pular a primeira tabela
indice2 := 1;
end_loop2 := 0; 
SELECT matricula, nome, cpf INTO V_opr2.matricula, V_opr2.nome, V_opr2.cpf, FROM operador WHERE matricula >= 0002;
WHILE end_loop2 == 1 LOOP    
    ALTER TABLE C_opr ADD(indice FROM V_opr.nome);
    EXCEPTION
        WHEN NO_DATA_FOUND THEN
        end_loop2 := 1; 
        END
    indice := indice +1;
    END LOOP;

dbms_output.put(C_opr);
END

--procedimento reutilizavel para adicionar em tabela operador
DECLARE
CREATE OR REPLACE PROCEDURE insere_operador(
    p_matricula             operador.matricula%TYPE         ,
    p_nome                    operador.nome%TYPE            ,
    p_cpf                     operador.cpf%TYPE             ,
    p_numero                  operador.numero%TYPE          ,
    p_complemento             operador.complemento%TYPE     ,
    p_cidade                  operador.cidade%TYPE          ,
    p_cep                     operador.cep%TYPE             ,) IS
INSERT INTO operador(matricula, nome, cpf, numero, complemento, cidade, cep) VALUES
(p_matricula, p_nome, p_cpf, p_numero, p_complemento, p_cidade, p_cep);
BEGIN
insere_operador(0006, 'Augusto Marcelo', 133.455.877-10, 16, 'Bloco A', 'Recife', '50123-000')
COMMIT;
END insere_operador

--funcao que retorna o numero de operadores registrados no sistema
CREATE OR REPLACE FUNCTION calculo_operadores RETURN INTEGER IS
resultado INTEGER;
BEGIN
resultado := 0;
    SELECT max(id_operador) into resultado FROM operador;
        resultado := resultado +1;
    RETURN resultado;
END calculo_operadores;

-- funcao para determinar rua via apenas cep usando else if
DECLARE
CREATE OR REPLACE FUNCTION selecao_rua RETURN VARCHAR2(30) IS
rua_final VARCHAR2(30);
BEGIN
    rua_cep operador.cep%TYPE
    SELECT cep INTO rua_cep FROM operador
    IF rua_cep == '50123-000' THEN rua_final := 'Rua mateus'
    | ELSIF rua_cep == '50124-000' THEN rua_final := 'Rua guedes'
    | ELSIF rua_cep == '50125-000' THEN rua_final := 'Rua joao'
    ELSE EXCEPTION
        dbms_output.put('rua fora da database.')
    END
END IF;
COMMIT;
RETURN rua_final

--mesma funcao usando case-when
DECLARE
CREATE OR REPLACE FUNCTION selecao_rua2 RETURN VARCHAR2(30) IS
rua_final2 VARCHAR2(30);
BEGIN
    rua_cep2 operador.cep%TYPE
    SELECT cep INTO rua_cep2 FROM operador
    CASE rua_cep2
    WHEN '50123-000' THEN rua_final2 := 'Rua mateus'
    WHEN '50124-000' THEN rua_final2 := 'Rua guedes'
    WHEN '50125-000' THEN rua_final2 := 'Rua joao'
    ELSE EXCEPTION
            dbms_output.put('rua fora da database.')
    END
END CASE;
RETURN rua_final2

--usando loop for in para contar o numero de eletrocentros
DECLARE
indice3 NUMBER;
SELECT max(id) INTO indice3 FROM eletrocentro
TYPE tabela_sec_eletro IS TABLE OF eletrocentro%ROWTYPE
    INDEX BY BINARY_INTEGER;
D_elt tabela_sec_eletro;
m NUMBER;
m := 0
BEGIN
FOR m IN 0..indice3 LOOP 
    ALTER TABLE D_elt ADD(id(m) FROM eletrocentro);
END

CREATE OR REPLACE PACKAGE registro_eletrocentros AS
--Insere um novo eletrocentro na tabela eletrocentro
CREATE OR REPLACE PROCEDURE insere_eletrocentro (
    i_id                      eletrocentro.id%TYPE            ,
    i_id_modelo_eletrocentro  eletrocentro.id_modelo_eletrocentro%TYPE,
    i_id_operador             eletrocentro.id_operador%TYPE   ,
    i_id_supervisor           eletrocentro.id_supervisor%TYPE ,
    i_id_coletora             eletrocentro.id_coletora%TYPE   ,
    i_latitude                eletrocentro.latitude%TYPE      ,
    i_longitude               eletrocentro.longitude%TYPE     ,
);
--Remove um eletrocentro da tabela eletrocentro
PROCEDURE remove_eletrocentro(p.id IN eletrocentro.id%TYPE);
--Excecao levantada, id inexistente
exc_el_inexiste EXCEPTION;
--tabela virtual usada para o procedimento seguinte
TYPE vt_eletrocentro IS TABLE of eletrocentro.id%TYPE
INDEX BY BINARY_INTEGER;
--tabela virtual que retorna todos os eletrocentros ativos de um dado modelo
PROCEDURE list_mod_eletrocentro(i_id_modelo_eletrocentro IN eletrocentro.id_modelo_eletrocentro, 
i_id OUT vt_eletrocentro, i_num_eletrocentros IN OUT BINARY INTEGER);
END registro_eletrocentros

CREATE OR REPLACE PACKAGE registro_eletrocentros BODY registro_eletrocentros AS
--Insere um novo eletrocentro na tabela eletrocentro
CREATE OR REPLACE PROCEDURE insere_eletrocentro (
    i_id                      eletrocentro.id%TYPE            ,
    i_id_modelo_eletrocentro  eletrocentro.id_modelo_eletrocentro%TYPE,
    i_id_operador             eletrocentro.id_operador%TYPE   ,
    i_id_supervisor           eletrocentro.id_supervisor%TYPE ,
    i_id_coletora             eletrocentro.id_coletora%TYPE   ,
    i_latitude                eletrocentro.latitude%TYPE      ,
    i_longitude               eletrocentro.longitude%TYPE     ,
);IS
INSERT INTO eletrocentro(id, id_modelo_eletrocentro, id_operador, id_supervisor, id_coletora, latitude, longitude) VALUES
(i_id, i_id_modelo_eletrocentro, i_id_operador, i_id_supervisor, i_id_coletora, i_latitude, i_longitude);
COMMIT;
END insere_eletrocentro
--Remove um eletrocentro da tabela eletrocentro
PROCEDURE remove_eletrocentro(p.id IN eletrocentro.id%TYPE) IS
BEGIN
    DELETE FROM eletrocentro
        WHERE id = i_id;
        IF SQL%NOTFOUND THEN
            RAISE exc_el_inexiste;
        END IF;
    COMMIT;
END remove_eletrocentro;
--tabela virtual que retorna todos os eletrocentros ativos de um dado modelo
PROCEDURE list_mod_eletrocentro(i_id_modelo_eletrocentro IN eletrocentro.id_modelo_eletrocentro, 
i_id OUT vt_eletrocentro, i_num_eletrocentros IN OUT BINARY INTEGER) IS
v_id    eletrocentro.id%TYPE;
--cursor local para trazer registros
CURSOR cur_eletro IS
    SELECT id
    FROM eletrocentro
    WHERE id_modelo_eletrocentro = i_id_modelo_eletrocentro;
    BEGIN

        i_num_eletrocentros :=0;
    OPEN cur_eletro;
    LOOP 
        FETCH cur_eletro INTO v_id;
        EXIT WHEN cur_eletro%NOTFOUND;
        i_num_eletrocentros := i_num_eletrocentros +1;
        i_id(i_num_eletrocentros) := v_id;
        END LOOP;
END list_mod_eletrocentro;
END registro_eletrocentros;

--trigger para prevenção de deixar a tabela operador vazia
CREATE OR REPLACE TRIGGER demitir_operador
BEFORE DELETE ON operador
DECLARE
	id NUMBER;
BEGIN
	SELECT COUNT(*) INTO matricula 
	FROM operador;
	IF  matricula = 1 THEN	
		RAISE_APPLICATION_ERROR(-011, 'Não se pode deixar o parque de energia solar sem nenhum operador.');
	END IF;
END demitir_operador;

--trigger para prevenir que uma SE Coletora se conecte com mais de um ponto de conexão
CREATE OR REPLACE TRIGGER controle_se_coletora BEFORE INSERT ON se_coletora
FOR EACH ROW
DECLARE
	se_conecta se_coletora.id_ponto_conexao%TYPE;
BEGIN
	SELECT id_ponto_conexao INTO se_conecta
	FROM se_coletora
	WHERE id_ponto_conexao =:NEW.id_ponto_conexao;
	IF se_conecta IS NOT NULL THEN
RAISE_APPLICATION_ERROR(-012,'Esta SE Coletora já esta conectada a um ponto de conexão!');
	END IF;

	EXCEPTION
		WHEN NO_DATA_FOUND THEN
			dbms_output.put_line('SE Coletora conectada com sucesso');
END;

