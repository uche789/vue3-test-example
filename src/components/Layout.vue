<template>
  <div class="book-app">
    <div>
      <n-space justify="space-between" align="center">
        <search @searchTerm="searchTerm" />
        <cart-icon @click="goToCart" :count="count" data-id="cart-icon" />
      </n-space>
    </div>
    <slot />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from "vue";
import Search from "@/components/Search.vue";
import { useRouter } from "vue-router";
import { NSpace } from "naive-ui";
import CartIcon from "@/components/CartIcon.vue";
import { useStore } from "vuex";

export default defineComponent({
  components: {
    Search,
    NSpace,
    CartIcon,
  },
  setup() {
    const router = useRouter();
    const store = useStore();
    const count = ref(store.getters.itemCount);

    watch(
      () => store.getters.itemCount,
      (newValue) => {
        count.value = newValue;
      }
    );

    const searchTerm = (searchTerm: string) => {
      router.push({
        path: "/search",
        query: {
          searchTerm: encodeURIComponent(searchTerm),
        },
      });
    };

    const goToCart = () =>
      router.push({
        path: "/cart",
      });

    return {
      searchTerm,
      goToCart,
      count,
    };
  },
});
</script>

<style>
.book-app {
  max-width: 800px;
  margin: auto;
}
</style>
