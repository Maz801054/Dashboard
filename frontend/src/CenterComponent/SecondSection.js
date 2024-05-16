import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const SecondSection = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3002")
      .then((result) => setUsers(result.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="container mt-5 py-5 Conset">
      <div className="d-flex justify-content-between align-items-center">
        <h6 className="Cpj">Current Projects</h6>
        <Link to="Add">
          <button type="button" class="btn btn-success">
            Create
          </button>
        </Link>
      </div>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">Project Name</th>
            <th scope="col">Customer</th>
            <th scope="col">Set Date</th>
            <th scope="col">Amount</th>
            <th scope="col">Status</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => {
            return (
              <>
                <tr>
                  <td>{user.projectName} </td>
                  <td>{user.customer} </td>
                  <td>{user.data} </td>
                  <td>{user.amount} </td>
                  <td>{user.status} </td>
                </tr>
              </>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default SecondSection;
