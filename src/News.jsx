import { useParams } from "react-router-dom";

function News() {
    const { slug } = useParams(); //pega o parâmetro na URL

    const news = {

        "capitao-america-o-primeiro-vingador": {
            titulo: "Capitão América: O Primeiro Vingador",
            conteudo: "Steve Rogers é um jovem franzino que deseja se alistar no exército para lutar na Segunda Guerra Mundial. Após ser escolhido para um experimento, ele recebe o soro do supersoldado e se transforma no Capitão América. Ele passa a combater a Hydra, organização liderada pelo poderoso Johann Schmidt, o Caveira Vermelha. Steve se apaixona por Peggy Carter e luta ao lado de Bucky Barnes, seu melhor amigo. No final, Steve desaparece no gelo e acorda décadas depois, no mundo moderno."
        },

        "capita-marvel": {
            titulo: "Capitã Marvel",
            conteudo: "Carol Danvers vive como membro da equipe militar Kree, acreditando não se lembrar de seu passado. Ao chegar à Terra, ela começa a recuperar memórias de sua antiga vida como piloto da Força Aérea. Ela descobre que os Skrulls não são exatamente os inimigos que acreditava serem. Carol percebe que seus poderes vêm da explosão de uma tecnologia alienígena ligada ao Tesseract. Após descobrir a verdade, ela decide proteger os Skrulls e deixa a Terra para ajudar outros povos do universo."
        },

        "homem-de-ferro": {
            titulo: "Homem de Ferro",
            conteudo: "Tony Stark é um bilionário e fabricante de armas que é sequestrado durante uma demonstração militar. Preso no Afeganistão, ele constrói uma armadura para escapar usando um reator em seu peito. Depois de voltar para casa, Tony decide abandonar a fabricação de armas e aperfeiçoar sua armadura. Ele descobre que Obadiah Stane está envolvido com seus inimigos e pretende roubar sua tecnologia. Tony derrota Stane e revela publicamente que ele é o Homem de Ferro."
        },

        "homem-de-ferro-2": {
            titulo: "Homem de Ferro 2",
            conteudo: "Tony Stark agora é famoso por ter revelado ao mundo que é o Homem de Ferro. O governo americano tenta obrigá-lo a entregar sua tecnologia, enquanto Ivan Vanko busca vingança contra sua família. Tony também descobre que o elemento de seu reator está envenenando seu organismo. Ele recebe ajuda de Nick Fury, Natasha Romanoff e James Rhodes, que usa uma armadura própria. Tony derrota Vanko e passa a fazer parte dos planos de Nick Fury para reunir novos heróis."
        },

        "o-incrivel-hulk": {
            titulo: "O Incrível Hulk",
            conteudo: "Bruce Banner se transforma no Hulk após um experimento com radiação gama dar errado. Ele passa a viver escondido enquanto procura uma maneira de controlar ou eliminar sua transformação. O general Ross tenta capturá-lo, acreditando que Hulk representa uma ameaça. Em determinado momento, o soldado Emil Blonsky recebe um tratamento semelhante e se transforma no Abominável. Bruce aceita sua condição e foge novamente, enquanto o universo começa a tomar conhecimento dos super-humanos."
        },

        "thor": {
            titulo: "Thor",
            conteudo: "Thor é um príncipe arrogante de Asgard que coloca seu povo em perigo ao provocar uma guerra. Como punição, Odin o envia para a Terra e retira seus poderes e seu martelo Mjolnir. Na Terra, Thor conhece Jane Foster e começa a compreender o valor da responsabilidade e do sacrifício. Enquanto isso, Loki descobre segredos sobre sua origem e tenta assumir o controle de Asgard. Thor recupera seus poderes, derrota o Destruidor e retorna a Asgard para impedir Loki."
        },

        "os-vingadores": {
            titulo: "Os Vingadores",
            conteudo: "Loki rouba o Tesseract e usa seu poder para abrir um portal para uma invasão alienígena. Nick Fury reúne Tony Stark, Steve Rogers, Thor, Bruce Banner, Natasha Romanoff e Clint Barton. Inicialmente, os heróis têm dificuldade para trabalhar juntos por causa de suas personalidades diferentes. Eles finalmente se unem quando percebem que precisam proteger a Terra da invasão dos Chitauri. Os Vingadores derrotam Loki e seu exército, tornando-se oficialmente uma equipe."
        },

        "homem-de-ferro-3": {
            titulo: "Homem de Ferro 3",
            conteudo: "Depois da batalha de Nova York, Tony Stark começa a sofrer com ansiedade e dificuldades para dormir. Ele passa a criar diversas armaduras para se sentir preparado para futuras ameaças. Um terrorista conhecido como Mandarim aparentemente começa a atacar os Estados Unidos. Tony descobre que o verdadeiro responsável pelos ataques é Aldrich Killian, que utiliza soldados modificados pelo Extremis. Tony derrota Killian e decide retirar o reator de seu peito, tentando seguir uma vida diferente."
        },

        "thor-o-mundo-sombrio": {
            titulo: "Thor: O Mundo Sombrio",
            conteudo: "Uma antiga raça chamada Elfos Negros retorna para tentar usar o Éter como arma. Jane Foster entra em contato com o Éter e acaba se tornando seu hospedeiro. Thor precisa proteger Jane enquanto enfrenta Malekith, líder dos Elfos Negros. Loki inicialmente ajuda Thor, mas suas verdadeiras intenções continuam sendo difíceis de prever. Thor derrota Malekith, enquanto Loki aparentemente morre, mas secretamente assume a identidade de Odin."
        },

        "capitao-america-o-soldado-invernal": {
            titulo: "Capitão América: O Soldado Invernal",
            conteudo: "Steve Rogers trabalha para a S.H.I.E.L.D., mas começa a desconfiar dos métodos utilizados pela organização. Ele descobre que a Hydra permaneceu infiltrada dentro da S.H.I.E.L.D. durante décadas. Um misterioso assassino chamado Soldado Invernal começa a persegui-lo. Steve descobre que o Soldado Invernal é Bucky Barnes, seu antigo amigo que todos acreditavam estar morto. A S.H.I.E.L.D. é destruída e Steve decide ajudar Bucky a recuperar suas memórias."
        },

        "guardioes-da-galaxia": {
            titulo: "Guardiões da Galáxia",
            conteudo: "Peter Quill rouba uma esfera misteriosa que contém a Joia do Poder. Ele acaba preso junto com Gamora, Rocket, Groot e Drax, formando um grupo improvável. O grupo descobre que Ronan deseja usar a Joia para destruir Xandar. Apesar das constantes brigas, os cinco personagens começam a confiar uns nos outros. Eles se unem para derrotar Ronan e passam a ser conhecidos como os Guardiões da Galáxia."
        },

        "guardioes-da-galaxia-vol-2": {
            titulo: "Guardiões da Galáxia Vol. 2",
            conteudo: "Os Guardiões da Galáxia continuam realizando missões enquanto tentam ganhar dinheiro e reconhecimento. Peter Quill conhece Ego, um ser celestial que afirma ser seu pai biológico. Enquanto isso, a relação entre Gamora e Nebulosa revela o passado complicado das duas com Thanos. Peter descobre que Ego possui planos perigosos que podem destruir inúmeros mundos. Os Guardiões derrotam Ego, mas Yondu se sacrifica para salvar Peter, fortalecendo ainda mais a equipe."
        },

        "vingadores-era-de-ultron": {
            titulo: "Vingadores: Era de Ultron",
            conteudo: "Tony Stark e Bruce Banner criam Ultron para proteger a humanidade de futuras ameaças. Porém, Ultron conclui que os próprios seres humanos são o maior problema do planeta. Ele cria um exército de robôs e tenta provocar a destruição da humanidade. Os Vingadores enfrentam Ultron e conhecem Wanda Maximoff e Pietro Maximoff. Após derrotarem Ultron, os Vingadores formam uma nova equipe liderada por Capitão América."
        },

        "homem-formiga": {
            titulo: "Homem-Formiga",
            conteudo: "Scott Lang é um ladrão que recebe uma oportunidade de mudar sua vida ao conhecer Hank Pym. Hank revela que possui uma tecnologia capaz de diminuir o tamanho de uma pessoa sem perder força. Scott veste o traje do Homem-Formiga e começa a ser treinado para usar seus poderes. Ele precisa roubar um traje semelhante que está sendo desenvolvido pelo vilão Darren Cross. Scott derrota Cross e se torna um novo herói, chamando a atenção de outros integrantes do universo Marvel."
        },

        "capitao-america-guerra-civil": {
            titulo: "Capitão América: Guerra Civil",
            conteudo: "Após vários acontecimentos envolvendo os Vingadores, governos do mundo querem controlar as atividades dos heróis. Tony Stark apoia os Acordos de Sokovia, enquanto Steve Rogers acredita que os heróis devem decidir quando agir. A situação piora quando Bucky Barnes é acusado de um atentado internacional. Steve tenta proteger Bucky e entra em conflito com Tony e outros heróis. O confronto termina com os Vingadores divididos e Steve abandonando seu escudo."
        },

        "viuva-negra": {
            titulo: "Viúva Negra",
            conteudo: "Após os acontecimentos de Guerra Civil, Natasha passa a viver escondida enquanto é perseguida. Ela reencontra sua irmã adotiva Yelena e descobre que a Sala Vermelha continua funcionando. A organização utiliza jovens mulheres treinadas como Viúvas Negras para cumprir missões. Natasha e Yelena se unem a Alexei e Melina para destruir a organização de uma vez por todas. Ao final, Natasha decide seguir seu caminho enquanto se prepara para reencontrar os Vingadores."
        },

        "pantera-negra": {
            titulo: "Pantera Negra",
            conteudo: "Após a morte de seu pai, T'Challa retorna a Wakanda para assumir o posto de rei e Pantera Negra. Ele descobre que Erik Killmonger possui uma ligação com sua família e reivindica o trono. Killmonger consegue assumir o controle de Wakanda e pretende utilizar seus recursos para iniciar uma revolução mundial. T'Challa sobrevive e retorna para enfrentar Killmonger em uma batalha pelo futuro de Wakanda. Depois de vencer, T'Challa decide abrir Wakanda para o mundo e compartilhar seus conhecimentos."
        },

        "homem-aranha-de-volta-ao-lar": {
            titulo: "Homem-Aranha: De Volta ao Lar",
            conteudo: "Peter Parker começa a atuar como Homem-Aranha depois de ser recrutado por Tony Stark. Ele volta à escola e tenta conciliar suas responsabilidades adolescentes com sua vida de herói. Peter descobre que Adrian Toomes, o Abutre, está vendendo armas construídas com tecnologia alienígena. Tony Stark tenta ensinar Peter a ser responsável e não se colocar em situações perigosas. Peter derrota o Abutre e decide continuar sendo o Homem-Aranha mesmo sem fazer parte oficialmente dos Vingadores."
        },

        "doutor-estranho": {
            titulo: "Doutor Estranho",
            conteudo: "Stephen Strange é um cirurgião extremamente talentoso, mas perde a capacidade de operar após um acidente. Desesperado para recuperar suas habilidades, ele viaja em busca de tratamentos alternativos. Strange encontra a Anciã e começa a aprender sobre magia, dimensões e realidades alternativas. Ele enfrenta Kaecilius e descobre que uma entidade chamada Dormammu ameaça a Terra. Strange usa inteligência e magia para derrotar a ameaça e assume o papel de protetor da Terra."
        },

        "thor-ragnarok": {
            titulo: "Thor: Ragnarok",
            conteudo: "Thor é capturado pelo demônio Surtur e depois acaba preso no planeta Sakaar. Lá ele reencontra Hulk e descobre que Asgard está sendo ameaçada por Hela, sua irmã mais velha. Hela conquista Asgard e destrói o martelo de Thor, deixando-o sem sua principal arma. Thor percebe que seu poder não depende do martelo e se une a Loki, Hulk e Valquíria. Para salvar seu povo, Thor permite que Surtur destrua Asgard enquanto os sobreviventes fogem em uma nave."
        },

        "homem-formiga-e-a-vespa": {
            titulo: "Homem-Formiga e a Vespa",
            conteudo: "Scott Lang está cumprindo prisão domiciliar depois dos acontecimentos de Guerra Civil. Hank Pym e Hope acreditam que Janet, esposa de Hank, pode estar viva no Reino Quântico. Scott é novamente recrutado para ajudar a encontrar uma maneira de resgatá-la. Durante a missão, eles enfrentam a Fantasma, que precisa da energia quântica para sobreviver. Janet é resgatada, mas Scott fica preso no Reino Quântico quando Thanos realiza o estalo."
        },

        "vingadores-guerra-infinita": {
            titulo: "Vingadores: Guerra Infinita",
            conteudo: "Thanos começa sua busca pelas seis Joias do Infinito, enfrentando diversos heróis pelo caminho. Os Vingadores e os Guardiões da Galáxia percebem que precisam trabalhar juntos para detê-lo. Thor, Capitão América, Homem de Ferro, Doutor Estranho e outros heróis tentam impedir o plano de Thanos. Mesmo enfrentando uma enorme resistência, Thanos consegue reunir todas as seis Joias. Ele estala os dedos e elimina metade de toda a vida do universo, deixando vários heróis mortos."
        },

        "vingadores-ultimato": {
            titulo: "Vingadores: Ultimato",
            conteudo: "Cinco anos após o estalo, os heróis sobreviventes continuam vivendo com as consequências da derrota. Quando descobrem uma maneira de viajar pelo tempo, eles elaboram um plano para recuperar as Joias do Infinito. Os Vingadores viajam para diferentes momentos do passado e conseguem reunir as Joias. Thanos do passado descobre o plano e invade o presente, causando uma batalha gigantesca. Tony Stark usa as Joias para derrotar Thanos, sacrificando sua própria vida, enquanto Steve Rogers passa seu escudo para Sam Wilson."

        },

        "o-rei-leao": {
            titulo: "O Rei Leão",
            conteudo: "Simba é um jovem leão destinado a se tornar o rei das Terras do Reino, seguindo os passos de seu pai, Mufasa. Sua vida muda completamente quando seu tio Scar, movido pela ambição de assumir o trono, prepara um plano para eliminar Mufasa e afastar Simba de seu verdadeiro lugar. Sentindo-se culpado pela morte do pai, Simba foge e cresce longe de sua família ao lado de Timão e Pumba. Anos depois, ele precisa enfrentar seu passado e decidir se está preparado para retornar e lutar por seu reino."
        },

        "frozen": {
            titulo: "Frozen",
            conteudo: "Elsa nasceu com poderes capazes de controlar o gelo e a neve, mas passou grande parte de sua vida tentando escondê-los por medo de machucar sua irmã, Anna. Durante sua coroação como rainha de Arendelle, seus poderes são revelados acidentalmente e ela foge, deixando o reino preso em um inverno permanente. Determinada a encontrar Elsa e trazer o verão de volta, Anna parte em uma aventura ao lado de Kristoff, da rena Sven e do divertido boneco de neve Olaf. Ao longo da jornada, as duas irmãs descobrem que o amor verdadeiro pode assumir diferentes formas."
        },

        "moana": {
            titulo: "Moana",
            conteudo: "Moana é uma jovem que vive em uma ilha e sempre sentiu uma forte ligação com o oceano. Quando uma ameaça começa a colocar seu povo em perigo, ela descobre que precisa navegar além dos limites conhecidos para encontrar o semideus Maui. Juntos, eles embarcam em uma jornada pelo oceano para devolver o coração da deusa Te Fiti e restaurar o equilíbrio da natureza. Durante a aventura, Moana enfrenta grandes desafios e aprende mais sobre a história de seus antepassados e sobre quem ela realmente deseja ser."
        },

        "encanto": {
            titulo: "Encanto",
            conteudo: "A família Madrigal vive em uma casa mágica localizada nas montanhas da Colômbia. Cada integrante da família recebeu um dom especial, com exceção de Mirabel, que nunca desenvolveu nenhum poder. Apesar disso, ela ama sua família e tenta encontrar seu lugar entre pessoas com habilidades extraordinárias. Quando a magia que protege a casa começa a desaparecer, Mirabel percebe que talvez seja a única pessoa capaz de descobrir o que está acontecendo. Em sua jornada, ela conhece melhor os segredos e dificuldades de sua família e entende a importância de cada um ser aceito como realmente é."
        },

        "zootopia": {
            titulo: "Zootopia",
            conteudo: "Judy Hopps é uma coelha determinada que sonha em se tornar policial, mesmo vivendo em uma sociedade onde animais pequenos raramente recebem esse tipo de oportunidade. Ao chegar à grande cidade de Zootopia, ela precisa provar que é capaz de realizar seu trabalho e acaba assumindo um caso envolvendo o desaparecimento de vários animais. Para resolver o mistério, Judy precisa contar com a ajuda de Nick Wilde, uma raposa conhecida por ser esperta e desconfiada. Juntos, eles descobrem uma conspiração que pode colocar toda a cidade em perigo."
        },

        "divertida-mente": {
            titulo: "Divertida Mente",
            conteudo: "Riley é uma garota que precisa se adaptar a uma grande mudança quando sua família se muda para uma nova cidade. Dentro de sua mente, as emoções Alegria, Tristeza, Medo, Raiva e Nojinho trabalham juntas para ajudá-la a lidar com os acontecimentos de sua vida. Quando Alegria e Tristeza acabam longe da central de controle, as outras emoções precisam tentar manter tudo funcionando. Enquanto procuram o caminho de volta, Alegria começa a perceber que a tristeza também possui um papel importante e necessário na vida de Riley."
        },

        "mulan": {
            titulo: "Mulan",
            conteudo: "Mulan é uma jovem que vive em uma época em que seu país precisa reunir soldados para enfrentar uma invasão. Quando seu pai, já idoso e com problemas de saúde, é convocado para lutar, ela decide se disfarçar de homem e assumir seu lugar no exército. Durante o treinamento, Mulan precisa esconder sua verdadeira identidade enquanto aprende a lutar e conquista a confiança de seus companheiros. Com coragem e inteligência, ela se torna uma importante guerreira e precisa provar que é capaz de proteger sua família e seu povo."
        },

        "aladdin": {
            titulo: "Aladdin",
            conteudo: "Aladdin é um jovem que vive nas ruas da cidade de Agrabah e sonha com uma vida melhor. Sua vida muda quando ele encontra uma lâmpada mágica que abriga um poderoso Gênio capaz de realizar desejos. Com a ajuda do Gênio, Aladdin tenta conquistar o coração da princesa Jasmine, mas acaba se envolvendo em uma disputa contra Jafar, o ambicioso conselheiro do sultão. Durante sua aventura, Aladdin aprende que não precisa fingir ser outra pessoa para ser valorizado e que a verdadeira coragem está em ser honesto consigo mesmo."
        },

        "a-pequena-sereia": {
            titulo: "A Pequena Sereia",
            conteudo: "Ariel é uma jovem sereia curiosa e fascinada pelo mundo dos humanos. Apesar das advertências de seu pai, o rei Tritão, ela deseja conhecer a vida fora do oceano e se aproxima do príncipe Eric após salvá-lo de um naufrágio. Determinada a fazer parte do mundo humano, Ariel faz um acordo perigoso com a bruxa Úrsula e troca sua voz pela oportunidade de viver em terra firme. Ela precisa enfrentar as consequências de suas escolhas e encontrar uma maneira de proteger aqueles que ama."
        },

        "ratatouille": {
            titulo: "Ratatouille",
            conteudo: "Remy é um rato que possui um paladar extremamente apurado e sonha em se tornar um grande chef, apesar de sua família acreditar que esse sonho é impossível. Após se separar de sua colônia, ele acaba em Paris e conhece Linguini, um jovem sem experiência na cozinha que trabalha em um restaurante famoso. Remy descobre uma forma de ajudá-lo a cozinhar e os dois passam a trabalhar juntos em segredo. Enquanto tentam esconder a verdade, Remy precisa enfrentar preconceitos e provar que o talento pode surgir de onde ninguém espera."
        },
        "duna": {
            titulo: "Duna",
            conteudo: "Paul Atreides viaja com sua família para o planeta desértico Arrakis, onde uma substância extremamente valiosa é produzida. Após uma série de acontecimentos que mudam completamente sua vida, Paul precisa enfrentar perigos, conflitos e descobrir qual será seu papel no futuro daquele universo."
        },

        "barbie": {
            titulo: "Barbie",
            conteudo: "Barbie vive uma vida aparentemente perfeita em Barbieland, até começar a perceber mudanças inesperadas em sua rotina. Em busca de respostas, ela decide viajar para o mundo real e embarca em uma jornada de descobertas sobre sua identidade, suas escolhas e novas formas de enxergar a si mesma."
        },

        "the-batman": {
            titulo: "The Batman",
            conteudo: "Bruce Wayne atua como Batman e dedica suas noites a combater o crime em Gotham City. Quando um misterioso assassino conhecido como Charada começa a deixar pistas e cometer crimes, Batman inicia uma investigação que revela segredos e uma conspiração envolvendo importantes figuras da cidade."
        },

        "wonka": {
            titulo: "Wonka",
            conteudo: "Antes de se tornar um famoso fabricante de chocolates, Willy Wonka era um jovem sonhador que desejava abrir sua própria loja e compartilhar suas invenções com o mundo. Ao chegar à cidade, ele enfrenta diversos obstáculos e concorrentes poderosos, mas usa sua criatividade e determinação para tentar realizar seu grande sonho."
        },

        "joker": {
            titulo: "Joker",
            conteudo: "Arthur Fleck vive uma vida marcada por dificuldades e pelo sentimento de não pertencer à sociedade em que vive. Enquanto enfrenta problemas pessoais e situações cada vez mais dolorosas, ele passa por uma transformação que muda completamente sua forma de enxergar o mundo e seu próprio destino."
        },

        "alerta-vermelho": {
            titulo: "Alerta Vermelho",
            conteudo: "Um agente do FBI se vê envolvido em uma missão internacional e acaba formando uma aliança inesperada com um dos maiores ladrões de arte do mundo. Juntos, eles procuram uma valiosa relíquia enquanto enfrentam uma criminosa perigosa, traições e situações inesperadas em diferentes lugares do mundo."
        },

        "nao-olhe-para-cima": {
            titulo: "Não Olhe para Cima",
            conteudo: "Dois cientistas descobrem que um enorme cometa está em rota de colisão com a Terra e tentam alertar o mundo sobre a ameaça. Porém, a missão se torna mais difícil quando políticos, jornalistas e grande parte da sociedade não parecem levar o perigo a sério."
        },

        "resgate": {
            titulo: "Resgate",
            conteudo: "Tyler Rake é um mercenário experiente que recebe uma missão extremamente perigosa: resgatar o filho de um importante criminoso. A operação se torna cada vez mais complicada, colocando Tyler diante de diversos inimigos e obrigando-o a enfrentar grandes riscos para completar sua missão."
        },

        "enola-holmes": {
            titulo: "Enola Holmes",
            conteudo: "Enola é a irmã mais nova dos famosos Sherlock e Mycroft Holmes e decide investigar o misterioso desaparecimento de sua mãe. Inteligente e independente, ela embarca em uma grande aventura, enfrenta diferentes perigos e descobre que também possui talento para solucionar mistérios."
        },

        "o-projeto-adam": {
            titulo: "O Projeto Adam",
            conteudo: "Adam Reed é um piloto que viaja no tempo e acaba encontrando uma versão mais jovem de si mesmo. Juntos, eles precisam enfrentar acontecimentos do passado e trabalhar para impedir que decisões perigosas comprometam o futuro, enquanto Adam também precisa lidar com questões importantes de sua própria família."
        },

        "pacto": {
            titulo: "O Pacto",
            conteudo: "Durante uma missão em território perigoso, um soldado americano cria uma forte relação de confiança com seu intérprete local. Quando a situação se torna cada vez mais perigosa, ele decide retornar para cumprir uma promessa e tentar salvar a vida do homem que o ajudou durante a guerra."
        },

        "saltburn": {
            titulo: "Saltburn",
            conteudo: "Oliver Quick é um estudante que conhece Felix Catton durante a universidade e acaba sendo convidado para passar o verão na luxuosa propriedade de sua família. Aos poucos, sua aproximação com os Catton revela ambições, segredos e situações cada vez mais inesperadas."
        },

        "the-tomorrow-war": {
            titulo: "A Guerra do Amanhã",
            conteudo: "Em um futuro ameaçado por uma guerra contra criaturas alienígenas, pessoas do presente são convocadas para viajar no tempo e ajudar na batalha. Um professor precisa enfrentar os perigos da guerra enquanto tenta encontrar uma maneira de proteger sua família e ajudar a garantir o futuro da humanidade."
        },

        "a-ideia-de-voce": {
            titulo: "A Ideia de Você",
            conteudo: "Solène é uma mulher que conhece Hayes Campbell, integrante de uma famosa banda, durante uma viagem. Os dois iniciam um relacionamento inesperado e precisam lidar com as diferenças entre suas vidas, os desafios pessoais e a grande atenção causada pela fama do cantor."
        },

        "air": {
            titulo: "Air: A História por Trás do Logo",
            conteudo: "O filme acompanha a história de uma importante parceria que transformou o mundo dos esportes e dos negócios. Um grupo de profissionais aposta em um jovem atleta e trabalha para criar um acordo inovador, enfrentando desafios e dúvidas enquanto tenta construir algo que pode mudar a história de uma grande marca."
        },

        "avatar": {
            titulo: "Avatar",
            conteudo: "Jake Sully viaja para o planeta Pandora e passa a utilizar um avatar para interagir com os habitantes locais. Inicialmente envolvido em uma missão humana, ele começa a conhecer a cultura dos Na'vi, cria novos laços e precisa decidir de que lado ficará em um conflito que ameaça o futuro do planeta."
        },

        "titanic": {
            titulo: "Titanic",
            conteudo: "Durante a viagem inaugural do navio Titanic, Rose e Jack, dois jovens de classes sociais completamente diferentes, se conhecem e vivem uma intensa história de amor. Enquanto o relacionamento entre os dois cresce, uma tragédia atinge o navio e muda para sempre o destino de todos os passageiros."
        },

        "jurassic-park": {
            titulo: "Jurassic Park",
            conteudo: "Um parque temático criado com dinossauros geneticamente recriados promete oferecer uma experiência única aos seus visitantes. Porém, quando os sistemas de segurança falham e os animais escapam do controle, cientistas e visitantes precisam lutar para sobreviver em meio a um cenário cada vez mais perigoso."
        },

        "velozes-e-furiosos": {
            titulo: "Velozes e Furiosos",
            conteudo: "O filme acompanha o mundo das corridas de rua, onde velocidade, rivalidades e grandes desafios fazem parte da vida dos personagens. Ao longo da história, alianças inesperadas são criadas e uma equipe unida precisa enfrentar perigos cada vez maiores, colocando à prova a confiança e a lealdade entre seus integrantes."
        },

        "missao-impossivel": {
            titulo: "Missão: Impossível",
            conteudo: "Ethan Hunt é um agente altamente treinado que trabalha para uma organização secreta e recebe missões consideradas extremamente perigosas. Envolvido em uma operação cheia de mistérios, perseguições e conspirações, ele precisa usar todas as suas habilidades para impedir uma grande ameaça e descobrir em quem realmente pode confiar."
        },

    };
    const newsSelected = news[slug];

    return (
        <section className="about-content">
            <h1>{newsSelected.titulo}</h1>
            <p className="lead-text">{newsSelected.conteudo}</p>
        </section>
    )
}

export default News;