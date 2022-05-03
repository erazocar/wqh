import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";


class Markers extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            marker : []
        }
    }
    render(){
    return (
        <div className="leaflet-container">
        <MapContainer center={[this.state.lat, this.state.lon]} zoom={this.state.zoom} scrollWheelZoom={true}>
            <TileLayer
            url = 'https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png'
                attribution='© <a href="https://stadiamaps.com/">Stadia Maps</a>, © <a href="https://openmaptiles.org/">OpenMapTiles</a> © <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
            >
            </TileLayer>
        </MapContainer>
        </div>
    )}}

export default Markers