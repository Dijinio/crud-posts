import axios from "axios";

axios.defaults.baseURL = "https://jsonplaceholder.typicode.com/";

// Posts
export const fetchPosts = () => axios.get("/posts");
export const fetchPost = (id) => axios.get(`/posts/${id}`);
export const newPost = (post) => axios.post("/posts", post);

// Comments
export const fetchComments = (postId) => axios.get(`/posts/${postId}/comments`);
