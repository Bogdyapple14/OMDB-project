<template>
  <div
    id="newCard"
    class="flex absolute text-md text-gray-200 font-semibold leading-loose bg-black bg-opacity-75 w-2/3 text-left rounded-lg border-gray-400 border-2 flex-row-reverse"
  >
    <img class="w-2/3" :src="clickedMovieDetails.Poster" alt />
    <div class="left px-4 py-2">
      <h3 class="text-center font-bold">{{clickedMovieDetails.Title}}</h3>
      <h3>
        <span class="font-bold text-red-200">Year</span>
        : {{clickedMovieDetails.Year}}
      </h3>
      <h3>
        <span class="font-bold text-red-200">Runtime</span>
        : {{clickedMovieDetails.Runtime}}
      </h3>
      <h3>
        <span class="font-bold text-red-200">Genre</span>
        : {{clickedMovieDetails.Genre}}
      </h3>
      <h3>
        <span class="font-bold text-red-200">Actors</span>
        : {{clickedMovieDetails.Actors}}
      </h3>
      <p>
        <span class="font-bold text-red-200">Plot</span>
        : {{clickedMovieDetails.Plot}}
      </p>
      <h3>
        <span class="font-bold text-red-200">Production</span>
        : {{clickedMovieDetails.Production}}
      </h3>
      <h3>
        <span class="font-bold text-red-200">imdbRating</span>
        : {{clickedMovieDetails.imdbRating}} / {{clickedMovieDetails.imdbVotes}}
        <span
          class="text-sm"
        >votes</span>
      </h3>
      <h3>
        <span class="font-bold text-red-200">Box Office</span>
        : {{clickedMovieDetails.BoxOffice}}
      </h3>
      <h3>
        <span class="font-bold text-red-200">Country</span>
        : {{clickedMovieDetails.Country}}
      </h3>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["clickedMovieDetails"])
  }
};
</script>

<style>
</style>