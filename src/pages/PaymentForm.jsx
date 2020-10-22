import React from 'react';
import { StateProvider } from '../StateContext';
import { ThemeProvider } from '@material-ui/styles';
import theme from '../constants/theme';

import Header from "../Views/Header";
import Main from "../Views/Main"
import Footer from "../Views/Footer";
import LegalNoticePopup from "../Views/LegalNoticePopups/LegalNoticePopup";

const PaymentForm = () => 
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

export default PaymentForm;