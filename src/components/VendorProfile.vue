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
  </div>  
</template>

<script>
export default {
  name: "vendor-profile",
  props: ["id"],
  data() {
    return {
      vendor: {}
    };
  },
  created: function() {
    this.$http.get(`/api/vendors/${this.$props.id}`).then(response => {
      if (response.status === 200) {
        this.vendor = response.data;
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
