<template>
  <LoadingDots v-if="isLoading"></LoadingDots>
  <div v-if="!isLoading" class="about">
    <div class="about__page-title-container">
      <span class="about__page-title">A small selection</span>
      <span class="about__page-title">of my work, enjoy!</span>
    </div>

    <div
      class="d-flex flex-column"
      v-for="(e, index) in worklistArr"
      :key="index"
    >
      <div class="d-flex justify-content-center w-100">
        <div class="about__divider-horizontal"></div>
      </div>

      <div class="about__projects-container" :class="returnReverse(index)">
        <div
          class="about__projects-img-container"
          v-if="e.project_name !== 'Kantin Sehat'"
        >
          <div class="about__projects-img-dots-container">
            <div class="about__projects-img-dots--green"></div>
            <div class="about__projects-img-dots--red"></div>
            <div class="about__projects-img-dots--yellow"></div>
          </div>
          <img :src="`data:image/png;base64,${e.project_pictures}`" />
        </div>
        <img
          v-else
          :src="`data:image/png;base64,${e.project_pictures}`"
          width="600"
        />

        <div class="about__projects-descriptions-container">
          <div class="d-flex flex-column">
            <span class="about__projects-title">{{ e.project_name }}</span>
            <span class="about__projects-description">
              {{ e.project_description }}
            </span>
          </div>
          <button class="about__projects-button">VIEW PROJECT</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import LoadingDots from "@/components/DotsLoading.vue";
import { onMounted, ref, onBeforeMount, computed } from "vue";
import { useStore } from "vuex";

const isLoading = ref(true);

const store = useStore();

const worklistArr = computed(() => {
  return store.getters["WorkProjectModule/GET_WORK_LIST"];
});

const returnReverse = (e: number) => {
  if (e % 2 !== 0) return "flex-row-reverse";
};

onMounted(() => {
  setTimeout(() => {
    isLoading.value = false;
  }, 1000);
});

onBeforeMount(async () => {
  await store.dispatch("WorkProjectModule/CALL_WORK_LIST");
});
</script>

<style lang="scss" scoped>
@import "@/assets/scss/__about.scss";
</style>
