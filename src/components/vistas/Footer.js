

import React from 'react';
// import { Nav, Navbar, Form, FormControl } from 'react-bootstrap';
import './style.scss';
import './estilo.scss';

// get our fontawesome imports
import { faEnvelopeSquare,  faUser, faMailBulk, faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faYoutube,
    faFacebook,
    faTwitter,
    faInstagram,
    faFlipboard
  } from "@fortawesome/free-brands-svg-icons";

function Footer (){

  return (
            <div className="footer-section">
                <div className="container">
                        <div className="row eo_pt eo_pb">
                            <div className="col-lg-3 col-md-3 col-sm-6">
                            <div className="footer-widget">
                            <div className="footer-widget-title">
                            <h4 className="widget-title">Contacto</h4>
                            </div>

                            <div className="custom">
                            <h5>Fundación Española del Corazón</h5>
                            <div className="widget-contact">
                            <p><i className="fa fa-map-marker"></i>Calle de Nuestra Señora de Guadalupe, Nº 5, 28028, Madrid (España)</p>
                            <p><i className="fa fa-phone"></i>(+34) 917242370</p>
                            </div>
                            <ul className="social-icons">
                                <li><a rel="noopener noreferrer" href="https://www.facebook.com/saludcardiovascular" target="_blank">  <FontAwesomeIcon icon={faFacebook}  /></a></li>
                                <li><a rel="noopener noreferrer" href="https://twitter.com/cuidarcorazon" target="_blank"><FontAwesomeIcon icon={faTwitter}  /></a></li>
                                <li><a rel="noopener noreferrer" href="https://www.flickr.com/photos/fundacion-espanola-del-corazon/" target="_blank"><FontAwesomeIcon icon={faFlipboard}  /></a></li>
                                <li><a rel="noopener noreferrer" href="https://www.youtube.com/user/fundaciondelcorazon" target="_blank"><FontAwesomeIcon icon={faYoutube}  /></a></li>
                                <li><a rel="noopener noreferrer" href="https://www.instagram.com/cuidarcorazon/" target="_blank"><FontAwesomeIcon icon={faInstagram}  /></a></li>
                                <li><a rel="noopener noreferrer" href="/contacto.html"><FontAwesomeIcon icon={faEnvelopeSquare} /></a></li>
                            </ul>
                            </div>
                            </div>
                            </div>
                            <div className="col-lg-3 col-md-3 col-sm-3 col-xs-6">
                                <div className="footer-widget">
                                <div className="footer-widget-title">
                                <h4 className="widget-title">Información</h4>
                                </div>
                                <ul className="widget-links ">
                                <li className="item-659"><a href="/prevencion.html">Prevención</a></li><li className="item-660"><a href="/informacion-para-pacientes.html">Pacientes</a></li><li className="item-661 alias-parent-active"><a href="/nutricion.html">Nutrición</a></li><li className="item-662"><a href="/ejercicio.html">Ejercicio</a></li><li className="item-663"><a href="/blog-impulso-vital.html">Blog</a></li><li className="item-654"><a href="/dudas.html">Dudas</a></li></ul>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-2 col-sm-3 col-xs-6">
                                <div className="footer-widget">
                                <div className="footer-widget-title">
                                <h4 className="widget-title">FEC</h4>
                                </div>
                                <ul className="widget-links ">
                                <li className="item-655"><a href="/actualidad.html">Actividades</a></li><li className="item-656"><a href="/empresas.html">Programas</a></li><li className="item-657"><a href="/participa-en-la-fundacion.html">Colabora</a></li><li className="item-658"><a href="/participa-en-la-fundacion/corazon-y-salud.html">Revista</a></li><li className="item-769"><a href="/actualidad/eventos.html">Eventos</a></li><li className="item-770"><a href="/newsletter.html">Newsletter</a></li></ul>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-4 col-sm-12 contact-section">
                            <div className="footer-widget">           
                                <div className="footer-widget-title">
                                <h4 className="widget-title">Newsletter</h4>
                                </div>
                                <div className="form">
                                <p>Date de alta en la newsletter para mantenerte actualizado.</p>
                                </div>

                                <div>
                                        <form>
                                                <div className="form-group-inner">
                                                    <div className="icon-box">
                                                        <label htmlFor="MERGE1"><span><FontAwesomeIcon icon={faUser} /></span> User</label>
                                                    </div>
                                                    <div className="field-outer">
                                                        <input id="MERGE1" name="MERGE1" required="" type="text" placeholder="Nombre" data-validation-required-message="Introduce tu nombre"/>
                                                    </div>
                                                </div>
                                                <div className="form-group-inner">
                                                    <div className="icon-box">
                                                        <label htmlFor="MERGE1"><span><FontAwesomeIcon icon={faMailBulk} /></span> Email</label>
                                                    </div>
                                                    <div className="field-outer">
                                                        <input id="MERGE1" name="MERGE1" required="" type="text" placeholder="Email data-validation-required-message Introduce tu email"/>
                                                    </div>
                                                </div>

                                        </form>

                                </div>
                            </div>     
                            





                            </div>
                        </div>   
                        <div className="col-md-12 text-center">
		
                            <div className="custom">
                                <p className="copy-right">© 2020 - FEC 
                                - <a href="/">Inicio</a> 
                                - <a href="/aspectos-legales.html">Política de cookies</a> 
                                - <a href="/privacidad.html">Privacidad</a> 
                                - <a href="/sobre-esta-web.html">Sobre esta Web</a> 
                                - &nbsp;<a href="/contacto.html">Contacto</a> 
                                - <a href="/mapa-web.html">Mapa web</a>
                                </p>
                            </div>
                            <div className="scroll-to-top" ><span ><FontAwesomeIcon icon={faArrowUp} /></span></div>
                        </div>
                    </div>
                </div>
            
            );
}

export default Footer;



