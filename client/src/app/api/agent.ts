{/*import axios from "axios";
import { Dispatch } from "redux";

import { Product } from "../models/product";
import basketService from "./basketService";

const Basket = {
    get: async() => {
        try {
            return await basketService.getBasket();
        } catch(error) {
            console.error("Failed to get Basket: ", error);
            throw error;
        }
    },
    addItem: async(product: Product, dispatch: Dispatch) => {
        try {
            const result = await basketService.addItemToBasket(product, 1, dispatch);
            return result;
        } catch(error) {
            console.error("Failed to add item to basket:", error);
            throw error;
        }
    },
    removeItem: async(itemId: number, dispatch: Dispatch) => {
        try {
            await basketService.remove(itemId, dispatch);
        } catch(error) {
            console.error("Failed to remove item:", error);
            throw error;
        }
    },
    incrementItemQuantity: async(itemId: number, quantity: number = 1, dispatch: Dispatch) => {
        try {
            await basketService.incrementItemQuantity(itemId, quantity, dispatch);
        } catch(error) {
            console.error("Failed to increment quantity:", error);
            throw error;
        }
    },
    decrementItemQuantity: async(itemId: number, quantity: number = 1, dispatch: Dispatch) => {
        try {
            await basketService.decrementItemQuantity(itemId, quantity, dispatch);
        } catch(error) {
            console.error("Failed to decrement quantity:", error);
            throw error;
        }
    }
}

export { Basket };
*/}
import axios from "axios";
import { Dispatch } from "redux";
import { Product } from "../models/product";
import basketService from "./basketService";

const Basket = {
    get: async () => {
        try {
            return await basketService.getBasket();
        } catch (error) {
            console.error("Failed to get Basket: ", error);
            throw error;
        }
    },
    
    addItem: async (product: Product, dispatch: Dispatch) => {
        try {
            const result = await basketService.addItemToBasket(product, 1, dispatch);
            return result;
        } catch (error) {
            console.error("Failed to add item to basket:", error);
            throw error;
        }
    },
    
    removeItem: async (itemId: number, dispatch: Dispatch) => {
        try {
            await basketService.removeItem(itemId, dispatch);
        } catch (error) {
            console.error("Failed to remove item:", error);
            throw error;
        }
    },
    
    incrementItemQuantity: async (itemId: number, quantity: number = 1, dispatch: Dispatch) => {
        try {
            await basketService.incrementItemQuantity(itemId, quantity, dispatch);
        } catch (error) {
            console.error("Failed to increment quantity:", error);
            throw error;
        }
    },
    
    decrementItemQuantity: async (itemId: number, quantity: number = 1, dispatch: Dispatch) => {
        try {
            await basketService.decrementItemQuantity(itemId, quantity, dispatch);
        } catch (error) {
            console.error("Failed to decrement quantity:", error);
            throw error;
        }
    }
};

export { Basket };