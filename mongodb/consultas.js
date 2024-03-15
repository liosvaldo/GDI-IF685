// essa é a parte destinada as consultas da checklist! A complexidade das consultas vão de forma ascedente!
/************************************************** Usos para a check list **********************************************************************************************************/

/*Usando Find*/

//Encontrar festivais que estão em PE
db.festivalDetalhes.find({'localizacao.estado': 'PE'}).pretty();

// Encontrar festivais com nome especifico
db.festivalDetalhes.find({ nome: 'Festival de Inverno' }).pretty();

// encontrar cantores com nome em especifico
db.bandaDetalhes.find({ nome: 'Banda X' }).pretty();

// encontrar os festivais com capacidade maior que:
db.festivalDetalhes.find({ capacidade: { $gt: 7000 } }).pretty();

// encontrar as bandas com capacidade maior ou igual que:
db.bandaDetalhes.find({ avaliacao: { $gte: 8000 } }).pretty();

// encontrar as bandas com capacidade menor ou igual que:
db.bandaDetalhes.find({ avaliacao: { $lte: 8000 } }).pretty();

// encontrar os cantores com avaliacao menor que:
db.cantorDetalhes.find({ avaliacao: { $lt: 10000 } }).pretty();


//Encontrar festivais que estão no Brazil, porém so buscando o nome, a localização e a data de inicio e termino
db.festivalDetalhes.find({'localizacao.pais': 'Brazil'}, {'nome': 1, 'localizacao': 1, '_id': 0, 'dataInicio': 1, 'dataTermino': 1}).pretty();

// usando  o all

db.bandaDetalhes.find({ 'membros.nome': { $all: ["Membro A", "Membro F"] } }, {_id: 0, nome: 1, membros: 1});

db.bandaDetalhes.find({ 'membros.instrumento': { $all: ['Teclado', 'Guitarra'] } }, {_id: 0, nome: 1, membros: 1});

db.festivalDetalhes.find({
  $or: [
    { "apresentacoesBandas.nome": "Banda A" },
    { "apresentacoesBandas.nome": "Banda C" }
  ]
});

db.bandaDetalhes.find({ 'membros.nome': { $all: ["Membro 1", 'Membro 2'] } });

db.cantorDetalhes.find({ "albums.anoLancamento": { $all: [2020, 2022] } });

/*Usando gt, gte, lt, lte*/

db.festivalDetalhes.find({'custo': {$gt: 10000}}).pretty();

db.festivalDetalhes.find({'custo': {$gte: 30000}}).count();

//Usando lt, lte junto do limit e sort
// encontrando o evento mais barato
db.festivalDetalhes.find({ 'custo': { $lt: 100000 } }).sort({ 'custo': 1 }).limit(1)

//listando do mais caro ao mais barato
db.festivalDetalhes.find({'custo': {$lte: 50000}}).sort({'custo': -1});

//Usando o avg, group, sum, aggregate e project


// Calcula a soma da avaliação dos cantores (usando $sum)
db.cantorDetalhes.aggregate([
    { $group: { _id: '$genero', totalAvaliacao: { $sum: "$avaliacao" }, totalDocumentos: { $sum: 1 } } },
    { $project: { genero: "$_id", totalAvaliacao: 1, totalDocumentos: 1, _id: 0 } }
]);


// Calcula a media da avaliação das bandas (usando $avg)

db.bandaDetalhes.aggregate([
    { $group: { _id: '$genero', totalAvaliacao: { $avg: "$avaliacao" }, totalDocumentos: { $sum: 1 } } },
    { $project: { genero: "$_id", totalAvaliacao: 1, totalDocumentos: 1, _id: 0 } }
]);


/*Usando o count*/

// contando quantos festivais tem capacidade maior que 7000
db.festivalDetalhes.find({ capacidade: { $gt: 7000 } }).count();

// contando o total de festivais
db.festivalDetalhes.find().count();
// ou assim
var countFestivais = db.festivalDetalhes.count();
print("Total de festivais: " + countFestivais);

//contar todos os cantores
db.cantorDetalhes.find().count();

//contar todos os cantores que atende a alguma especificação 
db.cantorDetalhes.find({'genero': {$in: ['Reggae', 'Pop', 'Funk']}}).count();

// encontrnado o festival com maior custo
db.festivalDetalhes.find().sort({ custo: -1 }).limit(1);

//outros usos com gte, find, exists, limit e count

db.bandaDetalhes.find({ avaliacao: { $gte: 8000 } });
db.bandaDetalhes.find({ "membros.5": { $exists: true } });
db.cantorDetalhes.find({ avaliacao: { $lt: 10000 } }).count();
db.cantorDetalhes.find().sort({ valorContrato: -1 }).limit(1);

// Encontrar cantores com avaliação maior ou igual a 10000, ordenados por avaliação em ordem decrescente
db.cantorDetalhes.find({ avaliacao: { $exists: true, $gte: 10000 } }).sort({ avaliacao: -1 });

// Encontrar cantores com pelo menos dois álbuns, ordenados pelo ano de lançamento do primeiro álbum em ordem crescente
db.cantorDetalhes.find({ "albums.1": { $exists: true } }).sort({ "albums.0.anoLancamento": 1 });

// Encontrar cantores com contrato acima de 2000 e que tenham a letra "a" em seus nomes
db.cantorDetalhes.find({ valorContrato: { $exists: true, $gt: 2000 }, nome: { $exists: true, $regex: /a/i } });

// Encontrar cantores com avaliação entre 5000 e 10000, ordenadas por avaliação em ordem decrescente
db.bandaDetalhes.find({ avaliacao: { $exists: true, $gte: 5000, $lte: 10000 } }).sort({ avaliacao: -1 });

// Encontrar cantores com pelo menos três membros, ordenadas pelo número de membros em ordem decrescente
db.bandaDetalhes.find({ "membros.2": { $exists: true } }).sort({ "membros.length": -1 });

// Encontrar cantores com avaliação e que não possuem avaliação definida, ordenadas por nome em ordem alfabética
db.bandaDetalhes.find({ $or: [{ avaliacao: { $exists: true } }, { avaliacao: { $exists: false } }] }).sort({ nome: 1 });

// Encontrar festivais com capacidade maior que 5000 e que ocorram após 2023, ordenados pela capacidade em ordem decrescente
db.festivalDetalhes.find({ capacidade: { $exists: true, $gt: 5000 }, dataInicio: { $exists: true, $gt: "2023-01-01" } }).sort({ capacidade: -1 });

// Encontrar festivais com custo entre 20000 e 50000, ordenados por data de início em ordem crescente
db.festivalDetalhes.find({ custo: { $exists: true, $gte: 20000, $lte: 50000 } }).sort({ dataInicio: 1 });

// Encontrar festivais com conclusão definida e que ocorram em São Paulo, ordenados pelo número de pessoas presentes em ordem decrescente
db.festivalDetalhes.find({ conclusao: { $exists: true }, "localizacao.cidade": "São Paulo" }).sort({ pessoasPresentes: -1 });

/*Usando aggregation*/

db.festivalDetalhes.aggregate([
  {
    $match: { 'custo': { $gt: 1000 } }
  },
  {
    $group: {
      _id: null,
      custoMedio: { $avg: '$custo' }
    }
  },
  {
    $project: {
      _id: 0,
      custoMedio: 1
    }
  }
]).next()

db.festivalDetalhes.aggregate([
  {
    $match: {
      capacidade: { $exists: true, $ne: null },
      pessoasPresentes: { $exists: true, $ne: null }
    }
  },
  {
    $project: {
      nome: 1,
      local: "$localização",
      diferenca: { $subtract: ["$capacidade", "$pessoasPresentes"] },
      status: {
        $cond: {
          if: { $gt: [{ $subtract: ["$capacidade", "$pessoasPresentes"] }, 0] },
          then: "Menos pessoas foram",
          else: "Pessoas a mais entraram no evento (perigoso)"
        }
      }
    }
  },
  {
    $group: {
      _id: "$nome",
      local: { $first: "$local" },
      diferenca: { $first: "$diferenca" },
      status: { $first: "$status" }
    }
  }
])

// usando o $size para saber o tamanho da banda

db.bandaDetalhes.aggregate([
  { $project: { _id: 0, nome: 1, totalMembros: { $size: "$membros" } } }
]);
  
// usando o lookup e o max

db.bandaDetalhes.aggregate([
  { $group: { _id: null, maxAvaliacao: { $max: "$avaliacao" } } },
  { $lookup: { from: "bandaDetalhes", localField: "maxAvaliacao", foreignField: "avaliacao", as: "bandaMaxAvaliacao" } },
  { $unwind: "$bandaMaxAvaliacao" },
  { $project: { _id: 0, nome: "$bandaMaxAvaliacao.nome", genero: "$bandaMaxAvaliacao.genero", avaliacao: "$bandaMaxAvaliacao.avaliacao" } }
]);

// Encontrar os cantores com a maior avaliação e ordenando
db.cantorDetalhes.aggregate([
  { $group: { _id: '$nome', maxAvaliacao: { $max: "$avaliacao" } } },
  { $sort: { maxAvaliacao: -1 } } // Ordena os resultados pelo campo maxAvaliacao em ordem decrescente
]);


//Exemplo com lookup na coleção cantorDetalhes:
db.cantorDetalhes.aggregate([
{
  $lookup: {
    from: "albumsCantor", // Coleção de álbuns do cantor
    localField: "nome", // Campo local para fazer a correspondência
    foreignField: "nomeCantor", // Campo na coleção "albumsCantor" para fazer a correspondência
    as: "albuns" // Nome do novo array que conterá os álbuns
  }
}
]);

//Exemplo com lookup na coleção bandaDetalhes:
db.bandaDetalhes.aggregate([
{
  $lookup: {
    from: "membrosBanda", // Coleção de membros da banda
    localField: "nome", // Campo local para fazer a correspondência
    foreignField: "nomeBanda", // Campo na coleção "membrosBanda" para fazer a correspondência
    as: "membros" // Nome do novo array que conterá os membros
  }
}
]);

//Exemplo com lookup na coleção festivalDetalhes:
// mostrar as bandas com mais de 3 membros

db.bandaDetalhes.aggregate([
    { $match: { $expr: { $gt: [{ $size: "$membros" }, 3] } } }, // Filtra bandas com mais de 3 membros
    {
      $lookup: {
        from: "bandaDetalhes",
        let: { membrosCount: { $size: "$membros" } },
        pipeline: [
          {
            $match: {
              $expr: { $eq: [{ $size: "$membros" }, "$$membrosCount"] },
              _id: { $ne: "$_id" } // Evita correspondência com a própria banda
            }
          },
          { $project: { nome: 1, genero: 1, membrosCount: { $size: "$membros" } } }
        ],
        as: "bandasComMaisDeTresMembros"
      }
    },
    { $unwind: "$bandasComMaisDeTresMembros" },
    { $project: { _id: 0, nome: "$bandasComMaisDeTresMembros.nome", genero: "$bandasComMaisDeTresMembros.genero", membros: "$bandasComMaisDeTresMembros.membrosCount" } }
  ]);
  
// Criando o índice de texto para o campo 'titulo' dentro do array 'albums'
db.cantorDetalhes.createIndex({ "albums.titulo": "text" });
// Criando o índice de texto para o campo 'titulo' dentro do array 'albums'
db.bandaDetalhes.createIndex({ "albums.titulo": "text" });

// pesquisando cantores e bandas que tem o nome ''album'' nos titulos dos albuns.
db.cantorDetalhes.find({ $text: { $search: "Album" } });
db.bandaDetalhes.find({ $text: { $search: "Album" } });

// Criar o índice de texto para o campo 'dataInicio'
db.festivalDetalhes.createIndex({ "dataInicio": "text" });

// pesquisando festivais que o ano da datainicio é ''2024''
db.festivalDetalhes.find({ $text: { $search: "2024" } });

// Excluir o índice existente
db.festivalDetalhes.dropIndex("dataInicio_text");

// criando um index text
db.festivalDetalhes.createIndex({ conclusao: "text" });

// pesquisando os festivais com palavras chaves:
db.festivalDetalhes.find({ $text: { $search: "bom" } });
db.festivalDetalhes.find({ $text: { $search: "ruim" } });


// usando aggregate, match, text e project:

db.festivalDetalhes.aggregate([
    {
      $match: {
        $text: { $search: "ruim" }
      }
    },
    {
      $project: {
        _id: 0,
        nome: 1,
        localizacao: 1,
        conclusao: 1
      }
    }
  ]);

db.festivalDetalhes.aggregate([
  {
    $match: {
      $text: { $search: "bom" }
    }
  },
  {
    $project: {
      _id: 0,
      nome: 1,
      localizacao: 1,
      conclusao: 1
    }
  }
]);


// uso do project, aggregate e filter

//Exemplo usando $filter na coleção bandaDetalhes:
db.bandaDetalhes.aggregate([
  {
    $project: {
      nome: 1,
      membros: {
        $filter: {
          input: "$membros",
          as: "membro",
          cond: { $eq: ["$$membro.instrumento", "Guitarra"] } // Filtrar membros que tocam guitarra
        }
      }
    }
  }
]);

//Exemplo usando $filter na coleção cantorDetalhes:
db.cantorDetalhes.aggregate([
  {
    $project: {
      nome: 1,
      albums: {
        $filter: {
          input: "$albums",
          as: "album",
          cond: { $gte: ["$$album.anoLancamento", 2020] } // Filtrar álbuns lançados a partir de 2020
        }
      }
    }
  }
]);

//Exemplo usando $filter na coleção festivalDetalhes para achar as apresentações feita so por bandas:
db.festivalDetalhes.aggregate([
  {
    $match: {
      apresentacoesCantores: null
    }
  },
  {
    $project: {
      nome: 1,
      apresentacoesBandas: {
        $filter: {
          input: "$apresentacoesBandas",
          as: "apresentacao",
          cond: { $ne: ["$$apresentacao", null] } // Filtrar apresentações que não são nulas
        }
      }
    }
  }
]);

// Encontrar o cantor com o maior contrato por avaliação
db.cantorDetalhes.aggregate([
  {
    $project: {
      nome: 1,
      contratoPorAvaliacao: { $divide: ["$valorContrato", "$avaliacao"] }
    }
  },
  { $group: { _id: '$nome', maxContratoPorAvaliacao: { $max: "$contratoPorAvaliacao" } } },
  { $sort: { maxContratoPorAvaliacao: -1 } }, // Ordena do maior para o menor
  { $limit: 1 } // Limita a apenas uma linha de resultado
]);

// Encontrar a banda com a maior avaliação
db.bandaDetalhes.aggregate([
  { $group: { _id: '$nome', maxAvaliacao: { $max: "$avaliacao" } } },
  { $sort: { maxAvaliacao: -1 } }, // Ordena do maior para o menor
  { $limit: 1 }
]);

// Encontrar a banda mais antiga com a maior avaliação
db.bandaDetalhes.aggregate([
  { $match: { "albums.anoLancamento": { $exists: true } } },
  { $group: { _id: null, maxAnoLancamento: { $max: "$albums.anoLancamento" } } },
  { $lookup: { from: "bandaDetalhes", localField: "maxAnoLancamento", foreignField: "albums.anoLancamento", as: "bandas" } },
  { $unwind: "$bandas" },
  { $sort: { "bandas.avaliacao": -1 } },
  { $limit: 1 }
]);

// Encontrar o festival com o maior custo
db.festivalDetalhes.aggregate([
  { $group: { _id: '$nome', maxCusto: { $max: "$custo" } } },
  { $sort: { maxCusto: -1 } },
  { $limit: 1 }
]);

// Encontrar o festival mais recente com o maior custo
db.festivalDetalhes.aggregate([
  { $match: { dataInicio: { $exists: true } } },
  { $group: { _id: null, maxDataInicio: { $max: "$dataInicio" } } },
  { $lookup: { from: "festivalDetalhes", localField: "maxDataInicio", foreignField: "dataInicio", as: "festivais" } },
  { $unwind: "$festivais" },
  { $sort: { "festivais.custo": -1 } },
  { $limit: 1 }
]);

// Encontrar o festival com o maior valor médio de ingresso
db.festivalDetalhes.aggregate([
  {
    $project: {
      nome: 1,
      valorMedioIngresso: { $divide: ["$custo", "$capacidade"] }
    }
  },
  { $group: { _id: '$nome', maxValorMedioIngresso: { $max: "$valorMedioIngresso" } } },
  { $sort: { maxValorMedioIngresso: -1 } },
  { $limit: 1 }
]);

// achando as bandas que tem um guitarrista como membro

db.bandaDetalhes.aggregate([
    {
      $project: {
        nome: 1,
        guitarristas: {
          $filter: {
            input: "$membros",
            as: "membro",
            cond: { $eq: ["$$membro.instrumento", "Guitarra"] }
          }
        }
      }
    }
]);

// procurando os cantores que tem algum album lançado depois de 2020
db.cantorDetalhes.aggregate([
    {
      $project: {
        nome: 1,
        albums: {
          $filter: {
            input: "$albums",
            as: "album",
            cond: { $gt: ["$$album.anoLancamento", 2020] } // Filtra os álbuns lançados após 2020
          }
        }
      }
    }
  ]);

// usando Function e where

// achando detalhes dos cantores
db.cantorDetalhes.find({
  $where: function() {
    return this.nome.includes("Cantor") && this.avaliacao > 10000;
  }
});

// achando detalhes das bandas
db.bandaDetalhes.find({
  $where: function() {
    return this.nome.includes("Banda") && this.avaliacao > 8000;
  }
});

// achando detalhes dos festivais:
db.festivalDetalhes.find({
  $where: function() {
    return this.nome.includes("Festival") && this.custo < 50000;
  }
});


// escolhendo os cantores que tem so albuns lançados antes de 2020
db.cantorDetalhes.find({
  $where: function() {
    for (var i = 0; i < this.albums.length; i++) {
      if (this.albums[i].anoLancamento >= 2020) {
        return false; // Se qualquer álbum for lançado em 2020 ou posterior, o documento não será incluído
      }
    }
    return true; // Se nenhum álbum for lançado em 2020 ou posterior, o documento será incluído
  }
});
  
// pegar os festivais com custo acima de 50000
db.festivalDetalhes.find({
    $where: function() {
        return this.custo > 50000;
}
});

//pegar os festivais com valorIngresso acima de 100

db.festivalDetalhes.find({
    $where: function() {
        return this.valorIngresso > 100;
}
});

// pegar as bandas que tem mais de 4 integrantes

db.bandaDetalhes.find({
  $where: function() {
    return this.membros.length > 4;
  }
});

// Pegar as bandas que tem mais de 4050 na avaliacao

db.bandaDetalhes.find({
    $where: function() {
      return this.avaliacao > 4050; // Supondo que a avaliação seja representada por um campo "avaliacao"
    }
  });

// usando function e mapreduce na colecao de festival
// Função de mapeamento
var mapFunction = function() {
    var year = this.dataTermino.substring(0, 4);
    emit(year, 1);
};

// Função de redução
var reduceFunction = function(key, values) {
    return Array.sum(values);
};

// Executar o mapReduce
db.festivalDetalhes.mapReduce(
    mapFunction,
    reduceFunction,
    { out: "festivais_por_ano" }
);

// Resultado
db.festivais_por_ano.find().sort({ value: -1 });


// usando function e mapreduce na colecao banda

db.bandaDetalhes.mapReduce(
    function() {
      emit(this.genero, 1);
    },
    function(key, values) {
      return Array.sum(values);
    },
    {
      out: "bandas_por_genero"
    }
  );

// resultado
db.bandas_por_genero.find().sort({ value: -1 });

// achando os cantores por genero
db.cantorDetalhes.mapReduce(
    function() {
      emit(this.genero, 1);
    },
    function(key, values) {
      return Array.sum(values);
    },
    {
      out: "cantores_por_genero"
    }
);

//resultado
db.cantores_por_genero.find().sort({ value: -1 });


// usando o findOne

// na coleção festival
db.festivalDetalhes.findOne({nome: "Festival de Verão"}, {_id: 0, nome: 1});
db.festivalDetalhes.findOne({"localizacao.cidade": "Rio de Janeiro"}, {_id: 0, nome: 1, localizacao: 1});
db.festivalDetalhes.findOne({capacidade: {$gt: 10000}}, {_id: 0, nome: 1, capacidade: 1});

// na coleção banda

db.bandaDetalhes.findOne({nome: "Banda X"}, {_id: 0, nome: 1});
db.bandaDetalhes.findOne({avaliacao: {$gt: 5000}}, {_id: 0, nome: 1, avaliacao: 1});
db.bandaDetalhes.findOne({"genero": "Pop"}, {_id: 0, nome: 1, genero: 1});

// na coleção cantor

db.cantorDetalhes.findOne({nome: "Cantor W"}, {_id: 0, nome: 1});
db.cantorDetalhes.findOne({"genero": 'Reggae'}), {_id: 0, nome: 1, genero: 1};
db.cantorDetalhes.findOne({avaliacao: 15462}, {_id: 0, nome: 1, avaliacao: 1});

// usando aggregate, match, gte, project, sum, size, group, first, avg e divide para achar o valor total do contrato da banda, quantidade de membros e a media do valor de contrato dessa banda.
db.bandaDetalhes.aggregate([
  // Filtrar cantores com pontuação acima de 5000
  {
    $match: {
      avaliacao: { $gte: 5000 }
    }
  },
  // Projeto para calcular o valor total do contrato de cada banda e contar o número de membros
  {
    $project: {
      nome: 1,
      valorContratoTotal: { $sum: "$valorContrato" },
      quantidadeMembros: { $size: "$membros" }
    }
  },
  // Agrupar os resultados por nome da banda e calcular a média do valor do contrato por membro
  {
    $group: {
      _id: "$nome",
      valorContratoTotal: { $first: "$valorContratoTotal" },
      quantidadeMembros: { $first: "$quantidadeMembros" },
      mediaValorContratoPorMembro: { $avg: { $divide: ["$valorContratoTotal", "$quantidadeMembros"] } }
    }
  },
  // Projeto para renomear os campos e remover o _id
  {
    $project: {
      _id: 0,
      nomeBanda: "$_id",
      valorContratoTotal: 1,
      quantidadeMembros: 1,
      mediaValorContratoPorMembro: 1
    }
  },
  {
    $sort: {
      valorContrato: -1
    }
  }
]);


// usando mapreduce e function para ver quais cantores vale a pena contratar

// Função de mapeamento
var mapFunction = function() {
  // Verificar se o valor do contrato e a avaliação estão presentes e não são nulos
  if (this.valorContrato != null && this.avaliacao != null) {
      // Calcular o valor do contrato por avaliação
      var contratoPorAvaliacao = this.avaliacao / this.valorContrato;
      // Definir a mensagem com base no valor do contrato por avaliação
      var mensagem = contratoPorAvaliacao > 5 ? "Vale a pena contratar" : "Não vale a pena contratar";
      // Emitir o nome do cantor, valor do contrato, avaliação, valor do contrato por avaliação e mensagem
      emit(this.nome, { valorContrato: this.valorContrato, avaliacao: this.avaliacao, contratoPorAvaliacao: contratoPorAvaliacao, mensagem: mensagem });
  }
};

// Função de redução
var reduceFunction = function(key, values) {
  // Como cada cantor tem apenas um objeto, não há necessidade de redução, então apenas retornamos o primeiro valor
  return values[0];
};

// Executar o mapReduce
var mapReduceResult = db.cantorDetalhes.mapReduce(
mapFunction,
reduceFunction,
{ out: "cantor_map_reduce_result" } // Coleção de saída
);

// Exibir o resultado
db.getCollection("cantor_map_reduce_result").find().forEach(printjson);



// usando aggregate e avg para ver o custo medio dos festivais:
var avgCusto = db.festivalDetalhes.aggregate([
  {
    $group: {
      _id: null,
      avgCusto: { $avg: "$custo" }
      }
    }
  ]).toArray();
  
  print("A média do custo dos festivais é: " + avgCusto[0].avgCusto);
  
  
// usando aggregate, sum e size para ver o total dos membros das bandas:
  
var totalMembros = db.bandaDetalhes.aggregate([
  {
      $group: {
          _id: null,
          totalMembros: { $sum: { $size: "$membros" } }
      }
  }
]).toArray();

print("O total de membros de todas as bandas é: " + totalMembros[0].totalMembros);


// usando aggregate, group e sum para ver o total do valor de contratos

var totalContratos = db.cantorDetalhes.aggregate([
  {
      $group: {
          _id: null,
          totalContratos: { $sum: "$valorContrato" }
      }
  }
]).toArray();

print("O valor total de contratos de todos os cantores é: " + totalContratos[0].totalContratos);

// uso do aggregate, match e gt
// Consulta na coleção cantorDetalhes
db.cantorDetalhes.aggregate([
  {
    $match: {
      $expr: {
        $gt: [{ $indexOfCP: ["$nome", "Cantor X"] }, -1]
      }
    }
  }
]);

// Consulta na coleção bandaDetalhes
db.bandaDetalhes.aggregate([
  {
    $match: {
      $expr: {
        $gt: [{ $indexOfCP: ["$nome", "Banda"] }, -1]
      }
    }
  }
]);

// Consulta na coleção festivalDetalhes
db.festivalDetalhes.aggregate([
  {
    $match: {
      $expr: {
        $gt: [{ $indexOfCP: ["$nome", "Verão"] }, -1]
      }
    }
  }
]);

// usando aggregate, sum e project para ver o custo total das apresentações

db.festivalDetalhes.aggregate([
  {
    $project: {
      _id: 1,
      nome: 1,
      custo: { $ifNull: ["$custo", 0] }, // Substituir valor null por 0 para custo
      valorContratoBandas: { $ifNull: [{ $sum: "$apresentacoesBandas.valorContrato" }, 0] }, // Substituir valor null por 0 para valorContratoBandas
      valorContratoCantores: { $ifNull: [{ $sum: "$apresentacoesCantores.valorContrato" }, 0] }, // Substituir valor null por 0 para valorContratoCantores
      valorTotalApresentacoes: {
        $add: [
          { $ifNull: ["$custo", 0] }, // Substituir valor null por 0 para custo novamente
          { $ifNull: [{ $sum: "$apresentacoesBandas.valorContrato" }, 0] }, // Substituir valor null por 0 para valorContratoBandas novamente
          { $ifNull: [{ $sum: "$apresentacoesCantores.valorContrato" }, 0] } // Substituir valor null por 0 para valorContratoCantores novamente
        ]
      }
    }
  }
]);

// usando aggregate, project, cond, group, sum, sort e size para ver quantas bandas e cantores vão se apresentar por festival ordenado desc pelo numero de bandas e cantores.

db.festivalDetalhes.aggregate([
  {
    $project: {
      nome: 1,
      numBandas: {
        $cond: {
          if: { $eq: ["$apresentacoesBandas", null] },
          then: 0,
          else: { $size: "$apresentacoesBandas" }
        }
      },
      numCantores: {
        $cond: {
          if: { $eq: ["$apresentacoesCantores", null] },
          then: 0,
          else: { $size: "$apresentacoesCantores" }
        }
      }
    }
  },
  {
    $group: {
      _id: "$nome",
      numBandas: { $sum: "$numBandas" },
      numCantores: { $sum: "$numCantores" }
    }
  },
  {
    $sort: {
      numBandas: -1, // Ordena pelo número de bandas em ordem decrescente
      numCantores: -1 // Em caso de empate, ordena pelo número de cantores em ordem decrescente
    }
  }
]);

// achando as bandas e cantores com os maiores e menores valores de contrato por evento:
db.festivalDetalhes.aggregate([
  // Desdobrar os arrays de apresentações de bandas e cantores
  { $unwind: "$apresentacoesBandas" },
  { $unwind: { path: "$apresentacoesCantores", preserveNullAndEmptyArrays: true } },
  // Agrupamento por tipo de evento e cálculo do valor máximo e mínimo para bandas e cantores
  {
    $group: {
      _id: "$nome",
      tipoEvento: { $first: "$nome" },
      maxBanda: { $max: "$apresentacoesBandas.valorContrato" },
      minBanda: { $min: "$apresentacoesBandas.valorContrato" },
      maxCantor: { $max: { $ifNull: ["$apresentacoesCantores.valorContrato", 0] } },
      minCantor: { $min: { $ifNull: ["$apresentacoesCantores.valorContrato", 0] } }
    }
  },
  // Projetar os resultados finais
  {
    $project: {
      _id: 0,
      tipoEvento: 1,
      bandaMaisCara: {
        nome: "$maxBanda.nome",
        valorContrato: "$maxBanda"
      },
      bandaMaisBarata: {
        nome: "$minBanda.nome",
        valorContrato: "$minBanda"
      },
      cantorMaisCaro: {
        nome: "$maxCantor.nome",
        valorContrato: "$maxCantor"
      },
      cantorMaisBarato: {
        nome: "$minCantor.nome",
        valorContrato: "$minCantor"
      }
    }
  },
  // Ordenar pelo valor máximo dos contratos, do maior para o menor
  { $sort: { "bandaMaisCara.valorContrato": -1, "cantorMaisCaro.valorContrato": -1 } }
])

// Uso do renamecollections. OBS: usei ao final para não atrapalhar o fluxo das consultas pela troca de nome das coleções de dados.
// Renomear a coleção "festivalDetalhes" para "festivalsDetails"
db.festivalDetalhes.renameCollection("festivalsDetails");

// Renomear a coleção "bandaDetalhes" para "bandsDetails"
db.bandaDetalhes.renameCollection("bandsDetails");

// Renomear a coleção "cantorDetalhes" para "singersDetails"
db.cantorDetalhes.renameCollection("singersDetails");