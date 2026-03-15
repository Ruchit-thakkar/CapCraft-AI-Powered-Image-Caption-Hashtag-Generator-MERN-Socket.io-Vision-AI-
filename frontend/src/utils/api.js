import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || "https://capcraft.onrender.com",
  withCredentials: true, // 👈 यह cookies भेजने के लिए ज़रूरी है
});

export default api;
