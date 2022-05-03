import React, { useState } from "react";
import styled from "styled-components";
import Map from "../maps/Map";
import Modal from "react-modal";
import {ExportCSV, ExportJSON} from "../../functions/freechlorine.js";

const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };

const SideBarStyle=styled.div`{
width: 300px;
height: 70vh;
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
    height: 60vh;  
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
    const [seen, setSeen] = useState(false)
    const [dataType, setDataType] = useState('')

    const { location } = props 

    const openModal = () => {
        setSeen(true)
    }

    const closeModal = () => {
        setSeen(false)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        switch (dataType){
            case 'CSV':
                ExportCSV(props);
                break;
            case 'JSON':
                ExportJSON(props);
                break;
            default:
                break;
        }
    }

    const onDataTypeChange = (e) =>{
        e.preventDefault()
        setDataType(e.target.value)
    }

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
          </div>
        </div>
        <div
          className="row align-items-top"
          style={{
            maxWidth: "300px",
            maxHeight: "300px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
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
        <div className="row align-items-top">
          <div>
              <div style={{alignSelf: "auto",
              padding: "10px 100px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center"}}>
            <button className="btn btn-outline-dark mb-3" onClick={openModal}>
              Download
            </button>
            </div>
            <Modal
              isOpen={seen}
              onRequestClose={closeModal}
              style={customStyles}
            >
              <form
                onSubmit={handleSubmit}
                action="#"
              >
                <div className="form-group">
                <select
                    className="custom-select mr-sm-2"
                    id="inputGroupSelect01"
                    onChange={onDataTypeChange}
                >
                    <option>Choose...</option>
                    <option defaultValue="JSON">JSON</option>
                    <option defaultValue="CSV">CSV</option>
                </select>
                </div>
                <button type="submit" className="btn btn-outline-dark mb-3">
                  Download
                </button>
              </form>
              <button
                className="btn btn-outline-secondary mb-3"
                onClick={closeModal}
              >
                Close
              </button>
            </Modal>
          </div>
        </div>
      </SideBarStyle>
    );
    }
}

export default SideBarSingle