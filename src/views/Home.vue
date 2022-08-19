<template>
  <div class="home" data-id="main">
    <h3>Recommended:</h3>
    <book v-for="book in books" :key="book.id" :book="book" />
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";
import bookService, { Book as BookInterface } from "@/services/bookService";
import Book from "@/components/Book.vue";

export default defineComponent({
  name: "Home",
  components: {
    Book,
  },
  setup() {
    const books = ref<BookInterface[]>([]);

    onMounted(() => {
      books.value = bookService.getRecommendedBooks();
    });

    return {
      books,
    };
  },
});
</script>
