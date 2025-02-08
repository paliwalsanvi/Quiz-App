const express = require("express");
const axios = require("axios");
const cors = require("cors");

const app = express();
app.use(cors()); // Allow frontend to access this API

app.get("/quiz-data", async (req, res) => {
    try {
        const response = await axios.get("https://api.jsonserve.com/Uw5CrX");
        res.json(response.data);
    } catch (error) {
        console.error("Error fetching quiz data:", error.message);
        res.status(500).json({ error: "Failed to fetch quiz data" });
    }
});

app.listen(5000, () => console.log("Server running on port 5000"));
