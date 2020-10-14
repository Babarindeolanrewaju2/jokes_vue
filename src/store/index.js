import { createStore } from 'vuex'

import { mutations } from './mutation'
import * as actions from './action'

const state = {
    jokes: []
}

export default createStore({
  state,
  mutations,
  actions
})