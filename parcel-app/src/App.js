import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from "react-router-dom";
import CustomerList from "./pages/ListCustomer";
import AddCustomer from "./pages/AddCustomer";
import EditCustomer from "./pages/EditCustomer";
import Viewcustomer from "./pages/ViewCustomer";

import ListDriver from "./pages/ListDriver";
import AddDriver from "./pages/AddDriver";
import EditDriver from "./pages/EditDriver";
import ViewDriver from "./pages/ViewDriver";

function App() {
  debugger;
  return (
    <Router>
      <div className="App container">
        <h3 className="d-flex justify-content-center m-3">Parcel Management</h3>

        <nav className="navbar navbar-expand-sm bg-light navbar-dark">
          <ul className="navbar-nav">
            <li className="nav-item m-1">
              <NavLink
                className="btn btn-light btn-outline-primary"
                to="/customer"
              >
                Customer Management
              </NavLink>
            </li>
            <li className="nav-item m-1">
              <NavLink
                className="btn btn-light btn-outline-primary"
                to="/driver"
              >
                Driver Management
              </NavLink>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route exact path="/customer" element={<CustomerList />} />
          <Route exact path="/customer/create" element={<AddCustomer />} />
          <Route exact path="/customer/edit/:id" element={<EditCustomer />} />
          <Route exact path="/customer/show/:id" element={<Viewcustomer />} />
          <Route exact path="/driver" element={<ListDriver />} />
          <Route exact path="/driver/create" element={<AddDriver />} />
          <Route exact path="/driver/edit/:id" element={<EditDriver />} />
          <Route exact path="/driver/show/:id" element={<ViewDriver />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
