<template>
  <div id="app" class="grid">
    <div class="col-span-4">
      <navbar />
    </div>
    <div class="col-span-8 ml-52 relative flex flex-col">
      <router-view></router-view>
      <footer-area />
    </div>
  </div>
</template>

<script>
import Navbar from "./views/layout/nav-bar.vue";
import footerArea from "./views/layout/footer.vue";
export default {
  name: "App",
  components: {
    Navbar: Navbar,
    footerArea: footerArea,
  },
};
</script>

<style></style>
