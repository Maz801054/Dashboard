import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddProject = () => {
  const [projectName, setProjectName] = useState();
  const [customer, setCustomer] = useState();
  const [data, setData] = useState();
  const [amount, setAmount] = useState();
  const [status, setStatus] = useState();
  const navigate = useNavigate();

  const Submit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3002/AddProject", {
        projectName,
        customer,
        data,
        amount,
        status,
      })
      .then((restul) => console.log(restul))
      .catch((err) => console.log(err));
    navigate("/");
  };

  return (
    <div>
      <div
        className="d-flex p-5 bg-warning w-50 rounded container flex-wrap"
        style={{ marginTop: "50px" }}
      >
        <form
          class="g-3 needs-validation rounded-pill"
          novalidate
          onSubmit={Submit}
        >
          <h1 className="text-center fw-bold">Add Project</h1>
          <div class="col-md-12">
            <label for="validationCustom01" class="form-label">
              Project name
            </label>
            <input
              placeholder=" Project Name"
              style={{ width: "500px" }}
              type="text"
              class="form-control"
              onChange={(e) => setProjectName(e.target.value)}
              required
            />
          </div>
          <div class="col-md-12 mt-2 mb-2">
            <label for="validationCustom01" class="form-label">
              Customers
            </label>
            <input
              placeholder="Customer Name"
              type="text"
              class="form-control "
              onChange={(e) => setCustomer(e.target.value)}
              required
            />
          </div>
          <div class="col-md-12 mt-2 mb-2">
            <label for="validationCustom01" class="form-label">
              Date
            </label>
            <input
              placeholder="Customer Name"
              type="date"
              class="form-control "
              onChange={(e) => setData(e.target.value)}
              required
            />
          </div>

          <div class="col-md-12">
            <label for="validationCustom01" class="form-label">
              Amount
            </label>
            <input
              placeholder="Enter Amount"
              type="text"
              class="form-control"
              onChange={(e) => setAmount(e.target.value)}
              required
            />
          </div>
          <div class="col-md-12">
            <label for="validationCustom01" class="form-label">
              Status
            </label>
            <input
              placeholder="Enter Status"
              type="text"
              class="form-control"
              onChange={(e) => setStatus(e.target.value)}
              required
            />
          </div>

          <div class="col-12">
            <button class="btn btn-dark mt-3 fw-bold" type="submit">
              Submit form
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProject;
