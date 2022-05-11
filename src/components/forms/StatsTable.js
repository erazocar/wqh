import React from "react";
import { Stats } from "../../functions/Stats.js";

const Statistics = new Stats();

const StatsTable = (props) => {
  const { ph, temp, orp, freeChl, level, systembatt } = props;

  if (!ph) {
    return <div></div>;
  } else {
    return (
      <div style={{margin: "0 auto"}}>
      <table className="table table-sm">
        <thead>
          <tr>
            <th scope="col">
              <b></b>
            </th>
            <th scope="col">
              <b>pH</b>
            </th>
            <th scope="col">
              <b>orp</b>
            </th>
            <th scope="col">
              <b>Temperature</b>
            </th>
            <th scope="col">
              <b>logFCR</b>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">min</th>
            <td>{JSON.stringify(Statistics.min(ph))}</td>
            <td>{JSON.stringify(Statistics.min(orp))}</td>
            <td>{JSON.stringify(Statistics.min(temp))}</td>
            <td>{JSON.stringify(Statistics.min(freeChl))}</td>
          </tr>
          <tr>
            <th scope="row">max</th>
            <td>{JSON.stringify(Statistics.max(ph))}</td>
            <td>{JSON.stringify(Statistics.max(orp))}</td>
            <td>{JSON.stringify(Statistics.max(temp))}</td>
            <td>{JSON.stringify(Statistics.max(freeChl))}</td>
          </tr>
          <tr>
            <th scope="row">mean</th>
            <td>{JSON.stringify(Statistics.mean(ph))}</td>
            <td>{JSON.stringify(Statistics.mean(orp))}</td>
            <td>{JSON.stringify(Statistics.mean(temp))}</td>
            <td>{JSON.stringify(Statistics.mean(freeChl))}</td>
          </tr>
          <tr>
            <th scope="row">median</th>
            <td>{JSON.stringify(Statistics.median(ph))}</td>
            <td>{JSON.stringify(Statistics.median(orp))}</td>
            <td>{JSON.stringify(Statistics.median(temp))}</td>
            <td>{JSON.stringify(Statistics.median(freeChl))}</td>
          </tr>

          <tr>
            <th scope="row">Std Dev</th>
            <td>{JSON.stringify(Statistics.stdDev(ph))}</td>
            <td>{JSON.stringify(Statistics.stdDev(orp))}</td>
            <td>{JSON.stringify(Statistics.stdDev(temp))}</td>
            <td>{JSON.stringify(Statistics.stdDev(freeChl))}</td>
          </tr>
          <tr>
            <th scope="row">Variance</th>
            <td>{JSON.stringify(Statistics.vari(ph))}</td>
            <td>{JSON.stringify(Statistics.vari(orp))}</td>
            <td>{JSON.stringify(Statistics.vari(temp))}</td>
            <td>{JSON.stringify(Statistics.vari(freeChl))}</td>
          </tr>
          <tr>
            <th scope="row">Q25</th>
            <td>{JSON.stringify(Statistics.quantile(0.25, ph))}</td>
            <td>{JSON.stringify(Statistics.quantile(0.25, orp))}</td>
            <td>{JSON.stringify(Statistics.quantile(0.25, temp))}</td>
            <td>{JSON.stringify(Statistics.quantile(0.25, freeChl))}</td>
          </tr>          
          <tr>
            <th scope="row">Q75</th>
            <td>{JSON.stringify(Statistics.quantile(0.75, ph))}</td>
            <td>{JSON.stringify(Statistics.quantile(0.75, orp))}</td>
            <td>{JSON.stringify(Statistics.quantile(0.75, temp))}</td>
            <td>{JSON.stringify(Statistics.quantile(0.75, freeChl))}</td>
          </tr>
          <tr>
            <th scope="row">Outliers</th>
            <td>{JSON.stringify(Statistics.interoutliers(ph))}</td>
            <td>{JSON.stringify(Statistics.interoutliers(orp))}</td>
            <td>{JSON.stringify(Statistics.interoutliers(temp))}</td>
            <td>{JSON.stringify(Statistics.interoutliers(freeChl))}</td>
          </tr>
        </tbody>
      </table>
      <br></br>
      <table className="table table-sm" >
      <thead>
          <tr>
            <th scope="col">
              <b></b>
            </th>
            <th scope="col">
              <b>Water Level</b>
            </th>
            <th scope="col">
              <b>System Battery</b>
            </th>
          </tr>
        </thead>
        <tbody>
        <tr>
            <th scope="row">max</th>
            <td>{JSON.stringify(Statistics.max(level))}</td>
            <td>{JSON.stringify(Statistics.max(systembatt))}</td>
          </tr>          
          <tr>
            <th scope="row">min</th>
            <td>{JSON.stringify(Statistics.min(level))}</td>
            <td>{JSON.stringify(Statistics.min(systembatt))}</td>
          </tr>
          <tr>
            <th scope="row">mean</th>
            <td>{JSON.stringify(Statistics.mean(level))}</td>
            <td>{JSON.stringify(Statistics.mean(systembatt))}</td>
          </tr>
        </tbody>
      </table>
      </div>
    );
  }
};

export default StatsTable;
