import styled from "styled-components";

export const StyledWrapper = styled.div`
  padding: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const StyledCard = styled.div`
  width: 500px;
  max-width: 90%;

  background-color: white;
  border: 1px solid #dcdcdc;
  border-radius: 8px;

  .top-line {
    border-top: 1px solid #dcdcdc;
  }
`;

export const StyledCardHeader = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  font-weight: 600;
  font-size: 20px;

  .content {
    margin: 30px 10px 0 10px;
  }
`;

export const StyledInputComponent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  video {
    max-width: 100%;
  }
`;

export const StyledInput = styled.input`
  width: 300px;
  max-width: 60%;
  font-size: 18px;
  border: 1px solid #dcdcdc;
  border-radius: 8px;
  padding: 5px 10px;
`;

export const StyledButton = styled.div`
  width: 100px;
  background: ${({ background }) => (background ? background : "#5083f9")};
  font-size: 18px;
  border-radius: 8px;
  color: white;

  margin: 15px;
  padding: 8px 14px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;
