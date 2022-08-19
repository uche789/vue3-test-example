<template>
  <div class="book-item">
    <n-space>
      <n-card class="book-item__thumb" :bordered="false">
        <img :src="book.thumbnailUrl" :alt="book.title" />
      </n-card>
      <n-card class="book-item__short-detail" :bordered="false">
        <h3>{{ book.title }}</h3>
        <div><strong>Author(s):</strong> {{ book.authors.join(", ") }}</div>
        <div><strong>ISBN:</strong> {{ book.isbn }}</div>
        <div v-if="book.categories && book.categories.length > 0">
          <strong>Category:</strong> {{ book.categories.join(", ") }}
        </div>
        <n-button
          data-id="add-to-cart"
          type="primary"
          @click="$emit('addToCart')"
        >
          Add to cart
        </n-button>
      </n-card>
    </n-space>
    <n-card>
      <div v-if="book.longDescription" class="book-item__description">
        {{ book.longDescription }}
      </div>
    </n-card>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { NCard, NSpace, NButton } from "naive-ui";
import { Book } from "@/services/bookService";

export default defineComponent({
  components: {
    NCard,
    NSpace,
    NButton,
  },
  props: {
    book: {
      type: Object as PropType<Book>,
      required: true,
    },
  },
});
</script>
