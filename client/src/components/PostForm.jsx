import React, { useState } from "react";
import API from "../utils/API.js";
import "./PostForm.css";

function PostForm() {
  let [newPost, setNewPost] = useState("");

  function handleClick(event) {
    if (newPost) {
      API.post("/", {
        content: newPost,
      });
    } else {
      event.preventDefault();
    }
  }

  function handleChange(event) {
    setNewPost(event.target.value);
  }

  return (
    <div className="PostForm">
      <h2>What's on your mind?</h2>
      <form onSubmit={handleClick}>
        <textarea
          className="form-control"
          onChange={handleChange}
          type="text"
          value={newPost}
          rows="5"
        ></textarea>
        <button type="submit" className="btn btn-block">
          Post
        </button>
      </form>
    </div>
  );
}

export default PostForm;
