const express = require("express");
const axios = require("axios");
const cors = require("cors");

const app = express();
app.use(cors()); // Enable CORS
app.use(express.json()); // Enable JSON parsing

// Route to fetch quiz data
app.get("/quiz-data", async (req, res) => {
    try {
        const response = await axios.get("https://api.jsonserve.com/Uw5CrX");
        res.json(response.data);
    } catch (error) {
        console.error("Error fetching quiz data:", error.message);
        res.status(500).json({ error: "Failed to fetch quiz data" });
    }
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
