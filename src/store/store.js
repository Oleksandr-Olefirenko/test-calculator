import Vue from 'vue'
import Vuex from 'vuex'
import math from 'mathjs'

import getters from './getters'
import mutations from './mutations'
import actions from './actions'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        operations: [
            '+',
            '-',
            '*',
            '/'
        ],
        fractions: [],
        counter: 1,
    },
    getters,
    mutations,
    actions
})
