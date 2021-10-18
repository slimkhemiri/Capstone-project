<template>
  <div class="container mx-auto">
 
    <div class="grid grid-flow-row ">
     
      <div class="grid grid-flow-col mt-2">
       
        <div class="  rounded-md h-16 wAdd flex  ">



 <button class="plus float-left ">
        <p class="float-left  ml-2">ADD TO BAG</p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6 float-right  mr-2"
          fill="ADD TO BACK"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="{2}"
            d="M12 6v6m0 0v6m0-6h6m-6 0H6"
          />
        </svg>
      </button>





        </div>
        <div class="  rounded-md h-22 w-20  flex  ">
                  <button class=" float-right border">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6 ml-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
          />
        </svg>
      </button>
        </div>
      </div>
         </div>
  </div>
</template>


<script>
export default {
  name: "Add",
  data: () => ({}),
};
</script>
<style lang="scss" scoped>
.plus {
  height: 100%;
  width: 100%;
  border: 1px solid black;
  border-radius: 5px;
}
.border {
   border: 1px solid black;
   width: 100%; 
   border-radius: 5px;
   height: 100%;
}
.wAdd{
    width: 280px;
}

</style>
