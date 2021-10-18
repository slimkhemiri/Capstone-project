
import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios";
Vue.use(Vuex);
const token = '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'
const token1 = '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'
const token2 = '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'
export default new Vuex.Store({

    state: {
       products: [],
       answers:[],
       styles:[],
       prod:[],
       
     },
     getters: {
        products: state => {
          return state.products;
        },
        answers:state => {
          return state.answers;
        },
        styles:state=>{
          return state.styles
        },
        prod:state=>{
         return state.prod
        }
      },
      mutations: {
        SET_ITEMS (state, products) {
          state.products = products
        },
        SET_ITEM (state, answers){
          state.answers = answers;
        },
        SET_ITEM1(state,styles){
          state.styles = styles
        },
        SET_ITEM2(state,prod){
          state.prod = prod
        }
      },
      actions: {
         loadProducts ({ commit }) {
          
              axios.get('https://app-hrsei-api.herokuapp.com/api/fec2/hr-nyc/qa/questions/?product_id=39333',{headers:{Authorization: `${token}`}})
              
              .then((response) => {
               const answers = Object.values(response.data.results[3].answers)
             commit('SET_ITEMS', response.data)
             commit('SET_ITEM', answers)
            console.log(response.data)
              console.log(answers)
           
              })
           .catch((err)=> {
            console.log(err)
          })
          axios.get('https://app-hrsei-api.herokuapp.com/api/fec2/hr-nyc/products',{headers:{Authorization:`${token2}`}})
        .then((response)=>{
          commit('SET_ITEM2',response.data)
          console.log(response.data)
        })
        .catch((err)=> {
          console.log(err)
        })
        axios.get('https://app-hrsei-api.herokuapp.com/api/fec2/hr-nyc/products/39333/styles',{headers:{Authorization:`${token1}`}})
        .then((response)=>{
          commit('SET_ITEM1',response.data)
          console.log(response.data)
        })
        .catch((err)=> {
          console.log(err)
        })

            }
      },
    })
   
   
 