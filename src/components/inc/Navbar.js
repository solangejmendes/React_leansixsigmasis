import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../images/logo.png';
//import { scrollTo } from 'react-scroll';

export default function Navbar() {

    return (
        <div>
               
            {/*--- Navbar --*/}
            <nav className="navbar fixed-top d-flex navbar-custom navbar-expand-lg navbar-collapse collpase py-3 py-lg-5 shadow ">
                
                <NavLink to="/" className="navbar-brand col-md-3">
                    <img className="logo" src={logo} alt="logo" width="15%" />
                    Lean Sis Sigma Sis  
                </NavLink>

                <div className="container" id="navbarSupportedContent">
                    <ul className="nav justify-content-center navbar-nav position-absolute top-50 start-50 translate-middle">
                        <li className="nav-item">
                            <NavLink 
                                to="/"
                                className="nav-link navbar-text"
                            >
                                Inicio
                            </NavLink>
                        </li>                
                        <li className="nav-item">
                            <NavLink 
                                to="/quiensomos"
                                className="nav-link navbar-text"
                            >
                                Quien Somos
                            </NavLink>
                        </li>           
                        <li className="nav-item" >
                            <NavLink 
                                to="/servicios" 
                                className="nav-link navbar-text"
                                smooth
                            >
                                Servicios
                            </NavLink>
                        </li>     
                        <li className="nav-item">
                            <NavLink 
                                to="/certificacion" 
                                className="nav-link navbar-text"
                            >
                                Certificación
                            </NavLink>
                        </li>  
                        <li className="nav-item">
                            <NavLink 
                                to="/servicios" 
                                className="nav-link navbar-text"
                            >
                                Transformación
                            </NavLink>
                        </li>   
                        <li className="nav-item">
                            <NavLink 
                                to="/contacto" 
                                className="nav-link navbar-text"
                            >
                                Contacto
                            </NavLink>
                        </li>
                    </ul>
                </div>

                    <button
                        className="navbar-toggler"
                        type="button"
                        data-mdb-toggle="collapse"
                        data-mdb-target="#navbarExample01"
                        aria-controls="navbarExample01"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <i className="fas fa-bars"></i>
                    </button>

                <form class="form-inline position-absolute top-50 end-0 translate-middle-y">
                    {/*--- <button class="btn btn-sm btn-outline-secondary btn-lg text-white" type="button">Llámanos 648 808 368</button>
                    <a href="#" class="btn btn-button1 btn-sm" role="button" aria-pressed="true">Primary link</a>--*/}
                    <a 
                        href="https://api.whatsapp.com/send?phone=34648808368&text=Gracias%20por%20contactar%20a%20Lean%20Six%20Sigma%20Sis.%20%C2%BFEn%20que%20te%20puedo%20ayudar?" 
                        className="btn btn-sm btn-outline-secondary btn-lg text-white" 
                        role="button" 
                        aria-pressed="true"
                        >
                            Llámanos 648 808 368
                    </a>
                </form>

            </nav>
            {/*-- Navbar --*/}

        </div>
    )
}
