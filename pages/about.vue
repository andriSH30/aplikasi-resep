<template>
  <div class="container">
    <div class="mt-5">
      <div class="row">
        <div class="col-12">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Resep Ku App</h5>
              <h6 class="card-subtitle mb-2 text-muted">10 Mei 2020</h6>
              <p class="card-text">Project ini merupakan Tugas akhir semester 4 mata Kuliah Implementasi Gui yang dibina oleh pak han, Aplikasi Resep ini merupakan Sebuah aplikasi pencarian data resep makanan menggunakan Framework Nuxt JS yang terhubung dengan REST API Milik <a href="https://www.themealdb.com/api.php" target="_BLANK">The MealdDB</a> Menggunakan Axios, dengan kata lain seluruh data yang ada di aplikasi ini mengkonsumsi data milik The MealdDB tersebut untuk di tampilkan di aplikasi ini. Di aplikasi Resep Ku App ini, Terdapat beberapa fitur diantaranya : </p>
              <li>Fitur Pencarian Resep Menu (Inputan)</li>
              <li>Fitur Pencarian Resep Menu Berdasarkan Area asal</li>
              <li>Fitur Pencarian Resep Menu Berdasarkan Kategori Resep</li>
              <li>Fitur Pencarian Resep Menu Berdasarkan Bahan Baku pembuatannya</li>
              <li>Fitur Login dan Register Menggunakan Vuex (Masih ada sedikit bug dimana saat pertama kali mengetik huruf maka akan modal akan tertutup, sehingga user diharuskan mengklik beberapa kali tombol login tersebut hingga modal login tampil kembali, error ini disebabkan karena penggunaan v-model pada modal dan saya masih belum tahu solusinya.)</li>
              <li>Fitur Favorite Menu Menggunakan Vuex, fitur ini hanya bisa di akses setelah user Login terlebih dahulu (Masih ada sedikit bug dimana user dapat menambahkan lebih dari satu resep yang sama ke dalam menu 'My Favourites')</li>
              <li>Fitur Logout menggunakan Vuex, Fitur yang hanya ada saat User telah Login
                <br>
              <p>Demikian Rangkuman mengenai aplikasi yang saya buat ini.</p>
              <br>
              <h5 style="text-align: right;">Andri Setya Hermawan</h5>
              <p style="text-align: right;">183140914111008</p>
              </li>
            </div>
          </div>
        </div>
      </div>
    </div>
    <br><br><br>
  </div>
</template>
