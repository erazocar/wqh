const FreeChlor = (orp, ph) => {
    var output = []
    for (var i = 0; i < orp.length; i++){
        var temp = 0.44-0.015*orp[i] +1.1*(10^-5)*orp[i]^2+8.4*(10^-4) * (orp[i] * ph[i])
        output.push(Math.log(temp))
    }
    return output
}

const DownloadFiles = ({data, fileName, fileType}) => {
    const blob = new Blob([data], {type: fileType})

    const a = document.createElement('a')
    a.download = fileName
    a.href = window.URL.createObjectURL(blob)
    const clickEvent = new MouseEvent('click', {
        view: window,
        bubbles: true,
         cancelable: true
    })
    a.dispatchEvent(clickEvent)
    a.remove()
}

const ExportJSON = (props) => {
    let dataJSON = arrchange(props.data)

    DownloadFiles({
        data: JSON.stringify(dataJSON),
        fileName: 'export.json',
        fileType: 'text/json'
    })
}

const ExportCSV = (props) => {
    var headers = props.names.map(i => [i])
    var dataCSV = arrchange(props.data)
    DownloadFiles({
        data: [...headers, ...dataCSV].join('\n'),
        fileName: 'export.csv',
        fileType: 'text/csv'
    })
}

 const arrchange = (data) => {
    var x = data;
    const transp = (matrix) => matrix[0].map((x, i) => matrix.map((x) => x[i]));
    return transp(x);
  }

export {FreeChlor, ExportCSV, ExportJSON}