import React from "react";

export default function SingleDepart(props) {
  return (
    <form className="container-fluid w-100 form-inline ms-5 ">
      <div className="table-responsive ">
        <table className="table table-striped ">
          <tbody>
            <tr className="col">
              <td className="col-1">{props.serialNo}</td>
              <td className="col-2">{props.deptName}</td>
              <td className="col-2">{props.schoolName}</td>
              <td className="col-2">{props.deptShortName}</td>
              <td className="col-2">{props.deptStatus}</td>
              <td className="col-2">
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
      </div>
    </form>
  );
}
