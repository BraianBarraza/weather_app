<script setup>
import {reactive, ref} from "vue";
import Alert from "./Alert.vue";

const error = ref('')

const emit = defineEmits(['get-weather'])

const countries = [
  {code: 'US', name: 'USA'},
  {code: 'MX', name: 'Mexico'},
  {code: 'AR', name: 'Argentina'},
  {code: 'CO', name: 'Colombia'},
  {code: 'CR', name: 'Costa Rica'},
  {code: 'ES', name: 'Spain'},
  {code: 'PE', name: 'Peru'}
]

const search = reactive({
  city: '',
  country: ''
})

const checkWeather = () => {
  if (Object.values(search).includes('')) {
    error.value = 'All fields are required';
    return
  }

  error.value = ''

  emit('get-weather', search)

}
</script>

<template>


  <form action=""
        class="form"
        @submit.prevent="checkWeather">

  <Alert v-if="error">{{ error }}</Alert>

    <div class="field">
      <label for="city">City</label>
      <input type="text"
             id="city"
             placeholder="City"
             v-model="search.city"
      >
    </div>
    <div class="field">
      <label for="country">Country</label>
      <select id="country"
              v-model="search.country"
      >
        <option value="">-- Select a Country --</option>
        <option v-for="country in countries" :value="country.code">
          {{ country.name }}
        </option>
      </select>
    </div>

    <input type="submit" value="Check Weather"/>
  </form>

</template>


<style scoped>

</style>