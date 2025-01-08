{/*import { createSlice } from "@reduxjs/toolkit";
import { Basket } from "../../models/basket";


interface BasketState {
  basket: Basket | null;
}

const initialState: BasketState = {
  basket: null
};

export const basketSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    setBasket: (state, action) => {
      console.log('new basket state', action.payload);
      state.basket = action.payload;
    }
  }
});

export const { setBasket } = basketSlice.actions;
*/}
import { createSlice } from "@reduxjs/toolkit";
import { Basket } from "../../models/basket";

interface BasketState {
    basket: Basket | null;
}

// Add this function to get initial basket from localStorage
const getInitialBasket = (): Basket | null => {
    try {
        const basket = localStorage.getItem('basket');
        return basket ? JSON.parse(basket) : null;
    } catch {
        return null;
    }
};

// Update initialState to use getInitialBasket
const initialState: BasketState = {
    basket: getInitialBasket() // Changed from null to getInitialBasket()
};

export const basketSlice = createSlice({
    name: 'basket',
    initialState,
    reducers: {
        setBasket: (state, action) => {
            console.log('new basket state', action.payload);
            state.basket = action.payload;
            // Optionally, you can also log the state after update
            console.log('basket updated in redux store', state.basket);
        }
    }
});

export const { setBasket } = basketSlice.actions;
