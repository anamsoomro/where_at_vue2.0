<template>
  <div class='view-map'></div>
</template>

<script>
import mapInit from '../googleMaps'

export default {
  name: 'ViewMap',
  async mounted () {
    let google = await mapInit();
    let location = new google.maps.LatLng(51.9851, 5.8987)
    // let map = new google.maps.Map(this.$el);
    new google.maps.StreetViewPanorama(this.$el, {
      position: location,
      disableDefaultUI: true
    })
  },
  data () {
    return {

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .view-map{
    height: 90vh;
    width: 50%;
    float: left;
  }
</style>
