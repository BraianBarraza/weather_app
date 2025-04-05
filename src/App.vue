<script setup>
import Form from "./components/Form.vue";
import useWeather from "./compasable/useWeather.js";
import Weather from "./components/Weather.vue";
import Spinner from "./components/Spinner.vue";
import Alert from "./components/Alert.vue";

const {getWeather, showWeather, weather, loading, error} = useWeather();

</script>

<template>
  <h1 class="title">Weather Searcher</h1>

  <div class="container weather-searcher">
    <Form
        @get-weather="getWeather"
    />
    <Spinner v-if="loading"/>

    <Alert v-if="error">{{ error }}</Alert>

    <Weather
        v-if="showWeather"
        :weather="weather"
    />

  </div>

</template>

<style scoped>

</style>