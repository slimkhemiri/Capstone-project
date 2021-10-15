import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios";

Vue.use(Vuex);
const token = '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'

export default new Vuex.Store({

    state: {
       products: [],
       
     },
     getters: {
        products: state => {
          return state.products;
        }
      },
      mutations: {
        SET_ITEMS (state, products) {
          state.products = products
        }
      },
      actions: {
         loadProducts ({ commit }) {
          
              axios.get('https://app-hrsei-api.herokuapp.com/api/fec2/hr-nyc/qa/questions/?product_id=39333',{headers:{Authorization: `${token}`}})
              .then((response) => {
             commit('SET_ITEMS', response.data)
             console.log(response.data)
              })
           .catch((err)=> {
            console.log(err)
          })
        }
       },
   }) 
 