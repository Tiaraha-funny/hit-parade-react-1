import { combineReducers } from "redux";
import songsData from "../songsData.json";

export function songsReducer(state = songsData, action) {
  switch (action.type) {
    case "ADD_SONG":
      return [...state, action.value];
    case "FAVORITE":
      return state.map((song) => {
        if (song.id === action.value) {
          return {
            ...song,
            isFavorited: !song.isFavorited,
          };
        }
        return song;
      });
    case "INCREMENT":
      return state.map((song) => {
        if (song.id === action.value) {
          return {
            ...song,
            upvotes: song.upvotes + 1,
          };
        }
        return song;
      });
    case "DECREMENT":
      return state.map((song) => {
        if (song.id === action.value) {
          return {
            ...song,
            downvotes: song.downvotes + 1,
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
    case "REMOVE_CART_ITEMS":
      return state.filter((cartItem) => cartItem.id !== action.value);
    case "EMPTY_CART":
      return [];
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

export const rootReducers = combineReducers({
  songsReducer,
  cartItemsReducers,
  stylesReducers,
});
