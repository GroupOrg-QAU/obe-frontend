import React from "react";
import { useState } from "react";
import { deptAction } from "../../Store/Institue/DepartSlice";
import { useDispatch } from "react-redux";

export default function DepartForm(props) {
  const [deptName, setDeptName] = useState("");
  const [schoolName, setSchoolName] = useState("");
  const [deptShortName, setDeptShortName] = useState("");
  const [deptStatus, setDeptStatus] = useState("");
  const disptach = useDispatch();

  const submitHandler = (event) => {
    event.preventDefault();

    disptach(
      deptAction.addItemToDepart({
        deptName,
        schoolName,
        deptShortName,
        deptStatus,
      })
    );

    setDeptName("");
    setSchoolName("");
    setDeptShortName("");
    setDeptStatus("");
  };

  return (
    <form
      onSubmit={submitHandler}
      className="container-fluid w-100 form-inline ms-5 "
    >
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
                  required
                  value={deptName}
                  onChange={(e) => setDeptName(e.target.value)}
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
                  required
                  value={schoolName}
                  onChange={(e) => setSchoolName(e.target.value)}
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
                  required
                  value={deptShortName}
                  onChange={(e) => setDeptShortName(e.target.value)}
                />
              </div>
            </th>
            <th scope="col">
              <label htmlFor="active" className="form-label">
                Active
              </label>
              <div name="active" className="form-group">
                <select
                  className="form-select"
                  required
                  value={deptStatus}
                  onChange={(e) => setDeptStatus(e.target.value)}
                >
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
      </table>
    </form>
  );
}
