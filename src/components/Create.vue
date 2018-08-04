<template>
  <div class="container mt-4">
    <div class="row">
      <div class="col-8">
        <h2>Create an Ad</h2>
        <create-ad></create-ad>
      </div>
      <div class="col-4">
        <h2>Tips</h2>
        <ol>
          <li class="pt-2">Research online and see how much your item sells for used to avoid low-ball pricing and to
sell your item quicker!
          </li>
          <li class="pt-2">
            Take photos of your item in a well lit space. Natural Light works best (near a window!) or use
photos from your actual wedding day!
          </li>
          <li class="pt-2">
            Always be safe when corresponding with buyers online.
          </li>
          <li class="pt-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean id orci pulvinar, euismod ex at.
          </li>
        </ol>
      </div>
    </div>
  </div>
</template>

<script>
import CreateAd from "./create-ad/CreateAd.vue";
import SearchBar from "./search-bar/SearchBar.vue";

export default {
  components: {
    CreateAd,
    SearchBar
  },
  name: "create",
  data() {
    return {};
  },
  created: function() {}
};
</script>

<style scoped>

</style>
