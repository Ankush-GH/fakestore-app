import React from "react";
import {
  Card,
  CardContent,
  TextField,
  Typography,
  Grid,
  Button,
} from "@material-ui/core";

const LoginForm = () => {
  const submitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <Card
      style={{
        maxWidth: "550px",
        margin: "4rem auto",
        padding: "2rem 1rem",
        boxShadow:
          " rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
      }}
    >
      <CardContent>
        <Typography
          gutterBottom
          variant="h4"
          style={{ fontFamily: "var(--font-head)" }}
        >
          LogIn
        </Typography>
        <form onSubmit={submitHandler}>
          <Grid container spacing={2}>
            <Grid xs={12} sm={12} item>
              <TextField
                aria-required
                fullWidth
                label="Username"
                placeholder="Enter Your Username"
                variant="outlined"
                required
              ></TextField>
            </Grid>
            <Grid xs={12} sm={12} item>
              <TextField
                fullWidth
                aria-required
                label="Password"
                placeholder="Enter Your Password"
                variant="outlined"
                required
              ></TextField>
            </Grid>
            <Grid xs={12} sm={12} item>
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
      </CardContent>
    </Card>
  );
};

export default LoginForm;
