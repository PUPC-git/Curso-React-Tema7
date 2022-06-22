export const ACTIONS_MENSAJES = {
    VACIAR: "VACIAR_MENSAJES",
    BORRAR: "BORRAR_MENSAJES",
    CREAR: "CREAR_MENSAJES",
    LEER: "LEER_MENSAJES"
}

export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';

export const vaciarMensajes = () => {
    return {
        type: ACTIONS_MENSAJES.VACIAR,
    }	
}

const initialState = {
    mensajes: []
};

const mensajes = (state = initialState.mensajes, action) => {
// ...
}

let nexTodoId = 0;

/**
 * 
 * @param {string} text 
 * @returns action ADD_TODO
 */
export const addTodo = (text) => {
    return {
        type: ADD_TODO,
        payload: {
            id: nexTodoId ++,
            text
        }
    }
}

/**
 * 
 * @param {string} id 
 * @returns action TOGGLE_TODO
 */
export const toggleTodo = (id) => {
    return {
        type: TOGGLE_TODO,
        payload: {
            id
        }
    }
}

/**
 * 
 * @param {string} filter 
 * @returns action SET_VISIBILITY_FILTER
 */
export const setVisibilityFilter = (filter) => {
    return {
        type: SET_VISIBILITY_FILTER,
        payload: {
            filter
        }
    }
}