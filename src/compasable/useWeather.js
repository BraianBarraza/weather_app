import axios from 'axios'

export default function useWeather() {

    const getWeather = async ({city, country}) => {
        // Import the API Key
        const key = import.meta.env.VITE_API_KEY;

        try {
            //get lat long
            const url = `http://api.openweathermap.org/geo/1.0/direct?q=${city},${country}&limit=1&appid=${key}`
            const {data} = await axios(url)
            const {lat, long} = data[0]
            //get Weather

        } catch (err) {
            console.error(err)
        }
    }

    return {
        getWeather,
    }
}