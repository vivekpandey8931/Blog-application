import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <div className="ui inverted vertical footer segment">
        <div className="ui container">
          <div className="ui stackable inverted divided equal height stackable grid">
            <div className="three wide column">
              <h4 className="ui inverted header">About</h4>
              <div className="ui inverted link list">
                <a href="#" className="item">
                  Sitemap
                </a>
                <a href="#" className="item">
                  Contact Us
                </a>
                <a href="#" className="item">
                  Religious Ceremonies
                </a>
                <a href="#" className="item">
                  Gazebo Plans
                </a>
              </div>
            </div>
            <div className="three wide column">
              <h4 className="ui inverted header">Services</h4>
              <div className="ui inverted link list">
                <Link to="/addblog" className="item">
                  add blog
                </Link>
                <a href="#" className="item">
                  DNA FAQ
                </a>
                <a href="#" className="item">
                  How To Access
                </a>
                <a href="#" className="item">
                  Favorite X-Men
                </a>
              </div>
            </div>
            <div className="seven wide column">
              <h4 className="ui inverted header">
                <button className="positive ui button">Donate Us</button>
              </h4>
              <p>Every little help is appreciated! Support us</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
