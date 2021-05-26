import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Message from "../components/Message";
import { feedback } from "../actions/feedbackAction";
import Spinner from "../components/Spinner";

const Feedback = () => {
  return (
    <div className="feedback">
      <div className="ui piled segment">
        <a className="ui black ribbon label">
          <h5>Enter Your Valuable Feedback</h5>
        </a>
        <div className="ui form">
          <div className="field">
            <label>Your Name</label>
            <input type="text" placeholder="Your Name" />
          </div>
          <div className="field">
            <label>Email Id:</label>
            <input type="email" placeholder="Enter email address" />
          </div>
          <div className="field">
            <label>Text</label>
            <textarea placeholder="Enter your feedback here...."></textarea>
          </div>
          <button className="ui black button">
            {" "}
            <i class="paper plane icon"></i>Submit Your Feedback
          </button>
        </div>
      </div>
    </div>
  );
};

export default Feedback;
