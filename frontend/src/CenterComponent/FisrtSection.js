import React from "react";
import Notification from "../Assets/bell-icon.svg";

const FisrtSection = () => {
  return (
    <div>
      <div
        className="d-flex justify-content-between py-5 px-3"
        style={{ background: "#121E48", color: "white" }}
      >
        <div className="leftSide">
          <p>
            Hi, Welcome back <span style={{ color: "#23e0c7" }}>Robert!</span>
          </p>
          <h6 className="my-5">Finance Overview</h6>
        </div>
        <div className="RightSide">
          <div className="d-flex gap-3 align-items-center ">
            <input
              class="form-control  rounded-pill serchSetup"
              type="search"
              placeholder="Search"
            />
            <i class="fa-solid fa-bell fs-3"></i>
            <img
              src="https://i.pinimg.com/736x/38/93/07/389307d6af5c4be0051b7d3c4f93bf3d.jpg"
              class="img-fluid "
              width="35"
              height="25"
              alt="..."
              style={{ borderRadius: "50px" }}
            ></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FisrtSection;
