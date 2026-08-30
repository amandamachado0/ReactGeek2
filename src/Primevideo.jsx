import { NavLink } from "react-router-dom"; 
 
function Primevideo() { 
    return ( 
        <> 
            <section className="hero"> 
                <h1>Filmes do <span>Prime Video</span>.</h1> 
                <p className="lead-text"> 
                    Uma seleção de filmes disponíveis no Prime Video, com histórias de ação, drama, romance e aventura para todos os gostos. 
                </p> 
 
              
              
            </section> 
 
            <section className="grid"> 
 
                <div className="card"> 
                    <h3>O Pacto</h3> 
                    <p>Um soldado americano retorna a uma zona de guerra para ajudar o homem que salvou sua vida. <NavLink to="/news/pacto">Leia mais</NavLink></p> 
                </div> 
 
                <div className="card"> 
                    <h3>Saltburn</h3> 
                    <p>Um estudante universitário se aproxima de uma família rica e acaba envolvido em um mundo cheio de mistérios. <NavLink to="/news/saltburn">Leia mais</NavLink></p> 
                </div> 
 
                <div className="card"> 
                    <h3>The Tomorrow War</h3> 
                    <p>Soldados do futuro chegam ao presente para recrutar pessoas para uma guerra contra uma ameaça alienígena. <NavLink to="/news/the-tomorrow-war">Leia mais</NavLink></p> 
                </div> 
 
                <div className="card"> 
                    <h3>A Ideia de Você</h3> 
                    <p>Uma mulher inicia um romance inesperado com o vocalista de uma famosa banda. <NavLink to="/news/a-ideia-de-voce">Leia mais</NavLink></p> 
                </div> 
 
                <div className="card"> 
                    <h3>Air: A História por Trás do Logo</h3> 
                    <p>A história da parceria que mudou o mundo dos esportes e criou uma das marcas mais famosas da história. <NavLink to="/news/air">Leia mais</NavLink></p> 
                </div> 
 
            </section> 
        </> 
    ); 
} 
 
export default Primevideo;