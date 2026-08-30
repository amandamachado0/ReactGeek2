import { NavLink } from "react-router-dom";
function Disney() {
    return (
        <>
            <section className="hero">
                <h1>Universo <span>Disney</span>.</h1>
                <p className="lead-text">
                    Uma coleção de filmes inesquecíveis que encantaram diferentes gerações e continuam fazendo parte da história do cinema.
                </p>

              
               
            </section>

            <section className="grid">

                <div className="card">
                    <h3>O Rei Leão</h3>
                    <p>Simba precisa enfrentar seu passado e descobrir seu verdadeiro lugar como rei. <NavLink to="/news/o-rei-leao">Leia mais</NavLink></p>
                </div>

                <div className="card">
                    <h3>Frozen</h3>
                    <p>Anna embarca em uma aventura para encontrar sua irmã e salvar o reino de Arendelle. <NavLink to="/news/frozen">Leia mais</NavLink></p>
                </div>

                <div className="card">
                    <h3>Moana</h3>
                    <p>Uma jovem navegadora parte em uma grande jornada para salvar seu povo. <NavLink to="/news/moana">Leia mais</NavLink></p>
                </div>

                <div className="card">
                    <h3>Encanto</h3>
                    <p>Mirabel tenta salvar a magia de sua família enquanto descobre mais sobre sua própria história. <NavLink to="/news/encanto">Leia mais</NavLink></p>
                </div>

                <div className="card">
                    <h3>Zootopia</h3>
                    <p>Uma policial e uma raposa trabalham juntas para solucionar um misterioso caso. <NavLink to="/news/zootopia">Leia mais</NavLink></p>
                </div>

                <div className="card">
                    <h3>Divertida Mente</h3>
                    <p>As emoções de uma garota precisam aprender a trabalhar juntas durante uma grande mudança. <NavLink to="/news/divertida-mente">Leia mais</NavLink></p>
                </div>

                <div className="card">
                    <h3>Mulan</h3>
                    <p>Uma jovem corajosa assume o lugar de seu pai no exército para proteger sua família. <NavLink to="/news/mulan">Leia mais</NavLink></p>
                </div>

                <div className="card">
                    <h3>Aladdin</h3>
                    <p>Um jovem encontra uma lâmpada mágica capaz de transformar completamente sua vida. <NavLink to="/news/aladdin">Leia mais</NavLink></p>
                </div>

                <div className="card">
                    <h3>A Pequena Sereia</h3>
                    <p>Ariel sonha em conhecer o mundo dos humanos e embarca em uma grande aventura. <NavLink to="/news/a-pequena-sereia">Leia mais</NavLink></p>
                </div>

                <div className="card">
                    <h3>Ratatouille</h3>
                    <p>Um rato apaixonado por culinária luta para realizar seu sonho de se tornar um grande chef. <NavLink to="/news/ratatouille">Leia mais</NavLink></p>
                </div>

            </section>
        </>
    );
}

export default Disney;
