import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { toast } from "react-toastify";
import { getBranch, reset } from "../features/branches/branchSlice";
import Complaint from "../components/Complaint.jsx";

const ComplaintPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.auth);
  const { branches, isLoading, isError, message } = useSelector(
    (state) => state.branches
  );
  // const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBranch());
  }, []);

  if (isLoading) {
    return <p>Loading data........</p>;
  }
  return (
    <div>
      <h1 className="font-extrabold mb-5 text-center">Have a Complaint?</h1>
      <Complaint />

      {branches &&
        branches.map((branch) => (
          <div className="row" key={branch.id}>
            {branch.Complaint.map((v) => (
              <div className="col-4 mt-5" key={v.id}>
                <h1 className="font-bold">{v.title}</h1>
                <p>{v.description}</p>
                <br />
                <i>
                  {v.fullName} {v.createdAt}
                </i>
              </div>
            ))}
          </div>
        ))}
    </div>
  );
};

export default ComplaintPage;
