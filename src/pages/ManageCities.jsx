import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useParams } from "react-router-dom";
import Table from "react-bootstrap/Table";
import { getCity, deleteCities } from "../features/cities/citySlice";
import { FaRegTrashCan } from "react-icons/fa6";
import { FaEdit } from "react-icons/fa";

const ManageCities = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { cities, isLoading, isError, message } = useSelector(
    (state) => state.cities
  );

  useEffect(() => {
    dispatch(getCity());
    // dispatch(deleteCities());
  }, []);

  if (isLoading) {
    return <p>Loading data........</p>;
  }
  return (
    <div className="container mt-5">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>City Name</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {cities &&
            cities.map((city) => (
              <tr>
                <td>{city.id}</td>
                <td>{city.city}</td>
                <td>
                  <Link to={`/${city.id}`}>
                    <FaEdit
                      className="mx-5 text-yellow-500"
                      //   onClick={dispatch(onDelete(city.id))}
                    />
                  </Link>
                </td>
              </tr>
            ))}
        </tbody>
      </Table>
    </div>
  );
};

export default ManageCities;
