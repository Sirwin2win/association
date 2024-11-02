import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { toast } from "react-toastify";
import {
  createComplaint,
  getComplaints,
} from "../features/complaint/complaintSlice";
const Complaint = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    title: "",
    description: "",
  });
  const { title, description } = formData;

  const { user } = useSelector((state) => state.auth);
  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  const onSubmit = (e) => {
    e.preventDefault();
    // var branchId = Number(localStorage.getItem("branchId"));
    // Number(branchId);
    const fullName = `${user.firstName} ${user.lastName}`;
    const complaintData = {
      branchId: user.branchId,
      userId: user.id,
      title: title,
      description: description,
      fullName: fullName,
    };
    console.log(complaintData);
    dispatch(createComplaint(complaintData));
    // navigate("../profile");
    setFormData({
      title: "",
      description: "",
      branch: "",
    });
  };
  return (
    <div className="mt-[50px]">
      <form>
        <div className="form-group">
          <label htmlFor="exampleInputTitle">Title</label>
          <input
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Complaint Title"
            onChange={onChange}
            name="title"
          />
          <small id="emailHelp" className="form-text text-muted"></small>
        </div>
        <div className="branches"></div>
        <div className="form-group mb-4">
          <label htmlFor="exampleInputDescription">Description</label>
          <textarea
            className="form-control"
            placeholder="Lorem ipsum dolor set amite"
            name="description"
            onChange={onChange}
          ></textarea>
        </div>
        <button type="submit" className="btn btn-primary" onClick={onSubmit}>
          Submit
        </button>
      </form>
      {/* <di>
        <h1>Your Complaints so far</h1>
        <p>{props.title}</p>
        <p>{props.description}</p>
        <p>{props.createdAt}</p>
      </di> */}
    </div>
  );
};
export default Complaint;
