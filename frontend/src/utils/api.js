import axios from "axios";

export const fetchQuizData = async () => {
    try {
        const response = await axios.get("http://localhost:5000/quiz-data");
        return response.data;
    } catch (error) {
        console.error("Error fetching quiz data:", error);
        throw error;
    }
};
