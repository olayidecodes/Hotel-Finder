import axios from "axios";

export const baseUrl = 'https://hotels4.p.rapidapi.com'

export const fetchApi = async (url) => {
    const { data } = await axios.get((url), {
        headers: {
            'X-RapidAPI-Key': '1388e706d4mshf50939857a1f904p1fd4c8jsn6b6893f19c52',
            'X-RapidAPI-Host': 'hotels4.p.rapidapi.com'
        }
    })

    return data
}