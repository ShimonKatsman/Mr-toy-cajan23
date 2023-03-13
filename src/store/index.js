// בס"ד

import { createStore } from 'vuex'
import { toystore } from './toy.store.js'

import { toyService } from '../services/toy.service'

export const store = createStore({
    state: {
        msg: 'Store Is Running'
    },
    mutations: {},
    actions: {},
    getters: {
        getMsg(state) {
            return state.msg
        }
    },
    modules: {
        toyStore,
    }
})
