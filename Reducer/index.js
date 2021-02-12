import { combineReducers } from "redux";
import songsData from "../songsData.json";

export function songsReducer(state = songsData, action) {
  switch (action.type) {
    case "ADD_SONG":
      return [...state, action.value];
    case "FAVORITE":
      return state.map(song => {
        if (song.id === action.value) {
          return {
            ...song,
            isFavorited: !song.isFavorited,
          };
        }
        return song;
      });
    default:
      return state;
  }
}

export function cartItemsReducers(state = [(state) => [...state]], action) {
  switch (action.type) {
    case "SET_CART_ITEMS":
      return [...state, action.value];
    case "ADD_TO_CART":
      return [...state, action.value];
    default:
      return state;
  }
}

const initialStyleState = ["Pop", "Salegy", "Reggae", "Rock", "Folk", "Rap"];

export function stylesReducers(state = initialStyleState, action) {
  switch (action.type) {
    case "SET_STYLES":
      return [...state];
    default:
      return state;
  }
}

export function favoriteReducer(state = 0, action) {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state + 1;
    default:
      return state;
  }
}

export const rootReducers = combineReducers({
  songsReducer,
  cartItemsReducers,
  stylesReducers,
  // favoriteReducer,
});
