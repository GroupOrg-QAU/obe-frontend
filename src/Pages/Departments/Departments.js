import React from "react";
import { useState } from "react";
import useForceUpdate from "use-force-update";
import DepartForm from "./DepartForm";
import SingleDepart from "./SingleDepart";

export default function Departments() {
  const [DUMMY_DEPARTMENTS, setDUMMY_DEPARTMENTS] = useState([]);

  let ShowDepartments = DUMMY_DEPARTMENTS.map((dept, index) => {
    return (
      <SingleDepart
        serialNo={index + 1}
        deptName={dept.deptName}
        schoolName={dept.schoolName}
        deptShortName={dept.deptShortName}
        deptStatus={dept.deptStatus}
      ></SingleDepart>
    );
  });
  const forceUpdate = useForceUpdate();

  const FormResultHandler = (incomingDept) => {
    let tempDeparts = DUMMY_DEPARTMENTS;
    tempDeparts.push(incomingDept);
    setDUMMY_DEPARTMENTS(tempDeparts);
    forceUpdate();
  };

  return (
    <div>
      <DepartForm formResult={FormResultHandler} />
      <div>{ShowDepartments}</div>
    </div>
  );
}
