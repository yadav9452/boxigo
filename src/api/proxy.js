const axios = require('axios');

module.exports = async (req, res) => {
  try {
    const response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/sample-data`);
    res.status(200).json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching data' });
  }
};
