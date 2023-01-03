import React, { useState } from "react";
export default function SingleDepart(props) {
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  // Edit Modal Function
  const onEditHandler = () => {
    setShowEditModal(true);
    console.log("The Value of Edit Modal is", showEditModal);
  };
  //Delete Modal
  const onDeleteHander = () => {
    setShowDeleteModal(true);
    console.log("The Value of Delete Modal is", showDeleteModal);
  };
  return (
    <div className="container-fluid w-100 form-inline ms-5 ">
      <div className="table-responsive ">
        <table className="table table-striped ">
          <tbody>
            <tr className="col">
              <td className="col-1">{props.serialNo}</td>
              <td className="col-3">{props.deptName}</td>
              <td className="col-3">{props.schoolName}</td>
              <td className="col-2">{props.deptShortName}</td>
              <td className="col-1">{props.deptStatus}</td>
              <td className="col-2 ">
                <button
                  onClick={onEditHandler}
                  className="border border-0  fs-5"
                  style={{ color: "#0B5ED7" }}
                >
                  <i className="fa-solid fa-pen-to-square"></i>
                </button>
                <button
                  onClick={onDeleteHander}
                  className="border border-0  fs-5 ms-2 "
                  style={{ color: "#0B5ED7" }}
                >
                  <i className="fa-solid fa-trash-can"></i>
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
