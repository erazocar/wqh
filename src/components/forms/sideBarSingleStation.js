import React from "react";
import styled from "styled-components";
import Map from "../maps/Map";
import Modal from "react-modal";

const SideBarStyle=styled.div`{
width: 300px;
overflow: hidden;
padding-left: 5px;

box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
background-color: rgba(255, 255, 255, .8);
border-radius: .25em;
}

@keyframes spinner {
    0% {
        transform: translate3d(-50%, -50%, 0) rotate(0deg);
    }
    100% {
         transform: translate3d(-50%, -50%, 0) rotate(360deg);
    }
}

.spinner {
    // The height here is just for demo purposes
    height: 70vh;  
    position: relative;
    
    &::before {
        animation: 2s linear infinite spinner;
        border: solid 3px #eee;
        border-bottom-color: black;
        border-radius: 50%;
        content: "";
        height: 40px;
        left: 50%;
        position: absolute;
        top: 50%;
        transform: translate3d(-50%, -50%, 0);
        width: 40px;
    }
}
`;

Modal.setAppElement('#root');

const SideBarSingle  = (props) => {
    const { location } = props 

    if (!location) {return (
        <SideBarStyle>
        <div className="spinner" style={{textAlign: "center"}}>
            Please select the required station
            </div>
        </SideBarStyle>
    )} else{
    return (
      <SideBarStyle>
        <div className="row align-items-center ml-4 mt-3">
          <div>
            <h5 className="font-weight-strong text-black">
              <u>Station {props.id}</u>
            </h5>
            <p className="text-black">
              <strong>Location: </strong> {props.location}
            </p>
            <p className="text-black">
              <strong>Longitude: </strong> {props.lon}
            </p>
            <p className="text-black">
              <strong>Latitude: </strong> {props.lat}
            </p>
            <p className="text-black">
              <strong>Minimum Date: </strong> {props.mindate}
            </p>
            <p className="text-black">
              <strong>Maximum Date: </strong> {props.maxdate}
            </p>
            <p className="text-black">
              <strong>Available Data: </strong> {props.count}
            </p>
            <p className="text-black">
              <strong>Data Selected Range Count: </strong> {props.rangeCount}
            </p>
          </div>
        </div>
        <br></br>
        <div
          className="row align-items-center"
          style={{
            margin: "auto"
          }}
        >
          <Map
            lat={props.lat}
            lon={props.lon}
            zoom="7"
            page="select"
            data={{ lat: props.lat, lon: props.lon }}
            scroll={false}
            height="260px"
            width="300px"
          ></Map>
        </div>
      </SideBarStyle>
    );
    }
}

export default SideBarSingle