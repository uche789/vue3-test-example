<template>
  <n-card>
    <n-space>
      <div class="product-item__thumb">
        <img :src="product.book.thumbnailUrl" :alt="product.book.title" />
      </div>
      <div>
        <h3>{{ product.book.title }}</h3>
        <div>
          <n-button
            class="product-item__decrease"
            @click="$emit('decrease', product.book.id)"
          >
            <n-icon size="15"
              ><svg
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                viewBox="0 0 24 24"
              >
                <path
                  d="M5 12h14"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path></svg
            ></n-icon>
          </n-button>
          <div class="product-item__quantity">{{ product.quantity }}</div>
          <n-button
            class="product-item__increase"
            @click="$emit('increase', product.book.id)"
          >
            <n-icon size="15"
              ><svg
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                viewBox="0 0 16 16"
              >
                <g fill="none">
                  <path
                    d="M7.91 3.008L8 3a.5.5 0 0 1 .492.41l.008.09v4h4a.5.5 0 0 1 .492.41L13 8a.5.5 0 0 1-.41.492l-.09.008h-4v4a.5.5 0 0 1-.41.492L8 13a.5.5 0 0 1-.492-.41L7.5 12.5v-4h-4a.5.5 0 0 1-.492-.41L3 8a.5.5 0 0 1 .41-.492L3.5 7.5h4v-4a.5.5 0 0 1 .41-.492L8 3l-.09.008z"
                    fill="currentColor"
                  ></path>
                </g></svg
            ></n-icon>
          </n-button>
        </div>
        <n-button
          class="product-item__delete"
          @click="$emit('delete', product.book.id)"
        >
          <n-icon size="24">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              viewBox="0 0 24 24"
            >
              <path
                d="M16 9v10H8V9h8m-1.5-6h-5l-1 1H5v2h14V4h-3.5l-1-1zM18 7H6v12c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7z"
                fill="currentColor"
              ></path>
            </svg>
          </n-icon>
        </n-button>
      </div>
    </n-space>
  </n-card>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { NSpace, NCard, NIcon, NButton } from "naive-ui";
import { Product } from "@/services/bookService";

export default defineComponent({
  props: {
    product: {
      type: Object as PropType<Product>,
      required: true,
    },
  },
  components: {
    NCard,
    NSpace,
    NIcon,
    NButton,
  },
});
</script>

<style scoped lang="scss">
.product-item {
  &__quantity {
    display: inline-block;
    padding: 0 10px;
  }

  &__delete {
    margin-top: 10px;
  }

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
