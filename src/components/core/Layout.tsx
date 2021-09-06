import { makeStyles } from "@material-ui/core/styles";
import NavigationBar from "./NavigationBar";
import JetpackComposeAppFooter from "./JetpackComposeAppFooter";
import React from "react";
import { Helmet } from "react-helmet";
import { Container } from "@material-ui/core";

interface LayoutProps {
  maxWidth: "xs" | "sm" | "md" | "lg" | "xl";
  pageTitle?: string;
  pageDescription?: string;
  pageImageUrl?: string;
  children?: React.ReactNode;
}

export default function Layout(props: LayoutProps) {
  const classes = useStyles();
  return (
    <>
      <Helmet>
        <script
          type="text/javascript"
          src="./newsletter/mailer_lite.js"
        ></script>
        <title>{props.pageTitle}</title>
        <meta name="description" content={props.pageDescription} />
        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:url"
          content="https://JetpackCompose.app/TODO"
        />
        <meta property="twitter:title" content={props.pageTitle} />
        <meta property="twitter:description" content={props.pageDescription} />
        <meta property="twitter:image" content={props.pageDescription} />
      </Helmet>
      <main>
        <div className={classes.root}>
          <NavigationBar />
          <Container
            maxWidth={props.maxWidth}
            className={classes.pageContainer}
          >
            <div
              className="ml-form-embed"
              data-account="3416353:s2x4s4n9s9"
              data-form="4659415:t3j4q1"
            ></div>
            {/* {props.children} */}
          </Container>
          <div className={classes.footer}>
            <JetpackComposeAppFooter />
          </div>
        </div>
      </main>
    </>
  );
}

const useStyles = makeStyles({
  root: {
    position: "relative",
    minHeight: "100vh",
  },
  pageContainer: {
    paddingBottom: "11.5rem",
  },
  footer: {
    marginTop: "2%",
    height: "11.5rem",
    width: "100%",
    bottom: 0,
    position: "absolute",
  },
});
