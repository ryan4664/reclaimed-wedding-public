<template>
  <div class="container mt-4">
    <h1 class="mb-0">Ads</h1>
    <search-bar @clicked="find"></search-bar>
    <div class="row" v-if="ads.length !== 0">
      <list-ad v-bind:ad="ad" @clicked="viewAd" v-for="ad in ads" v-bind:key="ad._id"></list-ad>
    </div>
    <div class="row" v-else>
      <div class="col text-center">
        <p>No ads found :(</p>
      </div>
    </div>
  </div>  
</template>

<script>
import ListAd from "./list-ad/ListAd.vue";
import SearchBar from "./search-bar/SearchBar.vue";
export default {
  components: {
    ListAd,
    SearchBar
  },
  name: "ad-list",
  props: ["list", "type"],
  data() {
    return {
      ads: []
    };
  },
  created: function() {
    // var path;
    // if (this.$route.query.search) {
    //   path = "?title=" + this.$route.query.search;
    // } else if (this.$route.query.type) {
    //   path = "?type=" + this.$route.query.type;
    // }
    // this.$http.get("/api/ad/find" + path).then(response => {
    //   if (response.status === 200) {
    //     this.ads = response.body;
    //   } else {
    //     this.ads = [];
    //   }
    // });
  },
  methods: {
    viewAd: function(id) {
      this.$router.push({
        name: "ad",
        params: { id: id }
      });
    },
    find: function(search) {
      this.$http.get(`/api/ad/find?title=${search}`).then(
        response => {
          this.ads = response.body;
        },
        function(err) {
          this.$toasted.show("Search term too small :(");
          this.ads = [];
        }
      );
    }
  }
};
</script>

<style scoped>
</style>
