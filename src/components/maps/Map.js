import React, { useCallback } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import MiniMapControl from "./Minimap";
import { useNavigate } from "react-router-dom";
import icon from '../../img/location.png'
import L from 'leaflet'

const createIcon = L.icon({
    iconUrl: icon,
    iconRetinaUrl: icon,
    iconAnchor: null,
    shadowSize: null,
    iconSize: [40,40]
  })

const DifMarks = (props) => {
  const navigate = useNavigate()
  const handleLink = useCallback(()=>{
    navigate('/stations', {replace:true}, [navigate])
  })
    const map = useMap()
  if (props.page === "home") {
    return props.data.map((site) => (
          <Marker key={site.id} 
          eventHandlers={{
              click: () =>{
                  map.setView([site.lat, site.lon], 12)
              }
          }}
          position={[site.lat, site.lon]}
          icon={createIcon}
          >
            <Popup>
              <div className="m-2 text-left text-black" style={{fontSize: "0.8rem"}}>
                  <div className="font-light-weight">
                <strong>SiteID:</strong> {site.id} <br></br> <strong>Community:</strong> {site.comm} <br></br>
                <strong>Population:</strong>{site.pop}
                <br></br> <strong>Additionally information:</strong> {site.desc}
                <br></br>
                <br></br>
                <div style={{textAlign: "center"}}>
                <button
                  className="btn btn-outline-dark btn-sm"
                  onClick={handleLink}
                  icon={createIcon}
                >
                  More Info
                </button>
                </div>
              </div>
              </div>
            </Popup>
          </Marker>
        ))}
        else if (props.page === "about") {
    return (
      <Marker position={[41.6572, -91.5414]}
      icon={createIcon}
      >
        <Popup>
          <div className="m-2 text-left text-black" style={{fontSize: "0.8rem"}}>
          <div className="font-light-weight">
            IIHR: HydroScience and Engineering
            </div>
            <br></br>
                <br></br>
            <div style={{textAlign: "center"}}>
            <a
              target="_blank"
              style={{ color: "white" }}
              href="https://www.iihr.uiowa.edu/"
            >
              <button className="btn btn-outline-dark btn-sm">
                Visit Site
              </button>
            </a>
            </div>
          </div>
        </Popup>
      </Marker>
    );
  } else if (props.page === "select") {
    return (<Marker 
        position={[props.data.lat, props.data.lon]}
        eventHandlers ={{
            click: () =>{
                map.setView([props.data.lat, props.data.lon], 12)
            }
        }}
        icon={createIcon}
        ></Marker>);
  }
};

class Map extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lat: this.props.lat,
      lon: this.props.lon,
      zoom: this.props.zoom,
      data: this.props.data,
      page: this.props.page,
      height: this.props.height,
      width: this.props.width,
      scroll: this.props.scroll
    };
  }
  render() {
      return (
        <div className="leaflet-cont">
          <MapContainer
            style={{ height: this.state.height, width: this.state.width}}
            center={[this.state.lat, this.state.lon]}
            zoom={this.state.zoom}
            scrollWheelZoom={this.state.scroll}
          >
            <TileLayer
              url="http://services.arcgisonline.com/arcgis/rest/services/Canvas/World_Dark_Gray_Base/MapServer/tile/{z}/{y}/{x}"
              attribution='© <a href="https://stadiamaps.com/">Stadia Maps</a>, © <a href="https://openmaptiles.org/">OpenMapTiles</a> © <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
            ></TileLayer>
            <DifMarks page={this.state.page} data={this.state.data} />
            <MiniMapControl position="topright" />
          </MapContainer>
        </div>
      );
    }
}

export default Map;
