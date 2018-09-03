<template>
  <footer class="footer">
      <div class="container">
        <span class="text-muted">&copy; Reclaimed Wedding</span>
      </div>
    </footer>
</template>

<script>
export default {};
</script>

<style>
html {
  position: relative;
  min-height: 100%;
}
body {
  /* Margin bottom by footer height */
}
.footer {
  position: absolute;
  bottom: 0;
  width: 100%;
  /* Set the fixed height of the footer here */
  height: 60px;
  line-height: 60px; /* Vertically center the text there */
  background-color: #f5f5f5;
}
</style>