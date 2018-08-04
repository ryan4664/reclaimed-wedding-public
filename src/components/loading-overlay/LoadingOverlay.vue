
<template>
  <div id="overlay">
    <div id="text">
      <h1>Loading...</h1>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // searchValue: ""
    };
  },
  created: function() {
    
  },
  methods: {
    onClickButton(event) {
      //do nothing atm
    }
  }
};
</script>
<style scoped>
#overlay {
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 2;
  cursor: pointer;
}
#text {
  position: absolute;
  top: 50%;
  left: 50%;
  color: white;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
}
</style>