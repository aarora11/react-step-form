import React, { Component } from "react";
import ThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";

class Success extends Component {
  render() {
    return (
      <ThemeProvider>
        <React.Fragment>
          <AppBar title="Success" />
          <h1>Thank you for your submission</h1>
          <p> You will shortly get an email with further instructions </p>
        </React.Fragment>
      </ThemeProvider>
    );
  }
}
export default Success;
