import React, { useState } from "react";
import Box from "@material-ui/core/Box";

import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

import { makeStyles } from "@material-ui/core/styles";

import Input from "./Input";
import SnackBar from "./SnackBar";
import InfoPaper from "./InfoPaper";

import { validator } from "../utils/dgKalkulator";

const useStyles = makeStyles({
  form: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  inputs: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    width: "100%",
    padding: "1rem",
    margin: "1rem",
    flexWrap: "wrap",
  },
  input: {
    margin: "0.5rem",
  },
  btns: {
    alignSelf: "flex-end",
    margin: "1rem",
  },
});

const DagpengeKalkulator = () => {
  const classes = useStyles();

  const [intekter, setIntekter] = useState([0, 0, 0]);
  const [open, setOpen] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const [showInfo, setShowInfo] = useState(false);
  const [infoMessage, setInfoMessage] = useState("");
  const [grun, setGrun] = useState(101351);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  const handelFormSubmit = (e) => {
    e.preventDefault();

    const dagPenger = validator(intekter, grun, (dagpengerGrunlag) => {
      const dagpenger = Math.round(dagpengerGrunlag / 260);

      return dagpenger;
    });

    setInfoMessage(
      dagPenger !== null
        ? `Du har rett til dagpenger. Beregnet dagpenger - ${dagPenger}`
        : "Du har ikke rett til dagpenger. Gjerne kontakt NAV."
    );
    setShowInfo(true);
  };

  const onInputChange = (id, value) => {
    const onlyNum = /^[0-9]+$/;
    if (!value.match(onlyNum)) {
      setOpen(true);
      setDisabled(true);
    } else {
      setDisabled(false);
    }
    setIntekter((intekter) => {
      const int = intekter.map((item, j) => {
        if (id === j) {
          return value;
        } else {
          return item;
        }
      });
      return int;
    });
    return value.length === 0 ? setOpen(false) || setDisabled(false) : null;
  };

  return (
    <>
      <Typography variant="h6">Dagpengekalkulator</Typography>
      <form
        className={classes.form}
        onSubmit={handelFormSubmit}
        noValidate
        autoComplete="off"
        data-testid="form"
      >
        <Box className={classes.inputs}>
          <Input
            value={intekter[0]}
            helperText={`Intekter ${new Date().getFullYear() - 3}`}
            handelInputChange={(e) =>
              onInputChange(0, e.target.value, e.target)
            }
          />
          <Input
            value={intekter[1]}
            helperText={`Intekter ${new Date().getFullYear() - 2}`}
            handelInputChange={(e) => onInputChange(1, e.target.value)}
          />
          <Input
            value={intekter[2]}
            helperText={`Intekter ${new Date().getFullYear() - 1}`}
            handelInputChange={(e) => onInputChange(2, e.target.value)}
          />
        </Box>

        <Box className={classes.btns}>
          <Button
            data-testid="submit"
            type="reset"
            variant="contained"
            color="default"
            style={{ margin: "0.5rem" }}
            onClick={() => {
              setIntekter([0, 0, 0]);
              setShowInfo(false);
              setInfoMessage("");
            }}
          >
            Nullstill
          </Button>
          <Button
            data-testid="reset"
            disabled={disabled}
            type="submit"
            variant="contained"
            color="primary"
            style={{ margin: "0.5rem" }}
          >
            Kalkulere
          </Button>
        </Box>
      </form>

      {showInfo && (
        <InfoPaper data-testid="message" infoMessage={infoMessage} />
      )}
      <SnackBar open={open} handleClose={handleClose} />
    </>
  );
};

export default DagpengeKalkulator;
