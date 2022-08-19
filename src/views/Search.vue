<template>
  <div class="search" data-id="search-results">
    <h3>Search: {{ decodeURIComponent($route.query.searchTerm) }}</h3>
    <book v-for="book in books" :key="book.id" :book="book" />
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref, watch } from "vue";
import bookService, { Book as BookInterface } from "@/services/bookService";
import Book from "@/components/Book.vue";
import { useRoute } from "vue-router";

export default defineComponent({
  name: "Home",
  components: {
    Book,
  },
  setup() {
    const books = ref<BookInterface[]>([]);
    const route = useRoute();
    const update = () => {
      books.value = bookService.getByTitle(
        decodeURIComponent(route.query.searchTerm as string)
      );
    };

    onMounted(update);

    watch(() => route.query, update);

    return {
      books,
    };
  },
});
</script>
