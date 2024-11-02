import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { toast } from "react-toastify";
import { getBranch, reset } from "../features/branches/branchSlice";
import Contribution from "../components/contribution";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const ContributionPage = () => {
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
      <h1 className="font-extrabold mb-5 text-center">Create Contribution</h1>
      <Contribution />
      {branches &&
        branches.map((branch) => (
          <div className="row" key={branch.id}>
            {branch.Contribution.map((v) => (
              <div className="col-sm-4 my-4" key={v.id}>
                <Card style={{ width: "18rem" }}>
                  <Card.Img
                    variant="top"
                    src={`http://localhost:5000/${v.image}`}
                  />
                  <Card.Body>
                    <Card.Title>{v.title}</Card.Title>
                    <Card.Text>{v.amount}</Card.Text>
                    <Card.Text>{v.fullName}</Card.Text>
                    <Card.Text>{v.createdAt}</Card.Text>
                    {/* <Link to={v.category}> */}
                    <Button variant="primary">Read more</Button>
                    {/* </Link> */}
                  </Card.Body>
                </Card>
              </div>
            ))}

            <div></div>
          </div>
        ))}
    </div>
  );
};
export default ContributionPage;
