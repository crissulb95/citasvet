import React from 'react';
import PropTypes from 'prop-types';

const Cita = ({cita, eliminarCita}) => {
    const { mascota, owner, fecha, hora, sintomas,id } = cita;
    const handleClick = () => eliminarCita(id);
    
    return (<div className='cita'>
        <p> Mascota: <span>{mascota}</span></p>
        <p> Dueño: <span>{owner}</span></p>
        <p> Fecha: <span>{fecha}</span></p>
        <p> Hora: <span>{hora}</span></p>
        <p> Síntomas: <span>{sintomas}</span></p>

        <button
            className='button eliminar u-full-width'
            onClick={handleClick}
            //onClick={() => eliminarCita(cita.id)} llamando directamente a la funcion 
            //desde el prop, se elimina tambien el handleclick
        >Eliminar &times;</button>
    </div>)
 };

 Cita.propTypes = {
     cita: PropTypes.object.isRequired,
     eliminarCita: PropTypes.func.isRequired
 }

export default Cita;