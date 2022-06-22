/* Mensajes.view.jsx */
import React, { useState } from 'react';
import './Mensajes.view.scss';
import MensajesHeader from '../../components/MensajesHeader/MensajesHeader.component';
import MensajesTable from '../../components/MensajesTable/MensajesTable.component';
import { useSelector, useDispatch } from 'react-redux/es/exports';
import { borrarMensaje, crearMensaje, leerMensaje, vaciarMensajes } from '../../index';

export default function Mensajes({asunto, email, mensaje}) {
    console.log(`mensaje... ${asunto}`);
    const mensajes = useSelector(state => state);  // El estado inicial será '[]'
    const dispatch = useDispatch();
    //const [mensajes, setMensajes] = useState([]);

   /* let crear = ({asunto, email, mensaje}) => {
        console.log("creamos mensaje");
        console.log(`asunto ${asunto}`)
        let nuevo = {
            "asunto": asunto,
            "email": email,
            "mensaje": mensaje,
            "leido": false
        };
        dispatch(crearMensaje(nuevo));
    }*/

    let vaciar = () => { dispatch(vaciarMensajes()); }
    let eliminar = (index) => { dispatch(borrarMensaje(index)); }
    let leer = (index) => { dispatch(leerMensaje(index)) }

    /*let nuevoMensaje = (object) => {
        console.log('entramos');
        console.log(object);
        let nuevo = {
            "asunto": "yyyy",
            "email": "email@email.com",
            "mensaje": `Este es un mensaje de prueba... ${Math.random()}`,
            "leido": false
        };
        setMensajes(mensajes => [...mensajes, nuevo]);
    };*/

    /*let eliminarMensajes = () => {
        setMensajes([]);
    }*/

    /*let eliminarMensaje = (index) => {
        mensajes.splice(index, 1);
        setMensajes([...mensajes]);
    }*/

    /*
    let leerMensaje = (index) => {
        mensajes[index].leido = !mensajes[index].leido;
        setMensajes([...mensajes]);
    }
    */

    return (
        <div className="Mensajes">
            <MensajesHeader //clickNuevo={crear} 
                 clickEliminar={vaciar}></MensajesHeader>
    
            <MensajesTable mensajes={mensajes} clickEliminarUno={eliminar}
            clickMarcarLeido={leer}></MensajesTable>
        </div>
    );
}