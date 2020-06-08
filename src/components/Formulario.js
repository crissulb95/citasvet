import React, { Fragment, useState } from 'react';

const Formulario = () => {
    //crear state de citas con toda la información de la agenda
    const [cita, updateCita] = useState( {
        //cada propiedad tiene que tener el mismo nombre que en la propiedad name del input
        mascota: '',
        owner: '',
        fecha: '',
        hora: '',
        sintomas: ''
    } );
    //crear state para cuando exista un error en el llenado del formulario(este vacio un campo)
    const [error, updateError] = useState(false);

    //función que se activa cada vez que el usuario escribe en un input
    const handleChange = e => {
        updateCita( {//siempre utilizar la funcion del state, nunca cambiar directamente
            //para que no se reescriba todo el estado por cambiar solo un valor a la vez
            //se coloca una copia del state previo al cambio y luego se modifica como abajo 
            ...cita,
            //para poder cambiar el state en el campo en especifico segun el input
            [e.target.name]: e.target.value
        } );
    };

    //función que se activa al recibir un submit de un formulario
    const handleSubmit = e => {
        e.preventDefault(); //el preventDefault sirve igualmente en react como JS sin problemas
        
        //Validar todos los datos y revisar que esten correctamente escritos en los campos
        if( mascota.trim() === '' || owner.trim() === '' || fecha.trim() === '' || hora.trim() === '' || sintomas.trim() === '' ) {
            //si se sabe de un campo que esté vacío en el formulario, se actualiza el errorState
            updateError(true);
            return;
            
        }

        //Crear la cita y ubicarla en el state principal

        //Reiniciar el form
        
    }

    //extracción de los datos con destructuring
    const { mascota, owner, fecha, hora, sintomas } = cita;
    return ( 
        <Fragment>
            <h2>Apuntar cita</h2>

            {/*En caso de que haya un error y se cambie el stateError a true, se creará un ternario que habilite el mensaje de advertencia de que ha ocurrido un error */}
            {error 
            ? <p className='alerta-error'>Todos los campos son obligatorios</p>
            : null}

            <form
                onSubmit={handleSubmit}
            >
                <label htmlFor='mascota'>NOMBRE DE LA MASCOTA</label>
                <input 
                    type='text'
                    name='mascota'//valor de name igual estricto a la propiedad en el state
                    id='mascota'
                    value={mascota}
                    className='u-full-width'
                    placeholder='Nombre de la mascota'
                    onChange={handleChange}
                />

                <label htmlFor='owner'>NOMBRE DEL DUEÑO</label>
                <input 
                    type='text'
                    name='owner'
                    id='owner'
                    value={owner}
                    className='u-full-width'
                    placeholder='Nombre completo'
                    onChange={handleChange}
                />

                <label htmlFor='fecha'>CITA</label>
                <input 
                    type='date'
                    name='fecha'
                    id='fecha'
                    value={fecha}
                    className='u-full-width'
                    onChange={handleChange}
                />
                
                <label htmlFor='hora'>HORA</label>
                <input 
                    type='time'
                    name='hora'
                    id='hora'
                    value={hora}
                    className='u-full-width'
                    onChange={handleChange}
                />
                
                <label htmlFor='sintomas'>SÍNTOMAS</label>
                <textarea
                    className='u-full-width'
                    name='sintomas'
                    id='sintomas'
                    value={sintomas}
                    onChange={handleChange}
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