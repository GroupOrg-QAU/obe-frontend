import React from "react";
import DepartForm from "./DepartForm";
import SingleDepart from "./SingleDepart";

const DUMMY_DEPARTMENTS = [
  {
    serialNo: 1,
    deptName: "Information Technology",
    schoolName: "Natural Science",
    deptShortName: "IT",
    deptStatus: "yes",
  },
  {
    serialNo: 2,
    deptName: "Computer Science",
    schoolName: "Natural Science",
    deptShortName: "CS",
    deptStatus: "yes",
  },
  {
    serialNo: 3,
    deptName: "Quaid-I-Azam School of Management Sciences",
    schoolName: "Social Science",
    deptShortName: "QASMS",
    deptStatus: "yes",
  },
  {
    serialNo: 4,
    deptName: "Bio Informatics",
    schoolName: "Biological Science",
    deptShortName: "Bio-it",
    deptStatus: "yes",
  },
];

const ShowDepartments = DUMMY_DEPARTMENTS.map((dept) => {
  return (
    <SingleDepart
      serialNo={dept.serialNo}
      deptName={dept.deptName}
      schoolName={dept.schoolName}
      deptShortName={dept.deptShortName}
      deptStatus={dept.deptStatus}
    ></SingleDepart>
  );
});

export default function Departments2() {
  return (
    <div>
      <DepartForm />
      <div>{ShowDepartments}</div>
    </div>
  );
}
