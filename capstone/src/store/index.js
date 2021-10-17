
import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios";
Vue.use(Vuex);
const token = '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'

export default new Vuex.Store({

    state: {
       products: [],
       answers:[],
       
     },
     getters: {
        products: state => {
          return state.products;
        },
        // answers:state => {
        //   return state.answers;
        // }
      },
      mutations: {
        SET_ITEMS (state, products) {
          state.products = products
        },
        // SET_ITEM (state, answers){
        //   state.answers = answers;
        // }
      },
      actions: {
         loadProducts ({ commit }) {
          
              axios.get('https://app-hrsei-api.herokuapp.com/api/fec2/hr-nyc/qa/questions/?product_id=39333',{headers:{Authorization: `${token}`}})
              .then((response) => {
                //  let answers = Object.values(response.data.results[2][6])
             commit('SET_ITEMS', response.data)
            //  commit('SET_ITEM',answers)
            console.log(response.data)
              
            // console.log(answers)
              })
           .catch((err)=> {
            console.log(err)
          })
        }
       },
   }) 
 