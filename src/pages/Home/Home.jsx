import React from "react";
import Appoinment from "../../components/Appointment/Appointment";
import Card from "../../components/Card/Card";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import InfoSection from "../../components/InfoSection/InfoSection";
import Jumbotron from "../../components/Jumbotron/Jumbotron";
import Results from "../../components/Results/Results";
import Slider from "../../components/Slider/Slider";
import Specialities from "../../components/Specialities/Specialities";
const Home = () => {
  return (
    <div>
      <Header />
      <Jumbotron />
      <section className="features">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="feature-block d-lg-flex">
                <Card />
                <Card />
                <Card />
              </div>
            </div>
          </div>
        </div>
      </section>
      <InfoSection />
      
      <Results />
      <Specialities />
      <Slider/>
      <Appoinment />
      <Footer />
    </div>
  );
};

export default Home
