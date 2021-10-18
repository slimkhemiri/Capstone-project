<script>
import QandA from "./components/Q&A.vue";
import searchBar from "./components/Search.vue";
import moreAnswers from "./components/moreAnswers.vue";
import Rate from "./components/rate.vue";
import HorizontalListRelated from "./components/HorizontalListRelated.vue";
import HorizontalListYourOutfit from "./components/HorizontalListYourOutfit.vue";
import Style from "./components/Circle.vue";
import Tiltle from "./components/Tiltle.vue";
import NavBar from "./components/navbar.vue";
import Caroussel from "./components/caroussel.vue";
import RatingF from "./components/RatingF.vue";
import Product from "./components/ProducetPrice.vue";
import Select from "./components/Select.vue";
import Add from "./components/Add.vue";
export default {
  components: {
    QandA: QandA,
    searchBar: searchBar,
    moreAnswers: moreAnswers,
    Rate: Rate,
    HorizontalListRelated: HorizontalListRelated,
    HorizontalListYourOutfit: HorizontalListYourOutfit,
    NavBar,
    Tiltle,
    Caroussel,
    RatingF,
    Product,
    Style,
    Select,
    Add,
  },
  computed: {
    products() {
      return this.$store.getters.products;
    },
  },
  created() {
    this.$store.dispatch("loadProducts");
  },
};
</script>
<template>
  <div id="app" class=" container-center ">
    <div>
      <div>
        <NavBar />

        <Tiltle />

        <div class="grid grid-rows-4 grid-flow-col gap-4 mx-12  heightt margin">
          <Caroussel />
          <RatingF />
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
      <HorizontalListRelated />

      <HorizontalListYourOutfit />
      <searchBar />
      <QandA />
      <moreAnswers />
      <Rate />
    </div>
  </div>
</template>
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
  width: 95%;
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