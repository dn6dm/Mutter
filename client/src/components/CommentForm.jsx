import React, { useState } from "react";
import API from "../utils/API.js";
import "./CommentForm.css";

function CommentForm(props) {
  let id = props.id;
  let [comment, setComment] = useState("");

  function handleClick(event) {
    if (comment) {
      API.patch("/" + id + "/comment", {
        content: comment,
      });
    } else {
      event.preventDefault();
    }
  }

  function handleChange(event) {
    console.log(event.target.value);
    setComment(event.target.value);
  }

  return (
    <form className="CommentForm col-12" onSubmit={handleClick}>
      <textarea
        className="form-control"
        onChange={handleChange}
        type="text"
        value={comment}
        rows="3"
      ></textarea>
      <button type="submit" className="btn btn-block">
        Comment
      </button>
    </form>
  );
}

export default CommentForm;
