import React from "react";
import loginPic from "../../Assests/login.webp";
import LoginFooter from "./LoginFooter";
export default function signUp() {
  return (
    <section className="vh-100">
      <div className="container-fluid h-custom">
        <div className=" row d-flex justify-content-center align-item-center h-100">
          <div className="col-md-9 col-lg-6 col-xl-5 col-sm-3 mt-5">
            <img
              src={loginPic}
              className="img-fluid"
              alt="Laptop With Writing Pencil"
            />
            <p className="fs-2 text-center" style={{ color: "#0D6EFD" }}>
              Quaid-i-Azam University, Islamabad
            </p>
            <div className="d-flex justify-content-center align-items-center ">
              <caption style={{ color: "#599CF9" }}>
                Department of Information Technology
              </caption>
            </div>
          </div>
          <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1 mt-5 ">
            <form>
              {/* <!-- Name input --> */}
              <div className="form-outline mb-3  ">
                <input type="text" id="registerName" className="form-control" />
                <label className="form-label" htmlFor="registerName">
                  Name
                </label>
              </div>

              {/* <!-- Username input --> */}
              <div className="form-outline mb-3  ">
                <input
                  type="text"
                  id="registerUsername"
                  className="form-control"
                />
                <label className="form-label" htmlFor="registerUsername">
                  Username
                </label>
              </div>

              {/* <!-- Email input --> */}
              <div className="form-outline mb-3  ">
                <input
                  type="email"
                  id="registerEmail"
                  className="form-control"
                />
                <label className="form-label" htmlFor="registerEmail">
                  Email
                </label>
              </div>

              {/* <!-- Password input --> */}
              <div className="form-outline mb-3  ">
                <input
                  type="password"
                  id="registerPassword"
                  className="form-control"
                />
                <label className="form-label" htmlFor="registerPassword">
                  Password
                </label>
              </div>

              {/* <!-- Repeat Password input --> */}
              <div className="form-outline mb-3  ">
                <input
                  type="password"
                  id="registerRepeatPassword"
                  className="form-control"
                />
                <label className="form-label" htmlFor="registerRepeatPassword">
                  Repeat password
                </label>
              </div>

              {/* <!-- Checkbox --> */}
              <div className="form-check d-flex justify-content-center mb-3  ">
                <input
                  className="form-check-input me-2"
                  type="checkbox"
                  value=""
                  id="registerCheck"
                  checked
                  aria-describedby="registerCheckHelpText"
                />
                <label className="form-check-label" htmlFor="registerCheck">
                  I have read and agree to the terms
                </label>
              </div>

              {/* <!-- Submit button --> */}
              <button
                type="submit"
                className="btn btn-primary btn-block mb-3  "
              >
                Sign in
              </button>
            </form>
          </div>
        </div>
      </div>
      <LoginFooter />
    </section>
  );
}
