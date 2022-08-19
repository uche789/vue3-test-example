<template>
  <n-card class="book-item">
    <div class="book-item__thumb">
      <router-link
        data-id="book-link"
        :to="{ name: 'Book', params: { id: book.id } }"
      >
        <img :src="book.thumbnailUrl" :alt="book.title" />
      </router-link>
    </div>
    <div>
      <strong class="book-item__title">{{ book.title }}</strong>
    </div>
    <div class="book-item__authors">{{ book.authors.join(", ") }}</div>
  </n-card>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { NCard } from "naive-ui";
import { Book } from "@/services/bookService";

export default defineComponent({
  components: {
    NCard,
  },
  props: {
    book: {
      type: Object as PropType<Book>,
      required: true,
    },
  },
});
</script>

<style scoped lang="scss">
.book-item {
  &__thumb {
    width: 100px;
    height: 160px;

    img {
      object-fit: cover;
      width: 100%;
    }
  }
}
</style>
