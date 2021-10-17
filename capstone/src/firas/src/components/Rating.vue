<template>
     <div class="col-span-1  htt">
        <v-rating
          class="float-left mt-6"
          v-model="rating"
          background-color="orange lighten-3"
          color="orange"
          small
        ></v-rating>
        <div class="float-left mt-6">
          <a href="#" class="underline"> Read all reviews</a>
        </div>
        <div class="mar">CATEGORY</div>
      </div>

</template>

<script>
export default {
    name:"Rating",
    data:()=>({

    })
    

}


</script>

<style lang="scss">
.mar {
  margin-top: 59px;
  margin-left: 10px;
}
.htt {
  height: 80px;
}


</style>