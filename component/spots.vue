import { getCampingSpots } from '@/service/api';

export default {
  namespaced: true,
  state: {
    campingSpots: []
  },
  getters: {
    campingSpots(state) {
      return state.campingSpots;
    }
  },
  mutations: {
    SET_CAMPING_SPOTS(state, campingSpots) {
      state.campingSpots = campingSpots;
    }
  },
  actions: {
    async fetchCampingSpots({ commit }) {
      try {
        const response = await getCampingSpots();
        commit('SET_CAMPING_SPOTS', response.data);
      } catch (error) {
        console.error('Failed to fetch camping spots', error);
      }
    }
  }
}