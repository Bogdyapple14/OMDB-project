import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    totalResults: 0,
    savedMoviesInfos: [],
    searched: false,
    moviesInfos: [],
    searchedMovie: "",
    page: 1,
    clickedMovieDetails: []
  },
  getters: {
    totalResults: state => {
      return state.totalResults;
    },
    searched: state => {
      return state.searched;
    },
    moviesInfos: state => {
      return state.moviesInfos;
    },
    clickedMovieDetails: state => {
      return state.clickedMovieDetails;
    },
    searchedMovie: state => {
      return state.searchedMovie;
    },
    page: state => {
      return state.page;
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
    SET_SEARCHED(state) {
      state.searched = true;
    },
    SET_CLICKEDMOVIEDETAILS(state, payload) {
      state.clickedMovieDetails = payload;
    },
    SET_SEARCHEDMOVIE(state, payload) {
      state.searchedMovie = payload;
    },
  },
  actions: {
    // Fetch all movies infos and arrange them into cards
    fetchApi({ commit, state }) {
      axios
        .get(
          "http://www.omdbapi.com/?s=" +
          state.searchedMovie +
          "&apikey=7dbc4f8c&type=movie&page=" +
          state.page
        )
        .then(response => {
          commit("SET_TOTALRESULTS", response.data.totalResults);
          commit("SET_MOVIESINFOS", response.data.Search);
          commit("SET_SEARCHED");
          // If a movie's poster does not exist, it assigns a default image
          for (let i = 0; i < response.data.Search.length; i++) {
            if (response.data.Search[i].Poster == "N/A") {
              response.data.Search[i].Poster =
                "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages.cdn4.stockunlimited.net%2Fpreview1300%2Fcinema-background-with-movie-objects_1823382.jpg&f=1&nofb=1";
            }
          }
        })
        .catch(() => {
          state.totalResults = 0;
          state.page = null;
        });
    },
    // Fetch an individual movie's all informations based on it's id
    fetchOnCard({ commit, state }, id) {
      axios
        .get("http://www.omdbapi.com/?i=" + id + "&apikey=7dbc4f8c")
        .then(response => {
          commit("SET_CLICKEDMOVIEDETAILS", response.data);
          // If it does not have a poster, it gets a default one
          if (state.clickedMovieDetails.Poster == "N/A")
            state.clickedMovieDetails.Poster =
              "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages.cdn4.stockunlimited.net%2Fpreview1300%2Fcinema-background-with-movie-objects_1823382.jpg&f=1&nofb=1";
        });
    },
    changePage({ commit }, payload) {
      commit("CHANGE_PAGE", payload);
    },
  }
});
