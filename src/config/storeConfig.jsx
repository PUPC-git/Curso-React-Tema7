import { createStore } from "redux"
import { composeWithDevTools } from 'redux-devtools-extension';
import { rootReducer } from "../redux/reducers/rootReduce";
// npm i redux-devtools-extension --save-dev

export const createAppStore = () => {
    let store = createStore(rootReducer, composeWithDevTools())
    return store;
}