import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import Table from "react-bootstrap/Table";
import { FaEdit } from "react-icons/fa";

const BranchItem = ({ branch }) => {
  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Address</th>
            <th>State</th>
            <th>Branch</th>
            {/* <th>Edit</th> */}
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>*</td>
            <td>{branch.address}</td>
            <td>{branch.state}</td>
            <td>{branch.branchName}</td>
            {/* <td>
              <Link to={`/edit-profile/:${branch._id}`}>
                <FaEdit className="text-warning" />
              </Link>
            </td> */}
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default BranchItem;
