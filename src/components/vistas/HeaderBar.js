
import React from 'react';
// import { Nav, Navbar, Form, FormControl } from 'react-bootstrap';
import './style.scss';
import './estilo.scss';

// get our fontawesome imports
import {  faEnvelopeSquare, faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faYoutube,
    faFacebook,
    faTwitter,
    faGithub,
     faFlipboard
  } from "@fortawesome/free-brands-svg-icons";

function HeaderBar (){

  return (

<div className="header-bar">
    <div className="container">
    	<div className="row">
            <div className="col-md-4 col-sm-4 wrp-one">
		
                <div className="custom">
                    <div className="widget-tags">
                    <a href="/actualidad/otras.html">WorkShops</a>
                    <a href="/participa-en-la-fundacion/ciencia-cardiovascular.html">Lecturas</a>
                    <a href="/newsletter.html">Ejercicios</a>
                    </div>
                </div>
	        </div>
            <div className="col-md-4 col-sm-3 col-xs-6 wrp-two">
                <div className="header-widget">
                        <div className="widget-search">
                                <form action="/actualidad/eventos.html" method="post" className="hidden-xs">
                                    <input name="searchword" id="mod-search-searchword37" className="search-query" type="text" placeholder="Buscar..."/>
                                    <button type="submit" ><FontAwesomeIcon icon={faSearch} size="1x"/></button>
                                    <input type="hidden" name="task" value="search"/>
                                    <input type="hidden" name="option" value="com_search"/>
                                    <input type="hidden" name="Itemid" value="233"/>
                                </form>
                                {/* <ul className="social-icons visible-xs pull-right">
                                    <li>
                                        <a  role="button" data-toggle="collapse" 
                                            href="#collapseSearch" aria-expanded="false" aria-controls="collapseSearch">
                                       <FontAwesomeIcon icon={faSearch} size="2x"/>
                                        </a>
                                    </li>
                                </ul> */}
                        </div>
                </div>	
            </div>

            <div className="">
                <div className="custom">
                    <ul className="social-icons">
                        <li><a rel="noopener noreferrer" href="https://www.facebook.com/pperllamarrina1" target="_blank">  <FontAwesomeIcon icon={faFacebook} size="2x" /></a></li>
                        <li><a rel="noopener noreferrer" href="https://twitter.com/Ambar_de_PHP" target="_blank"><FontAwesomeIcon icon={faTwitter} size="2x" /></a></li>
                        <li><a rel="noopener noreferrer" href="https://www.flickr.com/photos/fundacion--del-corazon/" target="_blank"><FontAwesomeIcon icon={faFlipboard} size="2x" /></a></li>
                        <li><a rel="noopener noreferrer" href="https://www.youtube.com/" target="_blank"><FontAwesomeIcon icon={faYoutube} size="2x" /></a></li>
                        <li><a rel="noopener noreferrer" href="https://github.com/AmbarPHP" target="_blank"><FontAwesomeIcon icon={faGithub} size="2x" /></a></li>
                        <li><a rel="noopener noreferrer" href="/contacto.html"><FontAwesomeIcon icon={faEnvelopeSquare} size="2x"/></a></li>
                    </ul>
                </div>
            </div>
            
        </div>
    </div>    		
</div>


);
}

export default HeaderBar;



