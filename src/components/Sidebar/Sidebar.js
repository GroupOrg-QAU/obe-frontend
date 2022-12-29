import React from "react";

export default function Sidebar() {
  return (
    <div className="d-flex flex-column bg-light col-2 rounded-bottom">
      {/* Dashboard Item */}
      <a
        class="nav-link fs-6 text-dark "
        href="/"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#collapseExample"
        aria-expanded="false"
        aria-controls="collapseExample"
      >
        <i class=" pe-2 fa-solid fa-house-laptop"></i>
        Dashboard
      </a>

      <div className="collapse" id="collapseExample">
        <div className="p-1 list-group list-group-flush rounded">
          <a href="/" className="nav-link list-group-item ">
            My Classrooms
          </a>
          <a href="/" className="nav-link list-group-item ">
            Department
          </a>
          <a href="/" className="nav-link list-group-item ">
            Program
          </a>
          <a href="/" className="nav-link list-group-item ">
            Faculty
          </a>
          <a href="/" className="nav-link list-group-item ">
            Coruse
          </a>
        </div>
      </div>

      {/* Institue */}
      <hr />
      <a
        class="nav-link fs-6 text-dark "
        href="/"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#collapseExample-1"
        aria-expanded="false"
        aria-controls="collapseExample-1"
      >
        <i class="pe-2 fa-solid fa-building-columns"></i>
        Institue
      </a>

      <div className="collapse" id="collapseExample-1">
        <div className="p-1 list-group list-group-flush rounded ">
          <a href="/" className="nav-link list-group-item ">
            Department
          </a>
          <a href="/" className="nav-link list-group-item ">
            Semester
          </a>
          <a href="/" className="nav-link list-group-item ">
            Faculty/Staff
          </a>
          <a href="/" className="nav-link list-group-item ">
            Program
          </a>
          <a href="/" className="nav-link list-group-item ">
            Program Batches
          </a>
          <a href="/" className="nav-link list-group-item ">
            Students
          </a>
          <a href="/" className="nav-link list-group-item ">
            Classrooms
          </a>
        </div>
      </div>
      <hr />
      {/* OBE */}

      <a
        class="nav-link fs-6 text-dark "
        href="/"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#collapseExample-2"
        aria-expanded="false"
        aria-controls="collapseExample-2"
      >
        <i class=" pe-2 fa-solid fa-book"></i>
        OBE
      </a>

      <div className="collapse" id="collapseExample-2">
        <div className="p-1 list-group list-group-flush rounded">
          <a href="/" className="nav-link list-group-item ">
            Proram Education Objectives
          </a>
          <a href="/" className="nav-link list-group-item ">
            Program Learning Outcomes
          </a>
          <a href="/" className="nav-link list-group-item ">
            Coruse Learning Outcome
          </a>
          <a href="/" className="nav-link list-group-item ">
            Start CQI
          </a>
          <a href="/" className="nav-link list-group-item ">
            Corrective Action Request
          </a>
          <a href="/" className="nav-link list-group-item ">
            Approved CLO Recommendations
          </a>
          <a href="/" className="nav-link list-group-item ">
            Student PLO remarks
          </a>
        </div>
      </div>
      <hr />

      {/* Reports */}
      <div>
        <a href="/" className="nav-link text-dark">
          <i class=" pe-2 fa-solid fa-chart-simple"></i>
          Reports
        </a>
      </div>
      <hr />
      {/* Settings */}
      <div>
        <a href="/" className="nav-link text-dark">
          <i class="pe-2 fa-solid fa-gear"></i>
          Settings
        </a>
      </div>
      <hr />
      {/* Admin */}
      <a
        class="nav-link fs-6 text-dark pb-3"
        href="/"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#collapseExample-3"
        aria-expanded="false"
        aria-controls="collapseExample-3"
      >
        <i class="pe-2 fa-solid fa-user"></i>
        Admin
      </a>

      <div className="collapse pb-1" id="collapseExample-3">
        <div className="p-1 list-group list-group-flush rounded">
          <a href="/" className="nav-link list-group-item ">
            User
          </a>
          <a href="/" className="nav-link list-group-item ">
            Roles
          </a>
        </div>
      </div>
    </div>
  );
}
