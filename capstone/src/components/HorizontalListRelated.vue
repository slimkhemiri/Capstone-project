<template >
<div class="w-500 h-auto  mt-20" max-width ="50%">
<vue-horizontal-list
  :items="items"
  :options="{
    responsive: [
      { end: 200, size: 1 },
      { start: 150, end: 200, size:2 },
      { size: 4 },
    ],
  }"
>


  <template v-slot:default="{item}">
    <div class="item">
      <h5>{{item.title}}</h5>
<v-card  
    max-height="300"
    class="mx-200 my-2"
    max-width="180"
  >
    <template slot="progress">
      <v-progress-linear
        color="deep-purple"
        height="5"
        indeterminate
      ></v-progress-linear>
    </template>
    <v-img height="190"
      src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
    >
    <v-btn class="btn img-overlay ml-16 pl-16" width="10" height="1" dark v-on:click="togglefav">
<v-icon right></v-icon> 
      <i v-bind:class="['is_fav' ?  'fa-star' : 'fa-star-o', 'fa']" aria-hidden="true">
        </i></v-btn>        
    </v-img>
    <div class="my-0 text-subtitle-1">
       CATEGORY
      </div>
    <v-card-title class="my-0 text-subtitle-2">Expanded Product</v-card-title>
      <div class="ml-0 text-subtitle-0 ">$ 123 </div>
  <v-card-text>
      <v-row
        align="center"
        class="xs-0"
      >
        <v-rating
          v-model="rating"
          color="yellow darken-3"
          background-color="grey darken-1"
          empty-icon="$ratingFull"
          half-increments
          hover
          x-small
        ></v-rating>
        </v-row>
  </v-card-text>


    <v-card-actions></v-card-actions>
  </v-card>
 <br/>
 <br/>
 <br/>
 <br/>
    </div>
  </template>
  
</vue-horizontal-list>
</div>

 
</template>

<script>
import VueHorizontalList from "vue-horizontal-list";


  export default {
    name: 'HorizontalListRelated',
    components: {
    VueHorizontalList,
  },
      props:['is_fav'],
    methods:{
      togglefav:function(){
        this.$emit('togglefav',!this.is_fav);
      }
    },

    data: () => ({
items: [{title:"",content:"" },{title:"",content:"" } ,{title:"",content:"" },{title:"",content:"" },{title:"",content:"" },{title:"",content:"1545sdezezezesdsd" },{title:"",content:"" },{title:"",content:"" }]
    }),
  }
</script>
