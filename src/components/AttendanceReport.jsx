import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAttendance } from "../features/attendance/attendanceSlice";
import { getBranch, reset } from "../features/branches/branchSlice";

const AttendanceReport = () => {
  //   const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.auth);
  const { branches, isLoading, isError, message } = useSelector(
    (state) => state.branches
  );

  useEffect(() => {
    dispatch(getAttendance());
  }, []);

  if (isLoading) {
    return <p>Loading data........</p>;
  }
  return (
    <div className="container">
      <table className="table table-striped table-bordered table-hover table-responsive caption-top">
        <caption className="text-center text-blue-500">
          BRANCH ATTENDANCE REPORT
        </caption>
        <thead>
          <tr>
            <th>#</th>
            <th>Full Name</th>
            <th>Status</th>
            <th>Date</th>
            {/* <th>Occupation</th>
            <th>Phone</th>
            <th>Present</th> */}
            {/* <th>Absent</th> */}
          </tr>
        </thead>
        {branches &&
          branches.map((branch) => (
            <tbody>
              {branch.Attendance.map((v) => (
                <tr>
                  <td>{v.id}</td>
                  <td>{v.fullName}</td>
                  <td>{v.status}</td>
                  <td>{v.createdAt}</td>
                  {/* <td>{v.occupation}</td>
                  <td>{v.phone}</td> */}
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
                  {/* <td>
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
                  </td> */}
                </tr>
              ))}
            </tbody>
          ))}
      </table>
    </div>
  );
};

export default AttendanceReport;
