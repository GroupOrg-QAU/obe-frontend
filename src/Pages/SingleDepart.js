import React from "react";

export default function SingleDepart(props) {
  return (
    <form className="container-fluid w-100 form-inline ms-5 ">
      <table className="table">
        <tbody>
          <tr>
            <td>{props.serialNo}</td>
            <td>{props.deptName}</td>
            <td>{props.schoolName}</td>
            <td>{props.deptShortName}</td>
            <td>{props.deptStatus}</td>
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
