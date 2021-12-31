import React from "react";
import { Link } from "react-router-dom";
import img from "./fyp.PNG";
function Home() {
  return (
    <>
      <div
        class="center grey lighten-3"
        style={{ width: "100%", padding: "22px" }}
      >
        <div class="mb-6">
          <h2>Mental Health Matters Too.</h2>
        </div>
        <div class="mt-5">
          <h5 className="text-lighten-5 mb-4">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis
            nisi laboriosam labore qui ipsam porro officiis quo tenetur in
            accusamus. Cupiditate dignissimos magni incidunt ad minus.
          </h5>
        </div>
      </div>
      <div className="mt-5">
        <h3>Facts About Mental Health Illness In CYP</h3>
        <img src={img} className="responsive-img" alt="" />
        <div className="center mt-5">
          <h6>Source</h6>:
          <a href="https://assets.publishing.service.gov.uk/government/uploads/system/uploads/attachment_data/file/575632/Mental_health_of_children_in_England.pdf">
            Ofiicial UK website document
          </a>
        </div>
      </div>
      <div className="center">
        <h2>Talk To Us</h2>
        <h5 className="mb-5">
          When you have healthcare needs, you need to turn to a doctor who
          listens and responds ... an experienced professional who knows the
          field and can effectively diagnose and treat your needs a friendly
          staff who counsels you on the best ways to maintain and improve your
          health
        </h5>
        <Link
          to="/message"
          className="btn green"
          onClick={() => window.alert("no")}
        >
          Message
        </Link>
      </div>
    </>
  );
}

export default Home;
