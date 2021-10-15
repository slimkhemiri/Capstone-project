<script>
import QandA from "./components/Q&A.vue";
import searchBar from "./components/Search.vue";
import moreAnswers from "./components/moreAnswers.vue";
import Rating from "./components/rating.vue";

export default {

 data:()=> {
  return {test : [1,2,3,4,5,6]}
 },
  components: {
    QandA: QandA,
    searchBar: searchBar,
    moreAnswers: moreAnswers,
    Rating: Rating,
     
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
     
      <searchBar/>
    <QandA  :test1="test"/> 
    <moreAnswers/>
    <Rating/>
<div v-for="product in products" v-bind:key="product.id">
      <div>{{ product[0].question_body }}</div>
     
    </div>
  </div>
  </div>
</template>
