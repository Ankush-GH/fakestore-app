import {
  Card,
  CardContent,
  TextField,
  Typography,
  Grid,
  Button,
} from "@material-ui/core";
import React from "react";

const Form = () => {
  return (
    <Card
      style={{
        maxWidth: "450px",
        margin: "0 2rem",
        padding: "2rem 1rem",
        boxShadow:
          " rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
      }}
    >
      <CardContent>
        <Typography gutterBottom variant="h4" style={{ fontSize: "large" }}>
          Complaints
        </Typography>
        <form>
          <Grid container spacing={1}>
            <Grid xs={12} sm={6} item>
              <TextField
                label="First Name"
                placeholder="Enter Your First Name"
                variant="outlined"
                fullWidth
                required
              ></TextField>
            </Grid>
            <Grid xs={12} sm={6} item>
              <TextField
                label="Last Name"
                placeholder="Enter Your Last Name"
                variant="outlined"
                fullWidth
                required
              ></TextField>
            </Grid>
            <Grid xs={12} item>
              <TextField
                type="email"
                label="Email"
                placeholder="Enter Email Name"
                variant="outlined"
                fullWidth
                required
              ></TextField>
            </Grid>
            <Grid xs={12} item>
              <TextField
                type="number"
                label="Phone"
                placeholder="Enter Phone Number"
                variant="outlined"
                fullWidth
                required
              ></TextField>
            </Grid>
            <Grid xs={12} item>
              <TextField
                label="Message"
                multiline
                rows={4}
                placeholder="Enter Message"
                variant="outlined"
                fullWidth
                required
              ></TextField>
            </Grid>
            <Grid xs={12} item>
              <Button
                variant="contained"
                type="submit"
                fullWidth
                color="primary"
              >
                Submit
              </Button>
            </Grid>
          </Grid>
        </form>
        <Typography
          variant="h6"
          style={{ marginTop: "1rem", fontSize: "small" }}
        >
          Fill up the form and our team will get back to you within 24 hours
        </Typography>
      </CardContent>
    </Card>
  );
};

export default Form;
