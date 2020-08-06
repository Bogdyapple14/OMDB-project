<template>
  <div class="flex flex-wrap justify-center cards">
    <div
      id="card"
      class="relative overflow-hidden text-center bg-gray-300 shadow-2xl text-black rounded-lg m-4 w-80"
      v-for="(movieInfo, index) in moviesInfos"
      :key="index"
      @click="
        // Fetch individual movie api based on imdb id
        fetchOnCard(movieInfo.imdbID);
        // Change the route path to the movie details page
        goToDetails(movieInfo.imdbID);
      "
      >
      <img class="w-full h-80" :src="movieInfo.Poster" alt />
      <div class="cardInfos py-3 px-3 shadow-2xl">
        <p class="movieTitle text-xl truncate">{{ movieInfo.Title }}</p>
        <p class="text-xl">Released: {{ movieInfo.Year }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["moviesTitles", "moviesInfos", "clickedMovieDetails"])
  },
  methods: {
    fetchOnCard(id) {
      this.$store.dispatch("fetchOnCard", id);
    },
    goToDetails(param) {
      this.$router.push("/details/" + param);
    },

  }
};
</script>

<style scoped>
.cards {
  min-height: 12rem !important;
}
button.absolute {
  opacity: 0;
  transition: 0.3s all;
}
#card:hover button.absolute {
  opacity: 100%;
}
</style>
