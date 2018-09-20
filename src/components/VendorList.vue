<template>
  <div class="container mt-4">
    <div class="row">
      <div class="col-12">
        <h2>{{vendorType}}</h2>
      </div>
    </div>
    <div class="row">
      <div class="col-12">
        <input type="text" class="form-control" placeholder="Filter vendors" v-model="searchText"/>
      </div>
    </div>
    <div class="row">
      <div class="col-md-4" v-for="vendor in filteredItems" v-bind:key="vendor._id" v-on:click="viewVendor(vendor._id)">
        <div class="card mb-4 box-shadow my-4">
          <img class="card-img-top" data-src="holder.js/100px225?theme=thumb&amp;bg=55595c&amp;fg=eceeef&amp;text=Vendor" alt="Thumbnail [100%x225]" style="height: 225px; width: 100%; display: block;" src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22348%22%20height%3D%22225%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20348%20225%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_163bddc3934%20text%20%7B%20fill%3A%23eceeef%3Bfont-weight%3Abold%3Bfont-family%3AArial%2C%20Helvetica%2C%20Open%20Sans%2C%20sans-serif%2C%20monospace%3Bfont-size%3A17pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_163bddc3934%22%3E%3Crect%20width%3D%22348%22%20height%3D%22225%22%20fill%3D%22%2355595c%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22116.71875%22%20y%3D%22120.15%22%3EVendor%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E" data-holder-rendered="true">
          <div class="card-body">
            <h3>{{vendor.name}}</h3>
            <p class="card-text">{{vendor.description}}</p>
            <div class="d-flex justify-content-between align-items-center">
              <div class="btn-group">
                <button type="button" class="btn btn-sm btn-outline-secondary" v-on:click="viewVendor(vendor._id)">View</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>  
</template>

<script>
export default {
  name: "vendor-list",
  props: ["type"],
  data() {
    return {
      vendors: [],
      vendorType: "",
      searchText: ""
    };
  },
  created: function() {
    this.vendorType = this.$props.type;
    this.$http.get("/api/vendorTypes/" + this.$props.type).then(response => {
      if (response.status === 200) {
        this.vendors = response.data;
      }
    });
  },
  methods: {
    viewVendor: function(id) {
      this.$router.push({
        name: "vendor-profile",
        params: { id: id }
      });
    }
  },
  computed: {
    filteredItems: function() {
      var query = this.searchText;
      return this.vendors.filter(function(vendor) {
        return vendor.name.toLowerCase().indexOf(query.toLowerCase()) !== -1;
      });
    }
  }
};
</script>



<style scoped>
.card:hover {
  background-color: #f1f1f1;
  cursor: pointer;
}
.card-title {
  margin-bottom: 0.75rem;
  text-align: center;
  font-size: 2em;
  font-weight: 300;
}
</style>
