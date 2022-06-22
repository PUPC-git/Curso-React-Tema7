import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { createAppStore } from './config/storeConfig';
	
export const borrarMensaje = (index) => {
  console.log(`borramos el mensaje ${index}`);
  return {
    type: 'BORRAR_MENSAJES',
    payload: index
  }
}

export const vaciarMensajes = () => {
  console.log("vaciamos todos los mensajes");
  return {
    type: 'VACIAR_MENSAJES'
  }
}
	
export const crearMensaje = (msg) => {
  console.log("creamos un mensaje");
  console.log(`valores recibidos:`);
  console.log(msg);
  console.log("FIN crearMensaje");

  return {
    type: 'CREAR_MENSAJES',
    payload: msg
  }	
}

export const leerMensaje = (index) => {
  console.log(`marcamos el mensaje ${index} como leido`);
  return {
      type: 'LEER_MENSAJES',
      payload: index
  }
}

const mensajes = (state = [], action) => {
  switch(action.type) {
    case 'BORRAR_MENSAJES':
      state.splice(action.payload, 1);
      return [...state];
    case 'VACIAR_MENSAJES':
      return [];
    case 'CREAR_MENSAJES':
      console.log(state);
      state.push(action.payload);
      return [...state];
    case 'LEER_MENSAJES':
      console.log(action.payload);
      console.log(state);
      state[action.payload].leido = !state[action.payload].leido;
      return [...state];
    default:	
      return [...state];
  }	
}

//let store = createAppStore();
	
let store = createStore(
  mensajes,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()	
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  //<React.StrictMode>
  <Provider store={store}>
    <App />
  </Provider>
  //</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
