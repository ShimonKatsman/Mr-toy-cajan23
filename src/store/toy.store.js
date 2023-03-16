// בס"ד

import { toyService } from '../services/toy.service.js'

export const toyStore = {
  state: {
    toys: [],
    toysCount: null,
    currToy: null,
    filterBy: {
      // txt: '',
      // status: '',
      // pageIdx: 0,
      // pageSize: 5,
    },
    sortBy: {
      by: '',
      desc: 1,
    },
  },
  getters: {
    toy({ currToy }) {
      return currToy
    },
    toysToDisplay({ filterBy, toys }) {
      if (!toys) return null

      // const { status, txt, pageIdx, pageSize } = filterBy
      let filteredToys = toys

      // const regex = new RegExp(txt, 'i')
      // filteredToys = filteredToys.filter(toy => regex.test(toy.txt))

      // if (status) {
      //   filteredToys = filteredToys.filter(
      //     toy =>
      //       (toy.isDone && status === 'done') ||
      //       (!toy.isDone && status === 'active')
      //   )
      // }

      // const startIdx = pageIdx * pageSize
      // filteredToys = filteredToys.slice(startIdx, startIdx + pageSize)
      return filteredToys
    },
  },
  mutations: {
    setToys(state, { toys }) {
      state.toys = toys
    },
    setCurrToy(state, { toy }) {
      state.currToy = toy
    },
    addToy(state, { toy }) {
      console.log('toy', toy)
      console.log('state.toys', state.toys)
      state.toys.unshift(toy)
    },
    updateToy(state, { toy }) {
      const idx = state.toys.findIndex(t => t._id === toy._id)
      state.toys.splice(idx, 1, toy)
    },
    removeToy(state, { toyId }) {
      const idx = state.toys.findIndex(toy => toy._id === toyId)
      state.toys.splice(idx, 1)
    },
    setFilterBy(state, { filterBy }) {
      state.filterBy = filterBy
    },
  },
  actions: {
    async loadToys(context) {
      try {
        const toys = await toyService.query()
        context.commit({ type: 'setToys', toys })
      }
      catch (err) {
        throw err
      }
    },
    async saveToy({ commit, dispatch }, { toy }) {
      const actionType = toy._id ? 'updateToy' : 'addToy'
      try {
        const savedToy = await toyService.save(toy)
        commit({ type: actionType, toy: savedToy })
        let txt = actionType === 'addToy' ? 'Added a toy' : 'Updated toy'
        txt += `: ${savedToy.txt}`

        return savedToy
      }
      catch (err) {
        console.log(err)
      }
    },
    async removeToy({ commit, dispatch, state }, payload) {
      try {
        await toyService.remove(payload.toyId)
        commit(payload) 
      }
      catch (err) {
        console.log(err);
      }
    },
    async getById({ commit }, { toyId }) {
      try {
        const toy = await toyService.getById(toyId)
        commit({ type: 'setCurrToy', toy })

        return toy
      }
      catch (err) {
        console.log('err', err)
      }
    },
  },
}
