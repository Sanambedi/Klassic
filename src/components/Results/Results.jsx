import React from "react";

const Results = () => {
  return (
    <section className="cta-section ">
      <div className="container">
        <div className="cta position-relative">
          <div className="row">
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="counter-stat">
                <i className="icofont-doctor"></i>
                <span className="h3">10K</span>k<p>Happy Customers</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="counter-stat">
                <i className="icofont-flag"></i>
                <span className="h3">700</span>+<p>Daily Orders</p>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="counter-stat">
                <i className="icofont-badge"></i>
                <span className="h3">150</span>+<p>Designs</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="counter-stat">
                <i className="icofont-globe"></i>
                <span class="h3">5</span>
                <p>Worldwide Branches</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Results;
