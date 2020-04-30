<template>
<div class="container">
  <div class="row mt-3 justify-content-center">
        <div class="col-md-8">
            <h1 class="text-center">Search Your food Recipes!</h1>
            <div class="input-group mb-3 mt-2">
                <input type="text" class="form-control" v-model="cari" placeholder="Input your food's name here!" style="text-align:center;">
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
                <h3 class="card-title" style="text-align:center;">{{ item.strMeal }}</h3>
                <p>{{item.strCategory}}</p>
              </div>
              <button type="button" class="btn btn-outline-danger btn-block"  data-toggle="modal" data-target="#staticBackdrop" @click="detail(item.idMeal)">See Recipes!</button>
            </div>
        </div>
      </div>
    </div>

    <!-- MODAL -->
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
                  <img :src="dm.strMealThumb" style="width: 100%; height: 400px;">
                </div>
                <div class="col-md-8">
                  <div class="alert alert-warning" role="alert">
                    <h2 style="text-align: center;">{{ dm.strMeal }}</h2>
                  </div>
                  <table class="table">
                    <tbody>
                      <tr>
                        <th scope="row">Category</th>
                        <td>{{dm.strCategory}}</td>
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
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      cari: '',
      results: [],
      detailMenu: [],
    }
  },
  mounted() {
    this.loadData()
  },

  methods : {
    loadData: function() {
      axios.get("https://www.themealdb.com/api/json/v1/1/search.php?s=")
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
    }
  },
  computed: {
    filterMenu: function() {
      return this.results.filter((item) => {
        return item.strMeal.toLowerCase().match(this.cari.toLowerCase())
      })
    },
  }
}
</script>
<style scoped>
  body{
    background-color: #f09c9c;
  }
</style>



