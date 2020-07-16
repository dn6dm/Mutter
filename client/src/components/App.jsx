import React, { useState, useEffect } from "react";
import "./App.css";
import ListPost from "./ListPost";
import axios from "axios";

function App() {
  let [posts, setPosts] = useState([]);

  useEffect(() => {
    const response = axios
      .get("http://localhost:5000/api/posts")
      .then((response) => {
        setPosts(response.data);
      });
  }, []);

  return (
    <div className="App">
      <h1>Mutter</h1>
      <ListPost posts={posts} />
    </div>
  );
}

export default App;
