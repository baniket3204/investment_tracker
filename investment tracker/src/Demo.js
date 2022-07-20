import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ArrowForwardIosRoundedIcon from "@material-ui/icons/ArrowForwardIos";
import { ArrowBack, ArrowForwardRounded } from "@material-ui/icons";
import { createTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import green from "@material-ui/core/colors/green";
import { purple } from "@material-ui/core/colors";

const useStyles = makeStyles({
  buttonClass: {
    fontSize: "15px",
    fontFamily: "sohne_var",
    lineHeight: "24px",
    textTransform: "None",
    letterSpacing: "0.2px",
    wordSpacing: "0px",
    padding: "2px 10px 4px 14px",
    fontWeight: "bold",
    fontStyle: "None"
  }
});

function Demo(props) {
  const theme = { ThemeProvider };

  const [icon, setIcon] = useState(true);

  const [color, setColor] = useState(props.mainColor);

  const classes = useStyles();
  return (
    <>
      <Button
        href={props.url}
        size="large"
        variant="contained"
        color={color}
        style={{ borderRadius: "30px" }}
        endIcon={
          icon ? (
            <ArrowForwardIosRoundedIcon fontSize="small" />
          ) : (
            <ArrowForwardRounded />
          )
        }
        onMouseOver={() => {
          setIcon(false);
          setColor(props.secondaryColor);
        }}
        onMouseOut={() => {
          setIcon(true);
          setColor(props.mainColor);
        }}
      >
        <Typography className={classes.buttonClass}>Click Here</Typography>
      </Button>
    </>
  );
}

export default Demo;
