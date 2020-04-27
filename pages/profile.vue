<template>
  <div>
    <h2>Profile</h2>
    <p>{{pesan}}</p>
    <input type="text" v-model="pesan">
    <button @click="tampilkanPesan">Tampilkan</button>
  </div>
</template>
<script>
export default {
  layout: 'default',
  data () {
    return {
      pesan : "Hai Andri Setya Hermawan!"
    }
  },
  methods : {
    tampilkanPesan (e) {
      alert(this.pesan)
    }
  }
}
</script>
<style>
html,
body {
  padding: 0;
  margin: 0;
}
body {
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
}
h2 {
  font-size: 48px;
  color: #389acd;
}
p {
  font-size: 18px;
  color: #ababab;
}
</style>
