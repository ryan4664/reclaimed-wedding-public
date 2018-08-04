<template>
    <main role="main">
      <div class="jumbotron">
        <div class="container p-5">
          <h1 class="text-center font-weight-light mb-0">Reclaimed Wedding</h1>
          <h3 class="text-center font-weight-light mt-3 mb-0">Why buy new when you don't have to?</h3>
          <div class="row mt-3 mb-0">
            <div class="col-6">
              <!-- <search-bar @clicked="find"></search-bar> -->
              <router-link  class="btn btn-outline-primary btn-lg btn-block" href="#" to="/ad-list">Search for an ad</router-link>
            </div>
            <div class="col-6">
              <router-link  class="btn btn-outline-primary btn-lg btn-block" href="#" to="/create">Create an ad</router-link>
            </div>
          </div>
          <p class="text-right">
            <!-- <a class="btn btn-outline-primary btn-lg" href="#" role="button">Post Now</a> -->
            
            </p>
        </div>
      </div>

      <div class="container my-5">
        <!-- Example row of columns -->
        <div class="row">
          <div class="col-md-4">
            <h3 class="font-weight-light">What is Reclaimed Wedding?</h3>
            <p>Weddings are expensive and tough to plan.  Reclaimed Wedding helps people find gently used items to lower the cost of their wedding.</p>
            <!-- <p><a class="btn btn-secondary" href="#" role="button">View details &raquo;</a></p> -->
          </div>
          <div class="col-md-4">
            <h3 class="font-weight-light">Does it cost money?</h3>
            <p>Posting an ad is entirely free!  Like we said, we want to help you lower the cost of your wedding, we've been there too!</p>
            <!-- <p><a class="btn btn-secondary" href="#" role="button">View details &raquo;</a></p> -->
          </div>
          <div class="col-md-4">
            <h3 class="font-weight-light">What are vendors?</h3>
            <p>Vendors are a collection of people and companies you might need to hire for your wedding!  We consolidated them into one place so you don't need to hunt all over comparing them.</p>
            <!-- <p><a class="btn btn-secondary" href="#" role="button">View details &raquo;</a></p> -->
          </div>
        </div>

      </div> <!-- /container -->

    </main>
</template>

<script>
import LoadingOverlay from "./loading-overlay/LoadingOverlay.vue";

export default {
  components: {
    LoadingOverlay
  },
  name: "home",
  data() {
    return {
      title: "Why Buy New When You Don't Have To!",
      isLoaded: true
    };
  }
};
</script>

<style scoped>
.row {
  text-align: center;
}
</style>
