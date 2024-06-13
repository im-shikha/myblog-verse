import React, { Children, createContext, useContext, useState } from "react";

const BlogContext = createContext();

export const useBlogContext = () => useContext(BlogContext);

export const BlogProvider = ({ children }) => {
  const [likes, setLikes] = useState({});

  const likeBlog = (id) => {
    setLikes((prev) => ({ ...prev, [id]: (prev[id] || 0) + 1 }));
  };

  return (
    <BlogContext.Provider value={{ likes, likeBlog }}>
      {children}
    </BlogContext.Provider>
  );
};
