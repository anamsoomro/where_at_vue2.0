<template>
  <div class='guess-map'></div>
</template>

<script>
import mapInit from '../googleMaps'

export default {
  name: 'GuessMap',
  data () {
    return {
      msg: this.$store.state.msg,
      location: this.$store.state.location,
      marker: false,
      guess: 0,
      guessed: false
    }
  },
  async mounted () {
    let google = await mapInit();
    let map = new google.maps.Map(this.$el, {
        zoom: 2,
        center: {lat: 0, lng: 0}, 
        disableDefaultUI: true
      }
    );
    map.addListener('click', function(event) {
      alert('clicked')
      // update guessed to true
      guessed = true
      // guess location
      let guess = new google.maps.LatLng(event.latLng.lat(), event.latLng.lng())
      // create new guess marker
      marker && marker.setMap(null) // remove prev marker if exists
      marker = new google.maps.Marker({
        position: guess,
        map: map,
        title: 'Hello World!',
        draggable: true,
        animation: google.maps.Animation.DROP,
      });
    }); 
  },
  methods: {

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.guess-map{
  height: 90vh;
  width: 50%;
}
</style>
