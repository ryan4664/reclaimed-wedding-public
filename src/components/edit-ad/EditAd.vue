<template>
  <form>
      <div class="row pt-3">
          <div class="col">
            <label>Title</label>
            <input type="text" class="form-control"  v-model="ad.title"/>
          </div>
          <div class="col">
              <label>Password</label>
              <input type="text" class="form-control"  v-model="ad.password"/>
          </div>
      </div>
      <div class="row pt-3">
          <div class="col">
              <label>Price</label>
              <input type="text" class="form-control" v-model="ad.price"/>
          </div>
          <div class="col">
            <label>Email Address</label>
            <input type="email" class="form-control" v-model="ad.email"/>
          </div>
      </div>
      <div class="row pt-3">
          <div class="col">
            <label>Description</label>
            <textarea class="form-control" v-model="ad.description"></textarea>
          </div>
      </div>
      <div class="row pt-3">
        <div class="col">
          <label>Location  <span class="text-danger" v-if="errors.location">{{errors.location}}</span></label>
            <select class="form-control" v-model="ad.location">
                <option v-for="adLocation in adLocations" v-bind:value="adLocation" v-bind:key="adLocation._id">
                  {{ adLocation.description }}
              </option>
            </select>
        </div>
        <div class="col">
            <label>Type  <span class="text-danger" v-if="errors.type">{{errors.type}}</span></label>
            <select class="form-control" v-model="ad.type">
                <option v-for="adType in adTypes" v-bind:value="adType" v-bind:key="adType._id">
                  {{ adType.type }}
              </option>
            </select>
          </div>
      </div>
      <div class="row">
        <div class="col-12">
          <gallery :images="ad.imageUrls" :index="index" @close="index = null"></gallery>
          <img class="image"
            v-for="(image, imageIndex) in ad.imageUrls"
            :key="imageIndex"
            @click="index = imageIndex"
            :style="{ backgroundImage: 'url(' + image + ')'}">
        </div>
      </div>
      <div class="row pt-3">
          <div class="col text-right">
              <b-btn class="btn btn-danger" v-b-modal.deleteModal>Delete</b-btn>
              <button type="button" class="btn btn-primary" v-on:click="updateAd">Update</button>
          </div>
      </div>
      <div>

      <b-modal id="deleteModal" title="Remove Ad" @ok="deleteAd()">
        <div class="row">
          <div class="col">
            <p class="my-4">You can use this option if you have sold your ad or simply want to remove it.</p>
            <p class="my-4">Please be aware that this is permanent and cannot be reversed.  Please enter your password below to and click okay to delete your ad.</p>
          </div>
        </div>
        <div class="row">
          <div class="col">
            <label>Password</label>
            <input type="text" class="form-control"  v-model="deletePassword"/>
          </div>
        </div>
      </b-modal>
</div>

    </form> 
</template>

<script>
import VueGallery from "vue-gallery";
export default {
  props: ["adId"],
  components: {
    gallery: VueGallery
  },
  data() {
    return {
      index: null,
      ad: {},
      errors: [],
      adLocations: [],
      deletePassword: null
    };
  },
  created: function() {
    this.$http.get("/api/ad/findOne/" + this.$props.adId).then(
      response => {
        if (response.status === 200) {
          this.ad = response.body;
          console.log(this.ad);
        }
      },
      response => {
        if (response.status === 404) {
          this.$toasted.show(
            "We're sorry we could not find your ad, please try again!"
          );
          this.$router.push({
            name: "search"
          });
        }
      }
    );
    this.$http.get("/api/ads/types").then(response => {
      if (response.status === 200) {
        this.adTypes = response.body;
      }
    });
    this.$http.get("/api/ads/locations").then(response => {
      if (response.status === 200) {
        this.adLocations = response.body;
      }
    });
  },
  methods: {
    updateAd() {
      this.errors = {};
      this.$http.put("/api/ad", this.ad).then(
        response => {
          if (response.status === 200) {
            this.$router.push({
              name: "search"
            });
          }
        },
        response => {
          if (this.errors.password) {
            this.$toasted.show(
              "Incorrect password, please review and try again!"
            );
          } else if (this.errors) {
            this.errors = response.body;
            this.$toasted.show(
              "There were some errors with your post, please review and try again!"
            );
          }
        }
      );
    },
    deleteAd() {
      this.$http
        .delete(`/api/ad/remove/${this.ad._id}`, {
          password: this.deletePassword
        })
        .then(
          response => {
            if (response.status === 200) {
              this.$toasted.show("Your ad has been successfully removed!");
              this.$router.push({
                name: "search"
              });
            }
          },
          response => {
            if (response.body.password === "invalid") {
              this.$toasted.show(
                "Incorrect password, please review and try again!"
              );
            }
          }
        );
    }
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