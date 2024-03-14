// uso do ''use'' para Criando o banco de dados festivais
use festivais

/*Drop nas coleções*/

db.festivalDetalhes.drop();
db.cantorDetalhes.drop();
db.bandaDetalhes.drop();

/*Criando as coleções*/

db.createCollection('festivalDetalhes');
db.createCollection('cantorDetalhes');
db.createCollection('bandaDetalhes');

/*var banda = {
    nome: "Banda S",
    genero: "Forro",
    membros: [
        { nome: "Membro D", instrumento: "Vocalista" },
        { nome: "Membro E", instrumento: "Piano" }
    ],
    albums: [
        { titulo: "Álbum 1", anoLancamento: 2020 },
        { titulo: "Álbum 2", anoLancamento: 2023 }
    ]
};

db.bandaDetalhes.save(banda);*/


  /*Inserção na coleção de festivais*/

/*1 inserção*/

db.festivalDetalhes.insertOne({
    nome: 'Festival de Verão',
    localização: {pais: 'Brazil', estado: 'PE', cidade: 'Recife', bairro: 'Varzea', rua: 'Rua 2', complemento: 'Ao lado da rua 1'},
    dataInicio: "2024-07-01",
    dataTermino: "2024-08-01",
    custo: 50000,
    capacidade: 10000,
    pessoasPresentes: 10503,
    valorIngresso: 100,
    apresentacoes: [
        {tipo: 'Banda', nome: 'Banda X'},
        {tipo: 'Cantor', nome: 'Cantor X'},
        {tipo: 'Banda', nome: 'Banda Y'}
    ]
});

/*Varias inserções*/

db.festivalDetalhes.insertMany([
    {
      nome: 'Festival de Inverno',
      localizacao: {pais: 'Brazil', estado: 'SP', cidade: 'São Paulo', bairro: 'Pinheiros', rua: 'Rua A', complemento: 'Próximo ao metrô'},
      dataInicio: "2024-06-15",
      dataTermino: "2024-06-20",
      custo: 30000,
      capacidade: 8000,
      pessoasPresentes: 80503,
      valorIngresso: 80,
      conclusao: "Evento foi bom!",
      apresentacoes: [
        {tipo: 'Banda', nome: 'Banda A'},
        {tipo: 'Cantor', nome: 'Cantor B'},
        {tipo: 'Banda', nome: 'Banda C'}
      ]
    },
    {
      nome: 'Festival de Outono',
      localizacao: {pais: 'Brazil', estado: 'RJ', cidade: 'Rio de Janeiro', bairro: 'Copacabana', rua: 'Avenida X', complemento: 'Próximo à praia'},
      dataInicio: "2024-09-10",
      dataTermino: "2024-09-15",
      custo: 45000,
      capacidade: 12000,
      pessoasPresentes: 30503,
      valorIngresso: 120,
      conclusao: "Evento foi bom!",
      apresentacoes: [
        {tipo: 'Banda', nome: 'Banda D'},
        {tipo: 'Cantor', nome: 'Cantor E'},
        {tipo: 'Banda', nome: 'Banda F'}
      ]
    },
    {
      nome: 'Festival de Verão',
      localizacao: {pais: 'Brazil', estado: 'BA', cidade: 'Salvador', bairro: 'Itapuã', rua: 'Avenida Z', complemento: 'Próximo ao farol'},
      dataInicio: "2024-01-20",
      dataTermino: "2024-01-25",
      custo: 60000,
      capacidade: 15000,
      pessoasPresentes: 20503,
      valorIngresso: 150,
      conclusao: "Evento foi ruim!",
      apresentacoes: [
        {tipo: 'Banda', nome: 'Banda G'},
        {tipo: 'Cantor', nome: 'Cantor H'},
        {tipo: 'Banda', nome: 'Banda I'}
      ]
    },
    {
      nome: 'Festival de Primavera',
      localizacao: {pais: 'Brazil', estado: 'MG', cidade: 'Belo Horizonte', bairro: 'Savassi', rua: 'Rua B', complemento: 'Próximo ao parque'},
      dataInicio: "2021-04-05",
      dataTermino: "2021-04-10",
      custo: 35000,
      capacidade: 9000,
      pessoasPresentes: 80003,
      valorIngresso: 90,
      conclusao: "Evento foi ruim!",
      apresentacoes: [
        {tipo: 'Banda', nome: 'Banda J'},
        {tipo: 'Cantor', nome: 'Cantor K'},
        {tipo: 'Banda', nome: 'Banda L'}
      ]
    },
    {
      nome: 'Festival de Rock',
      localizacao: {pais: 'Brazil', estado: 'RS', cidade: 'Porto Alegre', bairro: 'Centro', rua: 'Rua C', complemento: 'Próximo à estação de trem'},
      dataInicio: "2021-08-15",
      dataTermino: "2021-08-20",
      custo: 40000,
      capacidade: 10000,
      pessoasPresentes: 70503,
      valorIngresso: 100,
      conclusao: "Evento foi bom!",
      apresentacoes: [
        {tipo: 'Banda', nome: 'Banda M'},
        {tipo: 'Cantor', nome: 'Cantor N'},
        {tipo: 'Banda', nome: 'Banda O'}
      ]
    },
    {
      nome: 'Festival de Jazz',
      localizacao: {pais: 'Brazil', estado: 'PE', cidade: 'Recife', bairro: 'Boa Viagem', rua: 'Avenida Y', complemento: 'Próximo ao shopping'},
      dataInicio: "2024-03-01",
      dataTermino: "2024-03-07",
      custo: 75000,
      capacidade: 7000,
      pessoasPresentes: 50503,
      valorIngresso: 70,
      conclusao: "Evento foi bom!",
      apresentacoes: [
        {tipo: 'Banda', nome: 'Banda P'},
        {tipo: 'Cantor', nome: 'Cantor Q'},
        {tipo: 'Banda', nome: 'Banda R'}
      ]
    },
    {
      nome: 'Festival de Eletrônico',
      localizacao: {pais: 'Brazil', estado: 'DF', cidade: 'Brasília', bairro: 'Asa Sul', rua: 'Quadra X', complemento: 'Próximo à rodoviária'},
      dataInicio: "2023-11-10",
      dataTermino: "2024-11-15",
      custo: 55000,
      capacidade: 13000,
      pessoasPresentes: 30503,
      valorIngresso: 110,
      conclusao: "Evento foi bom!",
      apresentacoes: [
        {tipo: 'DJ', nome: 'DJ S'},
        {tipo: 'DJ', nome: 'DJ T'},
        {tipo: 'DJ', nome: 'DJ U'}
      ]
    },
    {
      nome: 'Festival de Indie',
      localizacao: {pais: 'Brazil', estado: 'PR', cidade: 'Curitiba', bairro: 'Batel', rua: 'Alameda W', complemento: 'Próximo ao teatro'},
      dataInicio: "2023-05-12",
      dataTermino: "2024-05-18",
      custo: 32000,
      capacidade: 8500,
      pessoasPresentes: 80503,
      valorIngresso: 85,
      conclusao: "Evento foi ruim!",
      apresentacoes: [
        {tipo: 'Banda', nome: 'Banda V'},
        {tipo: 'Cantor', nome: 'Cantor X'},
        {tipo: 'Banda', nome: 'Banda Y'}
      ]
    },
    {
      nome: 'Festival de Reggae',
      localizacao: {pais: 'Brazil', estado: 'BA', cidade: 'Salvador', bairro: 'Pituba', rua: 'Avenida K', complemento: 'Próximo à orla'},
      dataInicio: "2023-02-15",
      dataTermino: "2024-02-20",
      custo: 28000,
      capacidade: 7500,
      pessoasPresentes: 80503,
      valorIngresso: 75,
      conclusao: "Evento foi ruim!",
      apresentacoes: [
        {tipo: 'Banda', nome: 'Banda Z'},
        {tipo: 'Cantor', nome: 'Cantor AA'},
        {tipo: 'Banda', nome: 'Banda BB'}
      ]
    },
    {
      nome: 'Festival de Hip-Hop',
      localizacao: {pais: 'Brazil', estado: 'SP', cidade: 'São Paulo', bairro: 'Moema', rua: 'Avenida J', complemento: 'Próximo ao parque'},
      dataInicio: "2015-12-05",
      dataTermino: "2017-12-10",
      custo: 48000,
      capacidade: 11000,
      pessoasPresentes: 90503,
      valorIngresso: 95,
      conclusao: "Evento foi ruim!",
      apresentacoes: [
        {tipo: 'Cantor', nome: 'Cantor AC'},
        {tipo: 'Cantor', nome: 'Cantor AD'},
        {tipo: 'Cantor', nome: 'Cantor AE'}
      ]
    },
    {
        nome: 'Festival de Inverno',
        localizacao: { pais: 'Brazil', estado: 'SP', cidade: 'São Paulo', bairro: 'Pinheiros', rua: 'Rua A', complemento: 'Próximo ao metrô' },
        dataInicio: "2023-06-15",
        dataTermino: "2023-06-20",
        custo: 30000,
        capacidade: 9000,
        pessoasPresentes: 80503,
        conclusao: "Evento foi ruim!",
        valorIngreco: 80,
        apresentacoes: [
          { tipo: 'Banda', nome: 'Banda A1' },
          { tipo: 'Cantor', nome: 'Cantor B1' },
          { tipo: 'Banda', nome: 'Banda C1' }
        ]
      },
      {
        nome: 'Festival de Outono',
        localizacao: { pais: 'Brazil', estado: 'RJ', cidade: 'Rio de Janeiro', bairro: 'Copacabana', rua: 'Avenida X', complemento: 'Próximo à praia' },
        dataInicio: "2015-09-10",
        dataTermino: "2017-09-15",
        custo: 45000,
        capacidade: 12000,
        pessoasPresentes: 30503,
        conclusao: "Evento foi bom!",
        valorIngreco: 120,
        apresentacoes: [
          { tipo: 'Banda', nome: 'Banda D1' },
          { tipo: 'Cantor', nome: 'Cantor E1' },
          { tipo: 'Banda', nome: 'Banda F1' }
        ]
      },
      {
        nome: 'Festival de Verão',
        localizacao: { pais: 'Brazil', estado: 'BA', cidade: 'Salvador', bairro: 'Itapuã', rua: 'Avenida Z', complemento: 'Próximo ao farol' },
        dataInicio: "2016-01-20",
        dataTermino: "2016-01-25",
        custo: 60000,
        capacidade: 15000,
        pessoasPresentes: 10503,
        conclusao: "Evento foi ruim!",
        valorIngreco: 150,
        apresentacoes: [
          { tipo: 'Banda', nome: 'Banda G1' },
          { tipo: 'Cantor', nome: 'Cantor H1' },
          { tipo: 'Banda', nome: 'Banda I1' }
        ]
      },
      {
        nome: 'Festival de Primavera',
        localizacao: { pais: 'Brazil', estado: 'MG', cidade: 'Belo Horizonte', bairro: 'Savassi', rua: 'Rua B', complemento: 'Próximo ao parque' },
        dataInicio: "2016-04-05",
        dataTermino: "2019-04-10",
        custo: 35000,
        capacidade: 90000,
        pessoasPresentes: 80503,
        conclusao: "Evento foi bom!",
        valorIngreco: 90,
        apresentacoes: [
          { tipo: 'Banda', nome: 'Banda J1' },
          { tipo: 'Cantor', nome: 'Cantor K1' },
          { tipo: 'Banda', nome: 'Banda L1' }
        ]
      },
      {
        nome: 'Festival de Rock',
        localizacao: { pais: 'Brazil', estado: 'RS', cidade: 'Porto Alegre', bairro: 'Centro', rua: 'Rua C', complemento: 'Próximo à estação de trem' },
        dataInicio: "2018-08-15",
        dataTermino: "2018-08-20",
        custo: 40000,
        capacidade: 80503,
        pessoasPresentes: 10000,
        conclusao: "Evento foi ruim!",
        valorIngreco: 100,
        apresentacoes: [
          { tipo: 'Banda', nome: 'Banda M1' },
          { tipo: 'Cantor', nome: 'Cantor N1' },
          { tipo: 'Banda', nome: 'Banda O1' }
        ]
      },
      {
        nome: 'Festival de Jazz',
        localizacao: { pais: 'Brazil', estado: 'PE', cidade: 'Recife', bairro: 'Boa Viagem', rua: 'Avenida Y', complemento: 'Próximo ao shopping' },
        dataInicio: "2018-03-01",
        dataTermino: "2018-03-07",
        custo: 25000,
        capacidade: 7000,
        pessoasPresentes: 70503,
        conclusao: "Evento foi ruim!",
        valorIngreco: 70,
        apresentacoes: [
          { tipo: 'Banda', nome: 'Banda P1' },
          { tipo: 'Cantor', nome: 'Cantor Q1' },
          { tipo: 'Banda', nome: 'Banda R1' }
        ]
      },
      {
        nome: 'Festival de Eletrônico',
        localizacao: { pais: 'Brazil', estado: 'DF', cidade: 'Brasília', bairro: 'Asa Sul', rua: 'Quadra X', complemento: 'Próximo à rodoviária' },
        dataInicio: "2017-11-10",
        dataTermino: "2017-11-15",
        custo: 55000,
        capacidade: 13000,
        pessoasPresentes: 80503,
        conclusao: "Evento foi bom!",
        valorIngreco: 110,
        apresentacoes: [
          { tipo: 'DJ', nome: 'DJ S1' },
          { tipo: 'DJ', nome: 'DJ T1' },
          { tipo: 'DJ', nome: 'DJ U1' }
        ]
      },
      {
        nome: 'Festival de Indie',
        localizacao: { pais: 'Brazil', estado: 'PR', cidade: 'Curitiba', bairro: 'Batel', rua: 'Alameda W', complemento: 'Próximo ao teatro' },
        dataInicio: "2020-05-12",
        dataTermino: "2020-05-18",
        custo: 32000,
        capacidade: 8500,
        pessoasPresentes: 82503,
        conclusao: "Evento foi bom!",
        valorIngreco: 85,
        apresentacoes: [
          { tipo: 'Banda', nome: 'Banda V1' },
          { tipo: 'Cantor', nome: 'Cantor X1' },
          { tipo: 'Banda', nome: 'Banda Y1' }
        ]
      },
      {
        nome: 'Festival de Reggae',
        localizacao: { pais: 'Brazil', estado: 'BA', cidade: 'Salvador', bairro: 'Pituba', rua: 'Avenida K', complemento: 'Próximo à orla' },
        dataInicio: "2020-02-15",
        dataTermino: "2021-02-20",
        custo: 28000,
        capacidade: 30503,
        pessoasPresentes: 7500,
        conclusao: "Evento foi bom!",
        valorIngreco: 75,
        apresentacoes: [
          { tipo: 'Banda', nome: 'Banda Z1' },
          { tipo: 'Cantor', nome: 'Cantor AA1' },
          { tipo: 'Banda', nome: 'Banda BB1' }
        ]
      },
      {
        nome: 'Festival de Hip-Hop',
        localizacao: { pais: 'Brazil', estado: 'SP', cidade: 'São Paulo', bairro: 'Moema', rua: 'Avenida J', complemento: 'Próximo ao parque' },
        dataInicio: "2020-12-05",
        dataTermino: "2021-12-10",
        custo: 48000,
        capacidade: 11000,
        pessoasPresentes: 99503,
        conclusao: "Evento foi bom!",
        valorIngreco: 95,
        apresentacoes: [
          { tipo: 'Cantor', nome: 'Cantor AC1' },
          { tipo: 'Cantor', nome: 'Cantor AD1' },
          { tipo: 'Cantor', nome: 'Cantor AE1' }
        ]
      },
      {
        nome: 'Festival de abc',
        localizacao: { pais: 'Brazil', estado: 'SP', cidade: 'São Paulo', bairro: 'Moema', rua: 'Avenida J', complemento: 'Próximo ao parque' },
        dataInicio: "2020-12-05",
        dataTermino: "2021-12-10",
        custo: 48000,
        capacidade: 99503,
        pessoasPresentes: 11000,
        conclusao: "Evento foi bom!",
        valorIngreco: 95,
        apresentacoes: [
          { tipo: 'Cantor', nome: 'Cantor AC1' },
          { tipo: 'Cantor', nome: 'Cantor AD1' },
          { tipo: 'Cantor', nome: 'Cantor AE1' }
        ]
      }
  ]);

// Atualizar um documento na coleção festivalDetalhes com base no nome do festival
// Critério de pesquisa
// valor  26para o campo capacidade
// Atualizando o nome do segundo artista nas apresentações
db.festivalDetalhes.updateOne(
    { nome: "Festival de Verão" }, 
    {
      $set: {
        capacidade: 12000, 
        pessoasPresentes: 80503,
        "apresentacoes.1.nome": "Artist 26a" 
      }
    }
);

//Atualizar a capacidade de todos os festivais com capacidade superior ou igual a 10000 para 15000
                    /*uso de GTE*/
db.festivalDetalhes.updateMany(
    { capacidade: { $gte: 10000 } },
    { $set: { capacidade: 15000, pessoasPresentes: 80503 } }
    )
                      

  

  
  /*Inserção na coleção de bandas*/

/*1 inserção*/

db.bandaDetalhes.insertOne({
    nome: "Banda XX",
    genero: "Rock",
    membros: [
        { nome: "Membro A", instrumento: "Guitarra", valorContrato: 1000},
        { nome: "Membro B", instrumento: "Baixo", valorContrato: 2000 }
    ],
    albums: [
        { titulo: "Álbum 1", anoLancamento: 2019 },
        { titulo: "Álbum 2", anoLancamento: 2021 }
    ]
});


/*Varias inserções*/

db.bandaDetalhes.insertMany(
    [
        {
          nome: "Banda X",
          avaliacao: 8750,
          genero: "Rock",
          membros: [
            { nome: "Membro A", instrumento: "Guitarra", valorContrato: 1500 },
            { nome: "Membro B", instrumento: "Baixo", valorContrato: 1500 },
            { nome: "Membro C", instrumento: "Bateria", valorContrato: 1500 },
            { nome: "Membro A", instrumento: "Guitarra", valorContrato: 1500 },
            { nome: "Membro B", instrumento: "Baixo", valorContrato: 1500 }
          ],
          albums: [
            { titulo: "Álbum 1", anoLancamento: 2019 },
            { titulo: "Álbum 2", anoLancamento: 2021 },
            { titulo: "Álbum 3", anoLancamento: 2023 }
          ]
        },
        {
          nome: "Banda Y",
          avaliacao: 2543,
          genero: "Indie",
          membros: [
            { nome: "Membro D", instrumento: "Teclado", valorContrato: 2500 },
            { nome: "Membro E", instrumento: "Vocal", valorContrato: 2500 },
            { nome: "Membro F", instrumento: "Bateria", valorContrato: 2500 },
            { nome: "Membro B", instrumento: "Baixo", valorContrato: 2500 },
            { nome: "Membro C", instrumento: "Bateria", valorContrato: 2500 },
            { nome: "Membro A", instrumento: "Guitarra", valorContrato: 2500 },
            { nome: "Membro B", instrumento: "Baixo", valorContrato: 2500 }
          ],
          albums: [
            { titulo: "Álbum Indie", anoLancamento: 2020 },
            { titulo: "O Som da Liberdade", anoLancamento: 2022 }
          ]
        },
        {
          nome: "Banda Z",
          avaliacao: 8750,
          genero: "Pop",
          membros: [
            { nome: "Membro G", instrumento: "Violão", valorContrato: 1300 },
            { nome: "Membro H", instrumento: "Baixo", valorContrato: 1300 },
            { nome: "Membro I", instrumento: "Bateria", valorContrato: 1300 },
            { nome: "Membro F", instrumento: "Bateria", valorContrato: 1300 },
            { nome: "Membro B", instrumento: "Baixo", valorContrato: 1300 },
            { nome: "Membro C", instrumento: "Bateria", valorContrato: 1300 },
            { nome: "Membro A", instrumento: "Guitarra", valorContrato: 1300 },
            { nome: "Membro B", instrumento: "Baixo", valorContrato: 1300 }
          ],
          albums: [
            { titulo: "Pop Sensation", anoLancamento: 2018 },
            { titulo: "Harmony Hits", anoLancamento: 2020 }
          ]
        },
        {
          nome: "Banda W",
          avaliacao: 2543,
          genero: "Metal",
          membros: [
            { nome: "Membro J", instrumento: "Guitarra", valorContrato: 5200 },
            { nome: "Membro K", instrumento: "Baixo", valorContrato: 5200 },
            { nome: "Membro L", instrumento: "Bateria", valorContrato: 5200 },
            { nome: "Membro F", instrumento: "Bateria", valorContrato: 5200 },
            { nome: "Membro B", instrumento: "Baixo", valorContrato: 5200 },
            { nome: "Membro C", instrumento: "Bateria", valorContrato: 5200 },
            { nome: "Membro A", instrumento: "Guitarra", valorContrato: 5200 },
            { nome: "Membro B", instrumento: "Baixo", valorContrato: 5200 }
          ],
          albums: [
            { titulo: "Metallica Dreams", anoLancamento: 2017 },
            { titulo: "Thunderstrike", anoLancamento: 2019 }
          ]
        },
        {
          nome: "Banda V",
          avaliacao: 15470,
          genero: "Funk",
          membros: [
            { nome: "Membro M", instrumento: "Teclado", valorContrato: 5012 },
            { nome: "Membro N", instrumento: "Vocal", valorContrato: 5012 },
            { nome: "Membro O", instrumento: "Bateria", valorContrato: 5012 },
            { nome: "Membro C", instrumento: "Bateria", valorContrato: 5012 }
          ],
          albums: [
            { titulo: "Funky Beats", anoLancamento: 2021 },
            { titulo: "Groove Machine", anoLancamento: 2023 }
          ]
        },
        {
          nome: "Banda U",
          avaliacao: 1620,
          genero: "R&B",
          membros: [
            { nome: "Membro P", instrumento: "Piano", valorContrato: 1200 },
            { nome: "Membro Q", instrumento: "Vocal", valorContrato: 1200 },
            { nome: "Membro R", instrumento: "Bateria", valorContrato: 1200 },
            { nome: "Membro A", instrumento: "Guitarra", valorContrato: 1200 }
          ],
          albums: [
            { titulo: "Soulful Rhythms", anoLancamento: 2018 },
            { titulo: "Smooth Vibes", anoLancamento: 2020 }
          ]
        },
        {
          nome: "Banda T",
          avaliacao: 15470,
          genero: "Reggae",
          membros: [
            { nome: "Membro S", instrumento: "Guitarra", valorContrato: 13000 },
            { nome: "Membro T", instrumento: "Baixo", valorContrato: 13000 },
            { nome: "Membro U", instrumento: "Bateria", valorContrato: 13000 }
          ],
          albums: [
            { titulo: "Reggae Roots", anoLancamento: 2019 },
            { titulo: "Island Groove", anoLancamento: 2021 }
          ]
        },
        {
          nome: "Banda S",
          avaliacao: 1620,
          genero: "Hip-Hop",
          membros: [
            { nome: "Membro V", instrumento: "DJ", valorContrato: 2550 },
            { nome: "Membro W", instrumento: "Rapper", valorContrato: 2550 },
            { nome: "Membro X", instrumento: "Bateria Eletrônica", valorContrato: 2550 },
            { nome: "Membro B", instrumento: "Baixo", valorContrato: 2550 }
          ],
          albums: [
            { titulo: "Urban Flow", anoLancamento: 2022 },
            { titulo: "City Beats", anoLancamento: 2024 }
          ]
        },
        {
          nome: "Banda R",
          avaliacao: 3215,
          genero: "Country",
          membros: [
            { nome: "Membro Y", instrumento: "Violino", valorContrato: 1100 },
            { nome: "Membro Z", instrumento: "Banjo", valorContrato: 1100 },
            { nome: "Membro AA", instrumento: "Bateria", valorContrato: 1100 },
            { nome: "Membro R", instrumento: "Bateria", valorContrato: 1100 },
            { nome: "Membro A", instrumento: "Guitarra", valorContrato: 1100 }
          ],
          albums: [
            { titulo: "Country Roads", anoLancamento: 2020 },
            { titulo: "Western Skies", anoLancamento: 2023 }
          ]
        },
        {
          nome: "Banda Q",
          avaliacao: 2056,
          genero: "Jazz",
          membros: [
            { nome: "Membro AB", instrumento: "Saxofone", valorContrato: 1100 },
            { nome: "Membro AC", instrumento: "Contrabaixo", valorContrato: 1100 },
            { nome: "Membro AD", instrumento: "Bateria", valorContrato: 1100 },
            { nome: "Membro R", instrumento: "Bateria", valorContrato: 1100 },
            { nome: "Membro A", instrumento: "Guitarra", valorContrato: 1100 },
            { nome: "Membro R", instrumento: "Bateria", valorContrato: 1100 },
            { nome: "Membro A", instrumento: "Guitarra", valorContrato: 1100 }
          ],
          albums: [
            { titulo: "Smooth Jazz Fusion", anoLancamento: 2019 },
            { titulo: "Jazz Odyssey", anoLancamento: 2021 }
          ]
        },
        {
          nome: "Banda P",
          avaliacao: 2056,
          genero: "Electronic",
          membros: [
            { nome: "Membro AE", instrumento: "Synth", valorContrato: 1500 },
            { nome: "Membro AF", instrumento: "DJ", valorContrato: 1500 },
            { nome: "Membro AG", instrumento: "Bateria Eletrônica", valorContrato: 1500 },
            { nome: "Membro R", instrumento: "Bateria", valorContrato: 1500 },
            { nome: "Membro A", instrumento: "Guitarra", valorContrato: 1500 },
          ],
          albums: [
            { titulo: "Electronic Dreams", anoLancamento: 2022 },
            { titulo: "Digital Pulse", anoLancamento: 2024 }
          ]
        },
        {
          nome: "Banda O",
          avaliacao: 3215,
          genero: "Blues",
          membros: [
            { nome: "Membro AH", instrumento: "Gaita", valorContrato: 2600 },
            { nome: "Membro AI", instrumento: "Guitarra Slide", valorContrato: 2600 },
            { nome: "Membro AJ", instrumento: "Bateria", valorContrato: 2600 }
          ],
          albums: [
            { titulo: "Blues Express", anoLancamento: 2018 },
            { titulo: "Delta Blues Revival", anoLancamento: 2020 }
          ]
        },
        {
          nome: "Banda N",
          genero: "Ska",
          membros: [
            { nome: "Membro AK", instrumento: "Trompete", valorContrato: 2600 },
            { nome: "Membro AL", instrumento: "Saxofone", valorContrato: 2600 },
            { nome: "Membro AM", instrumento: "Bateria", valorContrato: 2600 }
          ],
          albums: [
            { titulo: "Ska Madness", anoLancamento: 2021 },
            { titulo: "Skankin' Rhythms", anoLancamento: 2023 }
          ]
        },
        {
          nome: "Banda M",
          genero: "Punk",
          membros: [
            { nome: "Membro AN", instrumento: "Guitarra", valorContrato: 500 },
            { nome: "Membro AO", instrumento: "Baixo", valorContrato: 500 },
            { nome: "Membro AP", instrumento: "Bateria", valorContrato: 500 },
            { nome: "Membro R", instrumento: "Bateria", valorContrato: 500 },
            { nome: "Membro A", instrumento: "Guitarra", valorContrato: 500 }
          ],
          albums: [
            { titulo: "Punk Riot", anoLancamento: 2020 },
            { titulo: "Anarchy Beats", anoLancamento: 2022 }
          ]
        },
        {
            nome: "Banda A",
            avaliacao: 1543,
            genero: "Rock",
            membros: [
              { nome: "Membro 1", instrumento: "Guitarra", valorContrato: 500 },
              { nome: "Membro 2", instrumento: "Baixo", valorContrato: 500 },
              { nome: "Membro 3", instrumento: "Bateria", valorContrato: 500 },
              { nome: "Membro R", instrumento: "Bateria", valorContrato: 500 },
              { nome: "Membro A", instrumento: "Guitarra", valorContrato: 500 }
            ],
            albums: [
              { titulo: "Rock Revolution", anoLancamento: 2020 },
              { titulo: "Guitar Legends Unleashed", anoLancamento: 2022 },
              { titulo: "Epic Drums", anoLancamento: 2024 }
            ]
          },
          {
            nome: "Banda B",
            avaliacao: 15720,
            genero: "Indie",
            membros: [
              { nome: "Membro 4", instrumento: "Teclado", valorContrato: 5000 },
              { nome: "Membro 5", instrumento: "Vocal", valorContrato: 5000 },
              { nome: "Membro 6", instrumento: "Bateria", valorContrato: 5000 }
            ],
            albums: [
              { titulo: "Indie Vibes", anoLancamento: 2021 },
              { titulo: "Freedom Sounds", anoLancamento: 2023 }
            ]
          },
          {
            nome: "Banda C",
            avaliacao: 15720,
            genero: "Pop",
            membros: [
              { nome: "Membro 7", instrumento: "Violão", valorContrato: 5000 },
              { nome: "Membro 8", instrumento: "Baixo", valorContrato: 5000 },
              { nome: "Membro 9", instrumento: "Bateria", valorContrato: 5000 },
              { nome: "Membro R", instrumento: "Bateria", valorContrato: 5000 },
              { nome: "Membro A", instrumento: "Guitarra", valorContrato: 5000 }
            ],
            albums: [
              { titulo: "Pop Explosion", anoLancamento: 2019 },
              { titulo: "Harmony Hits", anoLancamento: 2021 }
            ]
          },
          {
            nome: "Banda D",
            avaliacao: 45730,
            genero: "Metal",
            membros: [
              { nome: "Membro 10", instrumento: "Guitarra", valorContrato: 6000 },
              { nome: "Membro 11", instrumento: "Baixo", valorContrato: 6000 },
              { nome: "Membro 12", instrumento: "Bateria", valorContrato: 6000 }
            ],
            albums: [
              { titulo: "Metal Mayhem", anoLancamento: 2018 },
              { titulo: "Thunderstrike", anoLancamento: 2020 }
            ]
          },
          {
            nome: "Banda E",
            avaliacao: 15720,
            genero: "Funk",
            membros: [
              { nome: "Membro 13", instrumento: "Teclado", valorContrato: 6000 },
              { nome: "Membro 14", instrumento: "Vocal", valorContrato: 6000 },
              { nome: "Membro 15", instrumento: "Bateria", valorContrato: 6000 }
            ],
            albums: [
              { titulo: "Funky Grooves", anoLancamento: 2022 },
              { titulo: "Groove Machine Reloaded", anoLancamento: 2024 }
            ]
          },
          {
            nome: "Banda F",
            avaliacao: 8750,
            genero: "R&B",
            membros: [
              { nome: "Membro 16", instrumento: "Piano", valorContrato: 6001 },
              { nome: "Membro 17", instrumento: "Vocal", valorContrato: 6001 },
              { nome: "Membro 18", instrumento: "Bateria", valorContrato: 6001 }
            ],
            albums: [
              { titulo: "R&B Harmony", anoLancamento: 2017 },
              { titulo: "Smooth Vibes", anoLancamento: 2019 }
            ]
          },
          {
            nome: "Banda G",
            avaliacao: 45730,
            genero: "Reggae",
            membros: [
              { nome: "Membro 19", instrumento: "Guitarra", valorContrato: 6001 },
              { nome: "Membro 20", instrumento: "Baixo", valorContrato: 6001 },
              { nome: "Membro 21", instrumento: "Bateria", valorContrato: 6001 }
            ],
            albums: [
              { titulo: "Reggae Roots Revival", anoLancamento: 2020 },
              { titulo: "Island Groove", anoLancamento: 2022 }
            ]
          },
          {
            nome: "Banda H",
            avaliacao: 8750,
            genero: "Hip-Hop",
            membros: [
              { nome: "Membro 22", instrumento: "DJ", valorContrato: 6001 },
              { nome: "Membro 23", instrumento: "Rapper", valorContrato: 6001 },
              { nome: "Membro 24", instrumento: "Bateria Eletrônica", valorContrato: 6001 }
            ],
            albums: [
              { titulo: "Hip-Hop Revolution", anoLancamento: 2023 },
              { titulo: "City Beats", anoLancamento: 2025 }
            ]
          },
          {
            nome: "Banda I",
            avaliacao: 8750,
            genero: "Country",
            membros: [
              { nome: "Membro 25", instrumento: "Violino", valorContrato: 3000 },
              { nome: "Membro 26", instrumento: "Banjo", valorContrato: 3000 },
              { nome: "Membro 27", instrumento: "Bateria", valorContrato: 3000 }
            ],
            albums: [
              { titulo: "Country Trails", anoLancamento: 2021 },
              { titulo: "Western Skies", anoLancamento: 2024 }
            ]
          },
          {
            nome: "Banda J",
            avaliacao: 9075,
            genero: "Jazz",
            membros: [
              { nome: "Membro 28", instrumento: "Saxofone", valorContrato: 1560 },
              { nome: "Membro 29", instrumento: "Contrabaixo", valorContrato: 1560 },
              { nome: "Membro 30", instrumento: "Bateria", valorContrato: 1560 }
            ],
            albums: [
              { titulo: "Smooth Jazz Fusion", anoLancamento: 2020 },
              { titulo: "Jazz Odyssey", anoLancamento: 2022 }
            ]
          },
          {
            nome: "Banda K",
            avaliacao: 9075,
            genero: "Electronic",
            membros: [
              { nome: "Membro 31", instrumento: "Synth", valorContrato: 6040 },
              { nome: "Membro 32", instrumento: "DJ", valorContrato: 6040 },
              { nome: "Membro 33", instrumento: "Bateria Eletrônica", valorContrato: 6040 }
            ],
            albums: [
              { titulo: "Electronic Dreamscape", anoLancamento: 2023 },
              { titulo: "Digital Pulse", anoLancamento: 2025 }
            ]
          },
          {
            nome: "Banda L",
            avaliacao: 45730,
            genero: "Blues",
            membros: [
              { nome: "Membro 34", instrumento: "Gaita", valorContrato: 6040 },
              { nome: "Membro 35", instrumento: "Guitarra Slide", valorContrato: 6040 },
              { nome: "Membro 36", instrumento: "Bateria", valorContrato: 6040 }
            ],
            albums: [
              { titulo: "Blues Express", anoLancamento: 2019 },
              { titulo: "Delta Blues Revival", anoLancamento: 2021 }
            ]
          },
          {
            nome: "Banda M",
            avaliacao: 9075,
            genero: "Ska",
            membros: [
              { nome: "Membro 37", instrumento: "Trompete", valorContrato: 9500 },
              { nome: "Membro 38", instrumento: "Saxofone", valorContrato: 9500 },
              { nome: "Membro 39", instrumento: "Bateria", valorContrato: 9500 }
            ],
            albums: [
              { titulo: "Ska Madness", anoLancamento: 2022 },
              { titulo: "Skankin' Rhythms", anoLancamento: 2024 }
            ]
          },
          {
            nome: "Banda N",
            avaliacao: 45730,
            genero: "Punk",
            membros: [
              { nome: "Membro 40", instrumento: "Guitarra", valorContrato: 9500 },
              { nome: "Membro 41", instrumento: "Baixo", valorContrato: 9500 },
              { nome: "Membro 42", instrumento: "Bateria", valorContrato: 9500 }
            ],
            albums: [
              { titulo: "Punk Riot", anoLancamento: 2021 },
              { titulo: "Anarchy Beats", anoLancamento: 2023 }
            ]
          }
      ]
);

// Atualizar um documento na coleção bandaDetalhes com base no nome da banda
// Critério de pesquisa
// valor  26para o campo genero
// Atualizando o instrumento do primeiro membro
db.bandaDetalhes.updateOne(
    { nome: "Banda X" },
    {
      $set: {
        genero: "Gênero 26",
        "membros.0.instrumento": "Nova Guitarra" 
      }
    }
);

// Atualizar o gênero de algumas bandas
db.bandaDetalhes.updateMany(
    { genero: "Rock" },
    { $set: { genero: "Rock Alternativo" } }
  );
  
  /*Inserção na coleção de cantores*/

/*1 inserção*/

db.cantorDetalhes.insertOne({
    nome: "Cantor Y",
    genero: "Pop",
    valorContrato: 1500,
    albums: [
        { titulo: "Álbum 1", anoLancamento: 2020 },
        { titulo: "Álbum 2", anoLancamento: 2022 }
    ]
});

/*Varias inserções*/
db.cantorDetalhes.insertMany(
    [
        {
          nome: "Cantor Y",
          avaliacao: 15462,
          genero: "Pop",
          valorContrato: 1500,
          albums: [
            { titulo: "Álbum 1", anoLancamento: 2020 },
            { titulo: "Álbum 2", anoLancamento: 2022 }
          ]
        },
        {
          nome: "Cantor X",
          avaliacao: 1505,
          genero: "R&B",
          valorContrato: 1500,
          albums: [
            { titulo: "Soulful Jams", anoLancamento: 2019 },
            { titulo: "Smooth Serenade", anoLancamento: 2021 }
          ]
        },
        {
          nome: "Cantor W",
          avaliacao: 3015,
          genero: "Rock",
          valorContrato: 1500,
          albums: [
            { titulo: "Rock Anthems", anoLancamento: 2018 },
            { titulo: "Guitar Legends", anoLancamento: 2020 }
          ]
        },
        {
          nome: "Cantor V",
          avaliacao: 20678,
          genero: "Country",
          valorContrato: 2500,
          albums: [
            { titulo: "Country Charm", anoLancamento: 2022 },
            { titulo: "Backroads Ballads", anoLancamento: 2024 }
          ]
        },
        {
          nome: "Cantor U",
          avaliacao: 3015,
          genero: "Hip-Hop",
          valorContrato: 1500,
          albums: [
            { titulo: "Urban Poetry", anoLancamento: 2021 },
            { titulo: "City Lights", anoLancamento: 2023 }
          ]
        },
        {
          nome: "Cantor T",
          avaliacao: 2646,
          genero: "Jazz",
          valorContrato: 1900,
          albums: [
            { titulo: "Jazz Odyssey", anoLancamento: 2017 },
            { titulo: "Smooth Grooves", anoLancamento: 2019 }
          ]
        },
        {
          nome: "Cantor S",
          avaliacao: 20678,
          genero: "Electronic",
          valorContrato: 2500,
          albums: [
            { titulo: "Digital Dreams", anoLancamento: 2020 },
            { titulo: "Cyber Beats", anoLancamento: 2022 }
          ]
        },
        {
          nome: "Cantor R",
          avaliacao: 2646,
          genero: "Indie",
          valorContrato: 1900,
          albums: [
            { titulo: "Indie Vibes", anoLancamento: 2023 },
            { titulo: "Alternative Echoes", anoLancamento: 2025 }
          ]
        },
        {
          nome: "Cantor Q",
          avaliacao: 5064,
          genero: "Blues",
          valorContrato: 2500,
          albums: [
            { titulo: "Blues Express", anoLancamento: 2018 },
            { titulo: "Delta Soul", anoLancamento: 2020 }
          ]
        },
        {
          nome: "Cantor P",
          genero: "Soul",
          valorContrato: 6000,
          albums: [
            { titulo: "Soulful Rhythms", anoLancamento: 2019 },
            { titulo: "Heartfelt Ballads", anoLancamento: 2021 }
          ]
        },
        {
          nome: "Cantor O",
          avaliacao: 5064,
          genero: "Funk",
          valorContrato: 7800,
          albums: [
            { titulo: "Funky Jams", anoLancamento: 2022 },
            { titulo: "Groove Machine", anoLancamento: 2024 }
          ]
        },
        {
          nome: "Cantor N",
          genero: "Reggae",
          valorContrato: 7800,
          albums: [
            { titulo: "Reggae Roots", anoLancamento: 2017 },
            { titulo: "Island Vibe", anoLancamento: 2019 }
          ]
        },
        {
            nome: "Cantor 1",
            avaliacao: 45730,
            valorContrato: 1500,
            genero: "Pop",
            albums: [
              { titulo: "Álbum  261", anoLancamento: 2025 },
              { titulo: "Álbum  262", anoLancamento: 2027 }
            ]
          },
          {
            nome: "Cantor 2",
            avaliacao: 9780,
            valorContrato: 1500,
            genero: "R&B",
            albums: [
              { titulo: "R&B Sensation", anoLancamento: 2026 },
              { titulo: "Smooth Rhythms", anoLancamento: 2028 }
            ]
          },
          {
            nome: "Cantor 3",
            avaliacao: 96500,
            valorContrato: 1500,
            genero: "Rock",
            albums: [
              { titulo: "Rock Odyssey", anoLancamento: 2025 },
              { titulo: "Guitar Legends Redux", anoLancamento: 2027 }
            ]
          },
          {
            nome: "Cantor 4",
            avaliacao: 1035,
            valorContrato: 500,
            genero: "Country",
            albums: [
              { titulo: "Country Roads Revisited", anoLancamento: 2029 },
              { titulo: "Backroads Serenades", anoLancamento: 2031 }
            ]
          },
          {
            nome: "Cantor 5",
            avaliacao: 1783,
            valorContrato: 8050,
            genero: "Hip-Hop",
            albums: [
              { titulo: "Urban Chronicles", anoLancamento: 2028 },
              { titulo: "City Lights Remix", anoLancamento: 2030 }
            ]
          },
          {
            nome: "Cantor 6",
            avaliacao: 1035,
            valorContrato: 8050,
            genero: "Jazz",
            albums: [
              { titulo: "Jazz Fusion", anoLancamento: 2024 },
              { titulo: "Smooth Jazz Revival", anoLancamento: 2026 }
            ]
          },
          {
            nome: "Cantor 7",
            avaliacao: 2086,
            valorContrato: 5000,
            genero: "Electronic",
            albums: [
              { titulo: "Digital Echoes", anoLancamento: 2027 },
              { titulo: "Cyber Dreams", anoLancamento: 2029 }
            ]
          },
          {
            nome: "Cantor 8",
            avaliacao: 3025,
            valorContrato: 500,
            genero: "Indie",
            albums: [
              { titulo: "Indie Echo", anoLancamento: 2030 },
              { titulo: "Alternative Dreams", anoLancamento: 2032 }
            ]
          },
          {
            nome: "Cantor 9",
            avaliacao: 2086,
            valorContrato: 1500,
            genero: "Blues",
            albums: [
              { titulo: "Blues Revival", anoLancamento: 2024 },
              { titulo: "Delta Soul Reimagined", anoLancamento: 2026 }
            ]
          },
          {
            nome: "Cantor 10",
            avaliacao: 25000,
            valorContrato: 5000,
            genero: "Soul",
            albums: [
              { titulo: "Soulful Grooves", anoLancamento: 2025 },
              { titulo: "Heartfelt Melodies", anoLancamento: 2027 }
            ]
          },
          {
            nome: "Cantor 11",
            avaliacao: 1500,
            valorContrato: 1560,
            genero: "Funk",
            albums: [
              { titulo: "Funky Beats 2.0", anoLancamento: 2030 },
              { titulo: "Groove Revolution", anoLancamento: 2032 }
            ]
          },
          {
            nome: "Cantor 12",
            avaliacao: 25000,
            valorContrato: 1560,
            genero: "Reggae",
            albums: [
              { titulo: "Reggae Vibes", anoLancamento: 2024 },
              { titulo: "Island Groove Remix", anoLancamento: 2026 }
            ]
          }
      ]
);

// Atualizar um documento na coleção festivalDetalhes com base no nome do festival
// Critério de pesquisa
// valor  26para o campo genero
// Atualizando o ano de lançamento do primeiro álbum
db.cantorDetalhes.updateOne(
    { nome: "Cantor Y" },
    {
      $set: {
        genero: "Gênero 26", 
        "albums.0.anoLancamento": 2021 
      }
    }
);

//Atualizar a capacidade de todos os cantores com genero pop para pop/R&B
db.cantorDetalhes.updateMany(
    { genero: "Pop" },
    { $set: { genero: "Pop/R&B" } }
);

// Trocando o nome "avaliacao" para "avaliação" em todos os documentos da coleção
db.bandaDetalhes.updateMany(
    {},
    { $rename: { "avaliacao": "avaliacao" } }
);

db.cantorDetalhes.updateMany(
    {},
    { $rename: { "avaliacao": "avaliacao" } }
);

// Usando o $addToSet para adicionar  membros a colecao de bandas.

db.bandaDetalhes.updateOne(
   { nome: "Banda X" },
   { $addToSet: { membros: { nome: "Membro 13", instrumento: "Baixo" } } }
)

db.bandaDetalhes.updateOne(
   { nome: "Banda G" },
   { $addToSet: { membros: { nome: "Membro 136", instrumento: "Teclado" } } }
)

db.bandaDetalhes.updateOne(
   { nome: "Banda L" },
   { $addToSet: { membros: { nome: "Membro 65", instrumento: "Violino" } } }
)

db.bandaDetalhes.updateOne(
   { nome: "Banda J" },
   { $addToSet: { membros: { nome: "Membro 65", instrumento: "Contrabaixo" } } }
)

db.cantorDetalhes.updateOne(
   { nome: "Cantor X" },
   { $addToSet: { membros: { nome: "Cantor 264", genero: "Pop" } } }
)

db.cantorDetalhes.updateOne(
   { nome: "Cantor W" },
   { $addToSet: { membros: { nome: "Cantor 650", genero: "R&B" } } }
)

db.cantorDetalhes.updateOne(
   { nome: "Cantor T" },
   { $addToSet: { membros: { nome: "Cantor 2646", genero: "Rock" } } }
)

db.cantorDetalhes.updateOne(
   { nome: "Cantor S" },
   { $addToSet: { membros: { nome: "Cantor 264", genero: "Country" } } }
)

db.cantorDetalhes.updateOne(
   { nome: "Cantor R" },
   { $addToSet: { membros: { nome: "Cantor 26", genero: "Hip-Hop" } } }
)

db.bandaDetalhes.updateOne(
   { nome: "Banda B" },
   { $addToSet: { membros: { nome: "Membro 2646", instrumento: "Saxofone" } } }
)



/*Usando Find*/

//Encontrar festivais que estão em PE
db.festivalDetalhes.find({'localizacao.estado': 'PE'}).pretty();

// Encontrar festivais com nome especifico
db.festivalDetalhes.find({ nome: 'Festival de Inverno' }).pretty();

// encontrar bandas com nome em especifico
db.bandaDetalhes.find({ nome: 'Banda X' }).pretty();

// encontrar cantores com nome em especifico
db.cantorDetalhes.find({ nome: 'Cantor Y' }).pretty();

// encontrar os festivais com capacidade maior que:
db.festivalDetalhes.find({ capacidade: { $gt: 7000 } }).pretty();

// encontrar os festivais com capacidade menor que:
db.festivalDetalhes.find({ capacidade: { $lt: 70000 } }).pretty();

// encontrar as bandas com capacidade maior que:
db.bandaDetalhes.find({ avaliacao: { $gte: 8000 } }).pretty();

// encontrar as bandas com capacidade menor que:
db.bandaDetalhes.find({ avaliacao: { $lte: 8000 } }).pretty();

// encontrar os cantores com avaliacao maior que:
db.cantorDetalhes.find({ avaliacao: { $gt: 10000 } }).pretty();

// encontrar os cantores com avaliacao menor que:
db.cantorDetalhes.find({ avaliacao: { $lt: 10000 } }).pretty();


//Encontrar festivais que estão no Brazil, porém so buscando o nome, a localização e a data de inicio e termino
db.festivalDetalhes.find({'localizacao.pais': 'Brazil'}, {'nome': 1, 'localizacao': 1, '_id': 0, 'dataInicio': 1, 'dataTermino': 1}).pretty();

// usando  o all

db.bandaDetalhes.find({ 'membros.nome': { $all: ["Membro A", "Membro F"] } }, {_id: 0, nome: 1, membros: 1});

db.bandaDetalhes.find({ 'membros.instrumento': { $all: ['Teclado', 'Guitarra'] } }, {_id: 0, nome: 1, membros: 1});

db.festivalDetalhes.find({ "apresentacoes.nome": { $all: ["Banda A", "Banda C"] } });

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
  
// criando um index text

db.festivalDetalhes.createIndex({ conclusao: "text" });

// Criando o índice de texto para o campo 'titulo' dentro do array 'albums'
db.cantorDetalhes.createIndex({ "albums.titulo": "text" });

// Criando o índice de texto para o campo 'titulo' dentro do array 'albums'
db.bandaDetalhes.createIndex({ "albums.titulo": "text" });

// Criar o índice de texto para o campo 'dataInicio'
db.festivalDetalhes.createIndex({ "dataInicio": "text" });


// pesquisando os festivais com palavras chaves:

db.festivalDetalhes.find({ $text: { $search: "bom" } });
db.festivalDetalhes.find({ $text: { $search: "ruim" } });

// pesquisando cantores e bandas que tem o nome ''album'' nos titulos dos albuns.
db.cantorDetalhes.find({ $text: { $search: "Album" } });
db.bandaDetalhes.find({ $text: { $search: "Album" } });

// pesquisando festivais que o ano da datainicio é ''2024''
db.festivalDetalhes.find({ $text: { $search: "2024" } });



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

//Exemplo usando $filter na coleção festivalDetalhes:
db.festivalDetalhes.aggregate([
  {
    $project: {
      nome: 1,
      apresentacoes: {
        $filter: {
          input: "$apresentacoes",
          as: "apresentacao",
          cond: { $eq: ["$$apresentacao.tipo", "Banda"] } // Filtrar apresentações que são de bandas
        }
      }
    }
  }
]);

// achando os festivais que a apresentação é uma banda
db.festivalDetalhes.aggregate([
{
    $project: {
    nome: 1,
    apresentacoesDeBanda: {
        $filter: {
        input: "$apresentacoes",
        as: "apresentacao",
        cond: { $eq: ["$$apresentacao.tipo", "Banda"] }
        }
    }
    }
}
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



db.bandaDetalhes.aggregate([
  {
    $project: {
      _id: 0,
      nome: 1,
      numeroMembros: { $size: "$membros" },
      valorTotalContrato: { $sum: "$membros.valorContrato" },
      mediaValorContrato: {
        $avg: "$membros.valorContrato"
      }
    }
  }
])


// usando aggregate, match, gte, project, sum, size, group, first, avg e divide para achar o valor total do contrato da banda, quantidade de membros e a media do valor de contrato dessa banda.

db.bandaDetalhes.aggregate([
  // Filtrar bandas com pontuação acima de 5000
  {
    $match: {
      avaliacao: { $gte: 5000 }
    }
  },
  // Projeto para calcular o valor total do contrato de cada banda e contar o número de membros
  {
    $project: {
      nome: 1,
      valorContratoTotal: { $sum: "$membros.valorContrato" },
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