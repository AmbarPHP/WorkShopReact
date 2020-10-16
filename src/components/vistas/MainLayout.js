import React from "react";
import WeatherLocation from '../weatherLocation/index';
// import Suscribete from '../suscribete';
import Calendario from '../ejercicios/Calendario/Calendario';
// import ButtonToast from '../ButtonToast';
// import Jumbotron from 'react-bootstrap/Jumbotron';
// import Container from 'react-bootstrap/Container';
// import Album from '../album/Album';
// import '../../css/weather-icons.css';
// import Login from './Login';
import MainHeader from "./MainHeader";
// import ComponentCard from '../../components/ComponentCard';
// import { Pagination } from 'react-bootstrap';
import Footer from "./Footer";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  withRouter,
} from "react-router-dom";
//import WeatherData from "../weatherLocation/WeatherData";
import CalculoHipotecario from "../CalculoHipotecario/CalculoHipotecarioInfonavit";
//import Task from "../ejercicios/Task/Task";
// import NavBar from './components/vistas/NavBar';

// esta esta la estructura de la Pagination, incorpora headers

const MainLayout = () => {
  return (
    <div className="container containerBackground">
      {/* <WeatherLocation></WeatherLocation> */}
      <Router>
        <div className="row justify-content-between">
          <div className="col">
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 ">
              <MainHeader></MainHeader>
            </div>
          </div>
        </div>
        <Switch>
          <Route exact path="/home">
            Home
          </Route>
          <Route exact path="/login">
            Login
          </Route>
          <Route
            exact
            path="/hipoteca"
            component={withRouter(CalculoHipotecario)}
          ></Route>
           <Route
            exact
            path="/calendario"
            component={withRouter(Calendario)}
          ></Route>
           <Route
            exact
            path="/wheather"
            component={withRouter(WeatherLocation)}
          ></Route>
           <Route exact path="/react_principios">
            react
          </Route>
        </Switch>
      </Router>

      <div className="row align-items-center ">
        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 containerBackground ">
          <Footer></Footer>
        </div>
      </div>
    </div>
  );
};
export default MainLayout;
