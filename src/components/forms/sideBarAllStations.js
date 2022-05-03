import React, { useEffect, useState } from "react";
import dataCaller from "../apicalls/caller.js";
import axios from "axios";

const SideBarAll  = () => {

    const [req, setReq] = useState({
        data: {
        }
    })

    useEffect(()=>{
        var callerType = "allSensors"

        const retrieveAll = () => {
        axios({
            url: dataCaller[callerType]["url"],
        }).then((res) => {
            var response = res.data
            var container = {}

            const it = (container) => {
                for (var i =0; i < response.length; i++){
                    if (typeof response[i] === "object"){
                        container[response[i].index] = re(i)
                    }
            }

            }
            const re = (key) => {
                var startD = new Date(JSON.parse(response[key].startdate))
                //var fnstrD = `${strD.getDate()}-${strD.getMonth()+1}-${strD.getFullYear()}`
                
                var finalD = new Date(JSON.parse(response[key].enddate))
                //var fnfnD = `${fnD.getDate()}-${fnD.getMonth()}-${fnD.getFullYear()}`

                response[key].index = {
                    startDate: startD.getDate(),
                    endDate: finalD.getDate(),
                    location: response[key].location,
                    numRecords: response[key].numrecords
                }
                return response[key].index
            }
            it(container)

            setReq(req.data = container)
        })
    }
    retrieveAll()
}, [])

    return (
        <div className="sidebar-container py-3 pl-3 bg-dark">
            <h3 className="font-weight-strong text-white">Stations</h3>
            <h5 className="font-weight-light text-white"><u>Station 1</u></h5>
            <p className="text-white"><strong>Location: </strong></p>
            {/* <p><strong>Start Date: </strong> {data[data][1].startDate}</p>
            <p><strong>End Date: </strong> {data[data][1].endDate}</p> */}
            {/* <br></br>
            <h3>Station 2</h3>
            <p><strong>Location: </strong> {data[data][2]["location"]}</p>
            <p><strong>Start Date: </strong> {data[data][2]["startDate"]}</p>
            <p><strong>End Date: </strong> {data[data][2]["endDate"]}</p>
            <br></br>
            <h3>Station 3</h3>
            <p><strong>Location: </strong> {data[data][3]["location"]}</p>
            <p><strong>Start Date: </strong> {data[data][3]["startDate"]}</p>
            <p><strong>End Date: </strong> {data[data][3]["endDate"]}</p>
            <br></br>
            <h3>Station 5</h3>
            <p><strong>Location: </strong> {data[data][5]["location"]}</p>
            <p><strong>Start Date: </strong> {data[data][5]["startDate"]}</p>
            <p><strong>End Date: </strong> {data[data][5]["endDate"]}</p> */}
            <br></br>
        </div>
        )
}

export default SideBarAll