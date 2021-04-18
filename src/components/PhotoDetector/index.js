import React, { useState } from "react";
import styled from "styled-components";
import noImage from "../../assets/pictures/noimage.png";
import {
  StyledWrapper,
  StyledCard,
  StyledCardHeader,
  StyledInput,
  StyledButton,
  StyledInputComponent,
} from "../styledComponents";

export const PhotoDetector = ({ backButton }) => {
  const [image, setImage] = useState(null);

  const handleChange = (event) => {
    if (event.target.files.length > 0) {
      const file = URL.createObjectURL(event.target.files[0]);
      setImage(file);
    }
  };

  return (
    <>
      <StyledWrapper>
        <StyledCard>
          <StyledCardHeader>Rozpoznawanie obrazów</StyledCardHeader>
          <StyledInputComponent>
            {image ? (
              <StyledImage src={image} alt="user img" />
            ) : (
              <StyledEmptyImage>
                <img src={noImage} alt="no image" />
              </StyledEmptyImage>
            )}
            <StyledInput type="file" onChange={handleChange} />
            <StyledButton>Wyślij</StyledButton>
          </StyledInputComponent>
        </StyledCard>
        <StyledButton
          background="#C6C6C6"
          onClick={() => {
            backButton(1);
          }}
        >
          Wróć
        </StyledButton>
      </StyledWrapper>
    </>
  );
};

const StyledEmptyImage = styled.div`
  margin: 20px 10px;
  background-color: #aaaaaa;
  width: 300px;
  height: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
`;

const StyledImage = styled.img`
  margin: 20px 10px;
  width: 300px;
  height: 300px;
`;
