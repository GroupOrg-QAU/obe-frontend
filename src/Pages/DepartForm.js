import React from "react";

export default function DepartForm() {
  return (
    <form className="container-fluid w-100 form-inline ms-5 ">
      <table className="table">
        <thead>
          <tr className="col">
            <th className="col-1">
              <label className="form-label">Sr.No</label>
            </th>
            <th className="col-2">
              <div className="form-group">
                <label htmlFor="department" className="form-label">
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
            <th className="col-2">
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
            <th className="col-2">
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
            <th className="col-2">
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
            <th className="col-2">
              <button className="btn btn-primary col-12">Add</button>
            </th>
          </tr>
        </thead>
      </table>
    </form>
  );
}
