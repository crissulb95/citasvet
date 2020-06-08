import React, { Fragment } from 'react';

const Formulario = () => {
    return ( 
        <Fragment>
            <h2>Apuntar cita</h2>

            <form>
                <label>NOMBRE DE LA MASCOTA</label>
                <input 
                    type='text'
                    name='mascota'
                    className='u-full-width'
                    placeholder='Nombre de la mascota'
                />

                <label>NOMBRE DEL DUEÑO</label>
                <input 
                    type='text'
                    name='owner'
                    className='u-full-width'
                    placeholder='Nombre completo'
                />

                <label>CITA</label>
                <input 
                    type='date'
                    name='fecha'
                    className='u-full-width'
                />
                
                <label>HORA</label>
                <input 
                    type='time'
                    name='hora'
                    className='u-full-width'
                />
                
                <label>SÍNTOMAS</label>
                <textarea
                    className='u-full-width'
                    name='sintomas'
                ></textarea>

                <button
                    type='submit'
                    className='u-full-width button-primary '
                >
                    Agendar cita
                </button>
            </form>
        </Fragment>
    );
}
 
export default Formulario;