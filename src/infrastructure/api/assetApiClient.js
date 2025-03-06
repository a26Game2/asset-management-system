const axios = require('axios');

class AssetApiClient {
  async fetchAssets() {
    try {
      const response = await axios.get('https://669ec22d15704bb0e304842d.mockapi.io/assets');
      // Check if the response status is OK (200)
      if (response.status !== 200) {
        throw new Error(`API request failed with status ${response.status}: ${response.statusText}`);
      }
      return response.data;
    } catch (error) {
      console.error('Error fetching assets from API:', error.message);
      throw error;
    }
  }
}

module.exports = new AssetApiClient();
