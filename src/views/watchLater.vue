<template>
  <div
    class="min-h-screen w-screen flex items-center px-10 flex-col"
    style="background-position:center; background-size:cover; background-image:linear-gradient(rgba(0,0,0,.5),rgba(0,0,0,.5)), url('https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fyesofcorsa.com%2Fwp-content%2Fuploads%2F2017%2F05%2FCinema-Wallpaper-Free.jpg&f=1&nofb=1')"
  >
    <h1 class="text-5xl font-semibold z-10 text-white text-center">
      About Movies
    </h1>
    <router-link
      :to="{ name: 'home' }"
      class="text-white text-3xl mb-12 font-bold hover:text-red-300"
      >Home</router-link
    >
    <div class="flex items-center justify-evenly w-screen">
      <div
        class="z-10 relative overflow-hidden text-center bg-gray-300 shadow-2xl text-black rounded-lg mb-4 w-80"
        v-for="(watchInfo, index) in watchLater"
        :key="index"
      >
        <img
          @click="
            // Change the route path to the movie details page
            goToDetails(watchInfo.imdbID)
          "
          class="w-full h-80"
          :src="watchInfo.Poster"
          alt
        />
        <div class="cardInfos py-3 px-3 shadow-2xl">
          <p class="movieTitle text-xl truncate">{{ watchInfo.Title }}</p>
          <p class="text-xl">Released: {{ watchInfo.Year }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["moviesInfos", "clickedMovieDetails", "watchLater"])
  },
  methods: {
    fetchOnCard(id) {
      this.$store.dispatch("fetchOnCard", id);
    },
    goToDetails(param) {
      this.$router.push("/details/" + param);
    }
  }
};
</script>

<style></style>
