import React from "react";

const AboutUs = () => {
  return (
    <div className="about">
      <div class="ui grid">
        <div class="four wide column">
          <div class="ui vertical fluid tabular menu">
            <a class="item">Bio</a>
            <a class="item">Pics</a>
            <a class="item">Companies</a>
            <a class="item active">Links</a>
          </div>
        </div>
        <div class="twelve wide stretched column">
          <div class="ui segment">
            This is an stretched grid column. This segment will always match the
            tab height
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
