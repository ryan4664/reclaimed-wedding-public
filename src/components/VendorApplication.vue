<template>
  <div class="container mt-4">
    <div class="row">
      <div class="col-12">
        <h2 class="my-0">Submit Your Application</h2>
        <hr />
      </div>
    </div>
    <div class="row" v-if="!submitted">
      <div class="col-12">
        <form>
            <div class="row pt-3">
                <div class="col-6">
                  <label>Your Name <span class="text-danger" v-if="errors.ownerName">{{errors.ownerName}}</span></label>
                  <input type="text" class="form-control"  v-model="vendor.ownerName"/>
                </div>
                <div class="col-6">
                  <label>Your Business Name <span class="text-danger" v-if="errors.vendorName">{{errors.vendorName}}</span></label>
                  <input type="text" class="form-control"  v-model="vendor.vendorName"/>
                </div>
            </div>
            <div class="row pt-3">
                <div class="col-6">
                  <label>Contact Email <span class="text-danger" v-if="errors.email">{{errors.email}}</span></label>
                  <input type="email" class="form-control" v-model="vendor.email"/>
                </div>
                <div class="col-6">
                  <label>Type <span class="text-danger" v-if="errors.type">{{errors.type}}</span></label>
                  <select class="form-control" v-model="vendor.type">
                      <option v-for="vendorType in vendorTypes" v-bind:value="vendorType" v-bind:key="vendorType._id">
                        {{ vendorType.type }}
                    </option>
                  </select>
                </div>
            </div>
            <div class="row pt-3">
                <div class="col">
                  <label>Description <span class="text-danger" v-if="errors.description">{{errors.description}}</span></label>
                  <textarea class="form-control" v-model="vendor.description"></textarea>
                </div>
            </div>
            <!-- <div class="row pt-3">
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
            </div> -->
            <div class="row pt-3">
                <div class="col text-right">
                    <button type="button" class="btn btn-primary" v-on:click="save" v-on:keyup.enter="save">Apply</button>
                </div>
            </div>
          </form> 
      </div>
    </div>
    <div class="row" v-if="submitted">
      <div class="col-12">
        <h3>Thanks!</h3>
      </div>
      <div class="col-12">
        <p>Your application has been submitted.  We will review your submission and contact you if we have any questions.  If your application is approved by our staff you will recieve an email notification letting you know your profile is live!</p>
      </div>
      <div class="col-12">
        <button class="btn btn-default" type="button" v-on:click="route">Home</button>
      </div>
    </div>
  </div>  
</template>

<script>
export default {
  name: "vendor-application",
  data() {
    return {
      vendor: {},
      errors: {},
      vendorTypes: [],
      submitted: false
    };
  },
  created: function() {
    this.$http.get("/api/vendors/types").then(response => {
      if (response.status === 200) {
        this.vendorTypes = response.body;
      }
    });
  },
  methods: {
    save: function() {
      this.$http.post("/api/vendors/apply", this.vendor).then(
        response => {
          if (response.status === 200) {
            this.submitted = true;
          }
        },
        response => {
          this.errors = response.body;
          this.$toasted.show(
            "There were some erorrs with your submission, please review and try again!"
          );
        }
      );
    },
    route: function(id) {
      this.$router.push({
        name: "home"
      });
    }
  }
};
</script>

<style scoped>
</style>
