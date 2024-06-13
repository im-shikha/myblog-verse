import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchBlogs } from "./blogsSlice";
import BlogItem from "./BlogItem";
import NavigationBar from "../nav/NavigationBar";

const BlogList = () => {
  const dispatch = useDispatch();
  const blogs = useSelector((state) => state.blogs.blogs);

  useEffect(() => {
    dispatch(fetchBlogs());
  }, [dispatch]);

  return (
    <>
      <NavigationBar />
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mt-4 text-center font-mono">"Write, Edit, and Inspire" : Share your Stories</h1>
        <div className="mt-6 flex flex-wrap justify-evenly">
          {blogs.map((blog) => (
            <BlogItem key={blog.id} blog={blog} />
          ))}
        </div>
      </div>
    </>
  );
};

export default BlogList;
