<template>
  <div id="app">
<QandA></QandA>
  </div>


</template>


<script>
import QandA from './components/Q&A.vue'
export default {
  name: 'App',
  components:{
     'QandA':QandA,
  }
}

</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>