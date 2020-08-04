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
    page: 1,
    clickedTitle: "",
    clickedMovieDetails: []
  },
  getters: {
    totalResults: state => {
      return state.totalResults;
    },
    clickedTitle: state => {
      return state.clickedTitle;
    },
    moviesInfos: state => {
      return state.moviesInfos
    },
    clickedMovieDetails: state => {
      return state.clickedMovieDetails
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
    SET_CLICKEDTITLE(state, payload) {
      state.clickedTitle = payload;
    },
    CHANGE_PAGE(state, payload) {
      state.page += payload;
    },
    SET_MOVIESINFOS(state, payload) {
      state.moviesInfos = payload;
    },
    SET_CLICKEDMOVIEDETAILS(state, payload) {
      state.clickedMovieDetails = payload;
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
    fetch({ commit, state }) {
      axios
        .get("http://www.omdbapi.com/?t=" + state.clickedTitle + "&apikey=7dbc4f8c")
        .then(response => {
          commit("SET_CLICKEDMOVIEDETAILS", response.data)
          console.log(state.clickedTitle, state.clickedMovieDetails)
        })
    },
    changePage({ commit }, payload) {
      commit("CHANGE_PAGE", payload)
    },
    setClickedTitle({ commit }, payload) {
      commit("SET_CLICKEDTITLE", payload)
    }
  }
});
