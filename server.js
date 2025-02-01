const express = require("express");
const axios = require("axios");
const cors = require("cors");

const app = express();
const PORT = 5000;
app.use(cors());

const API_URL = "https://api.jsonserve.com/Uw5CrX";

app.get("/api", async (req, res) => {
  try {
    const response = await axios.get(API_URL);
    res.json(response.data);
  } catch (error) {
    console.error("Error fetching data:", error.message);
    res.status(500).json({ error: "Failed to fetch data" });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
