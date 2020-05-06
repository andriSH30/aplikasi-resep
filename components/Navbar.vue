<template>
    <nav class="navbar navbar-expand-lg nav-red navbar-dark">
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
          <div class="navbar-nav ml-auto mr-auto">
            <a class="nav-item nav-link active" href="/">Food</a>
            <a class="nav-item nav-link active" href="/about">About</a>
            <a class="nav-item nav-link active" href="/login">Login</a>
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

  .nav-link:hover{
    color: yellow !important;
  }
</style>
<script>
export default {

}
</script>
