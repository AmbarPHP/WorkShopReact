import React from 'react';
// import logo from './logo.svg';
import './App.css';
import './css/weather-icons.css';
import WeatherLocation from './components/weatherLocation/index';
import Suscribete from './components/suscribete';
import Calendario from './components/ejercicios/Calendario/Calendario';
import ButtonToast from './components/ButtonToast';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Album from './components/album/Album';

//import AnimateList2 from './components/AnimateList/AnimateList2';



function App() {

 

  return (
    <div className="App"> 
    <header></header>
    <main></main>
        
      <WeatherLocation></WeatherLocation>
      <Suscribete></Suscribete>
      <Calendario></Calendario>
      <Container className="p-3">
    <Jumbotron>
      <h1 className="header">Welcome To React-Bootstrap</h1>
      <ButtonToast>
        We now have Toasts
        <span role="img" aria-label="tada">
          🎉
        </span>
      </ButtonToast>
    </Jumbotron>
    </Container>
    <Album></Album>
    <cardFlip></cardFlip>

   
    </div>


  );
}

export default App;
