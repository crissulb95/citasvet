import React, { Fragment, useState, useEffect} from 'react';
import Formulario from './components/Formulario.js';
import Cita from './components/Cita.js';

export default function App() {

  //citas iniciales en el LocalStorage
  let citasLS = JSON.parse(localStorage.getItem('citas'));
  if( !citasLS ) {
    citasLS = []
  } 

  //Arreglo de todas las citas
  //nuestro valor inicial será lo que se encuentre en el local storage, inicialmente
  //será solo un array vacío
  const [todasCitas, updateTodasCitas] = useState(citasLS);

  //useEffect aplica una funcion flecha solo cuando ocurre algun cambio dentro de la dependencia
  //señalada, en este caso cuando se agregue o elimine una cita de la agenda
  //tambien cuando recién se cargue la página, ideal para utilizar local storage
  useEffect( () => {
    citasLS 
    ? localStorage.setItem('citas', JSON.stringify(todasCitas)) 
    : localStorage.setItem('citas', JSON.stringify([]))
  }, [todasCitas, citasLS] );
  
  //funcion que tome las citas actuales y agregue la nueva
  const crearCita = cita => { 
    updateTodasCitas([
      ...todasCitas,
      cita
    ]);
  } ;

  //funcion que elimina citas por su ID
  const eliminarCita = id => {
    const nuevasCitas = todasCitas.filter( cita => cita.id !== id );
    updateTodasCitas( nuevasCitas );
    
  };

  return (
    <div className="App">
      <Fragment>
        <h1> Administrador de pacientes </h1>
        <div className='container'>
          <div className='row'>
            <div className='one-half column'>
              <Formulario 
              //se la pasamos como props para poder agendar las citas desde el formularios
                crearCita={crearCita}
              />
            </div>
            <div className='one-half column'>
              {todasCitas[0] 
              ? <h2>Todas las citas</h2>
              : <h2>No hay citas pendientes</h2>}
              {todasCitas.map(cita => (
                <Cita 
                  key={cita.id}
                  cita={cita}
                  eliminarCita={eliminarCita}
                />
              ))}
            </div>
          </div>
        </div>
      </Fragment>

    </div>
  );
}


