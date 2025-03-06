const fetch = require('node-fetch').default;

class AssetApiClient {
  async fetchAssets() {
    try {
      const response = await fetch('https://669ec22d15704bb0e304842d.mockapi.io/assets');
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      console.log('Fetched assets:', data);
      return data;
    } catch (error) {
      console.error('Error fetching assets:', error.message);
      throw error;
    }
  }
}

module.exports = new AssetApiClient();
