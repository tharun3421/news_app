import React from "react";
import image from "../assets/default_logo.jpg";
const Newslist = ({ title, src, url, description }) => {
  return (
    <div
      className="card bg-dark text-white mb-3 d-inline-block my-3 mx-5 px-2 "
      style={{ maxWidth: "400px" }}
    >
      <img
        src={src ? src : image}
        style={{ maxHeight: "200px", padding: "4px", marginTop: "6px" }}
        className="card-img-top"
        alt="..."
      />
      <div className="card-body">
        <h5 className="card-title">{title.slice(0, 50)}</h5>
        <p className="card-text">
          {description
            ? description.slice(0, 90)
            : "There is no desciption for this news"}
        </p>
        <a href={url} className="btn btn-primary">
          Read More
        </a>
      </div>
    </div>
  );
};

export default Newslist;
