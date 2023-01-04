import React from "react";
import DepartForm from "./DepartForm";
import SingleDepart from "./SingleDepart";
import { useSelector } from "react-redux";
export default function Departments() {
  const departItem = useSelector((state) => state.dept.deprtItem);
  let ShowDepartments = departItem.map((dept, index) => {
    return (
      <SingleDepart
        key={Math.random()}
        serialNo={index + 1}
        deptName={dept.deptName}
        schoolName={dept.schoolName}
        deptShortName={dept.shortName}
        deptStatus={dept.active}
      ></SingleDepart>
    );
  });

  return (
    <div>
      <DepartForm />
      <div>{ShowDepartments}</div>
    </div>
  );
}
