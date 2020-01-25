<template>
  <div class="home">
    <WordLoader :words="words"/>
  </div>
</template>

<script>

import WordLoader from "@/components/WordLoader.vue";

export default {
  name: "home",
  components: {
    WordLoader
  },
  data() {
    return {
      words: ["hold", "touch", "dream", "fall", "drift", "sway"]
    }
  }
};
</script>
