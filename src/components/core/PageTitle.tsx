import { makeStyles } from "@material-ui/core/styles";
import React from "react";

interface PageTitleProps {
  header: string;
  subheader: string;
}

export default function PageTitle(props: PageTitleProps) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.title}>{props.header}</div>
      <div className={classes.subtitle}>{props.subheader}</div>
    </div>
  );
}

const useStyles = makeStyles({
  root: {
    marginTop: "64px",
    marginBottom: "96px",
    textAlign: "center",
  },
  title: {
    fontSize: "48px",
    fontWeight: "bold",
    fontFamily: "Nunito Sans",
    color: "#222",
  },
  subtitle: {
    fontSize: "20px",
    fontWeight: 100,
    fontFamily: "Nunito Sans",
    color: "#222",
  },
});
