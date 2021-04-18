import React from 'react';
import {
   StyledWrapper,
   StyledCard,
   StyledCardHeader,
   StyledInput,
   StyledButton,
   StyledInputComponent,
 } from "./styledComponents";
//eeia-jam-2021-ogryzek-api.herokuapp.com/waste_category/barcode/?code=5900014003019
const SimpleDetector = (props) => {

   return (
      <StyledWrapper>
        <StyledCard>
        Simple detector
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
  
  export default SimpleDetector;