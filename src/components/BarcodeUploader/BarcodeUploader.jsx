import React, { useEffect, useState } from "react";
import BarcodeScannerComponent from "react-webcam-barcode-scanner";
import {
  StyledWrapper,
  StyledCard,
  StyledCardHeader,
  StyledInput,
  StyledButton,
  StyledInputComponent,
} from "../styledComponents";

const TAB = {
  text: "text",
  cam: "cam",
};

const BarcodeUploader = (props) => {
  const [selected, setSelected] = useState(TAB.text);
  const [data, setData] = useState("Scan barcode");

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
          }
        }}
      />
      <p>{data}</p>
    </StyledInputComponent>
  );

  const renderManualInput = () => (
    <StyledInputComponent>
      <StyledInput type="text" placeholder="Barcode" />
      <StyledButton>Submit</StyledButton>
    </StyledInputComponent>
  );

  return (
    <StyledWrapper>
      <StyledCard>
        <StyledCardHeader onClick={() => setSelected(TAB.text)}>
          Enter the barcode manually
          {selected === TAB.text && (
            <div className="content">{renderManualInput()}</div>
          )}
        </StyledCardHeader>
        <StyledCardHeader
          className="top-line"
          onClick={() => setSelected(TAB.cam)}
        >
          Scan barcode
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
        Back
      </StyledButton>
    </StyledWrapper>
  );
};

export default BarcodeUploader;
