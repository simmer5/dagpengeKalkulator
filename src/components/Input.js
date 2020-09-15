import React from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  input: {
    margin: "0.5rem",
  },
});

const Input = ({ handelInputChange, handelClick, error, helperText }) => {
  const classes = useStyles();
  return (
    <TextField
      inputProps={{
        "data-testid": "input",
      }}
      variant="outlined"
      helperText={helperText}
      className={classes.input}
      error={error}
      onChange={handelInputChange}
      onClick={handelClick}
      name="intekter"
    />
  );
};

export default Input;
