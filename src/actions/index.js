import axios from 'axios';

const API_KEY = '5c0c8121c0b34e4652a4d5582ed7baef';

const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;
export const FETCH_WEATHER = 'FETCH_WEATHER';


export function fetchWeather(city) {

    const url = `${ROOT_URL}&q=${city},us`;
    const request = axios.get(url);

    return {

        type: FETCH_WEATHER,
        payload: request
    };
}