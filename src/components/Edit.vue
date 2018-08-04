<template>
  <div class="container mt-4">
    <div class="row">
      <div class="col-12">
        <h2>Edit</h2>
        <edit-ad v-bind:adId="adId"></edit-ad>
      </div>
    </div>
  </div>
</template>

<script>
import EditAd from "./edit-ad/EditAd.vue";

export default {
  components: {
    EditAd
  },
  name: "edit",
  data() {
    return {};
  },
  created: function() {
    this.adId = this.$route.params.id;
  }
};
</script>

<style scoped>

</style>
