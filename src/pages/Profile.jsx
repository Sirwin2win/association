import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import Table from "react-bootstrap/Table";
import { FaEdit } from "react-icons/fa";

const Profile = () => {
  const { user } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  return (
    <div>
      <h1 className="font-extrabold mb-5 text-center">User Details</h1>
      <div className="container">
        <table className="table table-striped table-bordered table-hover table-responsive">
          <thead>
            <tr>
              <th>#</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Occupation</th>
              {/* <th>State</th> */}
              <th>Village</th>
              <th>Phone Number</th>
              <th>Edit</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>*</td>
              <td>{user && user.firstName}</td>
              <td>{user && user.lastName}</td>
              <td>{user && user.email}</td>
              <td>{user && user.occupation}</td>
              {/* <td>{user && user.state}</td> */}
              <td>{user && user.village}</td>
              <td>{user && user.phone}</td>
              <td>
                <Link to={`/edit-profile/${user.id}`}>
                  <FaEdit className="text-warning" />
                </Link>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Profile;
