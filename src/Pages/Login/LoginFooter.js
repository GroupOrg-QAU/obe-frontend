import React from "react";

export default function LoginFooter() {
  return (
    <div className="d-flex flex-column flex-md-row text-center text-md-start justify-content-between py-4 px-4 px-xl-5 bg-primary ">
      {/* <-- Copyright --> */}
      <div className="text-white mb-3 mb-md-0">
        Copyright © 2020. All rights reserved.
      </div>
      {/* <-- Copyright --> */}

      {/* <-- Right --> */}
      <div>
        <a href="/" className="text-white me-4">
          <i className="fab fa-facebook-f"></i>
        </a>
        <a href="/" className="text-white me-4">
          <i className="fab fa-twitter"></i>
        </a>
        <a href="/" className="text-white me-4">
          <i className="fab fa-google"></i>
        </a>
        <a href="/" className="text-white">
          <i className="fab fa-linkedin-in"></i>
        </a>
      </div>
      {/* <-- Right --> */}
    </div>
  );
}
