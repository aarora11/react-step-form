import React, { Component } from "react";
import ThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";
import RaisedButton from "material-ui/RaisedButton";
import { List, ListItem } from "material-ui/List";

class Confirm extends Component {
  continue = e => {
    e.preventDefault();
    // send data to the backend....
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };
  render() {
    const {
      values: { firstName, lastName, email, occupation, city, bio }
    } = this.props;
    return (
      <ThemeProvider>
        <React.Fragment>
          <AppBar title="Confirm Details" />
          <List>
            <ListItem primaryText="First Name" secondaryText={firstName} />
            <ListItem primaryText="Last Name" secondaryText={firstName} />
            <ListItem primaryText=" Email" secondaryText={email} />
            <ListItem primaryText="Occupation" secondaryText={occupation} />
            <ListItem primaryText="City" secondaryText={city} />
            <ListItem primaryText="Bio" secondaryText={bio} />
            <br />
            <RaisedButton
              label="Confirm and Continue"
              primary={true}
              style={styles.button}
              onClick={this.continue}
            />
            <RaisedButton
              label="Back"
              primary={false}
              style={styles.button}
              onClick={this.back}
            />
          </List>
        </React.Fragment>
      </ThemeProvider>
    );
  }
}
const styles = {
  button: {
    margin: 15
  }
};
export default Confirm;
