
<template>
  <div class="search-bar-containter">
    <div class="row">
        <div class="col-12">
            <div class="input-group search-bar-input-group">
                <input type="text" class="form-control" placeholder="What're you looking for?" v-model="searchValue" v-on:keyup.enter="onClickButton"/>
                <span class="input-group-btn">
                    <button class="btn btn-lg btn-secondary" type="button" v-on:click="onClickButton">
                        <icon name="search"></icon>
                    </button>
                </span>
            </div>
        </div>
    </div>
    <!-- <div class="row">
        <div class="col-12">
            <h3>OR</h3>
        </div>
    </div>
    <div class="row">
        <div class="col-4 py-2" v-for="adType in adTypes" v-bind:key="adType._id">
          <a v-on:click="searchByType(adType.type)">{{adType.type}}</a>
        </div>
    </div> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchValue: "",
      adTypes: []
    };
  },
  created: function() {
    this.$http.get("/api/adTypes").then(response => {
      if (response.status === 200) {
        this.adTypes = response.body;
      }
    });
  },
  methods: {
    onClickButton(event) {
      this.$emit("clicked", this.searchValue);
    },
    searchByType: function(type) {
      this.$router.push({
        name: "ad-list",
        query: { type: type }
      });
    }
  }
};
</script>
<style scoped>
.search-bar-containter {
  border-radius: 0.25em;
  margin: 3em 0;
}
.btn.btn-lg {
  width: 4em;
}
.search-bar-input-group {
  height: 4em;
  margin: 1em 0;
}
.input-group.search-bar-input-group > select.form-control {
  height: 4em;
}
.fa-icon {
  width: auto;
  height: 1.75em;
  max-width: 100%;
  max-height: 100%;
}
.btn-secondary {
  cursor: pointer;
}
a:hover {
  text-decoration: underline !important;
  cursor: pointer;
}
</style>