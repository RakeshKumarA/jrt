import { Grid } from "@material-ui/core";
import Image from "next/image";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    minHeight: "100vh",
  },
});

const PageNotFound = () => {
  const classes = useStyles();
  return (
    <Grid
      container
      justify="center"
      alignItems="center"
      className={classes.root}
    >
      <Grid item>
        <Image src="/pagenotfound.svg" width="400" height="275" />
      </Grid>
    </Grid>
  );
};

export default PageNotFound;
