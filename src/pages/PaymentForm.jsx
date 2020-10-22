import React, { Component } from "react";
import { StateProvider } from "../StateContext";
import { ThemeProvider } from "@material-ui/styles";
import theme from "../constants/theme";
import apiHandler from "../api/apiHandler";
import { UserContext } from "../components/Auth/UserContext";
import { withUser } from "../components/Auth/withUser";

import Header from "../Views/Header";
import Main from "../Views/Main";
import Footer from "../Views/Footer";
import LegalNoticePopup from "../Views/LegalNoticePopups/LegalNoticePopup";

class PaymentForm extends Component {
  static contextType = UserContext;

  componentDidMount = () => {
    let array = this.props.match.params.id.split("&");
    console.log(this.context.user);

    let id = array[0];
    let typeoffunding = array[1];
    let funding = {};
    let adopted = {};

    if (typeoffunding === "sponsoring") {
      funding = {sponsoring : id}
    }
    else if (typeoffunding === "adopted") {
      funding = {adopted : id}
      adopted = {adopted : true}
      apiHandler
        .editAnimal(id, adopted)
        .catch((error) => {
          console.log(error);
        });
    }

    apiHandler
        .editUser(this.context.user._id, funding)
        .catch((error) => {
          console.log(error);
        });
  };

  render() {
    return (
      <ThemeProvider theme={theme}>
        <StateProvider>
          <div style={{ flexGrow: 1 }}>
            <Header title="PAYMENT FORM" />
            <Main />
            <Footer />
          </div>
          <LegalNoticePopup />
        </StateProvider>
      </ThemeProvider>
    );
  }
}

export default withUser(PaymentForm);