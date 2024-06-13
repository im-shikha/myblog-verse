import React from "react";
import { Link } from "react-router-dom";
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

const BlogItem = ({ blog }) => {
  const imageSrc = categoryImages[blog.category];
  return (
    <Link to={`/blogs/${blog.id}`}>
      <div className="w-80 min-h-96 rounded overflow-hidden shadow-lg mb-6 bg-teal-100">
        <img
          className="w-full h-48 object-cover mb-4 rounded"
          src={imageSrc}
          alt={blog.category}
        />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">
            {blog.title.substring(0, 20)}
          </div>
          <p className="text-gray-700 text-base">
            {blog.content.substring(0, 30)}...
          </p>
        </div>
        <div className="px-6 pt-4 pb-2">
          <span className="inline-block bg-teal-700 text-white rounded-full px-3 py-1 text-sm font-semibold mr-2 mb-2">
            #{blog.category.toUpperCase()}
          </span>
        </div>
      </div>
    </Link>

    // <div className="border p-4 rounded shadow">
    //   {imageSrc && (
    //     <img
    //       src={imageSrc}
    //       alt={blog.category}
    //       className="w-full h-48 object-cover mb-4 rounded"
    //     />
    //   )}
    //   <h3 className="text-xl font-semibold mb-2">
    //     <Link
    //       to={`/blogs/${blog.id}`}
    //       className="text-blue-500 hover:underline"
    //     >
    //       {blog.title}
    //     </Link>
    //   </h3>
    //   <p>{blog.content.substring(0, 100)}...</p>
    // </div>
  );
};

export default BlogItem;
