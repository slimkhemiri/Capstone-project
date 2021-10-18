<template>
  <div id="app">
    <div class="container px-6 py-3 mx-auto text-left">
      <div>
        <div class="flex">
          <div class="flex font-bold">
            <p>
              Q:
            </p>
            <div class="ml-2 text-lg">
              <div v-for="product in products" v-bind:key="product.id">
                <div>{{ product[1].question_body }}</div>
              </div>
            </div>
          </div>
          <div class="mr-9 absolute right-60 text-xs">
            <span
              >Helpful?
              <a v-on:click="counter += 1" class="ml-2 underline">Yes</a>
              <span>({{ counter }})</span><span class="ml-3">|</span>
              <a class="ml-3 underline">Add answer</a>
            </span>
          </div>
        </div>
        <br />
        <div>
          <div class="flex">
            <p class="font-bold ">A:</p>
            <div class="ml-2 text-lg">
               <!-- <div v-for="answer in answers" v-bind:key="answer.id"> -->
                <div>{{ answers[1].body}}</div>
              <!-- </div> -->
            </div>
          </div>
          <br />
          <div class="flex font-thin text-xs ml-6">
            <div>By </div>
            <!-- <div v-for="product in products" v-bind:key="product.id"> -->
              <div class=" mr-2">
                {{ answers[0].answerer_name }} {{ answers[0].date }}
              </div>
            <!-- </div> -->
            <div class="ml-3">Helpful?</div>
            <a v-on:click="counter2 += 1" class="ml-2 underline">Yes</a>
            <span>({{ counter2 }})</span><span class="ml-3">|</span>
            <a class="ml-3 underline">Report</a>
          </div>
        </div>
        <br />
        <div class="flex">
          <div class="flex font-bold">
            <p>
              Q:
            </p>
            <div class="ml-2 text-lg">
              <div v-for="product in products" v-bind:key="product.id">
                {{ product[0].question_body }}
              </div>
            </div>
          </div>
          <div class="mr-9 absolute right-60 text-xs">
            <span
              >Helpful?
              <a v-on:click="counter3 += 1" class="ml-2 underline">Yes</a>
              <span>({{ counter3 }})</span><span class="ml-3">|</span>
              <a class="ml-3 underline">Add answer</a>
            </span>
          </div>
        </div>
        <br />
        <div class="flex">
          <p class="font-bold ">A:</p>
          <p class="ml-2 text-lg">
           {{answers[0].body}}
          </p>
        </div>
        <br />
        <div class="flex font-thin text-xs ml-6">
          <div>By</div>
         
            <div class=" mr-2">
              {{ answers[0].answerer_name }} {{ answers[0].date }}
            </div>
         
          <div class="ml-3">Helpful?</div>
          <a v-on:click="counter4 += 1" class="ml-2 underline">Yes</a>
          <span>({{ counter4 }})</span><span class="ml-3">|</span>
          <a class="ml-3 underline">Report</a>
        </div>
        <br />

        <p class="text-lg ml-6">Yes,as you can see in these photos.</p>
        <br />
        <div class="flex ml-6 ">
        <!-- <div v-for="photo in answers" v-bind:key="photo.id"> -->
          <!-- <img class=" h-20 w-32 hover:bg-gray-200 " v-bind:src="photo.photos" /> -->
          <img class="object-contain h-22 w-32 ml-3 hover:bg-gray-200" v-bind:src="answers[0].photos[0]" />
           <img class="object-contain h-22 w-32 ml-3 hover:bg-gray-200" v-bind:src="answers[0].photos[1]" />
            <img class="object-contain h-22 w-32 ml-3 hover:bg-gray-200" v-bind:src="answers[0].photos[2]" />
        <!-- </div> -->
</div>
        <br />
        <div class="flex font-thin text-xs ml-6">
          <div>By {{answers[0].answerer_name}} - <a class="font-bold">Seller</a>, {{answers[0].date}}</div>
          <div class="ml-3">Helpful?</div>
          <a v-on:click="counter5 += 1" class="ml-2 underline">Yes</a>
          <span>({{ counter5 }})</span><span class="ml-3">|</span>
          <a class="ml-3 underline">Report</a>
        </div>

        <!-- <li v-for="(val,i) in test1 " :key="i">{{val}}</li> -->
      </div>
      <br />
    </div>
  </div>
</template>

<script>
export default {
  // props:['test1'],

  data: function() {
    return {
      counter: this.$store.state.products.results[0].question_helpfulness,
        counter2: this.$store.state.answers[0].helpfulness,
      counter3: this.$store.state.products.results[2].question_helpfulness,
       counter4: this.$store.state.answers[2].helpfulness,
      counter5: this.$store.state.answers[3].helpfulness,
    };
  },
  computed: {
    products() {
      return this.$store.getters.products;
    },
    answers(){
      return this.$store.getters.answers;
    }
  },
  created() {
    this.$store.dispatch("loadProducts");
  
  },
};
</script>
