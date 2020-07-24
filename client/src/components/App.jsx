import React, { useState, useEffect } from "react";
import "./App.css";
import ListPost from "./ListPost";
import PostPage from "./PostPage";
import PostForm from "./PostForm";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import API from "../utils/API.js";

function App() {
  let [posts, setPosts] = useState([]);

  useEffect(() => {
    API.get("/").then((response) => {
      setPosts(response.data);
    });
  }, []);

  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <a className="header" href="/">
            <h1>Mutter</h1>
          </a>
          <PostForm />
          <ListPost posts={posts} />
        </Route>
        <Route path="/posts/:postID">
          <a className="header" href="/">
            <h1>Mutter</h1>
          </a>
          <PostPage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
