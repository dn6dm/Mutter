import React from "react";

function Post(props) {
  const post = props.obj;

  function handleClick() {}

  return (
    <div className="col-lg-6" onClick={handleClick}>
      <h2>{post.content}</h2>
      {/* <button onClick={} />
    <button onClick={} /> */}
    </div>
  );
}

export default Post;
