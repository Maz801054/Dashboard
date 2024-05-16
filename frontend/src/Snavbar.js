import React from "react";
import FisrtSection from "./CenterComponent/FisrtSection";
import SmallCard from "./CenterComponent/SmallCard";
import SecondSection from "./CenterComponent/SecondSection";
import "./App.css";
import ChatBoxSet from "./CenterComponent/ChatBoxSet";
import Dashboard from "./Assets/four-squares-icon.svg";
import Invoice from "./Assets/dollar-coin-solid-icon.svg";
import File from "./Assets/file-black-icon.svg";
import service from "./Assets/services-icon.svg";
import Transection from "./Assets/rich-icon.svg";
import project from "./Assets/bag-clothes-icon.svg";
import customers from "./Assets/increasing-users-icon.svg";
import setting from "./Assets/setting-icon.svg";
import Logout from "./Assets/exit-sign-icon.svg";
import uparrow from "./Assets/angle-top-icon.svg";

const Snavbar = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row flex-nowrap bg-white">
          <div className="col-auto col-md-4 col-lg-2 min-vh-100 d-flex flex-column justify-content-between">
            <div className="p-2">
              <a className="d-flex text-decoration-none align-items-center mt-1 lineset">
                <img
                  src={uparrow}
                  class="img-fluid me-2 colorset abjust"
                  alt="..."
                />
                <span className="fs-4 d-none d-sm-inline m-auto mt-3 text-dark ">
                  trackInc
                </span>
              </a>
              <ul className="nav nav-pills flex-column mt-5">
                <li className="nav-item my-1 py-2 py-sm-0">
                  <a href="#" className="nav-link">
                    <img
                      src={Dashboard}
                      class="img-fluid me-2 colorset"
                      alt="..."
                    />
                    <span className="d-none  d-sm-inline text-dark">
                      Dashboard
                    </span>
                  </a>
                </li>
                <li className="nav-item my-1 py-2 py-sm-0">
                  <a href="#" className="nav-link  ">
                    <img
                      src={Invoice}
                      class="img-fluid me-2 colorset"
                      alt="..."
                    />
                    <span className="d-none  d-sm-inline text-dark">
                      Invoices
                    </span>
                  </a>
                </li>
                <li className="nav-item my-1 py-2 py-sm-0">
                  <a href="#" className="nav-link  ">
                    <img src={File} class="img-fluid me-2 colorset" alt="..." />
                    <span className="d-none  d-sm-inline text-dark">
                      Proposals
                    </span>
                  </a>
                </li>
                <li className="nav-item my-1 py-2 py-sm-0">
                  <a href="#" className="nav-link  ">
                    <img
                      src={service}
                      class="img-fluid me-2 colorset"
                      alt="..."
                    />
                    <span className="d-none  d-sm-inline text-dark">
                      Services
                    </span>
                  </a>
                </li>
                <li className="nav-item my-1 py-2 py-sm-0">
                  <a href="#" className="nav-link  ">
                    <img
                      src={Transection}
                      class="img-fluid me-2 colorset"
                      alt="..."
                    />
                    <span pan className="d-none  d-sm-inline text-dark">
                      Transaction
                    </span>
                  </a>
                </li>
                <li className="nav-item my-1 py-2 py-sm-0">
                  <a href="#" className="nav-link  ">
                    <img
                      src={project}
                      class="img-fluid me-2 colorset"
                      alt="..."
                    />
                    <span className="d-none  d-sm-inline text-dark">
                      Projects
                    </span>
                  </a>
                </li>
                <li className="nav-item my-1 py-2 py-sm-0">
                  <a href="#" className="nav-link  ">
                    <img
                      src={customers}
                      class="img-fluid me-2 colorset"
                      alt="..."
                    />
                    <span className="d-none  d-sm-inline text-dark">
                      Customers
                    </span>
                  </a>
                </li>
              </ul>
            </div>
            <div className="downSid lineset2">
              <ul className="nav nav-pills flex-column mt-4 ">
                <li className="nav-item my-1 py-2 py-sm-0 ">
                  <a href="#" className="nav-link  ">
                    <img
                      src={setting}
                      class="img-fluid me-2 colorset"
                      alt="..."
                    />
                    <span className="d-none  d-sm-inline text-dark">
                      Settings
                    </span>
                  </a>
                </li>
                <li className="nav-item py-2 py-sm-0">
                  <a href="#" className="nav-link  ">
                    <img
                      src={Logout}
                      class="img-fluid me-2 colorset"
                      alt="..."
                    />
                    <span className="d-none d-sm-inline text-dark">
                      Log out
                    </span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-auto col-md-8 col-lg-10 p-0 m-0 bg-light">
            <FisrtSection />
            <SmallCard />
            <SecondSection />
            <ChatBoxSet />
          </div>
        </div>
      </div>
    </>
  );
};

export default Snavbar;
