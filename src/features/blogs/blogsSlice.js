import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  blogs: JSON.parse(localStorage.getItem("blogs")) || [],
  selectedBlog: null,
};

const blogsSlice = createSlice({
  name: "blogs",
  initialState,
  reducers: {
    fetchBlogs: (state) => {
      state.blogs = JSON.parse(localStorage.getItem("blogs")) || [];
    },
    fetchBlog: (state, action) => {
      state.selectedBlog = state.blogs.find(
        (blog) => blog.id === action.payload
      );
    },
    addBlog: (state, action) => {
      state.blogs.push(action.payload);
      localStorage.setItem("blogs", JSON.stringify(state.blogs));
    },
    editBlog: (state, action) => {
      const index = state.blogs.findIndex(
        (blog) => blog.id === action.payload.id
      );
      state.blogs[index] = action.payload;
      localStorage.setItem("blogs", JSON.stringify(state.blogs));
    },
    deleteBlog: (state, action) => {
      state.blogs = state.blogs.filter((blog) => blog.id !== action.payload);
      localStorage.setItem("blogs", JSON.stringify(state.blogs));
    },
  },
});

export const { fetchBlogs, fetchBlog, addBlog, editBlog, deleteBlog } =
  blogsSlice.actions;
export default blogsSlice.reducer;
