const dataCaller = {
    "allSensors": {
        "type" : "get",
        "url" : 'https://s-l112.engr.uiowa.edu/inf/inf_student05/api/config/allsensors.php'
    },
    "specificSensors": {
        "type" : "get",
        "url" : 'https://s-l112.engr.uiowa.edu/inf/inf_student05/api/config/specificsensors.php'
    },
    "contactInfo":{
        "type" : "post",
        "url" : 'https://s-l112.engr.uiowa.edu/inf/inf_student05/api/config/comments.php'
    },
    "singleSensor":{
        "type" : "get",
        "url" : 'https://s-l112.engr.uiowa.edu/inf/inf_student05/api/config/datasinglesensor.php'
    },
    "sensorInfo":{
        "type" : "get",
        "url" : 'https://s-l112.engr.uiowa.edu/inf/inf_student05/api/config/sensorinfo.php'
    }
}

export default dataCaller