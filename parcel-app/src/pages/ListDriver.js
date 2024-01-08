import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import axios from "axios";
import Layout from "../components/Layout";

function ListDriver() {
  const [drivertList, setDriverList] = useState([]);

  useEffect(() => {
    fetchDriverList();
  }, []);

  const fetchDriverList = () => {
    axios
      .get("http://localhost:5042/api/Drivers")
      .then(function (response) {
        setDriverList(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(`http://localhost:5042/api/Drivers/${id}`)
          .then(function (response) {
            Swal.fire({
              icon: "success",
              title: "Customer deleted successfully!",
              showConfirmButton: false,
              timer: 1500,
            });
            fetchDriverList();
          })
          .catch(function (error) {
            Swal.fire({
              icon: "error",
              title: "An Error Occured!",
              showConfirmButton: false,
              timer: 1500,
            });
          });
      }
    });
  };

  return (
    <Layout>
      <div className="container">
        <h2 className="text-center mt-5 mb-3">Driver Management</h2>
        <div className="card">
          <div className="card-header">
            <Link className="btn btn-outline-primary" to="/driver/create">
              Create New Driver
            </Link>
          </div>
          <div className="card-body">
            <table className="table table-bordered">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Mobile Number</th>
                  <th width="240px">Action</th>
                </tr>
              </thead>
              <tbody>
                {drivertList.map((Driver, key) => {
                  return (
                    <tr key={key}>
                      <td>{Driver.fullName}</td>
                      <td>{Driver.mobile}</td>
                      <td>
                        <Link
                          to={`/driver/show/${Driver.id}`}
                          className="btn btn-outline-info mx-1"
                        >
                          Show
                        </Link>
                        <Link
                          className="btn btn-outline-success mx-1"
                          to={`/driver/edit/${Driver.id}`}
                        >
                          Edit
                        </Link>
                        <button
                          onClick={() => handleDelete(Driver.id)}
                          className="btn btn-outline-danger mx-1"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default ListDriver;
