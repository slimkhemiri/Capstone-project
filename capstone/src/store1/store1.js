import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios"
Vue.use(Vuex)
const token = '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'
////
export  const store = new Vuex.Store({
    state: {
        style : []
    },
  getters:{
      style : state=> {state.style}
  }
  ,
  mutations: {
      SET_ITEMS(state,style){
            state.style=style
        }
  },
  actions:{
      loadStyles ({commit}){
         return  axios.get('https://app-hrsei-api.herokuapp.com/api/fec2/hr-nyc/products/product_id=39333/styles',{headers:{Authorization:`${token}`}})
          .then((response)=>{
              
              console.log("dazd ")
              console.log("daz"+response.data)
              commit('SET_ITEMS',response.data)
         }) 
         .catch((error)=>{
             console.log(error)
         })
      }
  },
})