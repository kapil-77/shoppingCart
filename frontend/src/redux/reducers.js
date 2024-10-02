const initialState = {
  cart: [],
}

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TO_CART': {
      const itemInCart = state.cart.find(
        (item) => item.id === action.payload.id
      )
      if (itemInCart) {
        return {
          ...state,
          cart: state.cart.map((item) =>
            item.id === action.payload.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        }
      } else {
        return {
          ...state,
          cart: [...state.cart, { ...action.payload, quantity: 1 }],
        }
      }
    }
    case 'REMOVE_FROM_CART':
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload),
      }
    case 'INCREASE_QUANTITY':
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === action.payload.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        ),
      }
    case 'DECREASE_QUANTITY':
      const item = state.cart.find((item) => item.id === action.payload.id)
      if (item.quantity === 1) {
        return {
          ...state,
          cart: state.cart.filter((item) => item.id !== action.payload.id),
        }
      } else {
        return {
          ...state,
          cart: state.cart.map((item) =>
            item.id === action.payload.id
              ? { ...item, quantity: item.quantity - 1 }
              : item
          ),
        }
      }

    default:
      return state
  }
}

export default cartReducer
