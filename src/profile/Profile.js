import React from "react";
import propTypes from "prop-types";
import "./profile.css";
const Profile = (props) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        marginTop: "10%",
      }}
    >
      <div style={{ width: "20%" }}>{props.children}</div>
      <div style={{ width: "50%" }}>
        <h1 style={{ fontFamily: "sans-serif", fontSize: "xxx-large" }}>
          {props.fullName}
        </h1>
        <p style={{ fontSize: " x-large", fontFamily: "-webkit-pictograph" }}>
          {props.bio}
        </p>
        <p style={{ fontFamily: "sans-serif", fontSize: "xxx-large" }}>
          {props.profession}
        </p>
        <div>
          <button className="button-53 " onClick={props.alert}>
            Click here
          </button>
        </div>
      </div>
    </div>
  );
};
export default Profile;

Profile.defaultProps = {
  fullName: "What is your name ?",
  bio: "what about you ?",
  profession: "What's is your profession",
  children: <p> Where is my image !!</p>,
};

Profile.propTypes = {
  fullName: propTypes.string,
  bio: propTypes.string,
  profession: propTypes.string,
  children: propTypes.node.isRequired,
};
