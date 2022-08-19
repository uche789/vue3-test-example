<template>
  <n-space class="cart-icon" horizontal>
    <n-icon size="24">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        viewBox="0 0 512 512"
      >
        <circle
          cx="176"
          cy="416"
          r="16"
          fill="none"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="32"
        ></circle>
        <circle
          cx="400"
          cy="416"
          r="16"
          fill="none"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="32"
        ></circle>
        <path
          fill="none"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="32"
          d="M48 80h64l48 272h256"
        ></path>
        <path
          d="M160 288h249.44a8 8 0 0 0 7.85-6.43l28.8-144a8 8 0 0 0-7.85-9.57H128"
          fill="none"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="32"
        ></path>
      </svg>
    </n-icon>
    <div class="cart-icon__count">
      {{ count }}
    </div>
  </n-space>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { NSpace, NIcon } from "naive-ui";

export default defineComponent({
  components: {
    NSpace,
    NIcon,
  },
  props: {
    count: {
      type: Number,
      default: 0,
    },
  },
});
</script>

<style lang="scss" scoped>
.cart-icon {
  &__count {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #2c3e50;
    color: white;
    padding: 3px;
    height: 20px;
    min-width: 20px;
  }
}
</style>
