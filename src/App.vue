<template>
  <div class="landing">
    <div class="landing__header">
      <div class="landing__header-group" @click="goRoute('home')">
        <div class="landing__box">
          <span>DC</span>
        </div>
        <span>Dorojatun Chandrabumi</span>
      </div>
      <div class="landing__header-group">
        <span @click="goRoute('about')">About</span>
        <span @click="goRoute('work')">Work</span>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, ref } from "vue";
import { useRouter } from "vue-router";

const isLoading = ref(true);

const router = useRouter();

const goRoute = (params: string) => {
  router.push({ name: params });
};

onMounted(() => {
  setTimeout(() => {
    isLoading.value = false;
  }, 1000);
});
</script>

<style lang="scss" scoped>
@import "@/assets/scss/__landing.scss";
</style>
