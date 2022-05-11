import { React, useState } from "react";
import Modal from "react-modal";
import { ExportCSV, ExportJSON } from "../../functions/Functions.js";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

Modal.setAppElement("#root");

const DownloadModal = (props) => {
  const [seen, setSeen] = useState(false);
  const [dataType, setDataType] = useState("");

  const { location } = props;

  const openModal = () => {
    setSeen(true);
  };

  const closeModal = () => {
    setSeen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    switch (dataType) {
      case "CSV":
        ExportCSV(props);
        break;
      case "JSON":
        ExportJSON(props);
        break;
      default:
        break;
    }
  };

  const onDataTypeChange = (e) => {
    e.preventDefault();
    setDataType(e.target.value);
  };

  if (!location) {
    return <div></div>;
  } else {
    return (
      <div className="col-md-12 text-right">
        <div
          style={{
            alignSelf: "auto",
            display: "flex",
            justifyContent: "right",
          }}
        >
          <button className="btn btn-outline-dark mb-3" onClick={openModal}>
            Download
          </button>
        </div>
        <Modal isOpen={seen} onRequestClose={closeModal} style={customStyles}>
          <form onSubmit={handleSubmit} action="#">
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
    );
  }
};

export default DownloadModal;
