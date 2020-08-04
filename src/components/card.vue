<template>
  <div class="flex flex-wrap justify-center cards">
    <div
      class="overflow-hidden text-center bg-gray-300 shadow-2xl text-black rounded-lg m-4 w-80"
      v-for="(movieInfo,index) in moviesInfos"
      :key="index"
      @click="setClickedTitle(movieInfo.Title); fetch(); "
    >
      <img class="w-full h-80" :src="movieInfo.Poster" alt />
      <div class="cardInfos py-3 px-3 shadow-2xl">
        <p class="movieTitle text-xl truncate">{{movieInfo.Title}}</p>
        <p class="text-xl">Released: {{movieInfo.Year}}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import tippy from "tippy.js";
export default {
  computed: {
    ...mapGetters(["moviesTitles", "moviesInfos", "clickedMovieDetails"])
  },
  methods: {
    fetch() {
      this.$store.dispatch("fetch");
    },
    setClickedTitle(payload) {
      this.$store.dispatch("setClickedTitle", payload);
    }
  }
};
tippy(".movieTitle", {
  content: "My tooltip!"
});
</script>


<style scoped>
.cards {
  min-height: 12rem !important;
}
</style>