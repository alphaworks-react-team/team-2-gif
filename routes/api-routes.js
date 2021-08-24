const router = require("express").Router();
require("dotenv").config();
const axios = require('axios');

const fetchTrending = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const request = await axios.get(`https://api.giphy.com/v1/gifs/trending?api_key=${process.env.GIF_KEY}&limit=35`)
      resolve(request.data.data)
    } catch (err) {
      reject(err)
    }
  })
}

const fetchSearch = (searchTerm) => {
  return new Promise(async (resolve, reject) => {
    try {
      const request = await axios.get(`https://api.giphy.com/v1/gifs/search?&q=${searchTerm}&api_key=${process.env.GIF_KEY}&limit=35`)
      resolve(request.data.data)
    } catch (err) {
      reject(err)
    }
  })
}

router.get("/api", async (req, res) => {
  try {
    console.log(process.env.GIF_KEY)
    res.json(await fetchTrending())
  } catch (err) {
    res.json(err)
  }
});


router.get("/search/:searchTerm", async (req, res) => {
  try {
    console.log(process.env.GIF_KEY)
    res.json(await fetchSearch(req.params.searchTerm))
  } catch (err) {
    res.json(err)
  }
});

module.exports = router;
