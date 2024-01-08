import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import Layout from "../components/Layout";

function ViewCustomer() {
  const [id, setId] = useState(useParams().id);
  const [customer, setCustomer] = useState({
    name: "",
    mobile: "",
    age: "",
    idNumber: "",
    address: "",
    email: "",
  });

  useEffect(() => {
    axios
      .get(`http://localhost:5042/api/Customers/${id}`)
      .then(function (response) {
        setCustomer(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  return (
    <Layout>
      <div className="container">
        <h2 className="text-center mt-5 mb-3">Show Customer</h2>
        <div className="card">
          <div className="card-header">
            <Link className="btn btn-outline-info float-right" to="/customer">
              {" "}
              View All Customers
            </Link>
          </div>
          <div className="card-body">
            <b className="text-muted">Name:</b>
            <p>{customer.fullName}</p>
            <b className="text-muted">Age:</b>
            <p>{customer.age}</p>
            <b className="text-muted">Address:</b>
            <p>{customer.address}</p>
            <b className="text-muted">Mobile:</b>
            <p>{customer.mobile}</p>
            <b className="text-muted">Id Number:</b>
            <p>{customer.idNumber}</p>
            <b className="text-muted">Email:</b>
            <p>{customer.email}</p>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default ViewCustomer;
