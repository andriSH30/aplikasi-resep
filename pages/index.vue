<template>
  <div>
    <div class="alert alert-warning text-center" role="alert">
      <h4>Categories</h4>
      <div v-for="k in kategori" v-bind:key="k.idCategory" style="display: inline !important;">
        <a class="link-kategori" style="margin-left: 20px; color: #cf1717;" @click="filterKategori(k.strCategory)"> {{k.strCategory}} </a>
      </div>
    </div>
    <div class="alert alert-danger text-center" role="alert" style="margin-top: -10px;">
      <h4>Area</h4>
      <div v-for="a in area" v-bind:key="a.idArea" style="display: inline !important;">
        <a class="link-area" style="margin-left: 20px;" @click="filterArea(a.strArea)"> {{a.strArea}} </a>
      </div>
    </div>
  <div class="container">
  <div class="row mt-1 justify-content-center">
        <div class="col-md-8">
            <h1 class="text-center">Search Your food Recipes!</h1>
            <div class="input-group mb-1 mt-1">
                <input type="text" class="form-control" v-model="cari" placeholder="Input a food's name here!" style="text-align:center;">
            </div>
        </div>
    </div>
    <hr>
    <div class="row">
      <div class="col-md-4" v-for="item in filterMenu" v-bind:key="item.idMeal">
        <div class="card mb-3">
            <img :src="item.strMealThumb" class="card-img-top" style="width: 100%; height: 350px; ">
            <div class="card-body text-center">
              <div class="alert alert-warning" role="alert">
                <h4 class="card-title" style="text-align:center;">{{ item.strMeal }}</h4>
              </div>
              <button type="button" class="btn btn-outline-danger btn-block"  data-toggle="modal" data-target="#staticBackdrop" @click="detail(item.idMeal)">See Recipes!</button>
              <div class="addFav mt-3">
                <nuxt-link to="/favorite" style="margin-top:10px;"><button type="button" class="btn btn-warning btn-block" v-if="sLogin" @click="addFav(item.idMeal)">Add to my Favourite!</button></nuxt-link>
              </div>
            </div>
        </div>
      </div>
    </div>

    <!-- MODAL DETAIL-->
    <div class="modal fade" id="staticBackdrop" data-backdrop="static"  tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
      <div class="modal-dialog modal-xl modal-dialog-scrollable" role="document">
        <div class="modal-content">
          <div class="modal-header" style="background-color: #cf1717;">
            <h5 class="modal-title" id="exampleModalCenterTitle" style="color: white;">Recipe's Details</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close" @click="keluar()">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <div class="container-fluid">
              <div class="row" v-for="dm in detailMenu" v-bind:key="dm.idMeal">
                <div class="col-md-4">
                  <img :src="dm.strMealThumb" style="width: 100%; height: 430px; position: fixed; width: 330px;">
                </div>
                <div class="col-md-8">
                  <div class="alert alert-warning" role="alert">
                    <h2 style="text-align: center;">{{ dm.strMeal }}</h2>
                  </div>
                  <table class="table">
                    <tbody>
                      <tr>
                        <th scope="row">Category</th>
                        <td><span class="badge badge-danger">{{dm.strCategory}}</span></td>
                      </tr>
                      <tr>
                        <th scope="row">Origins</th>
                        <td>{{dm.strArea}}'s Food</td>
                      </tr>
                      <tr>
                        <th scope="row">Ingredients</th>
                        <td>
                          {{dm.strIngredient1}} <span class="badge badge-pill badge-warning">{{dm.strMeasure1}}</span>,
                          {{dm.strIngredient2}} <span class="badge badge-pill badge-warning">{{dm.strMeasure2}}</span>,
                          {{dm.strIngredient3}} <span class="badge badge-pill badge-warning">{{dm.strMeasure3}}</span>,
                          {{dm.strIngredient4}} <span class="badge badge-pill badge-warning">{{dm.strMeasure4}}</span>,
                          {{dm.strIngredient5}} <span class="badge badge-pill badge-warning">{{dm.strMeasure5}}</span>,
                          {{dm.strIngredient6}} <span class="badge badge-pill badge-warning">{{dm.strMeasure6}}</span>,
                          {{dm.strIngredient7}} <span class="badge badge-pill badge-warning">{{dm.strMeasure7}}</span>,
                          {{dm.strIngredient8}} <span class="badge badge-pill badge-warning">{{dm.strMeasure8}}</span>,
                          {{dm.strIngredient9}} <span class="badge badge-pill badge-warning">{{dm.strMeasure9}}</span>,
                          {{dm.strIngredient10}} <span class="badge badge-pill badge-warning">{{dm.strMeasure10}}</span>,
                          {{dm.strIngredient11}} <span class="badge badge-pill badge-warning">{{dm.strMeasure11}}</span>,
                          {{dm.strIngredient12}} <span class="badge badge-pill badge-warning">{{dm.strMeasure12}}</span>,
                          {{dm.strIngredient13}} <span class="badge badge-pill badge-warning">{{dm.strMeasure13}}</span>,
                          {{dm.strIngredient14}} <span class="badge badge-pill badge-warning">{{dm.strMeasure14}}</span>,
                          {{dm.strIngredient15}} <span class="badge badge-pill badge-warning">{{dm.strMeasure15}}</span>,
                          {{dm.strIngredient16}} <span class="badge badge-pill badge-warning">{{dm.strMeasure16}}</span>,
                          {{dm.strIngredient17}} <span class="badge badge-pill badge-warning">{{dm.strMeasure17}}</span>,
                          {{dm.strIngredient18}} <span class="badge badge-pill badge-warning">{{dm.strMeasure18}}</span>,
                          {{dm.strIngredient19}} <span class="badge badge-pill badge-warning">{{dm.strMeasure19}}</span>,
                          {{dm.strIngredient20}} <span class="badge badge-pill badge-warning">{{dm.strMeasure20}}</span>,
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">Instructions</th>
                        <td>{{dm.strInstructions}}</td>
                      </tr>
                      <tr>
                        <th scope="row">See on Youtube</th>
                        <td><a :href="dm.strYoutube" target="_blank" style="color:#eb4242;">{{dm.strYoutube}}</a></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          <div class="modal-footer" style="background-color: #cf1717;">
            <button type="button" class="btn btn-outline-light" data-dismiss="modal" @click="keluar()">Close</button>
          </div>
        </div>
      </div>
    </div>

</div>
    <div class="alert alert-dark text-center" role="alert" style="margin-top: 10px;">
      <h2>Ingredients</h2>
      <div v-for="b in bahan" v-bind:key="b.idIngredient" style="display: inline !important;">
        <a class="link-bahan" style="margin-left: 20px;" @click="filterBahan(b.strIngredient)"> {{b.strIngredient}} </a>
      </div>
    </div>
</div>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      cari: '',
      kategori: [],
      area: [],
      bahan: [],
      results: [],
      detailMenu: [],
      fav: {
        id: '',
        nama: '',
        gambar: ''
      }
    }
  },

  created() {
    axios.get("https://www.themealdb.com/api/json/v1/1/search.php?s=")
      .then(response => {
        this.results = response.data.meals
        console.log(this.fav.nama)
      }),
      axios.get("https://www.themealdb.com/api/json/v1/1/categories.php")
      .then(response => {
        this.kategori = response.data.categories
      }),
      axios.get("https://www.themealdb.com/api/json/v1/1/list.php?a=list")
      .then(response => {
        this.area = response.data.meals
      }),
      axios.get("https://www.themealdb.com/api/json/v1/1/list.php?i=list")
      .then(response => {
        this.bahan = response.data.meals
      })
  },

  methods : {
    filterKategori: function(namaKategori) {
      this.results = [];
      axios.get("https://www.themealdb.com/api/json/v1/1/filter.php?c="+namaKategori)
      .then(response => {
        this.results = response.data.meals
      })
    },
    filterArea: function(namaArea) {
      this.results = [];
      axios.get("https://www.themealdb.com/api/json/v1/1/filter.php?a="+namaArea)
      .then(response => {
        this.results = response.data.meals
      })
    },
    filterBahan: function(namaBahan) {
      this.results = [];
      axios.get("https://www.themealdb.com/api/json/v1/1/filter.php?i="+namaBahan)
      .then(response => {
        this.results = response.data.meals
      })
    },
    detail: function(id) {
      axios.get("https://www.themealdb.com/api/json/v1/1/lookup.php?i="+id)
      .then(response => {
        this.detailMenu = response.data.meals
      })
    },
    keluar: function() {
      this.detailMenu = [];
    },
    addFav: function(id) {
      axios.get("https://www.themealdb.com/api/json/v1/1/lookup.php?i="+id)
      .then(response => {
        this.fav.id = response.data.meals[0].idMeal,
        this.fav.nama = response.data.meals[0].strMeal,
        this.fav.gambar = response.data.meals[0].strMealThumb

        console.log(this.fav.id)
        console.log(this.fav.nama)
        console.log(this.fav.gambar)

        this.$store.dispatch('simpanFavorite',this.fav)

      })
    }
  },
  computed: {
    filterMenu: function() {
      return this.results.filter((item) => {
        return item.strMeal.toLowerCase().match(this.cari.toLowerCase())
      })
    },
    sLogin: function (){
      return this.$store.state.statusLogin
    },
    sLogout: function (){
      return this.$store.state.statusLogout
    }
  }
}
</script>
<style scoped>
  body{
    background-color: #f09c9c;
  }
  .link-kategori:hover{
    border-bottom: solid 2px #cf1717;
  }
  .link-area:hover{
    border-bottom: solid 2px black;
  }
  .link-bahan:hover{
    border-bottom: solid 2px black;
  }
  .addFav:hover{
    text-decoration: none !important;
  }
</style>



