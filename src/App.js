import React, { Fragment, useState } from 'react';
import Formulario from './components/Formulario.js';

export default function App() {

  //Arreglo de todas las citas
  const [todasCitas, updateTodasCitas] = useState([]);
  return (
    <div className="App">
      <Fragment>
        <h1> Administrador de pacientes </h1>
        <div className='container'>
          <div className='row'>
            <div className='one-half column'>
              <Formulario />
            </div>
            <div className='one-half column'>
              2
            </div>
          </div>
        </div>
      </Fragment>

    </div>
  );
}


