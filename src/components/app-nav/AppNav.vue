
<template>
  <div class="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 bg-white border-bottom box-shadow">
    <h5 class="my-0 mr-md-auto font-weight-normal">Reclaimed Wedding</h5>
    <nav class="my-2 my-md-0 mr-md-3">
      <router-link  class="p-2 text-dark" href="#" to="/ad-list">Search</router-link>
      <router-link  class="p-2 text-dark" href="#" to="/create">Create an Ad</router-link>
      <router-link  class="p-2 text-dark" href="#" to="/recently-added">Recently Added</router-link>
      <router-link  class="p-2 text-dark" href="#" to="/search">Your Ads</router-link>
      <router-link  class="p-2 text-dark" href="#" to="/vendors">Vendors</router-link>
      <router-link  class="p-2 text-dark" href="#" to="/vendor-application">Become A Vendor</router-link>
      <router-link  class="p-2 text-dark" href="#" to="/about-us">About Us</router-link>
    </nav>
  </div>
</template>




<script>
export default {};
</script>

<style scoped>
.btn-link,
.btn-link:focus,
.btn-link:active {
  border: 1px solid #fff;
  border-radius: 2px;
  color: #fff;
}

.btn-link:hover {
  border: 1px solid #969696;
  border-radius: 2px;
  color: #969696;
}
</style>