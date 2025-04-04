import {computed, ref} from "vue";
import axios from 'axios'

const cityName = ref('')
const countryName = ref('')
const error = ref('')

export default function useWeather() {
    const weather = ref({})
    const loading = ref(false);


    const getWeather = async ({city, country}) => {
        // Import the API Key
        const key = import.meta.env.VITE_API_KEY;
        loading.value = true;
        weather.value = {};
        error.value = ''

        try {
            //get lat long
            const url = `https://api.openweathermap.org/geo/1.0/direct?q=${city},${country}&limit=1&appid=${key}`
            const {data} = await axios(url)
            const {lat, lon} = data[0]
            cityName.value = city
            countryName.value = country

            //get Weather
            const urlWeather = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}`
            const {data: result} = await axios(urlWeather)
            weather.value = result

        } catch {
            error.value = 'City not found'
        } finally {
            loading.value = false
        }
    }

    const showWeather = computed(() => {
        return Object.values(weather.value).length > 0
    })

    const tempFormat = temperature => parseInt(temperature - 273.15)

    return {
        getWeather,
        showWeather,
        tempFormat,
        loading,
        weather,
        cityName,
        countryName,
        error
    }
}