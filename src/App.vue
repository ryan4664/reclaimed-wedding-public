<template>
  <div>
    <app-nav></app-nav>
    <div id="app">
      <router-view/>
    </div>
    <app-footer></app-footer>
  </div>
</template>

<script>
import AppNav from "./components/app-nav/AppNav.vue";
import AppFooter from "./components/app-footer/AppFooter.vue";
export default {
  name: "app",
  components: {
    AppNav,
    AppFooter
  }
};
</script>

<style>
#app {
  /* font-family: "Avenir", Helvetica, Arial, sans-serif; */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
h1 {
  font-weight: 100;
  font-size: 5em;
}
h2 {
  font-weight: 100;
  font-size: 3em;
}
body {
  /* background-image: linear-egradient(#ffffff, #efe4e1); */
  padding-bottom: 60px;
}
</style>
