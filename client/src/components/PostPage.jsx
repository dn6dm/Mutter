import React from "react";
import { withRouter } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import CommentForm from "./CommentForm";

function PostPage(props) {
  let id = props.match.params.postID;
  let [post, setPost] = useState();
  let [votes, setVotes] = useState();

  useEffect(() => {
    axios.get("http://localhost:5000/api/posts/" + id).then((response) => {
      setPost(response.data);
      setVotes(response.data.votes);
    });
  }, []);

  function upvote() {
    axios
      .patch("http://localhost:5000/api/posts/" + id + "/upvote")
      .then((response) => {
        setVotes(response.data.votes);
      });
  }

  function downvote() {
    axios
      .patch("http://localhost:5000/api/posts/" + id + "/downvote")
      .then((response) => {
        setVotes(response.data.votes);
      });
  }

  function createComment(comment) {
    return <p>{comment.body}</p>;
  }

  if (post) {
    return (
      <div>
        <a href="/">Back</a>
        <h2>{post.content}</h2>
        <div>
          <button onClick={upvote} />
          <p>{votes}</p>
          <button onClick={downvote} />
        </div>
        {post.comments.map(createComment)}
        <CommentForm id={id} />
      </div>
    );
  } else {
    return <h1></h1>;
  }
}

export default withRouter(PostPage);
