import axios from "axios";

axios.defaults.baseURL = "https://jsonplaceholder.typicode.com/";

// Posts
export const fetchPosts = () => axios.get("/posts");
export const newPost = (post) => axios.post("/posts", post);
