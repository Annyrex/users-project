import { createStore } from 'vuex'
import axios from 'axios'

const apiBase = 'https://alvahtek.com/projects/ota/api/news-api'

export default createStore({
  state: {
    allNews: [],
    headlineNews: null,
    selectedNews: null,
    categorizedNews: [],
    isLoading: false // ✅ Added loading state
  },

  getters: {
    getAllNews: (state) => state.allNews,
    getHeadlineNews: (state) => state.headlineNews,
    getSelectedNews: (state) => state.selectedNews,
    getCategorizedNews: (state) => state.categorizedNews,
    isLoading: (state) => state.isLoading, // ✅ Loading getter

    techNews: (state) => state.allNews.filter(n => n.category === 'technology'),

    searchNews: (state) => (keyword) => {
      return state.allNews.filter(news =>
        news.title.toLowerCase().includes(keyword.toLowerCase())
      )
    }
  },

  mutations: {
    SET_ALL_NEWS(state, news) {
      state.allNews = news
    },
    SET_HEADLINE_NEWS(state, news) {
      state.headlineNews = news
    },
    SET_SELECTED_NEWS(state, news) {
      state.selectedNews = news
    },
    SET_CATEGORIZED_NEWS(state, news) {
      state.categorizedNews = news
    },
    SET_LOADING(state, value) { // ✅ Mutation to update loading
      state.isLoading = value
    }
  },

  actions: {
    async fetchAllNews({ commit }) {
      commit('SET_LOADING', true) // ✅ Start loading
      try {
        const res = await axios.get(`${apiBase}/news.php`)
        commit('SET_ALL_NEWS', res.data)
      } catch (error) {
        console.error('Failed to fetch all news:', error)
      } finally {
        commit('SET_LOADING', false) // ✅ End loading
      }
    },

    async fetchHeadlineNews({ commit }) {
      commit('SET_LOADING', true)
      try {
        const res = await axios.get(`${apiBase}/news.php?type=headline`)
        commit('SET_HEADLINE_NEWS', res.data)
      } catch (error) {
        console.error('Failed to fetch headline news:', error)
      } finally {
        commit('SET_LOADING', false)
      }
    },

    async fetchNewsByUuid({ commit }, uuid) {
      commit('SET_LOADING', true)
      try {
        const res = await axios.get(`${apiBase}/news.php?uuid=${uuid}`)
        commit('SET_SELECTED_NEWS', res.data)
      } catch (error) {
        console.error('Failed to fetch news by UUID:', error)
      } finally {
        commit('SET_LOADING', false)
      }
    },

    async fetchNewsByCategory({ commit }, category) {
      commit('SET_LOADING', true)
      try {
        const res = await axios.get(`${apiBase}/news.php?category=${category}`)
        commit('SET_CATEGORIZED_NEWS', res.data)
      } catch (error) {
        console.error('Failed to fetch news by category:', error)
      } finally {
        commit('SET_LOADING', false)
      }
    }
  }
})
