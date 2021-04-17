import React from 'react';
import BigButton from "../../components/common/BigButton/BigButton";
import Grid from "@material-ui/core/Grid";
import {Typography} from "@material-ui/core";
import BarcodeUploader from "../../components/BarcodeUploader/BarcodeUploader";

const QualificationScreen = () => {
    const [stage, setStage] = React.useState(1);
    return (
        <React.Fragment>
            {
                stage === 1 ?
                <Grid container direction={"column"}>
                    <Grid container item xs={12} justify={"center"} alignItems={"center"}>
                        <Typography variant="h2">
                            W jaki sposób chciałbyś dokonać identyfikacji?
                        </Typography>
                    </Grid>
                    <Grid container direction="row" item>
                        <Grid onClick={()=>{setStage(2)}} item xs={12} md={4} lg={4} xl={4}>
                            <BigButton  title={"Kod kreskowy"}/>
                        </Grid>
                        <Grid onClick={()=>{setStage(3)}} item xs={12} md={4} lg={4} xl={4}>
                            <BigButton  title={"Zrób zdjęcie"}/>
                        </Grid>
                        <Grid onClick={()=>{setStage(4)}} item xs={12} md={4} lg={4} xl={4}>
                            <BigButton  title={"Wpisz ręcznie"}/>
                        </Grid>
                    </Grid>
                </Grid> : stage === 2 ? <BarcodeUploader backButton={setStage}/> :
                    stage === 3 ? <h1>Detekcja zdjęciem</h1> :
                        stage === 4 ? <h1>Detekcja ręczna</h1> : null
            }
        </React.Fragment>
    );
}
export default QualificationScreen;