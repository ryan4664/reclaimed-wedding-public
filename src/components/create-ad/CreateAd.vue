<template>
  <form>
      <loading-overlay v-if="isSaving"></loading-overlay>
      <div class="row pt-3">
          <div class="col-6">
            <label>Title <span class="text-danger" v-if="errors.title">{{errors.title}}</span></label>
            <input type="text" class="form-control"  v-model="ad.title"/>
          </div>
          <div class="col-6">
            <label>Type  <span class="text-danger" v-if="errors.type">{{errors.type}}</span></label>
            <select class="form-control" v-model="ad.type">
                <option v-for="adType in adTypes" v-bind:value="adType" v-bind:key="adType._id">
                  {{ adType.type }}
              </option>
            </select>
          </div>
      </div>
      <div class="row pt-3">
          <div class="col">
              <label>Price  <span class="text-danger" v-if="errors.price">{{errors.price}}</span></label>
              <input type="text" class="form-control" v-model="ad.price"/>
          </div>
          <div class="col">
            <label>Email <span class="text-danger" v-if="errors.email">{{errors.email}}</span></label>
            <input type="email" class="form-control" v-model="ad.email"/>
          </div>
      </div>
      <div class="row pt-3">
          <div class="col">
            <label>Description <span class="text-danger" v-if="errors.description">{{errors.description}}</span></label>
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
      </div>
      <div class="row pt-3">
          <div class="col">
              <label>Password <span class="text-danger" v-if="errors.password">{{errors.password}}</span></label>
              <input type="text" class="form-control"  v-model="ad.password"/>
              <p>Keep this safe, you'll need this to edit and delete your ad once the item is sold.</p>
          </div>
      </div>
      <div class="row pt-3">
        <div class="col-12 upload">
          <ul>
            <li v-for="(file, index) in files" :key="file.id">
              <span>{{file.name}}</span> -
              <span>{{file.size | formatSize}}</span> -
              <span v-if="file.error">{{file.error}}</span>
              <span v-else-if="file.success">success</span>
              <span v-else-if="file.active">active</span>
              <span v-else-if="file.active">active</span>
              <span v-else></span>
            </li>
          </ul>
          <div>
            <vue-dropzone ref="myVueDropzone" id="dropzone" :options="dropzoneOptions"></vue-dropzone>
          </div>
        </div>
      </div>
      <div class="row pt-3">
        <div class="col">
          <div class="form-check p-1">
            <label class="form-check-label">
              <input type="checkbox" v-model="agreesToTerms"/>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem quibusdam laboriosam ut autem quas nisi delectus maxime totam, error ipsa atque, dicta ab corrupti similique repellat, temporibus iusto ex tempore.
            </label>
          </div>
        </div>
      </div>
      <div class="row pt-3">
          <div class="col text-right">
              <button type="button" class="btn btn-primary" v-on:click="createAd" :disabled="agreesToTerms === false" v-on:keyup.enter="createAd">Create</button>
          </div>
      </div>
    </form> 
</template>

<script>
import vueDropzone from "vue2-dropzone";
import "vue2-dropzone/dist/vue2Dropzone.css";
import LoadingOverlay from "../loading-overlay/LoadingOverlay.vue"

export default {
  components: {
    vueDropzone,
    LoadingOverlay
  },
  data() {
    return {
      ad: {},
      errors: {},
      files: [],
      adTypes: [],
      adLocations: [],
      agreesToTerms: false,
      dropzoneOptions: {
        url: "/api/tempUpload",
        thumbnailWidth: 150,
        maxFilesize: 10.5
      },
      isSaving : false
    };
  },
  created: function() {
    this.$http.get("/api/adTypes").then(response => {
      if (response.status === 200) {
        this.adTypes = response.body;
      }
    });
    this.$http.get("/api/adLocations").then(response => {
      if (response.status === 200) {
        this.adLocations = response.body;
      }
    });
  },
  methods: {
    createAd: function() {
      this.ad.files = this.$refs.myVueDropzone.getAcceptedFiles();
      this.isSaving = true
      this.$http.post("/api/ad", this.ad).then(
        response => {
          this.$router.push({
            name: "ad",
            params: {
              id: response.body._id,
              created: true
            }
          });
        },
        response => {
          this.errors = response.body;
          this.$toasted.show('There were some errors with your post, please review and try again!')
          this.isSaving = false
        }
      );
    }
  }
};
</script>

<style scoped>
textarea {
  height: 10em;
  overflow-y: scroll;
  resize: none;
}
.btn-primary {
  cursor: pointer;
}
.form-check {
  background-color: #dadada;
}
</style>
