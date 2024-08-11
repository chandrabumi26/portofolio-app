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
      <div class="about__cards" v-for="(g, index) in skillsItems" :key="index">
        <span class="about__cards-title"> {{ g.title }} </span>
        <img :src="g.src" :class="returnBg(g.title)" />
        <span class="about__cards-small-text">Level</span>
        <div class="dot-bar">
          <div
            v-for="e in 5"
            :key="e"
            class="dot"
            :class="setActive(e, g.level)"
          ></div>
        </div>
        <span class="about__cards-small-text">Frequently Used</span>
        <div class="dot-bar">
          <div
            v-for="e in 5"
            :key="e"
            class="dot"
            :class="setActive(e, g.frequently)"
          ></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, ref } from "vue";
import LoadingDots from "@/components/DotsLoading.vue";
import profileImg from "@/assets/img/profile.png";
import VueLogo from "@/assets/img/logos/vue.png";
import TsLogo from "@/assets/img/logos/typescript.png";
import JsLogo from "@/assets/img/logos/javascript.png";
import HtmlLogo from "@/assets/img/logos/html.png";
import CssLogo from "@/assets/img/logos/css.png";
import SassLogo from "@/assets/img/logos/sass.png";
import jQueryLogo from "@/assets/img/logos/jquery.svg";
import LaravelLogo from "@/assets/img/logos/laravel.png";
import PhpLogo from "@/assets/img/logos/php.png";
import MySqlLogo from "@/assets/img/logos/mysql.svg";
import JavaLogo from "@/assets/img/logos/java.png";

const isLoading = ref(true);

const skillsItems = ref([
  {
    title: "Vue JS",
    level: 4,
    frequently: 5,
    src: VueLogo,
  },
  {
    title: "TypeScript",
    level: 4,
    frequently: 5,
    src: TsLogo,
  },
  {
    title: "JavaScript",
    level: 4,
    frequently: 5,
    src: JsLogo,
  },
  {
    title: "HTML",
    level: 4,
    frequently: 5,
    src: HtmlLogo,
  },
  {
    title: "CSS",
    level: 4,
    frequently: 3,
    src: CssLogo,
  },
  {
    title: "SASS / SCSS",
    level: 4,
    frequently: 5,
    src: SassLogo,
  },
  {
    title: "jQuery",
    level: 3,
    frequently: 2,
    src: jQueryLogo,
  },
  {
    title: "Laravel",
    level: 2,
    frequently: 2,
    src: LaravelLogo,
  },
  {
    title: "PHP",
    level: 2,
    frequently: 2,
    src: PhpLogo,
  },
  {
    title: "MySql",
    level: 2,
    frequently: 2,
    src: MySqlLogo,
  },
  {
    title: "Java",
    level: 2,
    frequently: 1,
    src: JavaLogo,
  },
]);

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
