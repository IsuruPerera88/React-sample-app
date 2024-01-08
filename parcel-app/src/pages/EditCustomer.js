import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import axios from "axios";
import Layout from "../components/Layout";

function EditCustomer() {
  const [id, setId] = useState(useParams().id);
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const [identificatioNumber, setIdentificatioNumber] = useState("");
  const [address, setAddress] = useState("");
  const [isSaving, setIsSaving] = useState(false);

  useEffect(() => {
    axios
      .get(`http://localhost:5042/api/Customers/${id}`)
      .then(function (response) {
        let project = response.data;
        setName(project.fullName);
        setMobile(project.mobile);
        setEmail(project.email);
        setAge(project.age);
        setIdentificatioNumber(project.identificatioNumber);
        setAddress(project.address);
      })
      .catch(function (error) {
        Swal.fire({
          icon: "error",
          title: "An Error Occured!",
          showConfirmButton: false,
          timer: 1500,
        });
      });
  }, []);

  const handleSave = () => {
    setIsSaving(true);
    axios
      .put(`http://localhost:5042/api/Customers/${id}`, {
        id: id,
        fullName: name,
        mobile: mobile,
        email: email,
        age: age,
        identificatioNumber: identificatioNumber,
        address: address,
      })
      .then(function (response) {
        Swal.fire({
          icon: "success",
          title: "Customer updated successfully!",
          showConfirmButton: false,
          timer: 1500,
        });
        setIsSaving(false);
      })
      .catch(function (error) {
        Swal.fire({
          icon: "error",
          title: "An Error Occured!",
          showConfirmButton: false,
          timer: 1500,
        });
        setIsSaving(false);
      });
  };

  return (
    <Layout>
      <div className="container">
        <h2 className="text-center mt-5 mb-3">Edit Customer</h2>
        <div className="card">
          <div className="card-header">
            <Link className="btn btn-outline-info float-right" to="/customer">
              View All Customer
            </Link>
          </div>
          <div className="card-body">
            <form>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  onChange={(event) => {
                    setName(event.target.value);
                  }}
                  value={name}
                  type="text"
                  className="form-control"
                  id="name"
                  name="name"
                />
              </div>
              <div className="form-group">
                <label htmlFor="mobile">Mobile</label>
                <textarea
                  value={mobile}
                  onChange={(event) => {
                    setMobile(event.target.value);
                  }}
                  className="form-control"
                  id="mobile"
                  name="mobile"
                ></textarea>
              </div>
              <div className="form-group">
                <label htmlFor="mobile">Email</label>
                <textarea
                  value={email}
                  onChange={(event) => {
                    setEmail(event.target.value);
                  }}
                  className="form-control"
                  id="email"
                  name="email"
                ></textarea>
              </div>
              <div className="form-group">
                <label htmlFor="mobile">Age</label>
                <textarea
                  value={age}
                  onChange={(event) => {
                    setAge(event.target.value);
                  }}
                  className="form-control"
                  id="age"
                  name="age"
                ></textarea>
              </div>
              <div className="form-group">
                <label htmlFor="mobile">Id Number</label>
                <textarea
                  value={identificatioNumber}
                  onChange={(event) => {
                    setIdentificatioNumber(event.target.value);
                  }}
                  className="form-control"
                  id="identificatioNumber"
                  name="identificatioNumber"
                ></textarea>
              </div>
              <div className="form-group">
                <label htmlFor="mobile">Address</label>
                <textarea
                  value={address}
                  onChange={(event) => {
                    setAddress(event.target.value);
                  }}
                  className="form-control"
                  id="address"
                  name="address"
                ></textarea>
              </div>
              <button
                disabled={isSaving}
                onClick={handleSave}
                type="button"
                className="btn btn-outline-success mt-3"
              >
                Update Customer
              </button>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default EditCustomer;
