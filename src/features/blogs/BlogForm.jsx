import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addBlog, editBlog, fetchBlog } from "./blogsSlice";
import { useParams, useNavigate } from "react-router-dom";

const BlogForm = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("");
  const dispatch = useDispatch();
  const { id } = useParams();
  const blog = useSelector((state) => (id ? state.blogs.selectedBlog : null));
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      dispatch(fetchBlog(id));
    }
  }, [dispatch, id]);

  useEffect(() => {
    if (blog) {
      setTitle(blog.title);
      setContent(blog.content);
      setCategory(blog.category);
    }
  }, [blog]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newBlog = {
      id: id ? id : new Date().getTime().toString(),
      title,
      content,
      category,
    };

    if (id) {
      dispatch(editBlog(newBlog));
    } else {
      dispatch(addBlog(newBlog));
    }
    navigate("/");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-2xl rounded bg-teal-100 overflow-hidden shadow-lg mb-6 justify-center mx-auto my-10 p-4"
    >
      <h2 className="text-2xl font-bold mb-4 text-center">
        {id ? "Update" : "Add New"} Blog
      </h2>
      <div className="mb-6">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Title
        </label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div className="mb-6">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Content
        </label>
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div className="mb-6">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Category
        </label>
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          required
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        >
          <option value="">Select Category</option>
          <option value="technology">Technology</option>
          <option value="lifestyle">Lifestyle</option>
          <option value="travel">Travel</option>
          <option value="health">Health</option>
          <option value="others">Others</option>
        </select>
      </div>
      <button
        type="submit"
        className="bg-blue-500 text-white py-2 px-4 rounded"
      >
        {id ? "Update" : "Add"}
      </button>
    </form>
  );
};

export default BlogForm;
