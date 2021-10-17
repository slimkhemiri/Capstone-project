<template>
<div class="container mx-auto">
  
      
          <div class="grid grid-flow-row ">
     
      <div class="grid grid-flow-col mt-2">
       
        <div >
            <select class="rounded-md h-16 w flex brd">
 <option value="">SELECT SIZE</option>
              <option>S</option>
              <option>L</option>
              <option>XL</option>
              <option>XXL</option>
</select>
        </div>
        <div >
            <select class="rounded-md h-16 w-28 mr-32 flex border2">
              <option value="">1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              </select>
        </div>
      </div>
         </div>

</div>

</template>





<script>
  export default {
    data: () => ({
      items: ['foo', 'bar', 'fizz', 'buzz'],
      value: ['foo', 'bar', 'fizz', 'buzz'],
    }),
  }
</script>

<style lang="scss" >

.marga {
  margin-left: 20px;
}
.brd{
    height: 60px;
    border: 1px solid black;
    border-radius: 5px;
   
    width: 60px;
}
.w{
    width: 250px;
}
.border2{
    height: 60px;
    border: 1px solid black;
    border-radius: 5px;
   
    width: 60px; 
}
</style>