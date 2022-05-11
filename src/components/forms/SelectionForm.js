import React from "react";
import Dater from "../dates/DateComp";
import dataCaller from "../apicalls/caller.js";
import axios from "axios";
import LinesCharts from "../charts/LineCharts";
import SideBarSingle from "./sideBarSingleStation";
import { FreeChlor } from "../../functions/Functions.js";
import StatsTable from "./StatsTable";
import DownloadModal from "./DownloadMod";

class SelectionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sensorId: null,
      startDate: null,
      endDate: null,
      orp: null,
      ph: null,
      temp: null,
      dates: null,
      lat: null,
      lon: null,
      location: null,
      minDate: null,
      maxDate: null,
      scount: null,
      rangeCount: null,
      freeChl: null,
      seen: false,
      systembatt: null,
      level: null
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit = (e) => {
    e.preventDefault();
    var caller1 = "specificSensors";
    var caller2 = "singleSensor";
    //Creating the request as form data.

    //Check for seeing if data has been passed
    var missing =
      this.state.sensorId === null ||
      this.state.startDate === null ||
      this.state.endDate === null;
    if (missing) {
      alert("Please select all the required fields before submitting!");
      return;
    }

    var dataReq = {
      id: this.state.sensorId,
      startDate: JSON.stringify(this.state.startDate.getTime()),
      endDate: JSON.stringify(this.state.endDate.getTime()),
    };

    //Check to see that start date is smaller than end date.

    var invalidDate =
      JSON.parse(dataReq.startDate) - JSON.parse(dataReq.endDate) <= 0;
    if (!invalidDate) {
      alert("Start date should be earlier than end date!");
      return;
    }

    axios({
      url: dataCaller[caller1]["url"],
      params: dataReq,
    }).then((res) => {
      var response = res.data;

      //Passing the data to arrays for further manipulation
      var orp = response.map(({ orp }) => JSON.parse(orp));
      var ph = response.map(({ ph }) => JSON.parse(ph));
      var temp = response.map(({ temperature }) => JSON.parse(temperature));
      var sysbatt = response.map(({ systembatt }) => systembatt !== null ? JSON.parse(systembatt) : 0);
      var level = response.map(({ level }) => JSON.parse(level));
      var chl = FreeChlor(orp, ph);

      var unix = response.map(({ unixtime }) => {
        var dt = new Date(JSON.parse(unixtime));
        return dt;
      });
      this.setState({
        orp: orp,
        ph: ph,
        temp: temp,
        dates: unix,
        freeChl: chl,
        rangeCount: orp.length,
        systembatt: sysbatt,
        level: level
      });
    });
    axios({
      url: dataCaller[caller2]["url"],
      params: dataReq,
    }).then((res) => {
      var resp2 = res.data;

      var count = JSON.parse(resp2[0].count);
      var lat = JSON.parse(resp2[0].lat);
      var lon = JSON.parse(resp2[0].lon);
      var loc = resp2[0].location;
      var minD = new Date(JSON.parse(resp2[0].mindate));
      var maxD = new Date(JSON.parse(resp2[0].maxdate));

      this.setState({
        scount: count,
        lat: lat,
        lon: lon,
        location: loc,
        minDate:
          minD.getFullYear() +
          "-" +
          (minD.getMonth() + 1) +
          "-" +
          minD.getDate(),
        maxDate:
          maxD.getFullYear() +
          "-" +
          (maxD.getMonth() + 1) +
          "-" +
          maxD.getDate(),
      });
    });
  };

  onSensorChange = (e) => {
    this.setState({ sensorId: e.target.value });
  };

  onStartDate = (date) => {
    this.setState({ startDate: date });
  };

  onEndDate = (date) => {
    this.setState({ endDate: date });
  };

  render() {
    return (
      <div className="container-flex mx-5 py-5">
        <br></br>
        <div className="row align-items-top my-5">
          <div className="col-2 ml-5">
            <SideBarSingle
              id={this.state.sensorId}
              location={this.state.location}
              lon={this.state.lon}
              lat={this.state.lat}
              mindate={this.state.minDate}
              maxdate={this.state.maxDate}
              count={this.state.scount}
              rangeCount={this.state.rangeCount}
              startDate={this.state.startDate}
              endDate={this.state.endDate}
              data={[
                this.state.dates,
                this.state.ph,
                this.state.orp,
                this.state.temp,
                this.state.freeChl,
              ]}
              names={["Date", "pH", "ORP", "Temperature", "logFCR"]}
            />
          </div>
          <div className="col-6 ml-3">
            <form
              className="form-inline"
              onSubmit={this.handleSubmit.bind(this)}
              method="GET"
              action="#"
            >
              <div className="form-group ml-5">
                <div className="input-group mb-3 ml-5">
                  <div className="input-group-prepend">
                    <label
                      className="input-group-text"
                      htmlFor="inputGroupSelect01"
                    >
                      Sensor
                    </label>
                  </div>
                  <select
                    className="custom-select mr-sm-2"
                    id="inputGroupSelect01"
                    onChange={this.onSensorChange.bind(this)}
                  >
                    <option>Choose...</option>
                    <option defaultValue="1">1</option>
                    <option defaultValue="2">2</option>
                    <option defaultValue="3">3</option>
                    <option defaultValue="5">5</option>
                  </select>
                </div>
                <div className="form-group ml-sm-5 mr-3 mb-3">
                  <Dater
                    dateType="Start"
                    date={this.state.startDate}
                    handleChange={this.onStartDate}
                  />
                </div>
                <div className="form-group mr-sm-5 ml-3 mb-3">
                  <Dater
                    dateType="End"
                    date={this.state.endDate}
                    handleChange={this.onEndDate}
                  />
                </div>
                <button type="submit" className="btn btn-outline-dark mb-3">
                  Submit
                </button>
              </div>
            </form>
            <div className="row align-items-top mb-2 px-3 flex-row mw-60">
              <LinesCharts
                dates={this.state.dates}
                names={["temperature", "ph"]}
                xdisplay={true}
                title={"Temperature and pH"}
                data={[this.state.temp, this.state.ph]}
              />
            </div>
            <br></br>
            <br></br>
            <div className="row align-items-top mt-2 px-3 flex-row mw-60">
              <LinesCharts
                dates={this.state.dates}
                names={["orp", "log(FC)"]}
                xdisplay={true}
                title={"ORP vs Free Chlorine"}
                data={[this.state.orp, this.state.freeChl]}
              />
            </div>
          </div>
          <div
            className="col-2 flex-column pl-5"
            style={{ textAlign: "center"}}
          >
            <StatsTable
              ph={this.state.ph}
              temp={this.state.temp}
              orp={this.state.orp}
              freeChl={this.state.freeChl}
              systembatt = {this.state.systembatt}
              level = {this.state.level}
            />
            <div className="float-right">
              <DownloadModal
                id={this.state.sensorId}
                location={this.state.location}
                lon={this.state.lon}
                lat={this.state.lat}
                mindate={this.state.minDate}
                maxdate={this.state.maxDate}
                count={this.state.scount}
                startDate={this.state.startDate}
                endDate={this.state.endDate}
                data={[
                  this.state.dates,
                  this.state.ph,
                  this.state.orp,
                  this.state.temp,
                  this.state.freeChl,
                ]}
                names={["Date", "pH", "ORP", "Temperature", "logFCR"]}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SelectionForm;
