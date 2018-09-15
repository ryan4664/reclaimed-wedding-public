<template>
  <div class="container mt-4">
    <div class="row">
      <div class="col-12">
        <h2 class="mb-0">Recently Added</h2>
        <hr>
      </div>
    </div>
    <div class="row" v-if="ads.length !== 0">
      <list-ad v-bind:ad="ad" @clicked="viewAd" v-for="ad in ads" v-bind:key="ad._id"></list-ad>
    </div>
  </div>  
</template>

<script>
import ListAd from "./list-ad/ListAd.vue";
export default {
  components: {
    ListAd,
  },
  name: "recently-added",
  props: ["list", "type"],
  data() {
    return {
      ads: []
    };
  },
  created: function() {
    this.$http.get("/api/ad/find?latest=true").then(response => {
      if (response.status === 200) {
        this.ads = response.body;
      } else {
        this.ads = [];
      }
    });
  },
  methods: {
    viewAd: function(id) {
      this.$router.push({
        name: "ad",
        params: { id: id }
      });
    }
  }
};
</script>

<style scoped>
</style>
