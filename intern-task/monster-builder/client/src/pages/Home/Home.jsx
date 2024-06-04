import React from "react";
import "./Home.css";
import StarGoogle from "../../components/star-excellent/StarGoogle";

const Home = () => {
  return (
    <>
      <section>
        <div className="hero-banner-img">
          {/* <div className="over-lay"></div> */}
          <div className="container">
            <div className="hero-banner-details">
              <h1 className="h1-heading">
                MONSTER BUILDER: TRUSTED METAL FARBICATION AND MACHINING COMPANY
              </h1>

              <p className="banner-p">
                <strong>
                  A leading stainless steel manufacturer in Singapore, Monster
                  Builder is your solution for CNC machining, 3D printing, and
                  sheet metal fabrication services. Competitive pricing. Fast
                  leadt ime. International shipping. //{" "}
                </strong>
              </p>

              <div className="btn">
                <span className="gbl-btn">Get a Quote</span>
              </div>

              <div className="tuv-img">
                <img src="images/hero-tuv.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <StarGoogle />
    </>
  );
};

export default Home;
