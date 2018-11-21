<template>
  <div class="container mt-4">
    <div class="row">
      <div class="col-12">
        <h2>{{vendor.name}}</h2>
      </div>
    </div>
    <div class="row">
      <div class="col-6">        
        <p>{{vendor.description}}</p>
      </div>
    </div>
    <div class="row">
      <div class="col-12">
        <gallery :images="vendor.imageUrls" :index="index" @close="index = null"></gallery>
        <img class="image"
          v-for="(image, imageIndex) in vendor.imageUrls"
          :key="imageIndex"
          @click="index = imageIndex"
          :style="{ backgroundImage: 'url(' + image + ')'}">
      </div>
    </div>
  </div>  
</template>

<script>
import VueGallery from "vue-gallery";
import LoadingOverlay from "./loading-overlay/LoadingOverlay.vue";

export default {
  name: "vendor-profile",
  props: ["vendorId", "typeId"],
  components: {
    gallery: VueGallery,
    LoadingOverlay
  },
  data() {
    return {
      vendor: {},
      index: null,
    };
  },
  created: function() {
    this.$http.get(`/api/vendors/${this.$props.vendorId}`).then(response => {
      if (response.status === 200) {
        this.vendor = response.data;
        console.log(this.vendor);
      }
    });
  },
  methods: {
  }
};
</script>

<style scoped>
.image {
  width: 300px;
  height: 200px;
  background-size: cover;
  margin: 1em;
  border: 1px solid #f5f5f5;
  border-radius: 0.5em;
}

.image:hover {
  cursor: pointer;
}

a:not([href]):not([tabindex]) {
  color: #fff !important;
}
</style>