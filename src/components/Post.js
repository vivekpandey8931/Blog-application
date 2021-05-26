import React from "react";

const Post = ({ title }) => {
  return (
    <div>
      <div class="item">
        <img class="ui avatar image" alt="" />
        <div class="content">
          <a class="header">{title}</a>
          <div class="description">
            Last seen watching{" "}
            <a>
              <b>Arrested Development</b>
            </a>{" "}
            just now.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
