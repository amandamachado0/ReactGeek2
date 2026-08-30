import { NavLink } from "react-router-dom"; 
 
function HBO() { 
    return ( 
        <> 
            <section className="hero"> 
                <h1>Filmes da <span>HBO</span>.</h1> 
                <p className="lead-text"> 
                    Conheça grandes produções que marcaram o cinema, com histórias emocionantes, aventuras e personagens inesquecíveis. 
                </p> 
 
               
            </section> 
 
            <section className="grid"> 
 
                <div className="card"> 
                    <h3>Duna</h3> 
                    <p>Paul Atreides embarca em uma jornada por um planeta desértico e descobre um destino maior do que imaginava. <NavLink to="/news/duna">Leia mais</NavLink></p> 
                </div> 
 
                <div className="card"> 
                    <h3>Barbie</h3> 
                    <p>Barbie deixa seu mundo perfeito e parte para o mundo real em uma jornada de descobertas. <NavLink to="/news/barbie">Leia mais</NavLink></p> 
                </div> 
 
                <div className="card"> 
                    <h3>The Batman</h3> 
                    <p>Batman investiga uma série de crimes em Gotham enquanto enfrenta um perigoso inimigo. <NavLink to="/news/the-batman">Leia mais</NavLink></p> 
                </div> 
 
                <div className="card"> 
                    <h3>Wonka</h3> 
                    <p>Um jovem Willy Wonka sonha em abrir sua própria fábrica de chocolates e enfrenta diversos desafios. <NavLink to="/news/wonka">Leia mais</NavLink></p> 
                </div> 
 
                <div className="card"> 
                    <h3>Joker</h3> 
                    <p>Arthur Fleck enfrenta dificuldades em sua vida e inicia uma transformação que muda completamente seu destino. <NavLink to="/news/joker">Leia mais</NavLink></p> 
                </div> 
 
            </section> 
        </> 
    ); 
} 
 
export default HBO;