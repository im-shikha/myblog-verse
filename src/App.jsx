import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import BlogList from "./features/blogs/BlogList";
import BlogDetail from "./features/blogs/BlogDetail";
import BlogForm from "./features/blogs/BlogForm";
import { BlogProvider } from "./features/blogs/BlogContext";

const App = () => {
  return (
    <BlogProvider>
      <Router>
        <Routes>
          <Route path="/" element={<BlogList />} />
          <Route path="/blogs/:id" element={<BlogDetail />} />
          <Route path="/add" element={<BlogForm />} />
          <Route path="/edit/:id" element={<BlogForm />} />
        </Routes>
      </Router>
    </BlogProvider>
  );
};

export default App;
