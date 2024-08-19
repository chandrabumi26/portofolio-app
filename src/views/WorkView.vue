<template>
  <LoadingDots v-if="isLoading"></LoadingDots>
  <div v-if="!isLoading" class="about">
    <div class="about__page-title-container">
      <span class="about__page-title">A small selection</span>
      <span class="about__page-title">of my work, enjoy!</span>
    </div>

    <div
      class="d-flex flex-column"
      v-for="(e, index) in projectsArr"
      :key="index"
    >
      <div class="d-flex justify-content-center w-100">
        <div class="about__divider-horizontal"></div>
      </div>

      <div class="about__projects-container" :class="returnReverse(index)">
        <div class="about__projects-img-container">
          <div class="about__projects-img-dots-container">
            <div class="about__projects-img-dots--green"></div>
            <div class="about__projects-img-dots--red"></div>
            <div class="about__projects-img-dots--yellow"></div>
          </div>
          <img :src="e.src" />
        </div>

        <div class="about__projects-descriptions-container">
          <div class="d-flex flex-column">
            <span class="about__projects-title">{{ e.title }}</span>
            <span class="about__projects-description">
              {{ e.description }}
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
import { onMounted, ref, onBeforeMount } from "vue";
import BspaceHome from "@/assets/img/bspace-home.png";
import { useStore } from "vuex";

const isLoading = ref(true);

const store = useStore();

const projectsArr = ref([
  {
    src: BspaceHome,
    title: "Bspace 2",
    description:
      "Bspace 2 is a enhancement project from Bspace 1 for a purpose of migration technologies from Vanilla Javascript, into Vue JS. In Bspace2, the base of tech stacks is Vue JS Version 3, TypeSript, and SASS.",
  },
  {
    src: BspaceHome,
    title: "Bspace 2",
    description:
      "Bspace 2 is a enhancement project from Bspace 1 for a purpose of migration technologies from Vanilla Javascript, into Vue JS. In Bspace2, the base of tech stacks is Vue JS Version 3, TypeSript, and SASS.",
  },
  {
    src: BspaceHome,
    title: "Bspace 2",
    description:
      "Bspace 2 is a enhancement project from Bspace 1 for a purpose of migration technologies from Vanilla Javascript, into Vue JS. In Bspace2, the base of tech stacks is Vue JS Version 3, TypeSript, and SASS.",
  },
  {
    src: BspaceHome,
    title: "Bspace 2",
    description:
      "Bspace 2 is a enhancement project from Bspace 1 for a purpose of migration technologies from Vanilla Javascript, into Vue JS. In Bspace2, the base of tech stacks is Vue JS Version 3, TypeSript, and SASS.",
  },
]);

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
