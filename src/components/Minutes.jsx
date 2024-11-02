import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { toast } from "react-toastify";
import { createMinute, getMinutes } from "../features/minutes/minuteSlice";
import { IoCloudUploadOutline } from "react-icons/io5";

const Minutes = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.auth);

  const [image, setImage] = useState(false);
  const [data, setData] = useState({
    title: "",
    agenda: "",
    // image: "",
    branch: "",
  });
  // const { title, agenda, image, branch } = formData;
  const onChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setData((data) => ({ ...data, [name]: value }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    // var branchId = Number(localStorage.getItem("branchId"));
    const fullName = `${user.firstName} ${user.lastName}`;
    const formData = new FormData();
    formData.append("title", data.title);
    formData.append("agenda", data.agenda);
    formData.append("branchId", user.branchId);
    formData.append("userId", user.id);
    formData.append("image", image);
    formData.append("fullName", fullName);

    console.log(formData);
    dispatch(createMinute(formData));
    if (formData) {
      setData({
        title: "",
        agenda: "",
        image: "",
      });
      setImage(false);
    }
  };

  // const onSubmit = (e) => {
  //   e.preventDefault();
  //   const minutesData = {
  //     branch: props._id,
  //     title,
  //     description,
  //   };
  //   // console.log(minutesData);
  //   dispatch(createMinutes(minutesData));
  //   navigate("../profile");
  // };
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
            placeholder="Minutes Title"
            onChange={onChange}
            name="title"
          />
          <small id="emailHelp" className="form-text text-muted"></small>
        </div>
        {/* <div className="branches"></div> */}
        <div className="form-group">
          <label htmlFor="exampleInputTitle">Meeting Agenda</label>
          <input
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="What's the agenda"
            onChange={onChange}
            name="agenda"
          />
          <small id="emailHelp" className="form-text text-muted"></small>
        </div>
        <div className="mb-6">
          <p>Upload Hard Copy Minutes</p>
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="image"
          >
            {image ? (
              <img
                src={URL.createObjectURL(image)}
                alt=""
                height={300}
                width={300}
              />
            ) : (
              <IoCloudUploadOutline className="size-[50px]" />
            )}
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight
     focus:outline-none focus:shadow-outline form-control"
            id="image"
            name="image"
            onChange={(e) => setImage(e.target.files[0])}
            type="file"
            hidden
            required
          />
        </div>
        <button type="submit" className="btn btn-primary" onClick={onSubmit}>
          Submit
        </button>
      </form>
      {/* <di>
        <h1>The Minutes so Far</h1>
        <p>{props.title}</p>
        <p>{props.agenda}</p>
        <img src={props.image} height={50} width={50} />
      </di> */}
    </div>
  );
};

export default Minutes;
