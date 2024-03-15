//Esse é o código completo!.
// uso do ''use'' para criar o banco de dados festivais
use ('festivais');

/*Drop nas coleções*/

db.festivalDetalhes.drop();
db.cantorDetalhes.drop();
db.bandaDetalhes.drop();

/*Criando as coleções*/

db.createCollection('festivalDetalhes');
db.createCollection('cantorDetalhes');
db.createCollection('bandaDetalhes');
  
  /*Inserção na coleção de bandas*/

/*1 inserção*/

db.bandaDetalhes.insertOne({
    nome: "Banda XX",
    genero: "Rock",
    valorContrato: 1000,
    membros: [
        { nome: "Membro A", instrumento: "Guitarra"},
        { nome: "Membro B", instrumento: "Baixo"}
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
          pontuacao: 8750,
          genero: "Rock",
          valorContrato: 6000,
          membros: [
            { nome: "Membro A", instrumento: "Guitarra"},
            { nome: "Membro B", instrumento: "Baixo"},
            { nome: "Membro C", instrumento: "Bateria"},
            { nome: "Membro A", instrumento: "Guitarra"},
            { nome: "Membro B", instrumento: "Baixo"}
          ],
          albums: [
            { titulo: "Álbum 1", anoLancamento: 2019 },
            { titulo: "Álbum 2", anoLancamento: 2021 },
            { titulo: "Álbum 3", anoLancamento: 2023 }
          ]
        },
        {
          nome: "Banda Y",
          pontuacao: 2543,
          genero: "Indie",
          valorContrato: 25000,
          membros: [
            { nome: "Membro D", instrumento: "Teclado"},
            { nome: "Membro E", instrumento: "Vocal"},
            { nome: "Membro F", instrumento: "Bateria"},
            { nome: "Membro B", instrumento: "Baixo"},
            { nome: "Membro C", instrumento: "Bateria"},
            { nome: "Membro A", instrumento: "Guitarra"},
            { nome: "Membro B", instrumento: "Baixo"}
          ],
          albums: [
            { titulo: "Álbum Indie", anoLancamento: 2020 },
            { titulo: "O Som da Liberdade", anoLancamento: 2022 }
          ]
        },
        {
          nome: "Banda Z",
          pontuacao: 8750,
          genero: "Pop",
          valorContrato: 53000,
          membros: [
            { nome: "Membro G", instrumento: "Violão"},
            { nome: "Membro H", instrumento: "Baixo"},
            { nome: "Membro I", instrumento: "Bateria"},
            { nome: "Membro F", instrumento: "Bateria"},
            { nome: "Membro B", instrumento: "Baixo"},
            { nome: "Membro C", instrumento: "Bateria"},
            { nome: "Membro A", instrumento: "Guitarra"},
            { nome: "Membro B", instrumento: "Baixo"}
          ],
          albums: [
            { titulo: "Pop Sensation", anoLancamento: 2018 },
            { titulo: "Harmony Hits", anoLancamento: 2020 }
          ]
        },
        {
          nome: "Banda W",
          pontuacao: 2543,
          genero: "Metal",
          valorContrato: 5200,
          membros: [
            { nome: "Membro J", instrumento: "Guitarra"},
            { nome: "Membro K", instrumento: "Baixo"},
            { nome: "Membro L", instrumento: "Bateria"},
            { nome: "Membro F", instrumento: "Bateria"},
            { nome: "Membro B", instrumento: "Baixo"},
            { nome: "Membro C", instrumento: "Bateria"},
            { nome: "Membro A", instrumento: "Guitarra"},
            { nome: "Membro B", instrumento: "Baixo"}
          ],
          albums: [
            { titulo: "Metallica Dreams", anoLancamento: 2017 },
            { titulo: "Thunderstrike", anoLancamento: 2019 }
          ]
        },
        {
          nome: "Banda V",
          pontuacao: 15470,
          genero: "Funk",
          valorContrato: 5012,
          membros: [
            { nome: "Membro M", instrumento: "Teclado"},
            { nome: "Membro N", instrumento: "Vocal"},
            { nome: "Membro O", instrumento: "Bateria"},
            { nome: "Membro C", instrumento: "Bateria"}
          ],
          albums: [
            { titulo: "Funky Beats", anoLancamento: 2021 },
            { titulo: "Groove Machine", anoLancamento: 2023 }
          ]
        },
        {
          nome: "Banda U",
          pontuacao: 1620,
          genero: "R&B",
          valorContrato: 12000,
          membros: [
            { nome: "Membro P", instrumento: "Piano"},
            { nome: "Membro Q", instrumento: "Vocal"},
            { nome: "Membro R", instrumento: "Bateria"},
            { nome: "Membro A", instrumento: "Guitarra"}
          ],
          albums: [
            { titulo: "Soulful Rhythms", anoLancamento: 2018 },
            { titulo: "Smooth Vibes", anoLancamento: 2020 }
          ]
        },
        {
          nome: "Banda T",
          pontuacao: 15470,
          genero: "Reggae",
          valorContrato: 13000,
          membros: [
            { nome: "Membro S", instrumento: "Guitarra"},
            { nome: "Membro T", instrumento: "Baixo"},
            { nome: "Membro U", instrumento: "Bateria"}
          ],
          albums: [
            { titulo: "Reggae Roots", anoLancamento: 2019 },
            { titulo: "Island Groove", anoLancamento: 2021 }
          ]
        },
        {
          nome: "Banda S",
          pontuacao: 1620,
          genero: "Hip-Hop",
          valorContrato: 2550,
          membros: [
            { nome: "Membro V", instrumento: "DJ"},
            { nome: "Membro W", instrumento: "Rapper"},
            { nome: "Membro X", instrumento: "Bateria Eletrônica"},
            { nome: "Membro B", instrumento: "Baixo"}
          ],
          albums: [
            { titulo: "Urban Flow", anoLancamento: 2022 },
            { titulo: "City Beats", anoLancamento: 2024 }
          ]
        },
        {
          nome: "Banda R",
          pontuacao: 3215,
          genero: "Country",
          valorContrato: 1100,
          membros: [
            { nome: "Membro Y", instrumento: "Violino"},
            { nome: "Membro Z", instrumento: "Banjo"},
            { nome: "Membro AA", instrumento: "Bateria"},
            { nome: "Membro R", instrumento: "Bateria"},
            { nome: "Membro A", instrumento: "Guitarra"}
          ],
          albums: [
            { titulo: "Country Roads", anoLancamento: 2020 },
            { titulo: "Western Skies", anoLancamento: 2023 }
          ]
        },
        {
          nome: "Banda Q",
          pontuacao: 2056,
          genero: "Jazz",
          valorContrato: 11000,
          membros: [
            { nome: "Membro AB", instrumento: "Saxofone"},
            { nome: "Membro AC", instrumento: "Contrabaixo"},
            { nome: "Membro AD", instrumento: "Bateria"},
            { nome: "Membro R", instrumento: "Bateria"},
            { nome: "Membro A", instrumento: "Guitarra"},
            { nome: "Membro R", instrumento: "Bateria"},
            { nome: "Membro A", instrumento: "Guitarra"}
          ],
          albums: [
            { titulo: "Smooth Jazz Fusion", anoLancamento: 2019 },
            { titulo: "Jazz Odyssey", anoLancamento: 2021 }
          ]
        },
        {
          nome: "Banda P",
          pontuacao: 2056,
          genero: "Electronic",
          valorContrato: 30100,
          membros: [
            { nome: "Membro AE", instrumento: "Synth"},
            { nome: "Membro AF", instrumento: "DJ"},
            { nome: "Membro AG", instrumento: "Bateria Eletrônica"},
            { nome: "Membro R", instrumento: "Bateria"},
            { nome: "Membro A", instrumento: "Guitarra"}
          ],
          albums: [
            { titulo: "Electronic Dreams", anoLancamento: 2022 },
            { titulo: "Digital Pulse", anoLancamento: 2024 }
          ]
        },
        {
          nome: "Banda O",
          pontuacao: 3215,
          genero: "Blues",
          valorContrato: 2600,
          membros: [
            { nome: "Membro AH", instrumento: "Gaita"},
            { nome: "Membro AI", instrumento: "Guitarra Slide"},
            { nome: "Membro AJ", instrumento: "Bateria"}
          ],
          albums: [
            { titulo: "Blues Express", anoLancamento: 2018 },
            { titulo: "Delta Blues Revival", anoLancamento: 2020 }
          ]
        },
        {
          nome: "Banda N",
          genero: "Ska",
          valorContrato: 26000,
          membros: [
            { nome: "Membro AK", instrumento: "Trompete"},
            { nome: "Membro AL", instrumento: "Saxofone"},
            { nome: "Membro AM", instrumento: "Bateria"}
          ],
          albums: [
            { titulo: "Ska Madness", anoLancamento: 2021 },
            { titulo: "Skankin' Rhythms", anoLancamento: 2023 }
          ]
        },
        {
          nome: "Banda M",
          genero: "Punk",
          valorContrato: 5000,
          membros: [
            { nome: "Membro AN", instrumento: "Guitarra"},
            { nome: "Membro AO", instrumento: "Baixo"},
            { nome: "Membro AP", instrumento: "Bateria"},
            { nome: "Membro R", instrumento: "Bateria"},
            { nome: "Membro A", instrumento: "Guitarra"}
          ],
          albums: [
            { titulo: "Punk Riot", anoLancamento: 2020 },
            { titulo: "Anarchy Beats", anoLancamento: 2022 }
          ]
        },
        {
            nome: "Banda A",
            pontuacao: 1543,
            genero: "Rock",
            valorContrato: 5500,
            membros: [
              { nome: "Membro 1", instrumento: "Guitarra"},
              { nome: "Membro 2", instrumento: "Baixo"},
              { nome: "Membro 3", instrumento: "Bateria"},
              { nome: "Membro R", instrumento: "Bateria"},
              { nome: "Membro A", instrumento: "Guitarra"}
            ],
            albums: [
              { titulo: "Rock Revolution", anoLancamento: 2020 },
              { titulo: "Guitar Legends Unleashed", anoLancamento: 2022 },
              { titulo: "Epic Drums", anoLancamento: 2024 }
            ]
          },
          {
            nome: "Banda B",
            pontuacao: 15720,
            genero: "Indie",
            valorContrato: 15500,
            membros: [
              { nome: "Membro 4", instrumento: "Teclado"},
              { nome: "Membro 5", instrumento: "Vocal"},
              { nome: "Membro 6", instrumento: "Bateria"}
            ],
            albums: [
              { titulo: "Indie Vibes", anoLancamento: 2021 },
              { titulo: "Freedom Sounds", anoLancamento: 2023 }
            ]
          },
          {
            nome: "Banda C",
            pontuacao: 15720,
            genero: "Pop",
            valorContrato: 9500,
            membros: [
              { nome: "Membro 7", instrumento: "Violão"},
              { nome: "Membro 8", instrumento: "Baixo"},
              { nome: "Membro 9", instrumento: "Bateria"},
              { nome: "Membro R", instrumento: "Bateria"},
              { nome: "Membro A", instrumento: "Guitarra"}
            ],
            albums: [
              { titulo: "Pop Explosion", anoLancamento: 2019 },
              { titulo: "Harmony Hits", anoLancamento: 2021 }
            ]
          },
          {
            nome: "Banda D",
            pontuacao: 45730,
            genero: "Metal",
            valorContrato: 6000,
            membros: [
              { nome: "Membro 10", instrumento: "Guitarra"},
              { nome: "Membro 11", instrumento: "Baixo"},
              { nome: "Membro 12", instrumento: "Bateria"}
            ],
            albums: [
              { titulo: "Metal Mayhem", anoLancamento: 2018 },
              { titulo: "Thunderstrike", anoLancamento: 2020 }
            ]
          },
          {
            nome: "Banda E",
            pontuacao: 15720,
            genero: "Funk",
            valorContrato: 66000,
            membros: [
              { nome: "Membro 13", instrumento: "Teclado"},
              { nome: "Membro 14", instrumento: "Vocal"},
              { nome: "Membro 15", instrumento: "Bateria"}
            ],
            albums: [
              { titulo: "Funky Grooves", anoLancamento: 2022 },
              { titulo: "Groove Machine Reloaded", anoLancamento: 2024 }
            ]
          },
          {
            nome: "Banda F",
            pontuacao: 8750,
            genero: "R&B",
            valorContrato: 6001,
            membros: [
              { nome: "Membro 16", instrumento: "Piano"},
              { nome: "Membro 17", instrumento: "Vocal"},
              { nome: "Membro 18", instrumento: "Bateria"}
            ],
            albums: [
              { titulo: "R&B Harmony", anoLancamento: 2017 },
              { titulo: "Smooth Vibes", anoLancamento: 2019 }
            ]
          },
          {
            nome: "Banda G",
            pontuacao: 45730,
            genero: "Reggae",
            valorContrato: 5101,
            membros: [
              { nome: "Membro 19", instrumento: "Guitarra"},
              { nome: "Membro 20", instrumento: "Baixo"},
              { nome: "Membro 21", instrumento: "Bateria"}
            ],
            albums: [
              { titulo: "Reggae Roots Revival", anoLancamento: 2020 },
              { titulo: "Island Groove", anoLancamento: 2022 }
            ]
          },
          {
            nome: "Banda H",
            pontuacao: 8750,
            genero: "Hip-Hop",
            valorContrato: 6001,
            membros: [
              { nome: "Membro 22", instrumento: "DJ"},
              { nome: "Membro 23", instrumento: "Rapper"},
              { nome: "Membro 24", instrumento: "Bateria Eletrônica"}
            ],
            albums: [
              { titulo: "Hip-Hop Revolution", anoLancamento: 2023 },
              { titulo: "City Beats", anoLancamento: 2025 }
            ]
          },
          {
            nome: "Banda I",
            pontuacao: 8750,
            genero: "Country",
            valorContrato: 3000,
            membros: [
              { nome: "Membro 25", instrumento: "Violino"},
              { nome: "Membro 26", instrumento: "Banjo"},
              { nome: "Membro 27", instrumento: "Bateria"}
            ],
            albums: [
              { titulo: "Country Trails", anoLancamento: 2021 },
              { titulo: "Western Skies", anoLancamento: 2024 }
            ]
          },
          {
            nome: "Banda J",
            pontuacao: 9075,
            genero: "Jazz",
            valorContrato: 1560,
            membros: [
              { nome: "Membro 28", instrumento: "Saxofone"},
              { nome: "Membro 29", instrumento: "Contrabaixo"},
              { nome: "Membro 30", instrumento: "Bateria"}
            ],
            albums: [
              { titulo: "Smooth Jazz Fusion", anoLancamento: 2020 },
              { titulo: "Jazz Odyssey", anoLancamento: 2022 }
            ]
          },
          {
            nome: "Banda K",
            pontuacao: 9075,
            genero: "Electronic",
            valorContrato: 6040,
            membros: [
              { nome: "Membro 31", instrumento: "Synth"},
              { nome: "Membro 32", instrumento: "DJ"},
              { nome: "Membro 33", instrumento: "Bateria Eletrônica"}
            ],
            albums: [
              { titulo: "Electronic Dreamscape", anoLancamento: 2023 },
              { titulo: "Digital Pulse", anoLancamento: 2025 }
            ]
          },
          {
            nome: "Banda L",
            pontuacao: 45730,
            genero: "Blues",
            valorContrato: 6040,
            membros: [
              { nome: "Membro 34", instrumento: "Gaita"},
              { nome: "Membro 35", instrumento: "Guitarra Slide"},
              { nome: "Membro 36", instrumento: "Bateria"}
            ],
            albums: [
              { titulo: "Blues Express", anoLancamento: 2019 },
              { titulo: "Delta Blues Revival", anoLancamento: 2021 }
            ]
          },
          {
            nome: "Banda M",
            pontuacao: 9075,
            genero: "Ska",
            valorContrato: 9500,
            membros: [
              { nome: "Membro 37", instrumento: "Trompete"},
              { nome: "Membro 38", instrumento: "Saxofone"},
              { nome: "Membro 39", instrumento: "Bateria"}
            ],
            albums: [
              { titulo: "Ska Madness", anoLancamento: 2022 },
              { titulo: "Skankin' Rhythms", anoLancamento: 2024 }
            ]
          },
          {
            nome: "Banda N",
            pontuacao: 45730,
            genero: "Punk",
            valorContrato: 9500,
            membros: [
              { nome: "Membro 40", instrumento: "Guitarra"},
              { nome: "Membro 41", instrumento: "Baixo"},
              { nome: "Membro 42", instrumento: "Bateria"}
            ],
            albums: [
              { titulo: "Punk Riot", anoLancamento: 2021 },
              { titulo: "Anarchy Beats", anoLancamento: 2023 }
            ]
          }
      ]
);

// Atualizar um documento na coleção bandaDetalhes com base no nome da banda
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
    { genero: "Gênero 26" },
    { $set: { genero: "Rock" } }
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
          pontuacao: 15462,
          genero: "Pop",
          valorContrato: 1500,
          albums: [
            { titulo: "Álbum 1", anoLancamento: 2020 },
            { titulo: "Álbum 2", anoLancamento: 2022 }
          ]
        },
        {
          nome: "Cantor X",
          pontuacao: 1505,
          genero: "R&B",
          valorContrato: 1500,
          albums: [
            { titulo: "Soulful Jams", anoLancamento: 2019 },
            { titulo: "Smooth Serenade", anoLancamento: 2021 }
          ]
        },
        {
          nome: "Cantor W",
          pontuacao: 3015,
          genero: "Rock",
          valorContrato: 1500,
          albums: [
            { titulo: "Rock Anthems", anoLancamento: 2018 },
            { titulo: "Guitar Legends", anoLancamento: 2020 }
          ]
        },
        {
          nome: "Cantor V",
          pontuacao: 20678,
          genero: "Country",
          valorContrato: 2500,
          albums: [
            { titulo: "Country Charm", anoLancamento: 2022 },
            { titulo: "Backroads Ballads", anoLancamento: 2024 }
          ]
        },
        {
          nome: "Cantor U",
          pontuacao: 3015,
          genero: "Hip-Hop",
          valorContrato: 1500,
          albums: [
            { titulo: "Urban Poetry", anoLancamento: 2021 },
            { titulo: "City Lights", anoLancamento: 2023 }
          ]
        },
        {
          nome: "Cantor T",
          pontuacao: 2646,
          genero: "Jazz",
          valorContrato: 1900,
          albums: [
            { titulo: "Jazz Odyssey", anoLancamento: 2017 },
            { titulo: "Smooth Grooves", anoLancamento: 2019 }
          ]
        },
        {
          nome: "Cantor S",
          pontuacao: 20678,
          genero: "Electronic",
          valorContrato: 2500,
          albums: [
            { titulo: "Digital Dreams", anoLancamento: 2020 },
            { titulo: "Cyber Beats", anoLancamento: 2022 }
          ]
        },
        {
          nome: "Cantor R",
          pontuacao: 2646,
          genero: "Indie",
          valorContrato: 1900,
          albums: [
            { titulo: "Indie Vibes", anoLancamento: 2023 },
            { titulo: "Alternative Echoes", anoLancamento: 2025 }
          ]
        },
        {
          nome: "Cantor Q",
          pontuacao: 5064,
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
          pontuacao: 5064,
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
            pontuacao: 45730,
            valorContrato: 1500,
            genero: "Pop",
            albums: [
              { titulo: "Álbum  261", anoLancamento: 2025 },
              { titulo: "Álbum  262", anoLancamento: 2027 }
            ]
          },
          {
            nome: "Cantor 2",
            pontuacao: 9780,
            valorContrato: 1500,
            genero: "R&B",
            albums: [
              { titulo: "R&B Sensation", anoLancamento: 2026 },
              { titulo: "Smooth Rhythms", anoLancamento: 2028 }
            ]
          },
          {
            nome: "Cantor 3",
            pontuacao: 96500,
            valorContrato: 1500,
            genero: "Rock",
            albums: [
              { titulo: "Rock Odyssey", anoLancamento: 2025 },
              { titulo: "Guitar Legends Redux", anoLancamento: 2027 }
            ]
          },
          {
            nome: "Cantor 4",
            pontuacao: 1035,
            valorContrato: 500,
            genero: "Country",
            albums: [
              { titulo: "Country Roads Revisited", anoLancamento: 2029 },
              { titulo: "Backroads Serenades", anoLancamento: 2031 }
            ]
          },
          {
            nome: "Cantor 5",
            pontuacao: 1783,
            valorContrato: 8050,
            genero: "Hip-Hop",
            albums: [
              { titulo: "Urban Chronicles", anoLancamento: 2028 },
              { titulo: "City Lights Remix", anoLancamento: 2030 }
            ]
          },
          {
            nome: "Cantor 6",
            pontuacao: 1035,
            valorContrato: 8050,
            genero: "Jazz",
            albums: [
              { titulo: "Jazz Fusion", anoLancamento: 2024 },
              { titulo: "Smooth Jazz Revival", anoLancamento: 2026 }
            ]
          },
          {
            nome: "Cantor 7",
            pontuacao: 2086,
            valorContrato: 5000,
            genero: "Electronic",
            albums: [
              { titulo: "Digital Echoes", anoLancamento: 2027 },
              { titulo: "Cyber Dreams", anoLancamento: 2029 }
            ]
          },
          {
            nome: "Cantor 8",
            pontuacao: 3025,
            valorContrato: 500,
            genero: "Indie",
            albums: [
              { titulo: "Indie Echo", anoLancamento: 2030 },
              { titulo: "Alternative Dreams", anoLancamento: 2032 }
            ]
          },
          {
            nome: "Cantor 9",
            pontuacao: 2086,
            valorContrato: 1500,
            genero: "Blues",
            albums: [
              { titulo: "Blues Revival", anoLancamento: 2024 },
              { titulo: "Delta Soul Reimagined", anoLancamento: 2026 }
            ]
          },
          {
            nome: "Cantor 10",
            pontuacao: 25000,
            valorContrato: 5000,
            genero: "Soul",
            albums: [
              { titulo: "Soulful Grooves", anoLancamento: 2025 },
              { titulo: "Heartfelt Melodies", anoLancamento: 2027 }
            ]
          },
          {
            nome: "Cantor 11",
            pontuacao: 1500,
            valorContrato: 1560,
            genero: "Funk",
            albums: [
              { titulo: "Funky Beats 2.0", anoLancamento: 2030 },
              { titulo: "Groove Revolution", anoLancamento: 2032 }
            ]
          },
          {
            nome: "Cantor 12",
            pontuacao: 25000,
            valorContrato: 1560,
            genero: "Reggae",
            albums: [
              { titulo: "Reggae Vibes", anoLancamento: 2024 },
              { titulo: "Island Groove Remix", anoLancamento: 2026 }
            ]
          }
      ]
);

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

//Atualizar a capacidade de todos os cantores com genero Gênero 26 para Pop
db.cantorDetalhes.updateMany(
    { genero: "Gênero 26" },
    { $set: { genero: "Pop" } }
);

// Trocando o nome "pontuacao" para "avaliação" em todos os documentos da coleção
db.bandaDetalhes.updateMany(
    {},
    { $rename: { "pontuacao": "avaliacao" } }
);

db.cantorDetalhes.updateMany(
    {},
    { $rename: { "pontuacao": "avaliacao" } }
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

/*Agrupando as bandas e cantores por genero musical e avaliacao*/

//Bandas
var bandasIndie = db.bandaDetalhes.find({'genero': 'Indie'}).toArray()
var bandasRock = db.bandaDetalhes.find({'genero': 'Rock'}).toArray()
var bandasPop = db.bandaDetalhes.find({'genero': 'Pop'}).toArray()
var bandasMetal = db.bandaDetalhes.find({'genero': 'Metal'}).toArray()
var bandasFunk = db.bandaDetalhes.find({'genero': 'Funk'}).toArray()
var bandasReB = db.bandaDetalhes.find({'genero': 'R&B'}).toArray()
var bandasReggae = db.bandaDetalhes.find({'genero': 'Reggae'}).toArray()
var bandasHipHop = db.bandaDetalhes.find({'genero': 'Hip-Hop'}).toArray()
var bandasCountry = db.bandaDetalhes.find({'genero': 'Country'}).toArray()
var bandasJazz = db.bandaDetalhes.find({'genero': 'Jazz'}).toArray()
var bandasElectronic = db.bandaDetalhes.find({'genero': 'Electronic'}).toArray()
var bandasBlues = db.bandaDetalhes.find({'genero': 'Blues'}).toArray()
var bandasSka = db.bandaDetalhes.find({'genero': 'Ska'}).toArray()
var bandasPunk = db.bandaDetalhes.find({'genero': 'Punk'}).toArray()
var bandasBest = db.bandaDetalhes.find({'avaliacao': {$gt: 10000}}).toArray()

//Cantores
var cantoresPop = db.cantorDetalhes.find({'genero': 'Pop'}).toArray()
var cantoresReB = db.cantorDetalhes.find({'genero': 'R&B'}).toArray()
var cantoresRock = db.cantorDetalhes.find({'genero': 'Rock'}).toArray()
var cantoresCountry = db.cantorDetalhes.find({'genero': 'Country'}).toArray()
var cantoresHipHop = db.cantorDetalhes.find({'genero': 'Hip-Hop'}).toArray()
var cantoresJazz = db.cantorDetalhes.find({'genero': 'Jazz'}).toArray()
var cantoresElectronic = db.cantorDetalhes.find({'genero': 'Electronic'}).toArray()
var cantoresIndie = db.cantorDetalhes.find({'genero': 'Indie'}).toArray()
var cantoresBlues = db.cantorDetalhes.find({'genero': 'Blues'}).toArray()
var cantoresSoul = db.cantorDetalhes.find({'genero': 'Soul'}).toArray()
var cantoresFunk = db.cantorDetalhes.find({'genero': 'Funk'}).toArray()
var cantoresReggae = db.cantorDetalhes.find({'genero': 'Reggae'}).toArray()
var cantoresBest = db.cantorDetalhes.find({'avaliacao': {$gt: 10000}}).toArray()


  /*Inserção na coleção de festivais*/

/*1 inserção*/

db.festivalDetalhes.insertOne({
  nome: 'Festival de exemplo',
  localização: {pais: 'Brazil', estado: 'PE', cidade: 'Recife', bairro: 'Varzea', rua: 'Rua 2', complemento: 'Ao lado da rua 1'},
  dataInicio: "2024-07-01",
  dataTermino: "2024-08-01",
  custo: 50000,
  capacidade: 10000,
  pessoasPresentes: 10503,
  valorIngresso: 100,
  apresentacoesBandas: bandasBest,
  apresentacoesCantores: null
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
    apresentacoesBandas: bandasBest,
    apresentacoesCantores: cantoresBest
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
    apresentacoesBandas: bandasBest,
    apresentacoesCantores: cantoresBest
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
    apresentacoesBandas: bandasBest,
    apresentacoesCantores: cantoresBest
  },
  {
    nome: 'Festival de Punk',
    localizacao: {pais: 'Brazil', estado: 'MG', cidade: 'Belo Horizonte', bairro: 'Savassi', rua: 'Rua B', complemento: 'Próximo ao parque'},
    dataInicio: "2021-04-05",
    dataTermino: "2021-04-10",
    custo: 35000,
    capacidade: 9000,
    pessoasPresentes: 80003,
    valorIngresso: 90,
    conclusao: "Evento foi ruim!",
    apresentacoesBandas: bandasPunk,
    apresentacoesCantores: null
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
    apresentacoesBandas: bandasRock,
    apresentacoesCantores: cantoresRock
  },
  {
    nome: 'Festival de Ska',
    localizacao: {pais: 'Brazil', estado: 'PE', cidade: 'Recife', bairro: 'Boa Viagem', rua: 'Avenida Y', complemento: 'Próximo ao shopping'},
    dataInicio: "2024-03-01",
    dataTermino: "2024-03-07",
    custo: 75000,
    capacidade: 7000,
    pessoasPresentes: 50503,
    valorIngresso: 70,
    conclusao: "Evento foi bom!",
    apresentacoesBandas: bandasSka,
    apresentacoesCantores: cantoresSoul
  },
  {
    nome: 'Festival de Blues',
    localizacao: {pais: 'Brazil', estado: 'DF', cidade: 'Brasília', bairro: 'Asa Sul', rua: 'Quadra X', complemento: 'Próximo à rodoviária'},
    dataInicio: "2023-11-10",
    dataTermino: "2024-11-15",
    custo: 55000,
    capacidade: 13000,
    pessoasPresentes: 30503,
    valorIngresso: 110,
    conclusao: "Evento foi bom!",
    apresentacoesBandas: bandasBlues,
    apresentacoesCantores: cantoresBlues
  },
  {
    nome: 'Festival de Eletronica',
    localizacao: {pais: 'Brazil', estado: 'PR', cidade: 'Curitiba', bairro: 'Batel', rua: 'Alameda W', complemento: 'Próximo ao teatro'},
    dataInicio: "2023-05-12",
    dataTermino: "2024-05-18",
    custo: 32000,
    capacidade: 8500,
    pessoasPresentes: 80503,
    valorIngresso: 85,
    conclusao: "Evento foi ruim!",
    apresentacoesBandas: bandasElectronic,
    apresentacoesCantores: cantoresElectronic
  },
  {
    nome: 'Festival de Jazz',
    localizacao: {pais: 'Brazil', estado: 'BA', cidade: 'Salvador', bairro: 'Pituba', rua: 'Avenida K', complemento: 'Próximo à orla'},
    dataInicio: "2023-02-15",
    dataTermino: "2024-02-20",
    custo: 28000,
    capacidade: 7500,
    pessoasPresentes: 80503,
    valorIngresso: 75,
    conclusao: "Evento foi ruim!",
    apresentacoesBandas: bandasJazz,
    apresentacoesCantores: cantoresJazz
  },
  {
    nome: 'Festival de Country',
    localizacao: {pais: 'Brazil', estado: 'SP', cidade: 'São Paulo', bairro: 'Moema', rua: 'Avenida J', complemento: 'Próximo ao parque'},
    dataInicio: "2015-12-05",
    dataTermino: "2017-12-10",
    custo: 48000,
    capacidade: 11000,
    pessoasPresentes: 90503,
    valorIngresso: 95,
    conclusao: "Evento foi ruim!",
    apresentacoesBandas: bandasCountry,
    apresentacoesCantores: cantoresCountry
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
      apresentacoesBandas: bandasBest,
      apresentacoesCantores: null
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
      apresentacoesBandas: null,
      apresentacoesCantores: cantoresBest
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
      apresentacoesBandas: bandasBest,
      apresentacoesCantores: cantoresBest
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
      apresentacoesBandas: bandasBest,
      apresentacoesCantores: cantoresBest
    },
    {
      nome: 'Festival de Hip-Hop',
      localizacao: { pais: 'Brazil', estado: 'RS', cidade: 'Porto Alegre', bairro: 'Centro', rua: 'Rua C', complemento: 'Próximo à estação de trem' },
      dataInicio: "2018-08-15",
      dataTermino: "2018-08-20",
      custo: 40000,
      capacidade: 80503,
      pessoasPresentes: 10000,
      conclusao: "Evento foi ruim!",
      valorIngreco: 100,
      apresentacoesBandas: bandasHipHop,
      apresentacoesCantores: cantoresHipHop
    },
    {
      nome: 'Festival de Reggae',
      localizacao: { pais: 'Brazil', estado: 'PE', cidade: 'Recife', bairro: 'Boa Viagem', rua: 'Avenida Y', complemento: 'Próximo ao shopping' },
      dataInicio: "2018-03-01",
      dataTermino: "2018-03-07",
      custo: 25000,
      capacidade: 7000,
      pessoasPresentes: 70503,
      conclusao: "Evento foi ruim!",
      valorIngreco: 70,
      apresentacoesBandas: bandasReggae,
      apresentacoesCantores: cantoresReggae
    },
    {
      nome: 'Festival de R&B',
      localizacao: { pais: 'Brazil', estado: 'DF', cidade: 'Brasília', bairro: 'Asa Sul', rua: 'Quadra X', complemento: 'Próximo à rodoviária' },
      dataInicio: "2017-11-10",
      dataTermino: "2017-11-15",
      custo: 55000,
      capacidade: 13000,
      pessoasPresentes: 80503,
      conclusao: "Evento foi bom!",
      valorIngreco: 110,
      apresentacoesBandas: bandasReB,
      apresentacoesCantores: cantoresReB
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
      apresentacoesBandas: bandasIndie,
      apresentacoesCantores: cantoresIndie
    },
    {
      nome: 'Festival de Funk',
      localizacao: { pais: 'Brazil', estado: 'BA', cidade: 'Salvador', bairro: 'Pituba', rua: 'Avenida K', complemento: 'Próximo à orla' },
      dataInicio: "2020-02-15",
      dataTermino: "2021-02-20",
      custo: 28000,
      capacidade: 30503,
      pessoasPresentes: 7500,
      conclusao: "Evento foi bom!",
      valorIngreco: 75,
      apresentacoesBandas: bandasFunk,
      apresentacoesCantores: cantoresFunk
    },
    {
      nome: 'Festival de Metal',
      localizacao: { pais: 'Brazil', estado: 'SP', cidade: 'São Paulo', bairro: 'Moema', rua: 'Avenida J', complemento: 'Próximo ao parque' },
      dataInicio: "2020-12-05",
      dataTermino: "2021-12-10",
      custo: 48000,
      capacidade: 11000,
      pessoasPresentes: 99503,
      conclusao: "Evento foi bom!",
      valorIngreco: 95,
      apresentacoesBandas: bandasMetal,
      apresentacoesCantores: null
    },
    {
      nome: 'Festival de Pop',
      localizacao: { pais: 'Brazil', estado: 'SP', cidade: 'São Paulo', bairro: 'Moema', rua: 'Avenida J', complemento: 'Próximo ao parque' },
      dataInicio: "2020-12-05",
      dataTermino: "2021-12-10",
      custo: 48000,
      capacidade: 99503,
      pessoasPresentes: 11000,
      conclusao: "Evento foi bom!",
      valorIngreco: 95,
      apresentacoesBandas: bandasPop,
      apresentacoesCantores: cantoresPop
    }
]);

// Atualizar um documento na coleção festivalDetalhes com base no nome do festival
// Critério de pesquisa
db.festivalDetalhes.updateOne(
  { nome: "Festival de Verão" }, 
  {
    $set: {
      capacidade: 12000, 
      pessoasPresentes: 80503
    }
  }
);

//Atualizar a capacidade de todos os festivais com capacidade superior ou igual a 10000 para 15000
                  /*uso de GTE*/
db.festivalDetalhes.updateMany(
  { capacidade: { $gte: 10000 } },
  { $set: { capacidade: 15000, pessoasPresentes: 80503 } }
);

/************************************************** Usos para a check list **********************************************************************************************************/

/*Usando Find*/

//Encontrar festivais que estão em PE
db.festivalDetalhes.find({'localizacao.estado': 'PE'}).pretty();

// Encontrar festivais com nome especifico
db.festivalDetalhes.find({ nome: 'Festival de Inverno' }).pretty();

// encontrar cantores com nome em especifico
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