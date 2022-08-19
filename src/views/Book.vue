<template>
  <div class="book" data-id="book">
    <book-details v-if="book" @addToCart="addToCart" :book="book" />
  </div>
</template>

<script lang="ts">
import BookDetails from "@/components/BookDetails.vue";
import bookService from "@/services/bookService";
import { defineComponent, onBeforeMount, ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useStore } from "vuex";

export default defineComponent({
  components: { BookDetails },
  setup() {
    const route = useRoute();
    const router = useRouter();
    const store = useStore();

    onBeforeMount(() => {
      if (!route.params.id) {
        router.push({
          path: "/",
        });
      }
    });

    const id = Number(route.params.id);
    const book = ref(bookService.getBook(id));
    const addToCart = () => {
      store.dispatch("addToCart", book.value);
    };

    return {
      addToCart,
      book,
    };
  },
});
</script>
