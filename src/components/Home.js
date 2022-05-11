import React from "react";
import dataCaller from "./apicalls/caller.js";
import axios from "axios";
import Map from "./maps/Map";

class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      data: [],
    };
  }
  componentDidMount() {
    var callerType = "sensorInfo";
    axios({
      url: dataCaller[callerType]["url"],
    }).then((res) => {
      var response = res.data;
      var container = {};
      var final = [];

      const it = (container) => {
        for (var i = 0; i < response.length; i++) {
          if (typeof response[i] === "object") {
            container[response[i].id] = re(i);
            final.push(container[response[i].id]);
          }
        }
      };
      const re = (key) => {
        response[key].index = {
          id: JSON.parse(response[key].id),
          lat: JSON.parse(response[key].lat),
          lon: JSON.parse(response[key].lon),
          comm: response[key].community,
          pop: JSON.parse(response[key].population),
          desc: response[key].description,
        };
        return response[key].index;
      };
      it(container);

      this.setState({ data: final });
    });
  }

  render() {
    if (this.state.data[0] === undefined) {
      return (
        <div>Loading...</div>
      )
    } else {
    return (
      <div className="overflow-hidden">
        <div className="container-fluid mx-5 pt-5 pb-5">
          <div className="row align-items-top my-5 px-2">
            <div className="col-lg-5 pr-4">
              <h1 className="font-weight-light">Project Description</h1>
              <p>
              This project intends to provide safe drinking water to various villages and municipalities throughout Central America (particularly Honduras and Nicaragua) using on-site chlorination. Researchers and the general public can use the data received from the sensors to determine the quality of the water delivered and to keep track of site maintenance. More information is available by clicking on the sites.
              </p>
              <div style={{margin: "auto", display: "flex", height: "50vh"}}>
              <iframe width="100%" src="https://www.youtube.com/embed/h2MJir9aTvg">
              </iframe>
              </div>
            </div>
            <div className="col-lg-6 pl-4">
              <br></br>
              <div style={{margin: "0 auto"}}>
              <Map
                lat="13.534358"
                lon="-87.538763"
                zoom="6"
                page="home"
                data={this.state.data}
                scroll={true}
                height="65vh"
                width="100vh"
              ></Map>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
}

export default Home;
