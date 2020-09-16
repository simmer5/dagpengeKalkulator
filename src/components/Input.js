import React from "react";
import PropTypes from "prop-types";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  input: {
    margin: "0.5rem",
  },
});

const Input = ({ handelInputChange, error, helperText }) => {
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
      name="intekter"
    />
  );
};
Input.propTypes = {
  //text with year information under input
  helperText: PropTypes.string,
  //function to track changes on input
  handelInputChange: PropTypes.func,
  //sets error UI
  error: PropTypes.bool,
};
export default Input;
