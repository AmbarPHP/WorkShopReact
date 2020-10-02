import React, { Component } from 'react';
import './App.css';

// import NavBar from './components/vistas/NavBar';
import MainLayout from './components/vistas/MainLayout';
import   ComponentRouter from './components/ComponentRouter';

function App() {

  return (
    <div className="App"> 
    <ComponentRouter></ComponentRouter>
    <MainLayout></MainLayout>

    </div>


  );
}

export default App;
