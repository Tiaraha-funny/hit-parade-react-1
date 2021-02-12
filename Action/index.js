import songData from "../songsData.json";

export function setSongs(song) {
    return {
        type: "SET_SONGS",
        value: song
    }
}

export function setCartItems(cart) {
    return {
        type: "SET_CART_ITEMS",
        value: cart
    }
}

export function setStyles(style) {
    return {
        type: "SET_STYLES",
        value: style
    }
}

export function addToCart(song) {
	// push in an immutable way
  return {
    type: "ADD_TO_CART",
    value: song
  }
}

export function addSong(song) {
    return {
        type: "ADD_SONG",
        value: song
    }
}

// function removeCartItem(songId) {
	// const filteredCartItems = cartItems.filter(cartItem => cartItem.id !== songId);
	// setCartItems(filteredCartItems);
// }

export function emptyCart() {
    return {
        type: "EMPTY_CART",
    }
}

export function favoriteSong(like) {
    return {
        type: "FAVORITE",
        value: like
    }
}

export function decrement() {
    return {
        type: "DECREMENT"
    }
}