import React from 'react';
// import WeatherLocation from '../weatherLocation/index';
// import Suscribete from '../suscribete';
// import Calendario from '../ejercicios/Calendario/Calendario';
// import ButtonToast from '../ButtonToast';
// import Jumbotron from 'react-bootstrap/Jumbotron';
// import Container from 'react-bootstrap/Container';
// import Album from '../album/Album';
// import '../../css/weather-icons.css';
// import Login from './Login';
import MainHeader from './MainHeader';
// import ComponentCard from '../../components/ComponentCard';
// import { Pagination } from 'react-bootstrap';
import Footer from './Footer';
import Task from '../ejercicios/Task/Task';
import WeatherLocation from '../weatherLocation';
import CalculoHipotecario from '../CalculoHipotecario'

// esta esta la estructura de la Pagination, incorpora headers

const MainLayout =()=>{

    return (
        <div className="container containerBackground">
          <div className="row justify-content-between">
            <div className="col">
              <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 ">
               <MainHeader></MainHeader>
              </div>
            </div>
          </div>
          
         {/* <WeatherLocation></WeatherLocation> */}
         <CalculoHipotecario></CalculoHipotecario>
            <div className="row align-items-center ">
                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 containerBackground ">
                      <Footer></Footer>
                    </div>
                    
            </div>
        </div>
      );
}
export default MainLayout;