<script>
import QandA from "./components/Q&A.vue";
import searchBar from "./components/Search.vue";
import moreAnswers from "./components/moreAnswers.vue";
import Rating from "./components/rating.vue";
import HorizontalListRelated from "./components/HorizontalListRelated.vue"
import HorizontalListYourOutfit from "./components/HorizontalListYourOutfit.vue"
export default {

  components: {
    QandA: QandA,
    searchBar: searchBar,
    moreAnswers: moreAnswers,
    Rating: Rating,
      HorizontalListRelated :HorizontalListRelated,
      HorizontalListYourOutfit:HorizontalListYourOutfit,
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
      RELATED PRODUCT
     <HorizontalListRelated/>
     YOUR OUTFIT
     <HorizontalListYourOutfit/>
      <searchBar/>
    <QandA  /> 
    <moreAnswers/>
    <Rating/>
 
  </div>
  </div>
</template>
