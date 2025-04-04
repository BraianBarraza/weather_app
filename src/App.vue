<script setup>
import Form from "./components/Form.vue";
import useWeather from "./compasable/useWeather.js";
import Weather from "./components/Weather.vue";
import Spinner from "./components/Spinner.vue";

const {getWeather, showWeather, weather,loading} = useWeather();

</script>

<template>
  <h1 class="title">Weather Searcher</h1>

  <div class="container weather-searcher">
    <Form
        @get-weather="getWeather"
    />
    <Spinner v-if="loading"/>
    <Weather
        v-if="showWeather"
        :weather="weather"
    />

  </div>

</template>

<style scoped>

</style>