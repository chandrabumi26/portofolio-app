<template>
  <LoadingDots v-if="isLoading"></LoadingDots>
  <div v-else class="detail">
    <div class="detail__title-container">
      <span class="detail__title--large">{{ workDetail.project_name }}</span>
      <div class="detail__tech-stacks-container">
        <span
          v-for="(e, index) in workDetail.tech_stacks"
          :key="index"
          class="detail__small-text"
          >{{ e }}</span
        >
      </div>
    </div>
    <div class="detail__img-container">
      <img
        :src="`data:image/png;base64,${workDetail.project_base_picture}`"
        width="1200"
      />
    </div>
    <div class="detail__description-container">
      <span>
        {{ workDetail.project_description }}
      </span>
    </div>
    <div class="d-flex justify-content-center w-100">
      <div class="detail__divider-horizontal"></div>
    </div>
    <span class="detail__title--small">{{
      `My work in ${workDetail.project_name}`
    }}</span>
    <div
      class="d-flex flex-column align-items-center"
      v-for="(e, index) in workDetail.project_detailed"
      :key="index"
    >
      <div class="detail__projects-img-container">
        <div class="detail__projects-img-dots-container">
          <div class="detail__projects-img-dots--green"></div>
          <div class="detail__projects-img-dots--red"></div>
          <div class="detail__projects-img-dots--yellow"></div>
        </div>
        <img :src="`data:image/png;base64,${e.project_features_picture}`" />
      </div>

      <div class="detail__projects-descriptions-container">
        <span class="detail__projects-title">{{
          e.project_features_name
        }}</span>
        <span class="detail__projects-description">
          {{ e.project_features_description }}
        </span>
        <button
          @click="goRoute(e.project_features_name)"
          v-if="
            route.params.name === 'bspace' &&
            e.project_features_name !== 'Inventory Dashboard'
          "
          class="detail__projects-button"
        >
          View Detail
        </button>
      </div>

      <div class="d-flex justify-content-center w-100">
        <div class="detail__divider-horizontal"></div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import LoadingDots from "@/components/DotsLoading.vue";
import { onBeforeMount, computed, ref, watch } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useStore } from "vuex";

const route = useRoute();

const router = useRouter();

const isLoading = ref(true);

const store = useStore();

const workDetail = computed(() => {
  return store.getters["WorkProjectModule/GET_WORK_DETAIL"];
});

const goRoute = (e: string) => {
  switch (e) {
    case "Requisition":
      router.push({ name: "bspacedetail", params: { name: "requisition" } });
      break;
    case "Migo Online":
      router.push({ name: "bspacedetail", params: { name: "migo" } });
      break;
    case "Pricelist":
      router.push({ name: "bspacedetail", params: { name: "pricelist" } });
      break;
  }
};

onBeforeMount(async () => {
  const routeParams = route.params.name;
  let id = "";
  switch (routeParams) {
    case "bspace":
      id = "21";
      await store.dispatch("WorkProjectModule/CALL_WORK_PROJECT_DETAIL", id);
      isLoading.value = false;
      break;
    case "mld":
      id = "20";
      await store.dispatch("WorkProjectModule/CALL_WORK_PROJECT_DETAIL", id);
      isLoading.value = false;
      break;
    case "requisition":
      id = "22";
      await store.dispatch("WorkProjectModule/CALL_WORK_PROJECT_DETAIL", id);
      isLoading.value = false;
      break;
    case "migo":
      id = "24";
      await store.dispatch("WorkProjectModule/CALL_WORK_PROJECT_DETAIL", id);
      isLoading.value = false;
      break;
    case "pricelist":
      id = "25";
      await store.dispatch("WorkProjectModule/CALL_WORK_PROJECT_DETAIL", id);
      isLoading.value = false;
      break;
    default:
      break;
  }
});

watch(
  () => {
    return route.name;
  },
  async () => {
    const routeParams = route.params.name;
    let id = "";
    switch (routeParams) {
      case "bspace":
        id = "21";
        await store.dispatch("WorkProjectModule/CALL_WORK_PROJECT_DETAIL", id);
        isLoading.value = false;
        break;
      case "mld":
        id = "20";
        await store.dispatch("WorkProjectModule/CALL_WORK_PROJECT_DETAIL", id);
        isLoading.value = false;
        break;
      case "requisition":
        id = "22";
        await store.dispatch("WorkProjectModule/CALL_WORK_PROJECT_DETAIL", id);
        isLoading.value = false;
        window.scroll({ top: 0, behavior: "smooth" });
        break;
      case "migo":
        id = "24";
        await store.dispatch("WorkProjectModule/CALL_WORK_PROJECT_DETAIL", id);
        isLoading.value = false;
        window.scroll({ top: 0, behavior: "smooth" });
        break;
      case "pricelist":
        id = "25";
        await store.dispatch("WorkProjectModule/CALL_WORK_PROJECT_DETAIL", id);
        isLoading.value = false;
        window.scroll({ top: 0, behavior: "smooth" });
        break;
      default:
        break;
    }
  }
);
</script>

<style lang="scss" scoped>
@import "@/assets/scss/__detail.scss";
</style>
