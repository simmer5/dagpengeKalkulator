import React from "react";
import Box from "@material-ui/core/Box";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  paper: {
    margin: "0.5rem",
    padding: "0.5rem",
  },
});

const InfoPaper = ({ infoMessage }) => {
  const classes = useStyles();
  return (
    <Box data-testid="output">
      <Paper
        data-testid="message"
        className={classes.paper}
        elevation={3}
        variant="outlined"
        square
      >
        <Typography>{infoMessage}</Typography>
      </Paper>
    </Box>
  );
};

export default InfoPaper;
