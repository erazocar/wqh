import React from "react";
import { MathJax, MathJaxContext } from "better-react-mathjax";

const config = {
  loader: { load: ["[tex]/html"] },
  tex: {
    packages: { "[+]": ["html"] },
    inlineMath: [
      ["$", "$"],
      ["\\(", "\\)"],
    ],
    displayMath: [
      ["$$", "$$"],
      ["\\[", "\\]"],
    ],
  },
};

const linkonClick = (url) => {
  const newWindow = window.open(url, "_blank", "noopener, noreferrer");
  if (newWindow) newWindow.opener = null;
};

const Documentation = () => {
  return (
    <MathJaxContext config={config}>
      <div className="overflow-hidden">
        <div className="container-fluid mx-5 py-5">
          <div className="row align-items-top my-5">
            <div className="col-lg-8">
              <h1 className="font-weight-light">
                Providing Water Quality through Data Monitoring
              </h1>
              <hr></hr>
              <h3> International Collaboration</h3>
              <div style={{ textAlign: "center" }}>
                <div
                  id="img-carousel"
                  className="carousel slide"
                  data-ride="carousel"
                  style={{overflow: "hidden", width: "80vh", maxHeight: "60vh", borderRadius: ".30em", display: "flex"}}
                >
                  <ol className="carousel-indicators">
                    <li
                      data-target="#carousel"
                      data-slide-to="0"
                      className="active"
                    ></li>
                    <li
                      data-target="#img-carousel"
                      data-slide-to="1"
                    ></li>
                    <li
                      data-target="#img-carousel"
                      data-slide-to="2"
                    ></li>
                  </ol>
                  <div className="carousel-inner" style={{align: "center"}}>
                    <div className="carousel-item active">
                      <img
                        className="d-block w-100 mx-auto"
                        src="https://www.worldbank.org/content/dam/photos/780x439/2017/oct-3/Honduraswater.JPG"
                        alt="First slide"
                      ></img>
                    </div>
                    <div className="carousel-item">
                      <img
                        className="d-block w-100 mx-auto"
                        src="https://www.eosinternational.org/wp-content/uploads/2021/04/eos3-e1617823707296.jpg"
                        alt="Second slide"
                      ></img>
                    </div>
                    <div className="carousel-item">
                      <img
                        className="d-block w-100 mx-auto"
                        src="https://www.beneficialreturns.com/uploads/7/5/2/0/75208167/dsc-0577-copy_orig.jpg"
                        height="50%"
                        alt="Third slide"
                      ></img>
                    </div>
                  </div>
                  <a
                    className="carousel-control-prev"
                    href="#img-carousel"
                    role="button"
                    data-slide="prev"
                  >
                    <span
                      className="carousel-control-prev-icon"
                      aria-hidden="true"
                    ></span>
                    <span className="sr-only">Previous</span>
                  </a>
                  <a
                    className="carousel-control-next"
                    href="#img-carousel"
                    role="button"
                    data-slide="next"
                  >
                    <span
                      className="carousel-control-next-icon"
                      aria-hidden="true"
                    ></span>
                    <span className="sr-only">Next</span>
                  </a>
                </div>
              </div>
              <br></br>
              <p>
                The scalable water-monitoring solution for Nicaragua and
                Honduras is a collaboration between Dr. Craig Just of the
                University of Iowa's water quality lab and{" "}
                <a
                  style={{ color: "black" }}
                  target="_blank"
                  href="https://www.iihr.uiowa.edu/people/megan-lindmark/"
                >
                  <u>Megan Lindmark</u>
                </a>
                , a PhD student, and{" "}
                <a
                  style={{ color: "black" }}
                  target="_blank"
                  href="https://www.eosinternational.org/"
                >
                  <u>EOS International</u>
                </a>
                , a nonprofit nonprofit organization that leverages market-based
                solutions for Central American rural families without access to
                safe water. The project's goal is to use simple technology to
                provide solutions and education to low-income families while
                maintaining high standards of technological development and
                drinking water. The project aims to scale hundreds of locations
                by using cellullar LTE connectivity, as described in this{" "}
                <a
                  style={{ color: "black" }}
                  target="_blank"
                  href="https://www.digi.com/customer-stories/eos-deploys-water-monitoring-solution"
                >
                  <u>article</u>
                </a>
                .
              </p>
              <hr></hr>
              <h3> Data Analysis</h3>
              <p>
              Van Haute's equation is used to track the status of filtration as well as information on the water quality at the extraction site. A chlorine injection via tablets gives free chlorine residual at suitable pH levels, limiting and minimizing pathogen cross contamination. The oxidation-reduction potential (ORP) is a sanitizing strength measurement used to assess the free chlorine residual in oxidant-based sanitizing solutions. The free chlorine equation is as follows:
              </p>
              <div style={{ textAlign: "center" }}>
                <MathJax hideUntilTypeset={"first"}>
                  <span>{`\\(log(FCR) = k_1-k_2(ORP) + k_3(ORP)^2 + k_4(ORP*pH)\\)`}</span>
                </MathJax>
              </div>
              <p>

                This is referred to as the Kalman filtering approach.
The weights of the equation, particularly <MathJax inline>{"\\(k_1 – k_4\\)"}</MathJax>,  are adjusted using the original coefficients that each iteration with the current equation setting enables.
This is a calibration opportunity that can be comprehended using statistical methods such as ARIMA processes.
The current van Haute's equation coefficients used on the sites for free chlorine computation are 
              </p>
              <div style={{ textAlign: "center" }}>
                <MathJax hideUntilTypeset={"first"}>
                  <span>{`\\(log(FCR) = 0.44-0.015(ORP) + 1.1*10^{-5}(ORP)^2 + 8.4*10^{-4}(ORP*pH)\\)`}</span>
                </MathJax>
              </div>
              <p>
              The project's goal is to provide a web application that allows researchers and the general public to observe real-time water quality services supplied to communities. It enables decisions to be taken when they are most critical, ensuring that the water supplied to the served people is reliable.
              </p>
              <hr></hr>
              <h3>Sensors</h3>
              <p>
                4 locations chosen to provide water to large communities where
                chose as testers for maintaining water quality information.
              </p>
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">
                      <b>Sensor</b>
                    </th>
                    <th scope="col">
                      <b>Community</b>
                    </th>
                    <th scope="col">
                      <b>Population</b>
                    </th>
                    <th scope="col">
                      <b>Description</b>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td>San Jose</td>
                    <td>5000</td>
                    <td>Most population consisting of young families.</td>
                  </tr>
                  <tr>
                    <th scope="row">2</th>
                    <td>Sigamane</td>
                    <td>1000</td>
                    <td>Mostly affected by water quality problems.</td>
                  </tr>
                  <tr>
                    <th scope="row">3</th>
                    <td>Las Pilas</td>
                    <td>5000</td>
                    <td>Mixed population.</td>
                  </tr>
                  <tr>
                    <th scope="row">5</th>
                    <td>Marcala</td>
                    <td>14360</td>
                    <td>Mixed population.</td>
                  </tr>
                </tbody>
              </table>
              <p>
              The sensors included in this project are simply meant to illustrate the functionality that will be supplied throughout the project's operation. The study is funded by EOS International and is being carried out in partnership with the University of Iowa's water quality lab. The documentation for application development, data, and requests can be found in links previously provided.

              </p>
            </div>
            <div className="row align-items-top ml-5 pt-3">
              <div className="col-lg-9">
                <h3> About Development</h3>
                <hr></hr>
                <div
                  className="card"
                  style={{
                    marginLeft: "10px",
                    boxShadow: "0 0 5px 0 rgba(0,0,0,0.2)",
                    alignItems: "center",
                    maxWidth: "350px",
                  }}
                >
                  <img
                    src="https://www.iihr.uiowa.edu/wp-content/uploads/2022/03/1175_dsc_1845_erazo,_carlos.jpg"
                    alt="Carlos"
                    style={{ width: "100%", borderRadius: ".30em" }}
                  ></img>
                  <div style={{ textAlign: "center" }}>
                    <h4>Carlos Erazo</h4>
                    <p className="card-p">
                      PhD student at IIHR, University of Iowa
                    </p>
                    <p className="card-p">cerazoramirez@uiowa.edu</p>
                    <div style={{ textAlign: "center" }}>
                      <a
                        target="_blank"
                        href="https://www.iihr.uiowa.edu/people/carlos-erazo-ramirez/"
                      >
                        <button
                          className="btn btn-outline-dark mb-2 btn-sm"
                          style={{ width: "80%" }}
                        >
                          More info
                        </button>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MathJaxContext>
  );
};

export default Documentation;
