import React, { useState, useEffect } from "react";
import "./App.css";
import ListPost from "./ListPost";
import PostPage from "./PostPage";
import PostForm from "./PostForm";
import axios from "axios";
import { Route, Switch } from "react-router-dom";
import "./App.css";

function App() {
  let [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/posts").then((response) => {
      setPosts(response.data);
    });
  }, []);

  return (
    <div className="App">
      <a href="/">
        <h1>Mutter</h1>
      </a>
      <Switch>
        <Route exact path="/">
          <PostForm />
          <ListPost posts={posts} />
        </Route>
        <Route path="/posts/:postID">
          <PostPage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
