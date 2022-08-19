<template>
  <div class="search">
    <label>Search title</label>
    <n-space horizontal>
      <n-input
        data-id="search-input"
        v-model:value="value"
        type="text"
        placeholder="Search title"
        maxlength="150"
      />
      <n-button
        data-id="search-submit-button"
        :disabled="disabled"
        @click="search"
        @keydown="search"
      >
        <n-icon>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 24 24"
          >
            <g
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <circle cx="10" cy="10" r="7"></circle>
              <path d="M21 21l-6-6"></path>
            </g>
          </svg>
        </n-icon>
      </n-button>
    </n-space>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from "vue";
import { NInput, NSpace, NButton, NIcon } from "naive-ui";

export default defineComponent({
  components: {
    NInput,
    NSpace,
    NButton,
    NIcon,
  },
  setup(_props, ctx) {
    const value = ref("");
    const disabled = computed(() => value.value.length < 4);
    const search = () => {
      ctx.emit("searchTerm", value.value);
      value.value = "";
    };

    return {
      value,
      disabled,
      search,
    };
  },
});
</script>

<style lang="scss">
.search {
  padding: 20px 0px;
}
</style>
