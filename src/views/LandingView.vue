<template>
  <div class="landing">
    <div class="landing__header">
      <div class="landing__header-group">
        <div class="landing__box">
          <span>DC</span>
        </div>
        <span>Dorojatun Chandrabumi</span>
      </div>
      <div class="landing__header-group">
        <span>About</span>
        <span>Work</span>
      </div>
    </div>
    <LoadingDots v-if="isLoading"></LoadingDots>
    <Content v-if="!isLoading"></Content>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, ref } from "vue";
import LoadingDots from "@/components/DotsLoading.vue";
import Content from "@/components/landing-view/ContentView.vue";

const isLoading = ref(true);

onMounted(() => {
  setTimeout(() => {
    isLoading.value = false;
  }, 1000);
});
</script>

<style lang="scss" scoped>
@import "@/assets/scss/__landing.scss";
</style>
