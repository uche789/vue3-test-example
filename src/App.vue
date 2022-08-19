<template>
  <layout>
    <router-view />
  </layout>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Layout from "@/components/Layout.vue";

export default defineComponent({
  components: {
    Layout,
  },
});
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
