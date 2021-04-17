import React from "react";
import BigButton from "../../components/common/BigButton/BigButton";
import Grid from "@material-ui/core/Grid";
import BarcodeUploader from "../../components/BarcodeUploader/BarcodeUploader";
import { PhotoDetector } from "../../components/PhotoDetector/index";
import styled from "styled-components";

const QualificationScreen = () => {
  const [stage, setStage] = React.useState(1);
  return (
    <React.Fragment>
      {stage === 1 ? (
        <Grid container direction={"column"}>
          <Grid container item xs={12} justify={"center"} alignItems={"center"}>
            <StyledTitle>
              How would you like to identify your rubbish?
            </StyledTitle>
          </Grid>
          <Grid container direction="row" item>
            <Grid
              onClick={() => {
                setStage(2);
              }}
              item
              xs={12}
              md={4}
              lg={4}
              xl={4}
            >
              <BigButton title={"Kod kreskowy"} />
            </Grid>
            <Grid
              onClick={() => {
                setStage(3);
              }}
              item
              xs={12}
              md={4}
              lg={4}
              xl={4}
            >
              <BigButton title={"Zrób zdjęcie"} />
            </Grid>
            <Grid
              onClick={() => {
                setStage(4);
              }}
              item
              xs={12}
              md={4}
              lg={4}
              xl={4}
            >
              <BigButton title={"Wpisz ręcznie"} />
            </Grid>
          </Grid>
        </Grid>
      ) : stage === 2 ? (
        <BarcodeUploader backButton={setStage} />
      ) : stage === 3 ? (
        <PhotoDetector backButton={setStage} />
      ) : stage === 4 ? (
        <h1>Detekcja ręczna</h1>
      ) : null}
    </React.Fragment>
  );
};
export default QualificationScreen;

const StyledTitle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  font-size: 24px;
  font-weight: 600;
  padding: 30px;
`;
