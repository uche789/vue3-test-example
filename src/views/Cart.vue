<template>
  <div class="cart" data-id="cart">
    <h1>Cart</h1>
    <empty-cart v-if="isCartEmpty" />
    <product
      v-else
      v-for="product in products"
      :product="product"
      :key="product.book.id"
      @delete="deleteItem"
      @increase="increase"
      @decrease="decrease"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from "vue";
import EmptyCart from "@/components/EmptyCart.vue";
import { useStore } from "vuex";
import Product from "@/components/Product.vue";
import { Product as ProductInterface } from "@/services/bookService";

export default defineComponent({
  name: "Home",
  components: {
    EmptyCart,
    Product,
  },
  setup() {
    const store = useStore();
    const products = ref<ProductInterface[]>(store.getters.cart);
    const isCartEmpty = ref(store.getters.isCartEmpty);

    watch(
      () => store.getters.isCartEmpty,
      (newValue) => {
        isCartEmpty.value = newValue;
      }
    );

    return {
      isCartEmpty,
      products,
      decrease: (id: number) =>
        store.dispatch("deleteFromCart", { id, quantity: 1 }),
      deleteItem: (id: number) => store.dispatch("deleteFromCart", { id }),
      increase: (id: number) => store.dispatch("addToCart", { id }),
    };
  },
});
</script>
