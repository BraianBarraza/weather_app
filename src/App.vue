<script setup>
import Form from "./components/Form.vue";
import useWeather from "./compasable/useWeather.js";

const {getWeather} = useWeather();

</script>

<template>
  <h1 class="title">Weather Searcher</h1>

  <div class="container weather-searcher">
    <Form
        @get-weather="getWeather"
    />

  </div>

</template>

<style scoped>

</style>