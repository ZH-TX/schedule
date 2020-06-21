import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    logList:[
      {time:'2020/06/21 16:27:14' ,action:'添加',content:'一个例子'},
    ]
  },
  getters:{

  },
  mutations: {
    pushData(state,data){
      state.logList.unshift(data)
    }
  },
  actions: {
  },
  modules: {
  }
})
