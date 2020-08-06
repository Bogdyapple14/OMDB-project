<template>
  <div>
    <div class="flex items-center flex-col h-screen">
      <img
        class="h-full w-full object-cover absolute"
        src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fyesofcorsa.com%2Fwp-content%2Fuploads%2F2017%2F05%2FCinema-Wallpaper-Free.jpg&f=1&nofb=1"
        alt
      />

      <div class="z-20 text-center mb-10">
        <h1 class="text-5xl font-semibold z-10 text-white">About Movies</h1>
        <router-link
          :to="{ name: 'home' }"
          class="text-3xl font-bold text-white mx-3 hover:text-red-300"
        >Home</router-link>
        <router-link
          :to="{ name: 'watch' }"
          class="text-3xl font-bold text-white mx-3 hover:text-red-300"
        >Watch-List</router-link>
      </div>
      <div
        id="newCard"
        class="flex relative text-xl text-gray-200 font-semibold leading-loose bg-black bg-opacity-75 max-w-6xl text-left rounded-lg border-gray-400 border-2 flex-row-reverse"
      >
        <button
          class="inset-0 z-10 absolute bg-white text-lg right-0 px-1 font-bold rounded-md items-center text-red-400 duration-300 flex h-8 hover:bg-red-300 hover:text-white"
          @click="watchLater(clickedMovieDetails.Title)"
        >Watch Later</button>
        <img class="w-1/2 object-cover" :src="clickedMovieDetails.Poster" alt />
        <div class="left px-4 py-2 my-auto">
          <h3 class="text-center font-bold text-3xl">{{ clickedMovieDetails.Title }}</h3>
          <h3>
            <span class="font-bold text-red-200">Year</span>
            : {{ clickedMovieDetails.Year }}
          </h3>
          <h3>
            <span class="font-bold text-red-200">Runtime</span>
            : {{ clickedMovieDetails.Runtime }}
          </h3>
          <h3>
            <span class="font-bold text-red-200">Genre</span>
            : {{ clickedMovieDetails.Genre }}
          </h3>
          <h3>
            <span class="font-bold text-red-200">Actors</span>
            : {{ clickedMovieDetails.Actors }}
          </h3>
          <p>
            <span class="font-bold text-red-200">Plot</span>
            : {{ clickedMovieDetails.Plot }}
          </p>
          <h3>
            <span class="font-bold text-red-200">Production</span>
            : {{ clickedMovieDetails.Production }}
          </h3>
          <h3>
            <span class="font-bold text-red-200">imdbRating</span>
            : {{ clickedMovieDetails.imdbRating }} /
            {{ clickedMovieDetails.imdbVotes }}
            <span
              class="text-sm"
            >votes</span>
          </h3>
          <h3>
            <span class="font-bold text-red-200">Box Office</span>
            : {{ clickedMovieDetails.BoxOffice }}
          </h3>
          <h3>
            <span class="font-bold text-red-200">Country</span>
            : {{ clickedMovieDetails.Country }}
          </h3>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["clickedMovieDetails"])
  },
  beforeRouteEnter(to, from, next) {
    next(vm => {
      vm.fetchOnCard(to.params.id);
    });
  },
  methods: {
    fetchOnCard(id) {
      this.$store.dispatch("fetchOnCard", id);
    },
    watchLater(title) {
      this.$store.dispatch("watchLater", title);
    }
  }
};
</script>
