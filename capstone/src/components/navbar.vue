<template>
   <div class="grid grid-rows-6 min-h-screen mx-20">
      <div class="row-span-1 height">
        <div class="row-span-2 w-3/6 float-right">
          <div class="float-right mt-10 mr-7">
            <input class="btn" type="text" autofocus />
            <v-icon aria-hidden="false"> search </v-icon>
          </div>
        </div>
        <div class="row-span-2 w-3/6 float-left">
          <div class="mt-10 ml-8 text-3xl font-bold italic clr underline">
            Logo
          </div>
        </div>
        <div></div>
      </div>
    </div>
  </template>




  <script>
  export default {
    name: 'NavBar',

    data: () => ({
      
     
    }),
  }
</script>
<style lang="scss">
.clr {
  color: white;
  font-size: medium;
}
</style>
<!-- <style lang="scss">
.input {
  width: 20%;
  margin-right: 3%;
  float: right;
  color: white !important;
  
  border-bottom-color: white !important;
}

.center {
  margin-left: 9%;
}
.logo {
  color: white;
  margin-top: 4%;
  margin-left: 4%;
  font-size: xx-large;
  font-weight: bold;
  font-style: italic;
  text-decoration: underline;
}

#grid > div {
  height: 80px;
  background-color: rgb(84, 81, 81);
  border: none;
  box-sizing: border-box;
  float: left;
  width:90%/2
}
$max: 2;
@for $i from 1 through $max {
  $equ: 90% / $i;
  #grid.cell-#{ $i } > div {
    width: $equ;
}
  } -->
<!-- </style> -->