/**
 * 1. To get something from local storage, you will get it as a String
 * 2. Convert this to js object/array
 */

const getCartFromLS = () => {
  const storedCartString = localStorage.getItem("cart");
  if (storedCartString) {
    const storedCart = JSON.parse(storedCartString);
    return storedCart;
  }
  return [];
};

const saveCartToLS = (cart) => {
  const cartStringified = JSON.stringify(cart);
  localStorage.setItem("cart", cartStringified);
};

const addItemToCartLS = (id) => {
  const cart = getCartFromLS();
  //   cart.push(id);
  const newCart = [...cart, id];

  // save new cart to LS
  saveCartToLS(newCart);
};

export { getCartFromLS as getStoredCart, addItemToCartLS as addToStoredCart };
