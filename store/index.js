import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state: {
      statusLogin: false,
      statusLogout: true,
      akun : {
        username: "andri123",
        password: "andri123"
      }
    },
    mutations: {
      increment (state) {
        state.counter++
      }
    },
    actions: {
      prosesLogout({state}){
        state.statusLogin = false,
        state.statusLogout = true
      },
      LOGIN({state}, userLogin){
          if((state.akun.username == userLogin.usernameLogin) && (state.akun.username == userLogin.passwordLogin)){
            console.log(userLogin.usernameLogin)
            state.statusLogin= true;
            state.statusLogout= false;
          }else{
            console.log("gagal")
          }
      },
      REGISTER({state}, userRegister){
        this.state.akun.username = userRegister.usernameRegister
        this.state.akun.password = userRegister.passwordRegister
        console.log(userRegister.usernameRegister)
        console.log(userRegister.passwordRegister)
      }
    }
  })
}

export default createStore
