import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";
import apiKeys from "../../apiKeys";
import { useHistory } from "react-router-dom";
import {
  StyledWrapper,
  StyledCard,
  StyledCardHeader,
  StyledInput,
  StyledButton,
  StyledInputComponent,
} from "../styledComponents";

export const ManualSearch = ({ backButton }) => {
  const [filtered, setFiltered] = useState({});
  const history = useHistory();
  const handleSearch = () => {
    axios
      .get(`${apiKeys.backendURL}waste_category/barcode/?name=${filtered}`)
      .then(function (response) {
        // handle success
        console.log(response);
        const newres = { ...response.data, product: filtered };
        history.push("/results", newres);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        // always executed
      });
  };
  return (
    <StyledWrapper>
      <StyledCard>
        <StyledCardHeader>Wyszukaj nazwę</StyledCardHeader>
        <StyledInputComponent>
          <StyledInput
            placeholder="Wyszukaj"
            onChange={(e) => setFiltered(e.target.value)}
          />
        </StyledInputComponent>
        <StyledButtonWrapper>
          <StyledButton
            onClick={() => {
              console.log(filtered);
              handleSearch();
            }}
          >
            Search
          </StyledButton>
        </StyledButtonWrapper>
      </StyledCard>

      <StyledButton
        background="#C6C6C6"
        onClick={() => {
          backButton(1);
        }}
      >
        Back
      </StyledButton>
    </StyledWrapper>
  );
};

const StyledButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
