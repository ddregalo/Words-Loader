<template>
  <div class="wrapper">
    <div id="words">
      {{ words }}
    </div>
  </div>
</template>

<script>
export default {
  name: "WordLoader",
  props: {
    words: Array
  }
};
</script>

<style scoped lang="scss">
</style>
