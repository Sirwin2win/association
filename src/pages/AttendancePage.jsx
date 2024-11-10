import React from "react";
import Attendance from "../components/Attendance";
import AttendanceReport from "../components/AttendanceReport";

const AttendancePage = () => {
  return (
    <div>
      <h1 className="text-center text-blue-500">Branch Attendance</h1>
      <Attendance />
      <AttendanceReport />
    </div>
  );
};

export default AttendancePage;
