import React from "react";

export default function SingleDepart(props) {
  return (
    <form className="container-fluid w-100 form-inline ms-5 ">
      <div className="table-responsive ">
        <table className="table table-striped ">
          <tbody>
            <tr className="col">
              <td className="col-1">{props.serialNo}</td>
              <td className="col-3">{props.deptName}</td>
              <td className="col-3">{props.schoolName}</td>
              <td className="col-2">{props.deptShortName}</td>
              <td className="col-2">{props.deptStatus}</td>
              <td className="col-2 ">
                <button
                  className="border border-0  fs-5"
                  style={{ color: "#0B5ED7" }}
                >
                  <i className="fa-solid fa-pen-to-square"></i>
                </button>
                <button
                  className="border border-0  fs-5 "
                  style={{ color: "#0B5ED7" }}
                >
                  <i className="fa-solid fa-trash-can"></i>
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </form>
  );
}
