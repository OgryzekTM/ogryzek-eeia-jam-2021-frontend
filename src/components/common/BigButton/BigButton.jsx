import React from 'react';
import {makeStyles} from "@material-ui/core/styles";
import styles from "./BigButton.styles";
import ButtonBase from "@material-ui/core/ButtonBase";
import {Typography} from "@material-ui/core";

const useStyles = makeStyles(styles);

const BigButton = (props) => {
    const classes = useStyles();

    return (
        <ButtonBase
            focusRipple
            className={classes.image}
            style={{
                width: "99.8%",
            }}
        >
            <span className={classes.backdrop}/>
            <span className={classes.button}>
                <Typography
                    component="span"
                    variant="h2"
                    color="inherit"
                    className={classes.title}
                >
                {props.title}
                </Typography>
          </span>
        </ButtonBase>


    );
}

export default BigButton;
