<template>
  <div class='dash'>i am dash
    <button @click="checkGuess">submit</button>
  </div>
</template>

<script>

export default {
  name: 'Dash',
  data () {
    return {

    }
  },
  methods: {
    checkGuess () {
      console.log('boom bop boo') 
      // remove prev marker if exists 
      // create new polyline using location and guess
      // calculate the midpoint
      // create an infowinow showing how off you were
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
