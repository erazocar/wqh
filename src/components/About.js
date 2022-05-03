import React from "react";
import Map from "./maps/Map";
import Form from "./forms/SimpleForm";

const About = () => {
  return (
    <div className="about">
    <div className="container-fluid mx-5 py-5">
    <div className="row align-items-top my-5">
          <div className="col-lg-5">
      <h1 className="font-weight-light">About Us</h1>
      <p>The development and maintenance of the site is done by the IIHR group through the usage of public and private domains. If you would like to contact the developing team to pass your questions regarding the data, please leave out the following info boxes and we will get back to you.</p>
      <Form />
    </div>
    <div className="col-lg-6">
    <Map lat="41.6570984" lon="-91.5435134" zoom="14" page="about" height="60vh" width="100vh" scroll={true}>
    </Map>
</div>
    </div>
    </div>
    </div>
  );
}

export default About;
