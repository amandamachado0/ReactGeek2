
import { NavLink } from "react-router-dom"; 
function Header() { 
    return ( 
        <header> 
            <div className="nav-container"> 
                <a href="index.html" className="logo"> 
                    <span>▲</span> Universo Cinematográfico 
                </a> 
                <nav> 




                    
                    <ul className="menu"> 
                        <li className="menu-item"> 
                            <NavLink to="/">Inicio</NavLink> 
                        </li> 
                        <li className="menu-item"> 
                            <NavLink to="/sobre">Sobre</NavLink> 
                        </li> 
                        <li className="menu-item"> 
                            <NavLink to="/disney">Disney</NavLink> 
                        </li> 
                        <li className="menu-item"> 
                            <NavLink to="/hbo">HBO</NavLink> 
                        </li>
                        <li className="menu-item"> 
                            <NavLink to="/primevideo">Prime</NavLink> 
                        </li>
                        <li className="menu-item"> 
                            <NavLink to="/netflix">Netflix</NavLink> 
                        </li>
                        <li className="menu-item"> 
                            <NavLink to="/cinema">Cinema</NavLink> 
                        </li>
                    </ul> 
                </nav> 
            </div> 
        </header> 
    ) 
} 
 
export default Header;
