<template>
  <LoadingDots v-if="isLoading"></LoadingDots>
  <div v-if="!isLoading" class="about">
    <div class="about__page-title-container">
      <span class="about__page-title">Hi, I'm Chandra!</span>
      <span class="about__page-title">Front-End Developer</span>
    </div>
    <div class="about__profile">
      <div class="about__img-border"></div>
      <img :src="profileImg" />
      <div class="d-flex flex-column">
        <div class="about__profile-title-container">
          <span class="about__profile-title">Code.</span>
          <span class="about__profile-title">Nfl.</span>
          <span class="about__profile-title">Boxing.</span>
        </div>
        <div class="about__profile-title-container">
          <span class="about__profile-title">Rocket.</span>
          <span class="about__profile-title">Science.</span>
          <span class="about__profile-title">Rock.</span>
        </div>
        <span class="about__text-aboutme">
          I find my pleasure in making an application product, especially the
          process of development and tech stacks – which i think it's alluring.
          It should be mentioned that my tech stacks look like this at the
          moment : HTML, SASS/SCSS, VUE JS, TypeScript. On top of that i believe
          that developent process is crucial because it allows me to improve my
          skills and stay up-to-date with the latest coding methods and
          technologies. Outside of work, I enjoy spending my time nurturing
          creativity and patience by assembling Gunpla models and playing
          classical music on the keyboard
        </span>
      </div>
    </div>
    <div class="d-flex justify-content-center w-100">
      <div class="about__divider-horizontal"></div>
    </div>
    <div class="about__page-title-container">
      <span class="about__page-title">Working Experience</span>
    </div>
    <div class="d-flex flex-column">
      <div
        class="about__work-items"
        v-for="(e, index) in workItems"
        :key="index"
      >
        <div class="about__place-container">
          <span class="about__items-text-bold--place">{{ e.place }}</span>
          <span class="about__items-text-small--period">{{ e.period }}</span>
        </div>
        <div class="about__vertical-divider"></div>
        <div class="d-flex flex-column">
          <span class="about__items-text-bold--position">{{ e.position }}</span>
          <span class="about__items-text-small--url">{{ e.url }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, ref } from "vue";
import LoadingDots from "@/components/DotsLoading.vue";
import profileImg from "@/assets/img/profile.png";

const isLoading = ref(true);

const workItems = ref([
  {
    place: "PT Bukit Makmur Mandiri Utama",
    period: "Okt 2022 - Present",
    position: "Front-End Developer",
    url: "-",
  },
  {
    place: "Kamoro Maxima Integra",
    period: "Okt 2022 - Present",
    position: "Front-End Developer Support",
    url: "-",
  },
  {
    place: "AJITA",
    period: "Nov 2021 - Okt 2022",
    position: "Front-End Developer",
    url: "-",
  },
  {
    place: "PT Angkasa Pura II",
    period: "Jul 2019 - Sept 2019",
    position: "Full Stack Web Developer Intern",
    url: "-",
  },
]);

const setActive = (e: number, g: number) => {
  if (e <= g) return "active";
};

const returnBg = (e: string) => {
  if (e === "jQuery" || e === "Laravel" || e === "MySql" || e === "Java")
    return "bg-white";
};

onMounted(() => {
  setTimeout(() => {
    isLoading.value = false;
  }, 1000);
});
</script>

<style lang="scss" scoped>
@import "@/assets/scss/__about.scss";
</style>
