import { createStore } from "vuex";
import { v4 as uuidv4 } from "uuid";
import { Book, Product } from "@/services/bookService";

type Payload = { id: number; quantity?: number };

export default createStore({
  state: {
    cart: [] as Product[],
  },
  getters: {
    cart(state) {
      return state.cart;
    },
    itemCount(state) {
      return state.cart.length;
    },
    isCartEmpty(state) {
      return state.cart.length === 0;
    },
  },
  mutations: {
    ADD_TO_CART(state, payload: Book) {
      const existingProduct = state.cart.find(
        (product) => product.book.id === payload.id
      );

      if (existingProduct) {
        existingProduct.quantity += 1;
      } else {
        const id = uuidv4();
        state.cart.push({
          id,
          book: payload,
          quantity: 1,
        });
      }
    },
    REMOVE_FROM_CART(state, payload: Payload) {
      const index = state.cart.findIndex(
        (product) => product.book.id === payload.id
      );

      if (index === -1) return;

      if (payload.quantity === 1 && state.cart[index].quantity > 1) {
        state.cart[index].quantity -= 1;
        return;
      }

      state.cart.splice(index, 1);
    },
  },
  actions: {
    addToCart({ commit }, payload: Book) {
      commit("ADD_TO_CART", payload);
    },
    deleteFromCart({ commit }, payload: Payload) {
      commit("REMOVE_FROM_CART", payload);
    },
  },
  modules: {},
});
