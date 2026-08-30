import { NavLink } from "react-router-dom"; 
 
function Cinema() { 
    return ( 
        <> 
            <section className="hero"> 
                <h1>Grandes filmes do <span>Cinema</span>.</h1> 
                <p className="lead-text"> 
                    Uma seleção de filmes que conquistaram o público e fizeram sucesso nas telonas, com histórias para todos os tipos de espectadores. 
                </p> 
 
            </section> 
 
            <section className="grid"> 
 
                <div className="card"> 
                    <h3>Avatar</h3> 
                    <p>Um soldado viaja para o planeta Pandora e acaba descobrindo um novo mundo e uma nova forma de viver. <NavLink to="/news/avatar">Leia mais</NavLink></p> 
                </div> 
 
                <div className="card"> 
                    <h3>Titanic</h3> 
                    <p>Dois jovens de classes sociais diferentes vivem uma intensa história de amor durante uma viagem inesquecível. <NavLink to="/news/titanic">Leia mais</NavLink></p> 
                </div> 
 
                <div className="card"> 
                    <h3>Jurassic Park</h3> 
                    <p>Um parque criado com dinossauros geneticamente recriados se transforma em um grande perigo. <NavLink to="/news/jurassic-park">Leia mais</NavLink></p> 
                </div> 
 
                <div className="card"> 
                    <h3>Velozes e Furiosos</h3> 
                    <p>Corridas, perseguições e uma equipe unida enfrentam desafios cada vez maiores. <NavLink to="/news/velozes-e-furiosos">Leia mais</NavLink></p> 
                </div> 
 
                <div className="card"> 
                    <h3>Missão: Impossível</h3> 
                    <p>Um agente secreto enfrenta missões perigosas para impedir grandes ameaças internacionais. <NavLink to="/news/missao-impossivel">Leia mais</NavLink></p> 
                </div> 
 
            </section> 
        </> 
    ); 
} 
 
export default Cinema;