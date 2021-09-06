import { Button, CircularProgress } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import React, { useState, useEffect } from "react";

interface NewsletterRowProps {}

export default function NewsletterRow(props: NewsletterRowProps) {
  const classes = useStyles();

  const [signupSuccessful, setSignupSuccessful] = useState(false);
  const [loading, setLoading] = useState(false);
  return (
    <div className={classes.root}>
      {loading ? (
        <div className={classes.loading}>
          <CircularProgress />
        </div>
      ) : !signupSuccessful ? (
        <>
          <div className={classes.text}>
            Want Jetpack Compose related deep dives, tips/tricks {"&"} goodies
            straight in your inbox? <br />
            Sign up to our newsletter for exclusive content and early access 👇
          </div>
          <form className={classes.form} noValidate autoComplete="off">
            <TextField
              id="name"
              label="First Name"
              className={classes.input}
              variant="filled"
            />
            <TextField
              id="address"
              label="Email Address"
              className={classes.input}
              variant="filled"
            />
            <Button
              variant="contained"
              className={classes.subscribeButton}
              onClick={() => {
                setLoading(true);
                setTimeout(() => {
                  setLoading(false);
                  setSignupSuccessful(true);
                }, 5000);
              }}
            >
              Subscribe
            </Button>
          </form>
          <div className={classes.subText}>
            No spam whatsoever and easy to unsubscribe if you don't like it.
          </div>
        </>
      ) : (
        <>
          <div className={classes.text}>
            🎉 Thank you for joining us on the journey! Keen an eye out for an
            email from us 🎉{" "}
          </div>
        </>
      )}
    </div>
  );
}

const useStyles = makeStyles({
  root: {
    background: "#0F1B35",
    borderRadius: 8,
    padding: 32,
    marginLeft: 32,
    marginRight: 32,
  },
  text: {
    fontFamily: "Nunito Sans",
    fontWeight: 400,
    fontSize: 20,
    color: "#FFFFFF",
    textAlign: "center",
  },
  subText: {
    fontFamily: "Nunito Sans",
    fontWeight: 400,
    fontSize: 14,
    color: "#FFFFFF",
    textAlign: "center",
    marginTop: 16,
  },
  form: {
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    marginTop: 16,
  },
  input: {
    backgroundColor: "#FFFFFF",
    margin: 8,
  },
  subscribeButton: {
    backgroundColor: "#4285f4",
    color: "#FFFFFF",
    padding: 12,
    margin: 8,
    "&:hover": {
      backgroundColor: "#17499c",
    },
  },
  loading: {
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
  },
});
