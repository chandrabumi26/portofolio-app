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
          Hello! I’m Chandra a self-taught & award-winning Digital Designer &
          Developer with over fifteen years of work experience. I started in my
          children’s room and got pro at renowned digital agencies nexum AG and
          Fork Unstable Media. Now I’m based in Salzburg Linz, Austria, working
          for Red Bull | fredmansky Dynatrace and enjoying life in the
          countryside. Find out more about me.
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
        <div class="d-flex flex-column">
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
    <div class="d-flex justify-content-center w-100">
      <div class="about__divider-horizontal"></div>
    </div>
    <div class="about__page-title-container">
      <span class="about__page-title">Skills</span>
    </div>
    <div class="about__card-container">
      <div class="about__cards"><span>a</span><span>b</span></div>
      <div class="about__cards">a</div>
      <div class="about__cards">a</div>
      <div class="about__cards">a</div>
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
    place: "PT Angkasa Pura II",
    period: "Jul 2019 - Sept 2019",
    position: "Full Stack Web Developer Intern",
    url: "http://dungdung.com",
  },
  {
    place: "PT Angkasa Pura II",
    period: "Jul 2019 - Sept 2019",
    position: "Full Stack Web Developer Intern",
    url: "http://dungdung.com",
  },
  {
    place: "PT Angkasa Pura II",
    period: "Jul 2019 - Sept 2019",
    position: "Full Stack Web Developer Intern",
    url: "http://dungdung.com",
  },
  {
    place: "PT Angkasa Pura II",
    period: "Jul 2019 - Sept 2019",
    position: "Full Stack Web Developer Intern",
    url: "http://dungdung.com",
  },
]);

onMounted(() => {
  setTimeout(() => {
    isLoading.value = false;
  }, 1000);
});
</script>

<style lang="scss" scoped>
@import "@/assets/scss/__about.scss";
</style>
