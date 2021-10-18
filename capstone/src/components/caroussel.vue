<template>
    
    <div class="row-span-6 col-span-5 bg-gray-100 ps">

          <div class="bg-red-500 cong">
              <v-carousel hide-delimiters>
    <v-carousel-item class=""
      v-for="(item,i) in items"
      :key="i"
      :src="item.src"
    ></v-carousel-item>
  </v-carousel>
          </div>
      </div>
</template>





<script>

export default {
    name:"Caroussel",
  
 data () {
      return {
        items: [
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg',
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg',
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg',
          },
        ],
      }
    },
  }


</script>



<style lang="scss">
.ps {
  position: relative;
}
.cong{
  position: absolute;
  width: 700px;
  height: 300px;
  margin: 50px;
}
</style>


 


