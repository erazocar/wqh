import React from "react";
import { MathJax, MathJaxContext } from "better-react-mathjax";

const config = {
  loader: { load: ["[tex]/html"] },
  tex: {
    packages: { "[+]": ["html"] },
    inlineMath: [
      ["$", "$"],
      ["\\(", "\\)"]
    ],
    displayMath: [
      ["$$", "$$"],
      ["\\[", "\\]"]
    ]
  }
};

const linkonClick = (url) => {
  const newWindow = window.open(url, '_blank', 'noopener, noreferrer')
  if (newWindow) newWindow.opener = null
}

const Documentation = () => {
  return (
    <MathJaxContext config={config}>
      <div className="container-fluid mx-5 py-5">
        <div className="row align-items-top my-5">
          <div className="col-lg-8">
            <h1 className="font-weight-light">Providing Water Quality through Data Monitoring</h1>
            <hr></hr>
            <h3> International Collaboration</h3>
            <div style={{textAlign: "center"}}>
              <img src="https://www.beneficialreturns.com/uploads/7/5/2/0/75208167/dsc-0577-copy_orig.jpg" width="700"></img>
            </div>
            <br></br>
            <p>
            The scalable water-monitoring solution for Nicaragua and Honduras is a collaboration between Dr. Craig Just of
          the University of Iowa's water quality lab and <a style={{color: "black"}} target="_blank" href="https://www.iihr.uiowa.edu/people/megan-lindmark/">
            <u>Megan
              Lindmark</u></a>, a PhD student, and <a style={{color: "black"}}  target="_blank" href="https://www.eosinternational.org/">
            <u>EOS International</u></a>, a
          nonprofit nonprofit organization that leverages market-based solutions for Central American rural families
          without access to safe water. The project's goal is to use simple technology to provide solutions and
          education to low-income families while maintaining high standards of technological development and drinking
          water. The project aims to scale hundreds of locations by using cellullar LTE connectivity, as described in this <a style={{color: "black"}}  target="_blank" href="https://www.digi.com/customer-stories/eos-deploys-water-monitoring-solution">
            <u>article</u></a>.
            </p>
            <hr></hr>
        <h3> Data Analysis</h3>
        <p>
          Van Haute's equation will be used to monitor the filtration status as well as information about the water
          quality at the extraction site.
          A chlorine injection via tablets provides for free chlorine residual at acceptable pH values to limit and
          minimize pathogen cross contamination.
          The oxidation-reduction potential (ORP) is a sanitizing strength measurement that is used to estimate free
          chlorine residual in oxidant-based sanitizing solutions.The equation for calculating free chlorine is:
        </p>
          <div style={{textAlign: "center"}}>
          <MathJax hideUntilTypeset={"first"}>
          <span>{`\\(log(FCR) = k_1-k_2(ORP) + k_3(ORP)^2 + k_4(ORP*pH)\\)`}</span>
          </MathJax>
          </div>
        <p>
          This is known as the Kalman filtering method. The weights of the equation, namely <MathJax inline>{"\\(k_1 – k_4\\)"}</MathJax>, are updated
          using the original coefficients that each iteration allows with the current equation setting. This is a
          calibration opportunity that can be understood using statistical methods like ARIMA processes. The current van
          Haute's equation coefficients used for free chlorine calculation on the sites are
          </p>
          <div style={{textAlign: "center"}}>
          <MathJax hideUntilTypeset={"first"}>
          <span>{`\\(log(FCR) = 0.44-0.015(ORP) + 1.1*10^{-5}(ORP)^2 + 8.4*10^{-4}(ORP*pH)\\)`}</span>
          </MathJax>
          </div>
        <p>
          The WQH service aims to provide a web application that allows researchers and the general public to view the
          water quality services provided to communities in real time.
          It enables decisions to be made when they are most important, ensuring that the water provided to the served
          populations is reliable.
        </p>
        <hr></hr>
        <h3>Sensors</h3>
        <p>
        4 locations chosen to provide water to large communities where chose as testers for maintaining water quality
          information.
        </p>
        <table className="table">
        <thead>
          <tr>
            <th scope="col"><b>Sensor</b></th>
            <th scope="col"><b>Community</b></th>
            <th scope="col"><b>Population</b></th>
            <th scope="col"><b>Description</b></th>
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
          The sensors included in this project are only intended to highlight the functionality that will be provided
          throughout the duration of its operation.
          EOS International is funding the project, which is being carried out in collaboration with the University of
          Iowa's water quality lab.
          The documentation for the application development, data, and requests is available in the following
          repository. 
        </p>
          </div>
            <div className="row align-items-top ml-5">
            <div className="col-lg-9">
            <div className="card" style={{marginLeft: "10px", boxShadow: "0 0 5px 0 rgba(0,0,0,0.2)", alignItems: "center", maxWidth: "350px"}}>
              <img src="https://www.iihr.uiowa.edu/wp-content/uploads/2022/03/1175_dsc_1845_erazo,_carlos.jpg" alt="Carlos" style={{width: "100%", borderRadius: ".30em"}}>
              </img>
              <div style={{textAlign: "center"}}>
                <h4>About Development</h4>
                <p className="card-p">Carlos Erazo</p>
                <p className="card-p">PhD student at IIHR, University of Iowa</p>
                <p className="card-p">cerazoramirez@uiowa.edu</p>
                <div style={{textAlign: "center"}}>
                <a
                target="_blank"
                href="https://www.iihr.uiowa.edu/people/carlos-erazo-ramirez/"
                >
                <button
                className="btn btn-outline-dark mb-2 btn-sm" 
                style={{width: "80%"}}
                >More info</button>
                </a>
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
