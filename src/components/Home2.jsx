import React from "react";
import "./Comp.css";

const Home2 = () => {
  return (
    <div>
      <header className="masthead">
        <div className="container px-4 px-lg-5 h-100">
          <div className="row gx-4 gx-lg-5 h-100 align-items-center justify-content-center text-center mt-[-200px]">
            <div className="col-lg-8 align-self-end">
              <h1 className="text-white font-[1000] text-4xl">
                Enugu Agidi Brotherly Union
              </h1>
              <hr className="divider" />
            </div>
            <div className="col-lg-8 align-self-baseline">
              <p className="text-white mb-5 font-[200]">
                Old and New members are to click on accounts above to login and
                register respectively. Select Your state of residence and the
                associated branch and you're all in
              </p>
              {/*}   <a className="btn btn-primary btn-xl" href="#about">
                Find Out More
              </a> */}
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Home2;
