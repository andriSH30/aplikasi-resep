<template>
<div class="container">
  <div class="row mt-3 justify-content-center">
        <div class="col-md-8">
            <h1 class="text-center">Pencarian Resep Makanan</h1>
            <div class="input-group mb-3 mt-2">
                <input type="text" class="form-control" v-model="cari" placeholder="Tulis Nama Makanan">
                <div class="input-group-append">
                    <button class="btn btn-dark" type="button" @click="cariResep">Cari Resep</button>
                    <p>{{ cari }}</p>
                </div>
            </div>
        </div>
    </div>
    <hr>
    <div class="col-md-4">
      <div class="card mb-3" v-for="item in results" v-bind:key="item.key">
          <img :src="item.strMealThumb" class="card-img-top" style="width: 100%; height: 400px; ">
          <div class="card-body">
            <input type="text" :value="item.idMeal" hidden>
            <h5 class="card-title">{{ item.strMeal }}</h5>
            <h6 class="card-title">Kategori {{ item.strCategory }}</h6>
            <h6 class="card-title">Dari daerah {{ item.strArea }}</h6>
            <a href="#" class="card-link" data-toggle="modal" data-target="#exampleModal">Lihat Detail</a>
          </div>
      </div>
    </div>
</div>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      // allPost: [],
      // posts: []
      cari: '',
      results: []
    }
  },
  mounted () {

    axios.get("https://www.themealdb.com/api/json/v1/1/search.php?s=" + this.cari)
      .then(response => {this.results = response.data.meals})

  },
  methods : {
    cariResep: function(){
      axios.get("https://www.themealdb.com/api/json/v1/1/search.php?s=" + this.cari)
      .then(response => {this.results = response.data.meals})
    }
  },
}
</script>



