<template>
  <div>
    <nav class="navbar navbar-expand-lg nav-red navbar-dark">
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
          <div class="navbar-nav mr-auto">
            <nuxt-link to="/" class="nav-item nav-link active">Meals</nuxt-link>
            <nuxt-link to="/about" class="nav-item nav-link active">About</nuxt-link>
            <nuxt-link to="/favorite" class="nav-item nav-link active" v-if="sLogin">My Favourites</nuxt-link>
          </div>
          <div class="navbar-nav ml-auto mr-auto text-judul"><h4>ResepKu</h4></div>
          <div class="navbar-nav ml-auto">
            <nuxt-link to="" v-if="sLogout" data-toggle="modal" data-target="#loginModal"><button type="button" class="btn btn-outline-warning">Login</button></nuxt-link>
            <nuxt-link to="/"><button type="button" v-on:click="logout" v-if="sLogin" class="btn btn-outline-warning">Logout</button></nuxt-link>
          </div>
      </div>
    </nav>

      <!-- MODAL LOGIN-->
        <div class="modal fade" id="loginModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
          <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
              <div class="modal-header" style="background-color: #cf1717;">
                <h5 class="modal-title" id="exampleModalCenterTitle" style="color:white;">Login Now!</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                <div class="form-group">
                  <label for="exampleInputEmail1">Username</label>
                  <input v-model="userLogin.usernameLogin" type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
                </div>
                <div class="form-group">
                  <label for="exampleInputPassword1">Password</label>
                  <input v-model="userLogin.passwordLogin" type="password" class="form-control" id="exampleInputPassword1">
                </div>
              </div>
              <div class="modal-footer" style="background-color: #cf1717;">
                <button type="button" class="btn btn-outline-warning" data-toggle="modal" data-target="#registerModal">Register</button>
                <a href="" type="button" class="btn btn-outline-light" @click.prevent="signIn" data-dismiss="modal">Sign In</a>
              </div>
            </div>
          </div>
        </div>

        <!-- MODAL REGISTER-->
        <div class="modal fade" id="registerModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
          <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
              <div class="modal-header" style="background-color: #cf1717;">
                <h5 class="modal-title" id="exampleModalCenterTitle" style="color:white;">Account Register</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                <div class="form-group">
                  <label for="exampleInputEmail2">Username</label>
                  <input v-model="userRegister.usernameRegister" type="text" class="form-control" id="exampleInputEmail2" aria-describedby="emailHelp">
                </div>
                <div class="form-group">
                  <label for="exampleInputPassword2">Password</label>
                  <input v-model="userRegister.passwordRegister" type="password" class="form-control" id="exampleInputPassword2">
                </div>
              </div>
              <div class="modal-footer" style="background-color: #cf1717;">
                <a href="" type="button" class="btn btn-outline-light" @click.prevent="signUp" data-dismiss="modal">Sign Up</a>
              </div>
            </div>
          </div>
        </div>
      </div>
</template>
<style>
@import url('https://fonts.googleapis.com/css2?family=Righteous&display=swap');
  .navbar.navbar-expand-lg.nav-red {
    background-color: #cf1717;
    text-decoration: none;
  }

  .navbar .navbar-dark {
    color: white;
  }
  .nav-link {
    margin-left: 10px;
  }

  .nav-link:hover{
    color: yellow !important;
  }

  .text-judul{
    font-family: 'Righteous', cursive;
    color: white;
    margin-left: 40px !important;
  }

</style>
<script>
export default {
  data() {
    return {
      userLogin: {
        usernameLogin: '',
        passwordLogin: ''
      },
      userRegister: {
        usernameRegister: '',
        passwordRegister: ''
      }
    }
  },
  computed: {
    sLogin: function (){
      return this.$store.state.statusLogin
    },
    sLogout: function (){
      return this.$store.state.statusLogout
    }
  },
  methods: {
    logout: function(){
      this.$store.dispatch("prosesLogout")
    },
    signIn: function (){
      this.$store.dispatch("LOGIN",this.userLogin)
      this.userLogin = {
        usernameLogin: '',
        passwordLogin: ''
      }
    },
    signUp: function (){
      this.$store.dispatch("REGISTER",this.userRegister)
      this.userRegister = {
        usernameRegister: '',
        passwordRegister: ''
      }
    }
  }
}
</script>
