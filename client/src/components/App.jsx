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
      <a className="header" href="/">
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
        <Route>
          <h1>Sorry, that page does not exist.</h1>
        </Route>
      </Switch>
      <footer>
        <h6>© Dan Nguyen 2020</h6>
      </footer>
    </div>
  );
}

export default App;
