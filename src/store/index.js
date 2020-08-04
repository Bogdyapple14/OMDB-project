import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    totalResults: {
      type: Number
    },
    moviesInfos: [],
    searchedMovie: "",
    page: 1
  },
  getters: {
    totalResults: state => {
      return state.totalResults;
    },
    moviesTitles: state => {
      return state.moviesTitles
    },
    moviesInfos: state => {
      return state.moviesInfos
    },
    searchedMovie: state => {
      return state.searchedMovie
    },
    page: state => {
      return state.page
    }
  },
  mutations: {
    SET_TOTALRESULTS(state, payload) {
      state.totalResults = payload;
    },
    CHANGE_PAGE(state, payload) {
      state.page += payload;
    },
    SET_MOVIESINFOS(state, payload) {
      state.moviesInfos = payload;
    },
    SET_SEARCHEDMOVIE(state, payload) {
      state.searchedMovie = payload;
    },
    SET_MOVIESTITLES(state, payload) {
      state.moviesTitles.push(payload);
    }
  },
  actions: {
    fetchApi({ commit, state }) {
      axios
        .get("http://www.omdbapi.com/?s=" + state.searchedMovie + "&apikey=7dbc4f8c&type=movie&page=" + state.page)
        .then(response => {
          commit("SET_TOTALRESULTS", response.data.totalResults);
          commit("SET_MOVIESINFOS", response.data.Search)
          for (let i = 0; i < response.data.Search.length; i++) {
            if (response.data.Search[i].Poster == "N/A")
              response.data.Search[i].Poster = "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages.cdn4.stockunlimited.net%2Fpreview1300%2Fcinema-background-with-movie-objects_1823382.jpg&f=1&nofb=1"
          }
        });
    },
    changePage({ commit }, payload) {
      commit("CHANGE_PAGE", payload)
    }
  }
});
