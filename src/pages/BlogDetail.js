import React from "react";

const BlogDetail = () => {
  return (
    <div className="blogdetail">
      <div class="ui container ">
        <h1>Blog detail Page</h1>
        <form class="ui form">
          <div class="field">
            <label>Blog Title</label>
            <input
              type="text"
              name="first-name"
              placeholder="Enter title here"
            />
          </div>
          <div class="field">
            <label>Blog Details</label>
            <textarea placeholder="Description about blog here ....."></textarea>
          </div>
          <div class="field">
            <select>
              <option value="" disabled selected>
                Category
              </option>
              <option value="1">Male</option>
              <option value="0">Female</option>
            </select>
          </div>
          <div class="field">
            <label>Image</label>
            <input
              type="file"
              name="last-name"
              placeholder="choose image file"
            />
          </div>
          <div class="field">
            <label>Image description</label>
            <input
              type="text"
              name="imageDescription"
              placeholder="write something about image here..."
            />
          </div>
          <div class="field">
            <label>Iframe Link</label>
            <input
              type="text"
              name="iframeLink"
              placeholder="Paste the link here...."
            />
          </div>
          <div class="field">
            <label>Your Name</label>
            <input
              type="text"
              name="iframeLink"
              placeholder="Enter yout name here..."
            />
          </div>

          <button class="ui button" type="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default BlogDetail;
