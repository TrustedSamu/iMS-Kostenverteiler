import './App.css';
import React from 'react';

function App() {
  return (
    <div className="App">
      <h1>Utiligence iMS Meter</h1>
      <div className="fragen">
          
        
      <section>
  
  <h1>Bitte zutreffendes auswählen</h1>
  
  <input id='one' type='checkbox' />
  <label for='one'>
    <span></span>
    Verbraucher mit Einspeisung
    
  </label>
  
  <input id='two' type='checkbox' />
  <label for='two'>
    <span></span>
    Verbraucher ohne Einspeisung 
    
  </label>
  
  <input id='three' type='checkbox' />
  <label for='three'>
    <span></span>
    Verbraucher mit Speichereinheit
    
  </label>
  
  <input id='four' type='checkbox' />
  <label for='four'>
    <span></span>
    Verbraucher mit Ladeeinrichtung
    
  </label>
  
</section>
        
        </div>
        

    </div>
  );
}

export default App;
