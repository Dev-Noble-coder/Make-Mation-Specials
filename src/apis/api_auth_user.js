import axios from "axios";

const API_BASE_URL = import.meta.env.VITE_ERP_TURBO_API_BASE_URL;

export const authUser = async (request, endpoint, data) => {
    console.log(`API Base URL: ${API_BASE_URL}${endpoint}`);

    try {
        const response = await axios({
            method: request, // Use the request type (e.g., "POST", "GET", "PUT")
            url: `${API_BASE_URL}${endpoint}`,
            data: request === "GET" ? null : data, // GET requests usually don't send a body
            headers: {

                "Content-Type": "application/json",
            },
            
        });

        return { success: true, data: response.data }; // Return success response
    } catch (error) {
        console.error("Error creating user:", error.response?.data || error.message);
        return {
            success: false,
            message: error.response?.data?.message || "Something went wrong",
        };
    }
};
