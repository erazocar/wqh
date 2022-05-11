import React from "react";
import {
  Chart as ChartJS,
  Legend,
  LinearScale,
  LineElement,
  PointElement,
  TimeScale,
  TimeSeriesScale,
  Tooltip,
} from "chart.js";
import { Line } from "react-chartjs-2";
import styled from "styled-components";
import "date-fns";
import "chartjs-adapter-date-fns";

const ChartStyler = styled.div`
  body {
    background: none;
    color: #444;
  }

  .box,
  .box-placeholder {
    background-color: #fff;
    margin: 15px;
    box-shadow: 0 2px 3px 0 rgba(0, 0, 0, 0.1);
    vertical-align: top;
    width: 100vh;
    max-height: 200px hr {
      margin: 0;
      border-color: #f3f3f3;
    }
  }

  .box {
    display: none;

    .category {
      display: block;
      margin-bottom: 10px;
    }

    img {
      max-width: 100vh;
    }
  }

  .box-placeholder {
    font-size: 0;
    line-height: 0;

    .text {
      display: inline-block;
      background-color: #444;
      height: 12px;
      border-radius: 100px;
      margin: 5px 0;
      min-width: 98vh;
      opacity: 0.1;
      animation: fading 1.5s infinite;

      &:first-child {
        margin-top: 0;
      }

      &:last-child {
        margin-bottom: 0;
      }

      &.link {
        background-color: var(--blue);
        opacity: 0.4;
      }

      &.line {
        width: 98vh;
      }

      &.category {
        width: 98vh;
        margin-bottom: 10px;
      }
    }

    h4.text {
      height: 20px;
      margin: 3px 0;
      opacity: 0.2;
    }

    .image {
      background-color: #f9f9f9;
      max-height: 40px;
    }
  }

  @keyframes fading {
    0% {
      opacity: 0.1;
    }

    50% {
      opacity: 0.2;
    }

    100% {
      opacity: 0.1;
    }
  }
`;

ChartJS.register(
  LineElement,
  TimeScale,
  Tooltip,
  Legend,
  LinearScale,
  PointElement,
  TimeSeriesScale
);

const LineCharts = (props) => {
  const { dates } = props;
  if (!dates) {
    return (
      <ChartStyler>
        <div className="box-placeholder flex-row">
          <div className="image">
            <div className="embed-responsive embed-responsive-16by9"></div>
          </div>
          <hr></hr>
          <div className="p-2">
            <span className="category text link"></span>
            <h4 className="text line"></h4>
            <h4 className="text"></h4>
          </div>
        </div>
      </ChartStyler>
    );
  } else {
    const random_rgba = () => {
      var o = Math.round,
        r = Math.random,
        s = 255;
      return "rgb(" + o(r() * s) + "," + o(r() * s) + "," + o(r() * s) + ")";
    };

    const datagen = () => {
      var labels = props.dates;
      var names = props.names;
      var data = props.data;

      //Need to change the dates, values and everythng else depending
      //on the response type

      //Staging the data to host preliminary info
      var datastage = [];
      for (var i = 0; i < names.length; i++) {
        var temp = {
          label: names[i],
          yAxisID: names[i],
          data: data[i],
          borderColor: random_rgba(),
        };
        datastage.push(temp);
      }

      const finalData = {
        labels: labels,
        datasets: datastage,
      };

      return finalData;
    };

    var datas = datagen();

    const prepareRendChart = (d) => {
      if (d[Object.keys(d)[0]].length !== 0) {
        var data = {
          labels: d.labels,
          datasets: d.datasets,
        };

        var options = {
          responsive: true,
          interaction: {
            mode: "index",
            intersect: false,
          },
          stacked: false,
          maintainAspectRatio: false,
          plugins: {
            legend: {
              position: "top",
            },
            title: {
              display: true,
              text: props.title,
            },
          },
          scales: {
            x: {
              type: "time",
              distribution: "series",
              display: props.xdisplay,
              time: {
                unit: "day",
                displayFormats: {
                  day: "MMM dd",
                },
              },
            },
            [props.names[0]]: {
              type: "linear",
              display: true,
              position: "left",
            },
            [props.names[1]]: {
              type: "linear",
              display: true,
              position: "right",
            },
          },
          adapters: {
            date: {
              locale: "enGB",
              format: "LLL",
            },
          },
          elements: {
            point: {
              radius: 0,
            },
          },
        };
        return (
          <div className="chart-container">
            {d?.labels ? <Line data={data} options={options} /> : null}
          </div>
        );
      }
    };

    return prepareRendChart(datas);
  }
};

export default LineCharts;
