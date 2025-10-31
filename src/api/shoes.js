import express from "express";
import axios from "axios";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(cors());
const PORT = 5050;

app.get("/api/shoes", async (req, res) => {
  try {
    const options = {
      method: "GET",
      url: "https://shoes-collections.p.rapidapi.com/shoes",
      headers: {
        "x-rapidapi-key": process.env.RAPIDAPI_KEY,
        "x-rapidapi-host": "shoes-collections.p.rapidapi.com",
      },
    };

    console.log("Fetching shoes from RapidAPI...");
    const response = await axios.request(options);
    console.log("✅ Successfully fetched shoes data");

    // Return the actual API data
    res.json(response.data);
  } catch (error) {
    console.error("❌ Error fetching data from RapidAPI:", error.message);

    if (error.response) {
      console.error("Status:", error.response.status);
      console.error("Response data:", error.response.data);
    }

    res.status(500).json({
      message: "Error fetching data from RapidAPI",
      error: error.message,
    });
  }
});

app.get("/api/shoes/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const options = {
      method: "GET",
      url: `https://shoes-collections.p.rapidapi.com/shoes/${id}`,
      headers: {
        "x-rapidapi-key": process.env.RAPIDAPI_KEY,
        "x-rapidapi-host": "shoes-collections.p.rapidapi.com",
      },
    };

    console.log(`Fetching shoe with ID: ${id}`);
    const response = await axios.request(options);
    console.log("✅ Successfully fetched single shoe data");

    res.json(response.data);
  } catch (error) {
    console.error(`❌ Error fetching shoe ${id}:`, error.message);

    if (error.response) {
      console.error("Status:", error.response.status);
      console.error("Response data:", error.response.data);
    }

    res.status(500).json({
      message: `Error fetching shoe with ID ${id}`,
      error: error.message,
    });
  }
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
