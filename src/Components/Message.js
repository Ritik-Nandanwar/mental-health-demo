import React from "react";
import { Link } from "react-router-dom";

function Message() {
  return (
    <>
      <div
        className="container center teal lighten-1 p-5 "
        style={{ borderRadius: "12px", marginTop: "22px" }}
      >
        <div
          className="container teal lighten-3 p-3"
          style={{ borderRadius: "12px" }}
        >
          <h4 className="center ">Contact Form</h4>
          <form className="">
            <div class="input-field col s6">
              <input required id="first_name" type="text" class="validate" />
              <label className="white-text" for="first_name">
                Name
              </label>
            </div>
            <div class="input-field col s6">
              <input required id="first_name" type="text" class="validate" />
              <label className="white-text" for="first_name">
                Your Email
              </label>
            </div>
            <div class="input-field col s6">
              <input required id="first_name" type="text" class="validate" />
              <label className="white-text" for="first_name">
                Type A Message
              </label>
            </div>
            <div className="center">
              <Link
                to="/"
                type="submit"
                className="btn"
                onClick={() => window.alert()}
              >
                Submit
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Message;
