import axios from "axios";

const BASE_URL = "https://youtube-v31.p.rapidapi.com";
const options = {
    params: {
        maxResults: '50'
      },
      headers: {
        'X-RapidAPI-Key': '837fd93bc7mshdc34bce839cecbbp1d974bjsn8a6f4bce351c',
        'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
      }
};

export const ApiServicee = {
  async Fetching(url) {
    const response = await axios.get(`${BASE_URL}/${url}`, options);
    return response.data;
  },
};

