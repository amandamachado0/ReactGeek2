import { NavLink } from "react-router-dom";

function Inicio({ comentarios }) {
    return (
        <>
            <section className="hero">
                <h1>Geek! O melhor do mundo <span>cinematográfico</span>.</h1>
                <p className="lead-text">
                    <p>Aqui você encontra filmes, histórias e conteúdos que fazem parte da cultura geek, além de um espaço para compartilhar suas opiniões e fazer parte da nossa comunidade de apaixonados pelo universo cinematográfico.</p>
                </p>

                <div className="cta-group">
                    <NavLink to="/assine" className="btn btn-primary">
                        Assine
                    </NavLink>

                    <NavLink to="/avaliacoes" className="btn btn-secondary">
                        Avalie os filmes
                    </NavLink>


                    
                </div>
        <h1>Ordem Cronológica <span>Marvel</span>.</h1>
                <p className="texto-botoes">
    Uma coleção de filmes que acompanha a história dos heróis da Marvel desde o surgimento do Capitão América até a grande batalha contra Thanos em Vingadores: Ultimato.
</p>
            </section>

            <section className="grid">

                <div className="card">
                    <h3>Capitão América: O Primeiro Vingador</h3>
                    <p>Steve Rogers se transforma no Capitão América e enfrenta a organização Hydra durante a Segunda Guerra Mundial. <NavLink to={"news/capitao-america-o-primeiro-vingador"}>Leia mais</NavLink></p>
                </div>

                <div className="card">
                    <h3>Capitã Marvel</h3>
                    <p>Carol Danvers descobre sua verdadeira identidade e seus poderes enquanto se envolve em uma guerra entre Kree e Skrulls. <NavLink to={"news/capita-marvel"}>Leia mais</NavLink></p>
                </div>

                <div className="card">
                    <h3>Homem de Ferro</h3>
                    <p>Tony Stark constrói uma armadura tecnológica e se transforma no Homem de Ferro após ser sequestrado por terroristas. <NavLink to={"news/homem-de-ferro"}>Leia mais</NavLink></p>
                </div>

                <div className="card">
                    <h3>Homem de Ferro 2</h3>
                    <p>Tony Stark enfrenta novos inimigos enquanto tenta lidar com os efeitos do reator em seu corpo. <NavLink to={"news/homem-de-ferro-2"}>Leia mais</NavLink></p>
                </div>

                <div className="card">
                    <h3>O Incrível Hulk</h3>
                    <p>Bruce Banner tenta controlar seu alter ego Hulk enquanto é perseguido pelo governo e enfrenta o poderoso Abominável. <NavLink to={"news/o-incrivel-hulk"}>Leia mais</NavLink></p>
                </div>

                <div className="card">
                    <h3>Thor</h3>
                    <p>Thor é banido de Asgard e precisa aprender humildade antes de recuperar seus poderes e enfrentar seu irmão Loki. <NavLink to={"news/thor"}>Leia mais</NavLink></p>
                </div>

                <div className="card">
                    <h3>Os Vingadores</h3>
                    <p>Nick Fury reúne os principais heróis da Terra para impedir Loki de dominar o planeta com um exército alienígena. <NavLink to={"news/os-vingadores"}>Leia mais</NavLink></p>
                </div>

                <div className="card">
                    <h3>Homem de Ferro 3</h3>
                    <p>Tony Stark enfrenta um novo inimigo enquanto tenta superar os traumas causados pela batalha de Nova York. <NavLink to={"news/homem-de-ferro-3"}>Leia mais</NavLink></p>
                </div>

                <div className="card">
                    <h3>Thor: O Mundo Sombrio</h3>
                    <p>Thor precisa impedir que uma antiga força chamada Éter seja usada para mergulhar o universo na escuridão. <NavLink to={"news/thor-o-mundo-sombrio"}>Leia mais</NavLink></p>
                </div>

                <div className="card">
                    <h3>Capitão América: O Soldado Invernal</h3>
                    <p>Steve Rogers descobre uma conspiração dentro da S.H.I.E.L.D. envolvendo seu antigo amigo Bucky Barnes. <NavLink to={"news/capitao-america-o-soldado-invernal"}>Leia mais</NavLink></p>
                </div>

                <div className="card">
                    <h3>Guardiões da Galáxia</h3>
                    <p>Um grupo improvável de criminosos espaciais se une para impedir que Ronan destrua um planeta usando uma Joia do Infinito. <NavLink to={"news/guardioes-da-galaxia"}>Leia mais</NavLink></p>
                </div>

                <div className="card">
                    <h3>Guardiões da Galáxia Vol. 2</h3>
                    <p>Os Guardiões descobrem a verdadeira origem de Peter Quill enquanto enfrentam uma ameaça que coloca toda a equipe em perigo. <NavLink to={"news/guardioes-da-galaxia-vol-2"}>Leia mais</NavLink></p>
                </div>

                <div className="card">
                    <h3>Vingadores: Era de Ultron</h3>
                    <p>Os Vingadores criam uma inteligência artificial que se torna uma ameaça global para a humanidade. <NavLink to={"news/vingadores-era-de-ultron"}>Leia mais</NavLink></p>
                </div>

                <div className="card">
                    <h3>Homem-Formiga</h3>
                    <p>Scott Lang se torna o Homem-Formiga e precisa impedir que uma tecnologia capaz de encolher pessoas seja transformada em arma. <NavLink to={"news/homem-formiga"}>Leia mais</NavLink></p>
                </div>

                <div className="card">
                    <h3>Capitão América: Guerra Civil</h3>
                    <p>Os Vingadores se dividem sobre o controle governamental dos super-heróis, colocando Capitão América e Homem de Ferro em lados opostos. <NavLink to={"news/capitao-america-guerra-civil"}>Leia mais</NavLink></p>
                </div>

                <div className="card">
                    <h3>Viúva Negra</h3>
                    <p>Natasha Romanoff confronta seu passado e enfrenta a organização que transformou garotas em assassinas. <NavLink to={"news/viuva-negra"}>Leia mais</NavLink></p>
                </div>

                <div className="card">
                    <h3>Pantera Negra</h3>
                    <p>T'Challa retorna a Wakanda para assumir o trono e enfrenta seu primo Killmonger, que deseja tomar o país. <NavLink to={"news/pantera-negra"}>Leia mais</NavLink></p>
                </div>

                <div className="card">
                    <h3>Homem-Aranha: De Volta ao Lar</h3>
                    <p>Peter Parker tenta equilibrar sua vida escolar com sua carreira como Homem-Aranha enquanto enfrenta o vilão Abutre. <NavLink to={"news/homem-aranha-de-volta-ao-lar"}>Leia mais</NavLink></p>
                </div>

                <div className="card">
                    <h3>Doutor Estranho</h3>
                    <p>Um cirurgião arrogante aprende magia e se torna o responsável por proteger a Terra de ameaças místicas. <NavLink to={"news/doutor-estranho"}>Leia mais</NavLink></p>
                </div>

                <div className="card">
                    <h3>Thor: Ragnarok</h3>
                    <p>Thor precisa escapar de um planeta distante e impedir sua irmã Hela de destruir Asgard. <NavLink to={"news/thor-ragnarok"}>Leia mais</NavLink></p>
                </div>

                <div className="card">
                    <h3>Homem-Formiga e a Vespa</h3>
                    <p>Scott Lang tenta resgatar Janet van Dyne do Reino Quântico enquanto enfrenta uma nova inimiga chamada Fantasma. <NavLink to={"news/homem-formiga-e-a-vespa"}>Leia mais</NavLink></p>
                </div>

                <div className="card">
                    <h3>Vingadores: Guerra Infinita</h3>
                    <p>Thanos reúne as Joias do Infinito para eliminar metade da vida do universo. <NavLink to={"news/vingadores-guerra-infinita"}>Leia mais</NavLink></p>
                </div>

                <div className="card">
                    <h3>Vingadores: Ultimato</h3>
                    <p>Os Vingadores sobreviventes tentam reverter o estalo de Thanos e trazer de volta todos que desapareceram. <NavLink to={"news/vingadores-ultimato"}>Leia mais</NavLink></p>
                </div>

            </section>

            <section className="comentarios">
                <h2>Comentários dos usuários</h2>

                {comentarios.map((comentario, index) => (
                    <div className="card" key={index}>
                        <h3>{comentario.filme}</h3>
                        <p><strong>Usuário:</strong> {comentario.nome}</p>
                        <p><strong>Nota:</strong> {comentario.nota}</p>
                        <p>{comentario.comentario}</p>
                    </div>
                ))}
            </section>
        </>
    );
}

export default Inicio;