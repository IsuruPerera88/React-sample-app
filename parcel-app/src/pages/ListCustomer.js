import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import axios from "axios";
import Layout from "../components/Layout";

function ListCustomer() {
  const [customertList, setCustomerList] = useState([]);

  useEffect(() => {
    fetchcustomerList();
  }, []);

  const fetchcustomerList = () => {
    axios
      .get("http://localhost:5042/api/Customers")
      .then(function (response) {
        setCustomerList(response.data);
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
          .delete(`http://localhost:5042/api/Customers/${id}`)
          .then(function (response) {
            Swal.fire({
              icon: "success",
              title: "Customer deleted successfully!",
              showConfirmButton: false,
              timer: 1500,
            });
            fetchcustomerList();
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
        <h2 className="text-center mt-5 mb-3">Customer Management</h2>
        <div className="card">
          <div className="card-header">
            <Link className="btn btn-outline-primary" to="/customer/create">
              Create New Customer
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
                {customertList.map((Customer, key) => {
                  return (
                    <tr key={key}>
                      <td>{Customer.fullName}</td>
                      <td>{Customer.mobile}</td>
                      <td>
                        <Link
                          to={`/customer/show/${Customer.id}`}
                          className="btn btn-outline-info mx-1"
                        >
                          Show
                        </Link>
                        <Link
                          className="btn btn-outline-success mx-1"
                          to={`/customer/edit/${Customer.id}`}
                        >
                          Edit
                        </Link>
                        <button
                          onClick={() => handleDelete(Customer.id)}
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

export default ListCustomer;
