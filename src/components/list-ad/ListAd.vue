<template>
  <div class="col-md-4">
    <div class="card mb-4 box-shadow">
      <img class="card-img-top img-fluid" :src="ad.imageUrls[0]" alt="Card image cap" >
      <div class="card-body">
        <h3>{{ad.title}}</h3>
        <p class="card-text">{{ad.description}}</p>
        <div class="d-flex justify-content-between align-items-center">
          <div class="btn-group">
            <button type="button" class="btn btn-sm btn-outline-secondary" v-on:click="viewAd">View</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>




<script>
export default {
  props: ["ad"],
  data: function() {
    return {};
  },
  methods: {
    viewAd(event) {
      this.$emit("clicked", this.$props.ad._id);
    }
  }
};
</script>

<style scoped>
</style>