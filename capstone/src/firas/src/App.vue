<template>
  <div>
    <NavBar />

    <Tiltle />

    <div class="grid grid-rows-4 grid-flow-col gap-4 mx-20 heightt margin">
      <Caroussel />
      <Rating />
      <Product />
      <div class="row-span-1 w-96 col-span-1  h -mt-16 ">
        <div class="ml-4">STYLE > SLECTED STYLE</div>
        <Style />
      </div>

      <div class="row-span-1 col-span-1  float-left het">
        <Select />

        <div class="row-span-1 col-span-1  mt-2 heet ">
          <Add />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Style from "./components/Circle.vue";
import Tiltle from "./components/Tiltle.vue";
import NavBar from "./components/navbar.vue";
import Caroussel from "./components/caroussel.vue";
import Rating from "./components/Rating.vue";
import Product from "./components/ProducetPrice.vue";
import Select from "./components/Select.vue";
import Add from "./components/Add.vue";

export default {
  name: "App",

  components: {
    NavBar,
    Tiltle,
    Caroussel,
    Rating,
    Product,
    Style,
    Select,
    Add,
  },

  data: () => ({
    items: [
      {
        src: "https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg",
      },
      {
        src: "https://cdn.vuetifyjs.com/images/carousel/sky.jpg",
      },
      {
        src: "https://cdn.vuetifyjs.com/images/carousel/bird.jpg",
      },
      {
        src: "https://cdn.vuetifyjs.com/images/carousel/planet.jpg",
      },
    ],
    itemss: ["Foo", "Bar", "Fizz", "Buzz"],
  }),
};
</script>
<style lang="scss">
.het {
  height: 80px;
  width: 80%  ;
}
.heet {
  height: 80px;
  width: 390px;

}

.margin {
  margin-top: -48%;
}

.height {
  height: 70%;
  background-color: dimgrey;
}
.mt {
  margin-top: 80px;
}

.clr {
  color: white;
  font-size: medium;
}
.btn {
  border-top: none;
  border-bottom: 2px solid white;
  width: 150px;
}

.h {
  height: 190px;
}
.heightt {
  height: 590px;
  width: 95% !important;
}
.cnt {
  width: 700px;
  height: 450px;
  background-color: black;
  margin: 25px;
  position: absolute;
}
.imag {
  width: 750px;
}
</style>
   
  