
<template>
  <div>
    <loading-overlay v-if="isSending"></loading-overlay>
    <form>
      <div class="row">
          <div class="col-12">
            <div class="row">
              <div class="col-12">
                <h2>${{ad.price}} - {{ad.title}}</h2>
              </div>
            </div>
            <div class="row">
              <div class="col-12">
                <p>{{ad.description}}</p>
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
            <div class="row">
              <div class="col-12">
                <h3>Contact Poster</h3>
                <hr>
              </div>
            </div>
            <div class="row">
              <div class="col-6 mb-2">
                <label>Email <span class="text-danger" v-if="errors.email">{{errors.email}}</span></label>
                <input type="email" class="form-control" v-model="message.email"/>
              </div>
              <div class="col-12 mb-2">
                <label>Message <span class="text-danger" v-if="errors.text">{{errors.text}}</span></label>
                <textarea class="form-control" v-model="message.text"></textarea>
              </div>
              <div class="col-12 text-right">
                <button class="btn btn-primary" type="button" v-on:click="sendMessage">Send</button>
              </div>
            </div>
          </div>
      </div>
    </form>
  </div>
</template>

<script>
import VueGallery from "vue-gallery";
import LoadingOverlay from "../loading-overlay/LoadingOverlay.vue";
export default {
  props: ["adId"],
  data() {
    return {
      index: null,
      ad: {},
      message: {
        adId: this.$props.adId
      },
      errors: {},
      isSending: false
    };
  },
  components: {
    gallery: VueGallery,
    LoadingOverlay
  },
  created: function() {
    this.$http.get("/api/ad/findOne/" + this.$props.adId).then(response => {
      if (response.status === 200) {
        this.ad = response.body;
      } else {
        // no ads found
      }
    });
  },
  methods: {
    sendMessage() {
      this.errors = {};
      this.isSending = true;
      this.$http.post("/api/ad/contact", this.message).then(
        response => {
          this.isSending = false;
          this.$toasted.show("Your message has been sent!");
        },
        response => {
          this.isSending = false;
          this.errors = response.data;
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