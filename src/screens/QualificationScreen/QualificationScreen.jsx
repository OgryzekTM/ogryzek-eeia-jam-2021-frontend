import React from 'react';
import BigButton from "../../components/common/BigButton/BigButton";
import Grid from "@material-ui/core/Grid";
import {Typography} from "@material-ui/core";

const QualificationScreen = () => {
    return (
        <React.Fragment>
            <Grid container direction={"column"}>
                <Grid container item xs={12} justify={"center"} alignItems={"center"}>
                    <Typography variant="h2">
                        W jaki sposób chciałbyś dokonać identyfikacji?
                    </Typography>
                </Grid>
                <Grid container direction="row" item>
                    <Grid item xs={12} md={4} lg={4} xl={4}>
                        <BigButton title={"Kod kreskowy"}/>
                    </Grid>
                    <Grid item xs={12} md={4} lg={4} xl={4}>
                        <BigButton title={"Zrób zdjęcie"}/>
                    </Grid>
                    <Grid item xs={12} md={4} lg={4} xl={4}>
                        <BigButton title={"Wpisz ręcznie"}/>
                    </Grid>
                </Grid>
            </Grid>
        </React.Fragment>
    );
}
export default QualificationScreen;