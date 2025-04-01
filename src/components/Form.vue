<script setup>
const countries = [
  {code: 'US', name: 'USA'},
  {code: 'MX', name: 'Mexico'},
  {code: 'AR', name: 'Argentina'},
  {code: 'CO', name: 'Colombia'},
  {code: 'CR', name: 'Costa Rica'},
  {code: 'ES', name: 'Spain'},
  {code: 'PE', name: 'Peru'}
]
</script>

<template>
  <form action="" class="form">
    <div class="field">
      <label for="city">City</label>
      <input type="text"
             id="city"
             placeholder="City"
      >
    </div>
    <div class="field">
      <label for="country">Country</label>
      <select
      id="country"
      >
        <option value="">-- Select a Country--</option>
        <option v-for="country in countries" :value="country.code">
          {{ country.name }}
        </option>
      </select>
    </div>

    <input type="submit" value="Check Weather" />
  </form>
</template>

<style scoped>

</style>