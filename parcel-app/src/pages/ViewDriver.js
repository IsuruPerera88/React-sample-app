import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import Layout from "../components/Layout";

function ViewDriver() {
  const [id, setId] = useState(useParams().id);
  const [driver, setDriver] = useState({
    name: "",
    mobile: "",
    age: "",
    idNumber: "",
    address: "",
    email: "",
  });

  useEffect(() => {
    axios
      .get(`http://localhost:5042/api/Drivers/${id}`)
      .then(function (response) {
        setDriver(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  return (
    <Layout>
      <div className="container">
        <h2 className="text-center mt-5 mb-3">Show Driver</h2>
        <div className="card">
          <div className="card-header">
            <Link className="btn btn-outline-info float-right" to="/driver">
              {" "}
              View All Drivers
            </Link>
          </div>
          <div className="card-body">
            <b className="text-muted">Name:</b>
            <p>{driver.fullName}</p>
            <b className="text-muted">Age:</b>
            <p>{driver.age}</p>
            <b className="text-muted">Address:</b>
            <p>{driver.address}</p>
            <b className="text-muted">Mobile:</b>
            <p>{driver.mobile}</p>
            <b className="text-muted">Id Number:</b>
            <p>{driver.idNumber}</p>
            <b className="text-muted">Email:</b>
            <p>{driver.email}</p>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default ViewDriver;
