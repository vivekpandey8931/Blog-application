import React from "react";
import {config} from '../config';

const Card = ({id,title,category,image}) => {
  const {baseURL}=config;
  return (
    <div className="card" key={id}>
      <div class="ui very relaxed items">
        <div class="item">
          <div class="image imgcard ">
            <img src={`http://localhost:5000${image}`} />
          </div>
          <div class="content">
            <a class="ui header" >
             {category}
            </a>
            <div class="description">
              <p>
              {title}
              </p>
            </div>
            <div class="bottom">
              <p>READ FULL STORY <i class="arrow alternate circle right icon"></i></p>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
