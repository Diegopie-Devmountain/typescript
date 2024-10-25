import {CartLineItem, ItemData} from '../../types/cart'

interface CartState {
    cartItems: CartLineItem[]
}

const initialState: CartState = {
    cartItems: []
};

export default function storeReducer(state: CartState = initialState, action: any): CartState {

    switch (action.type) {


        case 'RESET_CART':
            return {
                ...state,
                cartItems: initialState.cartItems
            };

        case 'NEW_UPDATE_CART': {
            const itemToAdd: ItemData = action.payload;
            const itemToUpdate: CartLineItem | undefined = state.cartItems.find((itemInCart: CartLineItem) => itemInCart.id === itemToAdd.itemId);

            function createLineItem(item: ItemData): CartLineItem {
                return {
                    cartItemKey: item,
                    quantity: 1,
                    total: item.itemPrice,
                    id: item.itemId
                }
            }

            if (itemToUpdate) {
                return {
                    ...state,
                    cartItems: state.cartItems.map((item: CartLineItem) => {
                        if (item.id === itemToAdd.itemId) {
                            return {
                                ...item,
                                quantity: item.quantity + 1,
                                total: (item.quantity + 1) * item.cartItemKey.itemPrice
                            };
                        }
                        return item
                    })
                }
            } else {
                return {
                    ...state,
                    cartItems: [...state.cartItems, createLineItem(itemToAdd)]
                }
            }
        }

        case 'UPDATE_CART': {
            const itemToAdd = action.payload;
            const itemToUpdate = state.cartItems.find(
                (itemInCart) => itemInCart.id === itemToAdd.itemId
            );

            function createLineItem(item) {
                return {
                    cartItemKey: item,
                    quantity: 1,
                    total: item.itemPrice,
                    id: item.itemId
                };
            }
            if (itemToUpdate) {
                return {
                    ...state,
                    cartItems: state.cartItems.map((item) => {
                        if (item.id === itemToAdd.itemId) {
                            return {
                                ...item,
                                quantity: item.quantity + 1,
                                total: (item.quantity + 1) * item.cartItemKey.itemPrice
                            };
                        }
                        return item;
                    })
                };
            } else {
                return {
                    ...state,
                    cartItems: [...state.cartItems, createLineItem(itemToAdd)]
                };
            }
        }


        case 'DECRIMENT_ITEM': {
            const itemToDecrement = state.cartItems.find(
                (itemInCart) => itemInCart.id === action.payload.itemId
            );

            if (itemToDecrement && itemToDecrement.quantity > 1) {
                return {
                    ...state,
                    cartItems: state.cartItems.map((item) => {
                        if (item.id === action.payload.itemId) {
                            return {
                                ...item,
                                quantity: item.quantity - 1,
                                total: (item.quantity - 1) * item.cartItemKey.itemPrice
                            };
                        }
                        return item;
                    })
                };
            }

            return state;
        }


        case 'REMOVE_ITEM':
            const itemToRemove = state.cartItems.find(
                (itemInCart) => itemInCart.id === action.payload.itemId
            );

            if (itemToRemove) {
                return {
                    ...state,
                    cartItems: state.cartItems.filter(
                        (item) => item.id !== action.payload.itemId
                    )
                };
            }

            return state;


        default:
            return state;
    }
}