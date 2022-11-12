import axios from "axios";

axios.defaults.headers.authorization = localStorage.getItem("tokem");
axios.defaults.baseURL = "https://marvel-blog-backend.onrender.com/api/";

export default axios;
