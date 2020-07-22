import React, { useState } from "react";
import axios from "axios";
import "./PostForm.css";

function PostForm() {
  let [newPost, setNewPost] = useState("");

  function handleClick(event) {
    if (newPost) {
      axios.post("http://localhost:5000/api/posts", {
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
        <button type="submit" className="btn btn-light btn-block">
          Post
        </button>
      </form>
    </div>
  );
}

export default PostForm;
