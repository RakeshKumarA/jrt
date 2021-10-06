import { Grid, Typography } from "@material-ui/core";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import EcoRoundedIcon from "@material-ui/icons/EcoRounded";
import LocalFloristRoundedIcon from "@material-ui/icons/LocalFloristRounded";
import LocalShippingRoundedIcon from "@material-ui/icons/LocalShippingRounded";

const useStyles = makeStyles({
  root: {
    minHeight: "100vh",
    padding: 20,
  },
});

const ServicesSection = () => {
  const classes = useStyles();
  return (
    <div style={{ padding: 20 }}>
      <Grid
        container
        justify="center"
        alignItems="center"
        className={classes.root}
        direction="column"
        spacing={4}
      >
        <Grid item sm={8}>
          <Typography
            variant="h3"
            color="primary"
            style={{ fontWeight: 600 }}
            align="center"
          >
            Offerings
          </Typography>
        </Grid>

        <Grid item container xs={12} lg={8} spacing={4}>
          <Grid
            item
            xs={12}
            lg={4}
            container
            alignItems="center"
            direction="column"
            spacing={1}
          >
            <Grid item>
              <EcoRoundedIcon fontSize="large" color="primary" />
            </Grid>
            <Grid item>
              <Typography
                variant="h6"
                color="secondary"
                align="center"
                style={{ fontWeight: 700 }}
              >
                Old Age Home
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="subtitle1" color="secondary" align="center">
                We are committed to extend much needed love and happiness to the
                elders despite their age. We conduct psychological programs and
                workshops for the sick and unhealthy people to understand them
                life is always beautiful
              </Typography>
            </Grid>
          </Grid>
          <Grid
            item
            xs={12}
            sm={4}
            container
            alignItems="center"
            direction="column"
            spacing={1}
          >
            <Grid item>
              <LocalFloristRoundedIcon fontSize="large" color="primary" />
            </Grid>
            <Grid item>
              <Typography
                variant="h6"
                color="secondary"
                align="center"
                style={{ fontWeight: 700 }}
              >
                Orphanage
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="subtitle1" color="secondary" align="center">
                We take care of the all-round development of financially
                unstable and displaced children. We also focus on mental and
                psychological wellbeing of each and every child that has been
                placed under the care.
              </Typography>
            </Grid>
          </Grid>
          <Grid
            item
            xs={12}
            sm={4}
            container
            alignItems="center"
            direction="column"
            spacing={1}
          >
            <Grid item>
              <LocalShippingRoundedIcon fontSize="large" color="primary" />
            </Grid>
            <Grid item>
              <Typography
                variant="h6"
                color="secondary"
                align="center"
                style={{ fontWeight: 700 }}
              >
                Fund Raising
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="subtitle1" color="secondary" align="center">
                This is required for running and managing the programs. Mostly
                comes from donations and membership fees. We also raise funds
                from state government for betterment of Old age and orphan kids
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default ServicesSection;
