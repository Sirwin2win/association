import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { FaEdit } from "react-icons/fa";
import { getBranch, reset } from "../features/branches/branchSlice";
import { createAttendance } from "../features/attendance/attendanceSlice";

const Attendance = () => {
  const [colo, setColo] = useState("blue");
  // const [formData, setFormData] = useState({
  //   status: "",
  // });

  const { branches, isLoading, isError, message } = useSelector(
    (state) => state.branches
  );
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBranch());
  }, []);

  if (isLoading) {
    return <p>Loading data........</p>;
  }

  // const onChange = (e) => {
  //   setStatus((prevState) => ({
  //     ...prevState,
  //     [e.target.name]: e.target.value,
  //   }));
  // setStatus(true);
  // };
  // const fullName = `${user.lastName} ${user.firstName}`;
  // const onSubmit = (e) => {
  //   e.preventDefault();
  //   const attendanceData = {
  //     branchId: user.branchId,
  //     userId: user.id,
  //     fullName: fullName,
  //     status,
  //   };
  //   console.log(attendanceData);
  // dispatch(createComplaint(complaintData));
  // navigate("../profile");
  //   setStatus(false);
  // };
  return (
    <div className="container" style={{ overflow: "auto" }}>
      <table className="table table-striped table-bordered table-hover table-responsive">
        <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Occupation</th>
            <th>Phone</th>
            <th>Present</th>
            {/* <th>Absent</th> */}
          </tr>
        </thead>
        {branches &&
          branches.map((branch) => (
            <tbody>
              {branch.User.map((v) => (
                <tr>
                  <td>{v.id}</td>
                  <td>{v.firstName}</td>
                  <td>{v.lastName}</td>
                  <td>{v.occupation}</td>
                  <td>{v.phone}</td>
                  {/* <td>
                    <form>
                      <input
                        type="checkbox"
                        name="status"
                        onChange={onChange}
                      />
                      <button
                        className="ml-[20px] btn btn-primary"
                        onClick={onSubmit}
                      >
                        Submit
                      </button>
                    </form>
                  </td> */}
                  <td>
                    <button
                      // style={{ background: colo }}
                      className="btn btn-primary"
                      onClick={(e) => {
                        e.preventDefault;
                        dispatch(
                          createAttendance({
                            userId: v.id,
                            branchId: branch.id,
                            status: "present",
                            fullName: `${v.firstName} ${v.lastName}`,
                          }),
                          // setColo("red")
                          (e.target.style.backgroundColor = "red")
                        );
                      }}
                    >
                      Present
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          ))}
      </table>
      {/* <button className="btn btn-primary" onClick={onSubmit}>
        Submit
      </button> */}
    </div>
  );
};

export default Attendance;
