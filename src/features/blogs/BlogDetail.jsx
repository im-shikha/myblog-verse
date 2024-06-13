import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchBlog, deleteBlog } from "./blogsSlice";
import { useParams, useNavigate } from "react-router-dom";
import { useBlogContext } from "./BlogContext";
import technologyImg from "../assets/technology.jpg";
import lifestyleImg from "../assets/lifestyle.jpg";
import healthImg from "../assets/health.jpg";
import travelImg from "../assets/travel.jpg";
import othersImg from "../assets/others.jpg";

const categoryImages = {
  technology: technologyImg,
  lifestyle: lifestyleImg,
  health: healthImg,
  travel: travelImg,
  others: othersImg,
};

const BlogDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const blog = useSelector((state) => state.blogs.selectedBlog);
  const navigate = useNavigate();
  const { likeBlog, likes } = useBlogContext();

  useEffect(() => {
    dispatch(fetchBlog(id));
  }, [dispatch, id]);

  const handleDelete = () => {
    dispatch(deleteBlog(id));
    navigate("/");
  };

  if (!blog) return <div>Loading...</div>;
  const imageSrc = categoryImages[blog.category];

  return (
    <div className="max-w-2xl rounded overflow-hidden break-words shadow-lg mb-6 justify-center mx-auto my-10 p-4 bg-teal-100">
      <img
        className="w-full h-56 object-cover mb-4 rounded"
        src={imageSrc}
        alt={blog.category}
      />
      <h2 className="text-3xl font-bold mb-4">{blog.title}</h2>
      <p className="mb-4">{blog.content}</p>
      <div className="flex space-x-4">
        <button
          onClick={() => navigate(`/edit/${blog.id}`)}
          className="bg-green-500 text-white py-2 px-4 rounded"
        >
          Edit
        </button>
        <button
          onClick={handleDelete}
          className="bg-red-500 text-white py-2 px-4 rounded"
        >
          Delete
        </button>
        <button
          onClick={() => likeBlog(blog.id)}
          className="bg-blue-500 text-white py-2 px-4 rounded"
        >
          Like ({likes[blog.id] || 0})
        </button>
      </div>
    </div>
  );
};

export default BlogDetail;
