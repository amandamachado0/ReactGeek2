
import { useState } from 'react';
function Avaliacoes({ usuarios, comentarios, setComentarios }) {
    const [nome, setNome] = useState("");
    const [filme, setFilme] = useState("");
    const [nota, setNota] = useState("");
    const [comentario, setComentario] = useState("");
    const [avaliacoes, setAvaliacoes] = useState([]);
    const [mensagem, setMensagem] = useState("");
    const [categoria, setCategoria] = useState("");

    const filmesMarvel = [
        "Capitão América: O Primeiro Vingador",
        "Capitã Marvel",
        "Homem de Ferro",
        "Homem de Ferro 2",
        "O Incrível Hulk",
        "Thor",
        "Os Vingadores",
        "Homem de Ferro 3",
        "Thor: O Mundo Sombrio",
        "Capitão América: O Soldado Invernal",
        "Guardiões da Galáxia",
        "Guardiões da Galáxia Vol. 2",
        "Vingadores: Era de Ultron",
        "Homem-Formiga",
        "Capitão América: Guerra Civil",
        "Viúva Negra",
        "Pantera Negra",
        "Homem-Aranha: De Volta ao Lar",
        "Doutor Estranho",
        "Thor: Ragnarok",
        "Homem-Formiga e a Vespa",
        "Vingadores: Guerra Infinita",
        "Vingadores: Ultimato"
    ];

    const filmesDisney = [
        "O Rei Leão",
        "Frozen",
        "Moana",
        "Encanto",
        "Zootopia",
        "Divertida Mente",
        "Mulan",
        "Aladdin",
        "A Pequena Sereia",
        "Ratatouille"
    ];

    const filmesPrimeVideo = [
        "O Pacto",
        "Saltburn",
        "The Tomorrow War",
        "A Ideia de Você",
        "Air: A História por Trás do Logo"
    ];

    const filmesNetflix = [
        "Alerta Vermelho",
        "Não Olhe para Cima",
        "Resgate",
        "Enola Holmes",
        "O Projeto Adam"
    ];

    const filmesHBO = [
        "Duna",
        "Barbie",
        "The Batman",
        "Wonka",
        "Joker"
    ];

    const filmesCinema = [
        "Avatar",
        "Titanic",
        "Jurassic Park",
        "Velozes e Furiosos",
        "Missão: Impossível"
    ];

    let filmes = [];
    if (categoria == "Marvel") {
        filmes = filmesMarvel;
    } else if (categoria == "Disney") {
        filmes = filmesDisney;
    } else if (categoria == "Prime Video") {
        filmes = filmesPrimeVideo;
    } else if (categoria == "Netflix") {
        filmes = filmesNetflix;
    } else if (categoria == "HBO") {
        filmes = filmesHBO;
    } else if (categoria == "Cinema") {
        filmes = filmesCinema;
    }

    function Avaliar() {

        const UserExiste = usuarios.find(
            (usuario) =>
                usuario.nome.toLowerCase() === nome.toLowerCase()
        );

        if (!UserExiste) {
            setMensagem("Você precisa estar cadastrado para avaliar os filmes!");
            return;
        }

        if (!categoria || !filme || !nota || !comentario) {
            setMensagem("Preencha todos os campos da avaliação.");
            return;
        }

        const novaAvaliacao = {
            nome: UserExiste.nome,
            categoria: categoria,
            filme: filme,
            nota: nota,
            comentario: comentario
        };

        setAvaliacoes([...avaliacoes, novaAvaliacao]);
        setComentarios([...comentarios, novaAvaliacao]);


        setMensagem("Avaliação adicionada!");

        setCategoria("");
        setFilme("");
        setNota("");
        setComentario("");
    }

    return (
        <section className="avaliacoes">
            <h1>Avalie seus filmes favoritos</h1>
            <p>Compartilhe sua opinião com a comunidade!</p>

            <p>
                Seu nome:
                <input
                    type="text"
                    value={nome}
                    onChange={(event) => setNome(event.target.value)}
                />
            </p>

            <p>
                Categoria:
                <select
                    value={categoria}
                    onChange={(event) => {
                        setCategoria(event.target.value);
                        setFilme("");
                    }}
                >
                    <option value="">Selecione uma categoria</option>
                    <option value="Marvel">Marvel</option>
                    <option value="Disney">Disney</option>
                    <option value="Prime Video">Prime Video</option>
                    <option value="Netflix">Netflix</option>
                    <option value="HBO">HBO</option>
                    <option value="Sucessos 2026">Sucessos 2026</option>
                </select>
            </p>

            <p>
                Escolha um filme:
                <select
                    value={filme}
                    onChange={(event) => setFilme(event.target.value)}
                >
                    <option value="">Selecione um filme</option>

                    {filmes.map((filme) => (
                        <option key={filme} value={filme}>
                            {filme}
                        </option>
                    ))}
                </select>
            </p>

            <p>
                Nota:
                <input
                    type="number"
                    min="0"
                    max="10"
                    value={nota}
                    onChange={(event) => setNota(event.target.value)}
                />
            </p>

            <p>
                Comentário:
                <textarea
                    value={comentario}
                    onChange={(event) => setComentario(event.target.value)}
                />
            </p>

            <button onClick={Avaliar}>
                Publicar avaliação
            </button>

            {mensagem && <p>{mensagem}</p>}

            <h2>Avaliações da comunidade</h2>

            {avaliacoes.map((avaliacao, index) => (
                <div key={index} className="avaliacao">
                    <h3>{avaliacao.filme}</h3>
                    <p><strong>Categoria:</strong> {avaliacao.categoria}</p>
                    <p><strong>Usuário:</strong> {avaliacao.nome}</p>
                    <p><strong>Nota:</strong> {avaliacao.nota}/10 ⭐</p>
                    <p>{avaliacao.comentario}</p>
                </div>
            ))}
        </section>
    );
}

export default Avaliacoes;
