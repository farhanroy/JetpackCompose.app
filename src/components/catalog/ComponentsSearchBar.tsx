import Autocomplete from "@material-ui/lab/Autocomplete";
import {
  createMuiTheme,
  makeStyles,
  ThemeProvider,
} from "@material-ui/core/styles";
import { RouteComponentProps } from "@reach/router";
import React from "react";
import TextField from "@material-ui/core/TextField";

interface ComponentsSearchBarProps {
  onChangeHandler: (value: string[]) => void;
  componentCategories: string[];
  searchQuery: string[];
}

export default function ComponentsSearchBar(props: ComponentsSearchBarProps) {
  const theme = createMuiTheme({
    palette: {
      primary: {
        main: "#33691e",
      },
    },
  });
  return (
    <>
      <ThemeProvider theme={theme}>
        <Autocomplete
          multiple
          id="tags-outlined"
          options={props.componentCategories}
          getOptionLabel={(option) => option}
          value={props.searchQuery}
          onChange={(event, value, reason, details) => {
            let valueArray = value.map((elem) => elem);
            console.log("onChange " + valueArray);
            props.onChangeHandler(valueArray);
          }}
          renderInput={(params) => (
            <TextField
              {...params}
              variant="outlined"
              label="Filter Categories"
              placeholder="Example: Animation"
            />
          )}
        />
      </ThemeProvider>
    </>
  );
}
