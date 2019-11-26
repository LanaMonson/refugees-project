import React from 'react';
import logo from './logo.svg';
import './App.css';
import Card from './components/card/';
import Navbar from './components/navbar';
import Button from './components/button';
import Footer from './components/footer';


function App() {
  return (
    <section>
      <Navbar/>
      <Card/>
      <Button/>
      <Footer/>
    </section>
    
  );
}

export default App;

