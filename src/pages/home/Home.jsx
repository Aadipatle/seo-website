import React from "react";
import bg1 from "../../assets/bg.svg";
import bg2 from "../../assets/bg2.svg";
import Header from "../../components/header/Header";
function Home() {

  
  return (
    <>
      <Header />
      <div className="homeWrapper">
        <div className="home">
          <div className="headings">
            <h1>
              Unlock Your Website's <br /> Potential with Our <br /> Expert SEO
              Services
            </h1>
            <p>
              Are you struggling to reach the top of search engine results?{" "}
              <br /> Do you want to increase your online visibility and drive
              more organic <br />
              traffic to your website? Look no further! YourName is your trusted{" "}
              <br />
              partner for comprehensive SEO services.
            </p>
            <div className="btn">
              <button>Contact Us</button>
              <button>Explore More</button>
            </div>
          </div>
          <div className="homeImg">
            <img src={bg1} alt="" />
          </div>
        </div>

        <div className="chooseUs">
          <img src={bg2} alt="" />
          <div className="content">
            <h1>
              Why Choose Us for <br /> <span>SEO Services?</span>{" "}
            </h1>

            <p>At YourName, we understand that every business is unique, and so are its SEO needs. <br /> Our team of experienced SEO experts is dedicated to crafting tailored strategies that <br /> suit your specific goals and industry. Here's why you should choose us:</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
