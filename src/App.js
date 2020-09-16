import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import Paper from "@material-ui/core/Paper";

import DagpengeKalkulator from "./components/DagpengeKalkulator";

import "./App.css";

const useStyles = makeStyles({
  box: {
    backgroundColor: "#cfe8fc",
    padding: "1rem",
  },
  paper: {
    margin: "2rem",
    padding: "1rem",
  },
});

function App() {
  const classes = useStyles();

  return (
    <>
      <Container maxWidth="md">
        <Box className={classes.box}>
          <Paper
            className={classes.paper}
            elevation={3}
            variant="outlined"
            square
          >
            <DagpengeKalkulator />
          </Paper>
        </Box>
      </Container>
    </>
  );
}

export default App;
