import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import { rootReducers } from "./Reducer";
import state from "./songsData.json";
// console.log(state);

const store = createStore(rootReducers, state, applyMiddleware(thunk));

// store.subscribe(() => {
// console.log(store.getState());
// })

export default store;
