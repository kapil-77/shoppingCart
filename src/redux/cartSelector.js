export const cartItemsSelector = (state) => state.cart.cart

export const cartTotalSelector = (state) => {
  const items = cartItemsSelector(state)
  return Math.round(
    items.reduce((total, item) => total + item.quantity * item.price, 0)
  )
}
