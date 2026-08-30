import { NavLink } from "react-router-dom"; 
 
function Netflix() { 
    return ( 
        <> 
            <section className="hero"> 
                <h1>Filmes da <span>Netflix</span>.</h1> 
                <p className="lead-text"> 
                    Uma seleção de filmes que fizeram sucesso na Netflix, com histórias de ação, aventura, suspense e drama para todos os gostos. 
                </p> 
 
              
            </section> 
 
            <section className="grid"> 
 
                <div className="card"> 
                    <h3>Alerta Vermelho</h3> 
                    <p>Um agente do FBI se une a um dos maiores ladrões de arte do mundo para encontrar uma valiosa relíquia. <NavLink to="/news/alerta-vermelho">Leia mais</NavLink></p> 
                </div> 
 
                <div className="card"> 
                    <h3>Não Olhe para Cima</h3> 
                    <p>Dois cientistas tentam alertar o mundo sobre uma ameaça que pode destruir o planeta. <NavLink to="/news/nao-olhe-para-cima">Leia mais</NavLink></p> 
                </div> 
 
                <div className="card"> 
                    <h3>Resgate</h3> 
                    <p>Um mercenário recebe uma perigosa missão para resgatar o filho de um poderoso criminoso. <NavLink to="/news/resgate">Leia mais</NavLink></p> 
                </div> 
 
                <div className="card"> 
                    <h3>Enola Holmes</h3> 
                    <p>A irmã mais nova de Sherlock Holmes embarca em uma aventura para encontrar sua mãe desaparecida. <NavLink to="/news/enola-holmes">Leia mais</NavLink></p> 
                </div> 
 
                <div className="card"> 
                    <h3>O Projeto Adam</h3> 
                    <p>Um piloto viaja no tempo e encontra uma versão mais jovem de si mesmo para tentar salvar o futuro. <NavLink to="/news/o-projeto-adam">Leia mais</NavLink></p> 
                </div> 
 
            </section> 
        </> 
    ); 
} 
 
export default Netflix;