import React from "react";
import okpu1 from "../assets/images/okpu5.jpg";

const Landing = () => {
  return (
    <section className="bg-dark text-light p-5 p-lg-0 pt-lg-5 text-center text-sm-start">
      <div className="container">
        <div className="md:flex align-items-center justify-between">
          <div className="mx-[50px]">
            <h1 className="font-bold text-center">
              Become a <span className="text-warning"> Member </span>
            </h1>
            <p className="lead my-4 lh-5">
              “A man who calls his kinsmen to a feast does not do so to save
              them from starving. They all have food in their own homes. When we
              gather together in the moonlit village ground it is not because of
              the moon. Every man can see it in his own compound. We come
              together because it is good for kinsmen to do so.”
            </p>
            <i>― Chinua Achebe, Things Fall Apart</i>
          </div>
          <img
            className="img-fluid w-100 mx-[50px] h-[500px]"
            src={okpu1}
            alt=""
          />
        </div>
      </div>
    </section>
  );
};

export default Landing;
