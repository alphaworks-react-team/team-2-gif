const router = require("express").Router();
require("dotenv").config();
const axios = require('axios');

const fetchTrending = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const request = await axios.get(`https://api.giphy.com/v1/gifs/trending?api_key=${process.env.API_KEY}&limit=35`)
      resolve(request.data.data)
    } catch (err) {
      reject(err)
    }
  })
}

router.get("/api", async (req, res) => {
  try {
    res.json(await fetchTrending())
    console.log(res.body)
  } catch (err) {
    res.json(err)
  }
});

module.exports = router;
