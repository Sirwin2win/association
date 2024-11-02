import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { FaEdit } from "react-icons/fa";
import { getComplaints } from "../features/complaint/complaintSlice";

const ManageComplaint = () => {
  const { complaints, isLoading, isError, message } = useSelector(
    (state) => state.complaints
  );
  const dispatch = useDispatch();

  useEffect(() => {
    // if (isError) {
    //   console.log(message);
    // }

    // if (!user) {
    //   navigate("/login");
    // }

    dispatch(getComplaints());

    // return () => {
    //   dispatch(reset());
    // };
  }, []);
  if (isLoading) {
    return <p>Loading data........</p>;
  }
  return (
    <div className="container">
      <div className="row">
        {complaints.map((complaint) => (
          <div className="col-4">
            <h1>{complaint.title}</h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ManageComplaint;
