import React from "react"
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import BarcodeScannerComponent from "react-webcam-barcode-scanner";

const BarcodeUploader = (props) => {
    React.useEffect(() => {

    })
    const [data, setData] = React.useState('Not Found');
    return (
        <Grid container direction={"column"}>
            <Grid item container>
                <BarcodeScannerComponent
                    width={500}
                    height={500}
                    onUpdate={(err, result) => {
                        if (result) setData(result.text)
                        else setData('Not Found')
                    }}
                />
                <p>{data}</p>
            </Grid>
            <Grid item container alignItems={"center"} justify={"center"}>
                <Button variant={"contained"} onClick={() => {
                    props.backButton(1)
                }}>Powrót</Button>
            </Grid>
        </Grid>
    );
}

export default BarcodeUploader;