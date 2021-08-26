const router = require("express").Router();
require("dotenv").config();
const axios = require('axios');

const fetchTrending = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const request = await axios.get(
				`https://api.giphy.com/v1/gifs/trending?api_key=${process.env.GIF_KEY}&limit=35`
			);
      resolve(request.data.data)
    } catch (err) {
      reject(err)
    }
  })
}

const fetchSearch = (searchTerm, page) => {
  return new Promise(async (resolve, reject) => {
    try {
      const request = await axios.get(
				`https://api.giphy.com/v1/gifs/search?&q=${searchTerm}&api_key=${process.env.GIF_KEY}&offset=${page}`
			);
      resolve(request.data.data)
    } catch (err) {
      reject(err)
    }
  })
}

const fetchRandom = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const request = await axios.get(`https://api.giphy.com/v1/gifs/random?&api_key=${process.env.GIF_KEY}&limit=40`)
      resolve(request.data.data)
    } catch (err) {
      reject(err)
    }
  })
}

const fetchCategories = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const request = await axios.get(`https://api.giphy.com/v1/gifs/categories?&api_key=${process.env.GIF_KEY}`)
      resolve(request.data.data)
    } catch (err) {
      reject(err)
    }
  })
}


router.get("/api", async (req, res) => {
  try {
    res.json(await fetchTrending())
  } catch (err) {
    res.json(err)
  }
});

router.get("/search/:searchTerm/:page", async (req, res) => {
  try {
    res.json(await fetchSearch(req.params.searchTerm, req.params.page))
  } catch (err) {
    res.json(err)
  }
});

router.get("/random", async (req, res) => {
  try {
    res.json(await fetchRandom())
  } catch (err) {
    res.json(err)
  }
});

router.get("/categories", async (req, res) => {
  try {
    res.json(await fetchCategories())
  } catch (err) {
    res.json(err)
  }
});


module.exports = router;
