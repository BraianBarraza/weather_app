<script setup>
import useWeather from "../compasable/useWeather.js";
const {cityName, countryName, tempFormat} = useWeather();

defineProps({
  weather:{
    type: Object,
    required: true
  }
})
</script>

<template>
<div class="result">
  <h2>Weather in: {{cityName}} - {{countryName}}</h2>
  <p class="actual">{{tempFormat(weather.main.temp)}}&deg;C</p>
  <div class="temperatures">
    <p>Min: {{tempFormat(weather.main.temp_min)}}<span>&deg;C</span></p>
    <p>Max: {{tempFormat(weather.main.temp_max)}}<span>&deg;C</span></p>
  </div>
</div>
</template>

<style scoped>

</style>