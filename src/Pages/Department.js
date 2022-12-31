import React from "react";

export default function Department() {
  return (
    <form className="container-fluid w-100 form-inline ms-5 ">
      <table className="table">
        <thead>
          <tr>
            <th scope="col">
              <label className="form-label">Sr.No</label>
            </th>
            <th scope="col">
              <div className="form-group">
                <label htmlFor="validationTooltip01" className="form-label">
                  Department
                </label>
                <input
                  type="text"
                  id="department"
                  className="form-control "
                  placeholder="Department"
                />
              </div>
            </th>
            <th scope="col">
              <div className="form-group">
                <label htmlFor="school" className="form-label">
                  School
                </label>
                <input
                  type="text"
                  id="school"
                  className="form-control"
                  placeholder="School"
                />
              </div>
            </th>
            <th scope="col">
              <div className="form-group">
                <label htmlFor="shortname" className="form-label">
                  Short Name
                </label>
                <input
                  type="text"
                  id="shortname"
                  className="form-control"
                  placeholder="Short Name"
                />
              </div>
            </th>
            <th scope="col">
              <label htmlFor="active" className="form-label">
                Active
              </label>
              <div name="active" className="form-group">
                <select className="form-select">
                  <option value=""></option>
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </select>
              </div>
            </th>
            <th scope="col">
              <button className="btn btn-primary">Add</button>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Information Technology</td>
            <td>Natural Science</td>
            <td>IT</td>
            <td>Yes</td>
            <td>
              <a className="border border-0 ps-2" href="/">
                <i className="fa-solid fa-pen-to-square"></i>
              </a>
              <a className="border border-0 ps-3" href="/">
                <i className="fa-solid fa-trash-can"></i>
              </a>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}
