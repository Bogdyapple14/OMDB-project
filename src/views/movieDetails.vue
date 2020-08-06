<template>
  <div>
    <div class="flex justify-center items-center h-screen">
      <img
        class="absolute h-full w-full object-cover"
        src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fyesofcorsa.com%2Fwp-content%2Fuploads%2F2017%2F05%2FCinema-Wallpaper-Free.jpg&f=1&nofb=1"
        alt
      />
      <div>
        <router-link
          to="/"
          class="text-4xl text-gray-200 z-10 absolute top-0 mt-5 font-bold hover:text-red-300"
          >Homepage</router-link
        >
      </div>
      <div
        id="newCard"
        class="flex absolute text-xl text-gray-200 font-semibold leading-loose bg-black bg-opacity-75 max-w-6xl text-left rounded-lg border-gray-400 border-2 flex-row-reverse"
      >
        <img class="w-1/2 object-cover" :src="clickedMovieDetails.Poster" alt />
        <div class="left px-4 py-2 my-auto">
          <h3 class="text-center font-bold text-3xl">
            {{ clickedMovieDetails.Title }}
          </h3>
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
            <span class="text-sm">votes</span>
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
    }
  }
};
</script>

<style></style>
