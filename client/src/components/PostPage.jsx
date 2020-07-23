import React from "react";
import { withRouter } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import CommentForm from "./CommentForm";
import "./PostPage.css";

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
    return (
      <div className="comment-wrapper col-12">
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
              <div className="col-11">
                <h2>{post.content}</h2>
              </div>
              <div className="col-1">
                <div>
                  <button className="fas fa-angle-up fa-2x" onClick={upvote} />
                  <p>{votes}</p>
                  <button
                    className="fas fa-angle-down fa-2x"
                    onClick={downvote}
                  />
                </div>
              </div>
            </div>
          </div>
          {post.comments.map(createComment)}
          <CommentForm id={id} />
        </div>
      </div>
    );
  } else {
    return <h1></h1>;
  }
}

export default withRouter(PostPage);
