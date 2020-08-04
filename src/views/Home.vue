<template>
  <div
    @keyup.enter.prevent="fetchApi()"
    class="flex-col items-center justify-start text-white font-bold text-3xl min-h-screen flex bg-cover bg-center bg-fixed"
    style="background-image:linear-gradient(rgba(0,0,0,.5),rgba(0,0,0,.5)), url('https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fyesofcorsa.com%2Fwp-content%2Fuploads%2F2017%2F05%2FCinema-Wallpaper-Free.jpg&f=1&nofb=1')"
  >
    <h1 class="text-5xl font-semibold z-10 text-white">About Movies</h1>
    <input
      type="text"
      placeholder="Movie Name"
      class="text-gray-800 my-12 h-8 outline-none shadow-xl py-5 rounded-md text-3xl text-center font-bold"
      v-model="searchedMovie"
    />
    <div id="results" v-if="searched" class="flex text-center flex-col w-full">
      <h1>Total Results: {{totalResults}}</h1>
      <div id="pagination" class="flex mx-auto ">
        <button
          @click="changePage(-1)"
          v-show="page > 1"
          class="hover:text-red-400 duration-200 focus:outline-none"
        >Prev</button>
        <h1 class="mx-2">/</h1>
        <button
          @click="changePage(1)"
          v-show="page < totalResults / 10"
          class="hover:text-red-400 duration-200 focus:outline-none"
        >Next</button>
      </div>
      <h1>{{page}}</h1>
      <div class="flex flex-wrap justify-center items-center">
        <card></card>
      </div>
    </div>
  </div>
</template>

<script>
import card from "../components/card";
export default {
  data() {
    return {
      searched: false
    };
  },
  computed: {
    totalResults() {
      return this.$store.getters.totalResults;
    },
    page() {
      return this.$store.getters.page;
    },
    searchedMovie: {
      get() {
        return this.$store.getters.searchedMovie;
      },
      set(value) {
        this.$store.commit("SET_SEARCHEDMOVIE", value);
      }
    }
  },
  methods: {
    fetchApi() {
      this.$store.dispatch("fetchApi");
      this.searched = true;
    },
    changePage(payload) {
      this.$store.dispatch("changePage", payload);
      this.$store.dispatch("fetchApi");
    }
  },
  components: {
    card
  }
};
</script>
