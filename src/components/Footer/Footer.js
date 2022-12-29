import React from "react";

export default function Footer() {
  return (
    <div className="container-fluid bg-light pt-3 ">
      <div className="row ">
        <div className="col-12">
          <hr />
        </div>
      </div>
      <div className="row pb-3 d-flex justify-content-around">
        <div className="col-3 p-1">
          &#169;Quaid-i-Azam Univeristy-Department of Information Technology
        </div>
        <div className="col-3">
          <a href="/">
            <i class="pe-2 pt-2 fa-brands fa-facebook fs-2"></i>
          </a>
          <a href="/">
            <i class=" pe-2 pt-2 fa-brands fa-twitter fs-2"></i>
          </a>
        </div>
      </div>
    </div>
  );
}
