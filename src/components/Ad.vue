<template>
  <div class="container mt-4">
    <div v-if="isCreated" class="row">
      <div class="col text-center">
        <div class="alert alert-success" role="alert">
            <h3>Your ad has been posted!</h3>
        </div>
      </div>
    </div>
    <div>
      <view-ad v-bind:adId="adId"></view-ad>
    </div>
  </div>
</template>

<script>
import ViewAd from "./view-ad/ViewAd.vue";

export default {
  components: {
    ViewAd
  },
  name: "ad",
  data() {
    return {
      ad: {}
    };
  },
  created: function() {
    this.adId = this.$route.params.id;
    this.isCreated = this.$route.params.created;
  }
};
</script>

<style scoped>

</style>
