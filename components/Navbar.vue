<template>
    <nav class="navbar navbar-expand-lg nav-red navbar-dark">
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="container">
          <div class="navbar-nav ml-auto mr-auto">
            <a class="nav-item nav-link active" @click="linkNav" ref="nav" href="/">Home</a>
            <a class="nav-item nav-link" ref="nav" href="/about">About</a>
          </div>
        </div>
      </div>
    </nav>
</template>
<style>
  .navbar.navbar-expand-lg.nav-red {
    background-color: #cf1717;
    text-decoration: none;
  }

  .navbar .navbar-dark {
    color: white;
  }
</style>
<script>
export default {
  methods: {
    linkNav: function () {
      $refs.nav.classList.remove('active');
      this.$refs.nav.classList.add('active');
    }
  }
}
</script>
