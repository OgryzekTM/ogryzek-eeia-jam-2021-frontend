import React, { useState } from "react";
import styled from "styled-components";
import {
  StyledWrapper,
  StyledCard,
  StyledCardHeader,
  StyledInput,
  StyledButton,
  StyledInputComponent,
} from "../styledComponents";

export const ManualSearch = ({ backButton }) => {
  const [data] = useState([
    { name: "test" },
    { name: "test 2" },
    { name: "test 3" },
    { name: "test 4" },
  ]);

  const [filtered, setFiltered] = useState(data);

  const handleFilter = (searchTerm) => {
    setFiltered(data.filter((item) => item.name.includes(searchTerm)));
  };

  return (
    <StyledWrapper>
      <StyledCard>
        <StyledCardHeader>Wyszukaj nazwę</StyledCardHeader>
        <StyledInputComponent>
          <StyledInput
            placeholder="Wyszukaj"
            onChange={(e) => handleFilter(e.target.value)}
          />
        </StyledInputComponent>
        <StyledList>
          {filtered.map((item, index) => (
            <div className="item-list" key={index}>
              {item.name}
            </div>
          ))}
        </StyledList>
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

const StyledList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px 0;

  .item-list {
    width: 90%;
    border-bottom: 1px solid #dcdcdc;

    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 10px;
  }
`;
