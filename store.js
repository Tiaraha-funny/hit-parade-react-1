import { createStore } from "redux";
import { rootReducers } from "./Reducer";
import state from "./songsData.json";
// console.log(state);

const store = createStore(rootReducers, state);
console.log(store.getState());

// store.subscribe(() => {
    // console.log(store.getState());
// })

export default store;