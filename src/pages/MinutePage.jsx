import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { toast } from "react-toastify";
import { getBranch, reset } from "../features/branches/branchSlice";
import Minutes from "../components/Minutes";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const MinutePage = () => {
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
      <h1 className="font-extrabold mb-5 text-center">Create Minutes</h1>
      <Minutes />
      {branches &&
        branches.map((branch) => (
          <div className="row" key={branch.id}>
            {branch.Minute.map((v) => (
              <div className="col-sm-4 my-4" key={v.id}>
                <Card style={{ width: "18rem" }}>
                  <Card.Img
                    variant="top"
                    src={`http://localhost:5000/${v.image}`}
                  />
                  <Card.Body>
                    <Card.Title>{v.title}</Card.Title>
                    <Card.Text>{v.agenda}</Card.Text>
                    <Card.Text>{v.fullName}</Card.Text>
                    <Card.Text>{v.createdAt}</Card.Text>
                    {/* <Link to={v.category}> */}
                    <Button variant="primary">Read more</Button>
                    {/* </Link> */}
                  </Card.Body>
                </Card>
              </div>
            ))}
          </div>
        ))}
    </div>
  );
};

export default MinutePage;
