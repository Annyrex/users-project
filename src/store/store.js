import { createStore } from 'vuex'
import axios from 'axios'

const apiBase = 'https://alvahtek.com/projects/ota/api/news-api';

export default createStore({
  state: {
    allNews: [],
    headlineNews: null,
    selectedNews: null,
    categorizedNews: []
  },

  getters: {
    getAllNews: (state) => state.allNews,
    getHeadlineNews: (state) => state.headlineNews,
    getSelectedNews: (state) => state.selectedNews,
    getCategorizedNews: (state) => state.categorizedNews,

    // Example: Get only tech news from allNews
    techNews: (state) => state.allNews.filter(n => n.category === 'technology'),

    // Example: Get news by keyword
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
    }
  },

  actions: {
    async fetchAllNews({ commit }) {
      const res = await axios.get(`${apiBase}/news.php`)
      commit('SET_ALL_NEWS', res.data)
    },
    async fetchHeadlineNews({ commit }) {
      const res = await axios.get(`${apiBase}/news.php?type=headline`)
      commit('SET_HEADLINE_NEWS', res.data)
    },
    async fetchNewsByUuid({ commit }, uuid) {
      const res = await axios.get(`${apiBase}/news.php?uuid=${uuid}`)
      commit('SET_SELECTED_NEWS', res.data)
    },
    async fetchNewsByCategory({ commit }, category) {
      const res = await axios.get(`${apiBase}/news.php?category=${category}`)
      commit('SET_CATEGORIZED_NEWS', res.data)
    }
  }
})
