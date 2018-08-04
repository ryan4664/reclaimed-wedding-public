<template>
  <div class="container mt-4">
    <div class="row">
      <div class="col-12">
        <h3>Search For Your Ads</h3>
      </div>
    </div>
    <div class="row pt-3">
      <div class="col-12">
        <div class="input-group search-bar-input-group">
          <input type="text" class="form-control" placeholder="Search by your email address" v-model="email"  v-on:keyup.enter="search"/>
          <span class="input-group-btn">
              <button class="btn btn-lg btn-primary" type="button" v-on:click="search" >
                  Search
              </button>
          </span>
        </div>
      </div>
    </div>
    <div class="row mt-5">
      <div class="col-12">
        <h3>Your Ads</h3>
      </div>
    </div>
    <div class="row">
      <div class="col-12">
        <table class="table table-hover">
          <thead>
            <tr>
              <th class="w-20">Title</th>
              <th class="w-10">Price</th>
              <th class="w-70">Description</th>
            </tr>
          </thead>
          <tbody>
            <tr v-if="ads.length === 0">
              <td class="w-100 text-center" colspan="3">No Ads Found</td>
            </tr>
            <tr v-else v-for="ad in ads" v-bind:key="ad._id" v-on:click="editAd(ad._id)">
              <td>{{ad.title}}</td>
              <td>{{ad.price}}</td>
              <td>{{ad.description}}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      email: "",
      ads: []
    };
  },
  methods: {
    search: function() {
      this.$http.get("/api/ad/find?email=" + this.email).then(response => {
        if (response.status === 200 || response.body.length !== 0) {
          this.ads = response.body;
        }
      });
    },
    editAd: function(id) {
      this.$router.push({
        name: "edit",
        params: { id: id }
      });
    }
  }
};
</script>

<style scoped>
.btn-secondary {
  cursor: pointer;
}
</style>