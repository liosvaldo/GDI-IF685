SELECT i.id, c.modelo_inversor, c.modelo_painel, o.nome, op.nome, e.id_modelo_eletrocentro, i.latitude, i.longitude
    FROM INSTALACAO i
	left join conjunto c on c.id = i.id_conjunto
	left join operador o on o.matricula = i.id_operador
	left join operador op on op.matricula = i.id_supervisor
    left join eletrocentro e on e.id = i.id_eletrocentro;

INSERT INTO cep(cep, rua, cidade) VALUES ('50126-000', 'Recife', 'Rua lucas');

-- altere a tabela e crie um cep
Alter table pessoa_juridica
    add cep VARCHAR2(20);

-- altere a tabela e crie uma referencia a base CEPs
alter table pessoa_juridica
	add CONSTRAINT cep_fk_pessoa_juridica foreign key (cep) references cep(cep);

-- crie um index para o numreo de serie
CREATE UNIQUE INDEX index_num_serie
on medidor_instalacao(numero_de_serie);

-- derrube o index par ao numero de serie
DROP INDEX index_num_serie;

-- insira um cep para uma pessoa juridica
update pessoa_juridica
set cep ='50123-000'
where id = 0006;

-- Selecione uma faixa de SE coletoras baseada na potencia nominal
select *
from se_coletora
where pot_nom between 150 and 800;

-- selecione estados dentro de um grupo
select *
from ponto_conexao
where estado IN ('AL', 'MG');

-- pesquise que operador possui amaral no nome
select *
from operador
where nome like '%amaral';

-- selecione todos os clientes juridicos que o cep não é nulo
select *
from pessoa_juridica
where cep is not null;

-- recupere todos os dados referentes aos ceps da tabela ceps para cada operador
-- ( 50126-000 não sera retornado por não ser utilzado)
select *
from operador o
inner join cep c on o.cep = c.cep;

-- Potencia maxima dos pontos de conexões
select max(pot_nom)
from ponto_conexao;

-- Potencia minima dos pontos de conexões
select min(pot_nom)
from ponto_conexao;

-- quantidade média de strings por inversor
select avg(num_entradas_cc)
from modelo_inversor;

-- numero de operadores cadastrados
select count(matricula)
from operador;

-- recupere informações do ponto de conexão com maior potencia
select *
from ponto_conexao
    where pot_nom = (select max(pot_nom)
    				from ponto_conexao);

-- o somatorio do primeiro registro diario da energia comercializada acima de 20 kw
select sum(quantidade_kw)
from produto_energia
where data_venda in (select distinct data_venda
    from produto_energia
    where quantidade_kw > 20);

-- retorne a quantidade de transações feitas com a quantidade de Kw vendida menor que 10
select count(*)
from produto_energia
where id = any(
    select id
    from produto_energia
    where quantidade_kw<10);

-- retorne todas as linhas se a quantidade de kW vendidas for menor que 40
select *
from produto_energia
where id = All(
    select id
    from produto_energia
    where quantidade_kw<40);

-- ordenar operadores pelo nome
select *
from operador
order by nome;

-- inserir novo valor em geracao eletrocentro
INSERT INTO gerecao_eletrocentro(timestemp, id_conexao, potência) VALUES
(to_date('22/02/2005', 'dd/mm/yy'), 0003, 600);

-- inserir novo valor em operador
INSERT INTO operador(matricula, nome, cpf, numero, complemento, cep) VALUES
(0004,'Lucas lima', '123.345.789-10', 20, 'bloco B', '50123-000');

-- obtenha quantidade de operadores por cep da base operador
select cep, count(*)
from operador
group by cep
having count(*) > 1;

-- lista com todos os mdelos de inversor e painel como uma view a parte
create view grupo_modelos_inversor_painel as
select modelo
from modelo_inversor
union
select modelo
from modelo_painel
order by modelo;

-- garante a função select para a tabela pessoa_juridica ao usuario Liosvaldo
grant SELECT ON pessoa_juridica to Liosvaldo;
