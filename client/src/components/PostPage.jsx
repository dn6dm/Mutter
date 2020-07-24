import React from "react";
import { withRouter } from "react-router-dom";
import API from "../utils/API.js";
import { useState, useEffect } from "react";
import CommentForm from "./CommentForm";
import "./PostPage.css";

function PostPage(props) {
  let id = props.match.params.postID;
  let [post, setPost] = useState();
  let [votes, setVotes] = useState();

  useEffect(() => {
    API.get("/" + id).then((response) => {
      setPost(response.data);
      setVotes(response.data.votes);
    });
  }, [id]);

  function upvote() {
    API.patch("/" + id + "/upvote").then((response) => {
      setVotes(response.data.votes);
    });
  }

  function downvote() {
    API.patch("/" + id + "/downvote").then((response) => {
      setVotes(response.data.votes);
    });
  }

  function createComment(comment) {
    return (
      <div className="comment-wrapper col-12" key={comment._id}>
        <h5>{comment.body}</h5>
      </div>
    );
  }

  if (post) {
    return (
      <div>
        <div className="PostPage row">
          <div className="col-12">
            <div className="row PostPage-post">
              <div className="col-lg-11 col-10">
                <h2>{post.content}</h2>
              </div>
              <div className="col-lg-1 col-2">
                <button className="fas fa-angle-up fa-2x" onClick={upvote} />
                <p>{votes}</p>
                <button
                  className="fas fa-angle-down fa-2x"
                  onClick={downvote}
                />
              </div>
            </div>
          </div>
          {post.comments.map(createComment)}
          <CommentForm id={id} />
        </div>
      </div>
    );
  } else {
    return null;
  }
}

export default withRouter(PostPage);
