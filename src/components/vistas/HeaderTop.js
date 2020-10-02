import React from 'react';
import './style.scss';
import './estilo.scss';
import logo from '../../img/logo.png';

// get our fontawesome imports
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


//   Muestra el segundo menu de arriba para abajo, incorpora una imagen de logo

function HeaderTop (){

  return (
        <div className="header-top">        
            <div className="container">
                    <div className="row clearfix justify-content-between">
                        <div className="col-lg-2 col-md-3 col-sm-12 col-xs-6">
                            <a className="logo" href="/">
                                <img src={logo} alt="Angular, React y Vue"/>
                                </a>
                        </div>
                    
                        <div className="col--lg-auto col-md-auto col-sm-12 col-xs-12 header-top-widget headerwidget-style2 ">
                            <div className="dropdown">
                                <button className="btn  dropdown-toggle toggleMenuTop toggleMenuTop" type="button" id="dropdownMenuButton" 
                                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                PRINCIPIOS BASICOS
                                <FontAwesomeIcon icon={faAngleDown} size="2x"/>
                                </button>
                                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                <a className="dropdown-item" href="/fec/saludo-institucional.html">Front End</a>
                                <a className="dropdown-item" href="/fec/historia.html">Javascript</a>
                                <a className="dropdown-item" href="/fec/historia.html">Node</a>
                                <a className="dropdown-item" href="/fec/historia.html">CSS</a>
                                <a className="dropdown-item" href="/fec/historia.html">HTML</a>
                                <a className="dropdown-item" href="/fec/historia.html">Angular</a>
                                <a className="dropdown-item" href="/fec/historia.html">React</a>
                                </div>
                            </div>
                        </div> 
                        <div className="col--lg-auto col-md-auto col-sm-12 col-xs-12 header-top-widget headerwidget-style2 ">   

                            <div className="dropdown">
                                <button className="btn  dropdown-toggle toggleMenuTop" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                ACTIVIDADES
                                <FontAwesomeIcon icon={faAngleDown} size="2x"/>
                                </button>
                                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                <a className="dropdown-item" href="/fec/saludo-institucional.html">Calendario de eventos</a>
                                <a className="dropdown-item" href="/fec/historia.html">Foros</a>
                                <a className="dropdown-item" href="/fec/historia.html">Lista de paginas referencia</a>
                                <a className="dropdown-item" href="/fec/historia.html">Foro</a>
                                <a className="dropdown-item" href="/fec/historia.html">Campañas</a>
                                </div>
                            </div>
                        </div> 
                        <div className="col--lg-auto col-md-auto col-sm-12 col-xs-12 header-top-widget headerwidget-style2 ">   
                            <div className="dropdown">
                                <button className="btn  dropdown-toggle toggleMenuTop" 
                                type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                EJERCICIOS
                                <FontAwesomeIcon icon={faAngleDown} size="2x"/>
                                </button>
                                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                <a className="dropdown-item" href="/fec/saludo-institucional.html">Saludo institucional</a>
                                <a className="dropdown-item" href="/fec/historia.html">Historia y Presidentes</a>
                                <a className="dropdown-item" href="/fec/historia.html">Patronato y Estatutos</a>
                                <a className="dropdown-item" href="/fec/historia.html">Asociaciones de pacientes</a>
                                <a className="dropdown-item" href="/fec/historia.html">Alianzas/Convenios</a>
                                </div>
                            </div>
                        </div> 
                        <div className="col--lg-auto col-md-auto col-sm-12 col-xs-12 header-top-widget headerwidget-style2 ">   

                            <div className="dropdown">
                                <button className="btn  dropdown-toggle toggleMenuTop" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                CALCULO INFONAVIT
                                <FontAwesomeIcon icon={faAngleDown} size="2x"/>
                                </button>
                                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                <a className="dropdown-item" href="/fec/saludo-institucional.html">Calendario de eventos</a>
                                <a className="dropdown-item" href="/fec/historia.html">Semana del Corazón</a>
                                <a className="dropdown-item" href="/fec/historia.html">Día Mundial del Corazón</a>
                                <a className="dropdown-item" href="/fec/historia.html">Foro</a>
                                <a className="dropdown-item" href="/fec/historia.html">Campañas</a>
                                </div>
                            </div>
                        </div> 
                        <div className="col--lg-auto col-md-auto col-sm-12 col-xs-12 header-top-widget headerwidget-style2 ">   

                            <div className="dropdown">
                                <button className="btn  dropdown-toggle toggleMenuTop" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                GITHUB
                                <FontAwesomeIcon icon={faAngleDown} size="2x"/>
                                </button>
                                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                <a className="dropdown-item" href="/fec/saludo-institucional.html">Calendario de eventos</a>
                                <a className="dropdown-item" href="/fec/historia.html">Semana del Corazón</a>
                                <a className="dropdown-item" href="/fec/historia.html">Día Mundial del Corazón</a>
                                <a className="dropdown-item" href="/fec/historia.html">Foro</a>
                                <a className="dropdown-item" href="/fec/historia.html">Campañas</a>
                                </div>
                            </div>
                        </div>                    
                    </div>
                                
            </div>
        </div>   
    );
}
export default HeaderTop;