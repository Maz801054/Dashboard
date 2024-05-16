import React from "react";
import Money from "../Assets/money-receiving-kazakhstani-tenge-color-icon.svg";
import Up from "../Assets/market-research-icon.svg";
import Expance from "../Assets/income-drop-icon.svg";

const SmallCard = () => {
  return (
    <div className="container">
      <div className="row" style={{ marginTop: "-50px" }}>
        <div className="col-lg-3 mt-2 mb-2">
          <div class="card d-flex flex-row" style={{ borderRadius: "10px" }}>
            <div class="card-body">
              <h5 class="card-title">$2,77,120</h5>
              <p class="card-text">Sales</p>
            </div>
            <div class="card-body">
              <h5 class="card-title p-0 m-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="50"
                  height="36"
                  fill="currentColor"
                  class="bi bi-graph-up-arrow mt-5 text-info"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M0 0h1v15h15v1H0zm10 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V4.9l-3.613 4.417a.5.5 0 0 1-.74.037L7.06 6.767l-3.656 5.027a.5.5 0 0 1-.808-.588l4-5.5a.5.5 0 0 1 .758-.06l2.609 2.61L13.445 4H10.5a.5.5 0 0 1-.5-.5"
                  />
                </svg>
              </h5>
            </div>
          </div>
        </div>
        <div className="col-lg-3 mt-2 mb-2">
          <div class="card d-flex flex-row" style={{ borderRadius: "10px" }}>
            <div class="card-body">
              <h5 class="card-title">$1,60,124</h5>
              <p class="card-text">Income</p>
            </div>
            <div class="card-body">
              <h5 class="card-title p-0 m-0">
                <img
                  src={Money}
                  class="img-fluid me-2"
                  width="50"
                  height="50"
                  style={{ marginTop: "35px" }}
                  alt="..."
                />
              </h5>
            </div>
          </div>
        </div>
        <div className="col-lg-3 mt-2 mb-2">
          <div class="card d-flex flex-row" style={{ borderRadius: "10px" }}>
            <div class="card-body">
              <h5 class="card-title">$57,230</h5>
              <p class="card-text">Profit</p>
            </div>
            <div class="card-body">
              <h5 class="card-title p-0 m-0">
                <img
                  src={Up}
                  class="img-fluid me-2"
                  width="60"
                  height="60"
                  style={{ marginTop: "40px" }}
                  alt="..."
                />
              </h5>
            </div>
          </div>
        </div>
        <div className="col-lg-3 mt-2 mb-2">
          <div class="card d-flex flex-row" style={{ borderRadius: "10px" }}>
            <div class="card-body">
              <h5 class="card-title">$60,100</h5>
              <p class="card-text">Expance</p>
            </div>
            <div class="card-body">
              <h5 class="card-title p-0 m-0">
                <img
                  src={Expance}
                  class="img-fluid me-2"
                  width="60"
                  height="60"
                  style={{ marginTop: "40px" }}
                  alt="..."
                />
              </h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SmallCard;
