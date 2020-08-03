<template>
  <div class="flex flex-wrap justify-center">
    <div
      id="card"
      class="text-center bg-white border-2 border-red-400 shadow-2xl text-black rounded-lg m-4 px-5 w-80"
      v-for="(movieInfo,index) in moviesInfos"
      :key="index"
    >
      <p class="text-xl truncate">{{movieInfo.Title}}</p>
      <p class="text-xl truncate">{{movieInfo.Year}}</p>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";;
export default {
  computed: {
    ...mapGetters(["moviesTitles", "moviesInfos"])
  }
};

</script>