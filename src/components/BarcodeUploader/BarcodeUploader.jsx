import React, { useEffect, useState } from "react";
import axios from "axios";
import BarcodeScannerComponent from "react-webcam-barcode-scanner";
import {
  StyledWrapper,
  StyledCard,
  StyledCardHeader,
  StyledInput,
  StyledButton,
  StyledInputComponent,
} from "../styledComponents";
import apiKeys from "../../apiKeys";
import { useHistory } from "react-router-dom";
const TAB = {
  text: "text",
  cam: "cam",
};

const BarcodeUploader = (props) => {
  const [selected, setSelected] = useState(TAB.text);
  const [data, setData] = useState("Scan barcode");
  const [manualCode, setManualCode] = useState("");
  useEffect(() => {
    setData("Scan barcode");
  }, [selected]);
  const renderCamInput = () => (
    <StyledInputComponent>
      <BarcodeScannerComponent
        width={400}
        onUpdate={(err, result) => {
          if (result && result.text !== "Not Found") {
            setData(result.text);
            makeRequest(result.text);
          }
        }}
      />
      <p>{data}</p>
    </StyledInputComponent>
  );
  const handleManualInputChange = (e) => {
    console.log(e.target.value);
    setManualCode(e.target.value);
  };
  const history = useHistory();

  const makeRequest = (barcode) => {
    axios
      .get(`${apiKeys.backendURL}waste_category/barcode/?code=${barcode}`)
      .then(function (response) {
        history.push("/results", response.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        // always executed
      });
  };

  const handleSubmit = () => {
    makeRequest(manualCode);
  };

  const renderManualInput = () => (
    <StyledInputComponent>
      <StyledInput
        onChange={handleManualInputChange}
        type="text"
        placeholder="Barcode"
      />
      <StyledButton onClick={handleSubmit}>Submit</StyledButton>
    </StyledInputComponent>
  );

  return (
    <StyledWrapper>
      <StyledCard>
        <StyledCardHeader onClick={() => setSelected(TAB.text)}>
          Wprowad?? kod z opakowania r??cznie
          {selected === TAB.text && (
            <div className="content">{renderManualInput()}</div>
          )}
        </StyledCardHeader>
        <StyledCardHeader
          className="top-line"
          onClick={() => setSelected(TAB.cam)}
        >
          Skanuj kod kreskowy
          {selected === TAB.cam && (
            <div className="content">{renderCamInput()}</div>
          )}
        </StyledCardHeader>
      </StyledCard>
      <StyledButton
        background="#C6C6C6"
        onClick={() => {
          props.backButton(1);
        }}
      >
        Wr????
      </StyledButton>
    </StyledWrapper>
  );
};

export default BarcodeUploader;
