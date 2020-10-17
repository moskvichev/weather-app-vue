import Axios from 'axios'
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    weathers: [],
    city: []
  },
  mutations: {
    SET_WEATHERS_TO_STATE: (state, weathers) => {
      state.weathers = weathers;
    },
    SET_CITY_TO_STATE: (state, city) => {
      state.city = city;
      console.log(city)
    }
  },
  actions: {
    GET_WEATHERS_FROM_API({commit}) {
      return Axios('http://10.0.0.6:8080/api/location/2122265/', {
        method: "GET"
      })
      .then((weathers) => {        
        commit('SET_WEATHERS_TO_STATE', weathers.data.consolidated_weather);
        return weathers;
      })
      .catch((error) => {
        console.log(error)
        return error;
      })      
    },
    GET_CITY_FROM_API({commit}) {
      return Axios('http://10.0.0.6:8080/api/location/2122265/', {
        method: "GET"
      })
      .then((city) => {        
        commit('SET_CITY_TO_STATE', city.data.title);
        return city;
      })
      .catch((error) => {
        console.log(error)
        return error;
      })      
    }
  },
  getters: {
    WEATHERS(state) {
      return state.weathers;
    },
    CITY(state) {
      return state.city;
    }
  }
})
