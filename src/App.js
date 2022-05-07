import './App.css';
import logothewitcher from './imagenes/logothewitcher.jpg';
import Boton from './componentes/Boton';
import Contador from './componentes/Contador';
import { useState } from 'react';

function App() { 

  const [numClicks, setNumClicks] = useState(0);

  const manejarClick = () =>{
    setNumClicks(numClicks + 1);
  };

  const reiniciarContador = () => {
    setNumClicks(0);
  };

  return (
    <div className="App">
    <div className='logo-contenedor'>
      <img className='witcher-logo' src={logothewitcher} alt="logo de the witcher"/>
    </div>
    <div className='contenedor-contador'>
      <Contador 
      numClicks={numClicks}
      />
      <Boton 
        texto='Click'
        esBotonDeClick={true}
        manejarClick={manejarClick}
      />
      <Boton
      texto='Reiniciar'
      esBotonDeClick={false}
      manejarClick={reiniciarContador}
      />
    </div>
    </div>
  );
}

export default App;
