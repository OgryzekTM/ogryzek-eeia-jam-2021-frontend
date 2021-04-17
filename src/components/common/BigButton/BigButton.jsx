import React from "react";
import styled from "styled-components";

const BigButton = ({ title }) => {
  return (
    <Wrapper>
      <StyledBigButton>{title}</StyledBigButton>
    </Wrapper>
  );
};

export default BigButton;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px 10px;
`;

const StyledBigButton = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 500px;
  max-width: 90%;
  height: 500px;

  background-color: #d1d0d0;
  border-radius: 4px;
  box-shadow: 0 10px 20px -10px rgba(0, 0, 0, 0.5);

  :hover {
    border: 3px solid #d1d0d0;
  }
`;
