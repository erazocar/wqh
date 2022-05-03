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
      <div className="home">
        <div className="container-fluid mx-5 py-5">
          <div className="row align-items-top my-5">
            <div className="col-lg-5">
              <h1 className="font-weight-light">Project Description</h1>
              <p>
                This project aims to connect several communities and
                municipalities throughout Central America (specifically Honduras
                and Nicaragua) with safe drinking water through the chlorination
                on site. The data collected from the sensors allow for
                researchers and the general public to know the quality of the
                water being served and keep up with site maintenance. Click on
                the sites to display more info.
              </p>
              <iframe width="600" height="315" src="https://www.youtube.com/embed/h2MJir9aTvg">
              </iframe>
            </div>
            <div className="col-lg-6">
              <Map
                lat="13.534358"
                lon="-87.538763"
                zoom="6"
                page="home"
                data={this.state.data}
                scroll={true}
                height="60vh"
                width="100vh"
              ></Map>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
}

export default Home;
