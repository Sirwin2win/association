import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { deleteCities } from "../features/cities/citySlice";

const CitiesDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  //   const onDelete = async (cityId) => {
  //     dispatch(deleteCities(cityId));
  //   };
  return (
    <div>
      <h1>City Single Page</h1>
      <p>{id}</p>
      <buttton className="btn btn-danger" onClick={dispatch(deleteCities(id))}>
        Delete
      </buttton>
    </div>
  );
};

export default CitiesDetail;
