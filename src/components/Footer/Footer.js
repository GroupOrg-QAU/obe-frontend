import React from "react";

export default function Footer() {
  return (
    <div className="container-fluid bg-light pt-3 border border-top-3">
      <div className="row p-4 d-flex justify-content-around">
        <div className="col-3 p-1">
          &#169;Quaid-i-Azam Univeristy-Department of Information Technology
        </div>
        <div className="col-3 p-1">
          <a href="/">
            <i className="pe-2 pt-2 fa-brands fa-facebook fs-2"></i>
          </a>
          <a href="/">
            <i className=" pe-2 pt-2 fa-brands fa-twitter fs-2"></i>
          </a>
        </div>
      </div>
    </div>
  );
}
