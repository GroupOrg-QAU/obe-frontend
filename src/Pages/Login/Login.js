import React from "react";
import loginPic from "../../Assests/login.webp";
import LoginFooter from "./LoginFooter";

export default function Login() {
  return (
    <section className="vh-100">
      <div className="container-fluid h-custom mb-5">
        <div className="row d-flex justify-content-center align-items-center h-100 ">
          <div className="col-md-9 col-lg-6 col-xl-5 col-sm-3 mt-5">
            <img
              src={loginPic}
              className="img-fluid "
              alt="Laptop With Writing Pencil"
            />
            <p className="fs-2 text-center " style={{ color: "#0D6EFD" }}>
              Quaid-i-Azam University, Islamabad
            </p>
            <div className="d-flex justify-content-center align-items-center">
              <div className="mb-2" style={{ color: "#599CF9" }}>
                Department of Information Technology
              </div>
            </div>
          </div>
          <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1 mt-5  ">
            <form>
              {/* <!-- Email input --> */}
              <div className="form-outline  mb-4 mt-4">
                <input
                  type="email"
                  id="form3Example3"
                  className="form-control form-control-lg"
                  placeholder="Enter a valid email address"
                />
                <label className="form-label" htmlFor="form3Example3">
                  Email address
                </label>
              </div>

              {/* <-- Password input --> */}
              <div className="form-outline mt-4">
                <input
                  type="password"
                  id="form3Example4"
                  className="form-control form-control-lg"
                  placeholder="Enter password"
                />
                <label className="form-label" htmlFor="form3Example4">
                  Password
                </label>
              </div>

              <div className="d-flex justify-content-between align-items-center">
                {/* <-- Checkbox --> */}
                <div className="form-check mb-0">
                  <input
                    className="form-check-input me-2"
                    type="checkbox"
                    value=""
                    id="form2Example3"
                  />
                  <label className="form-check-label" htmlFor="form2Example3">
                    Remember me
                  </label>
                </div>
                <a href="/" className="text-body">
                  Forgot password?
                </a>
              </div>

              <div className="text-center text-lg-start mt-4 pt-2">
                <button
                  type="button"
                  className="btn btn-primary btn-lg"
                  style={{ paddingLeft: "2.5rem", paddingRight: "2.5rem" }}
                >
                  Login
                </button>
                <p className="small fw-bold mt-2 pt-1 mb-0">
                  Don't have an account?{" "}
                  <a href="/" className="link-danger">
                    Register
                  </a>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
      <LoginFooter />
    </section>
  );
}
