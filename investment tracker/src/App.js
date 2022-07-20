import React from "react";
import { Tab, Tabs, AppBar, Typography } from "@material-ui/core";
import CustomizedTables from "./CustomizedTables";
import Demo from "./Demo.js";
import { createTheme, ThemeProvider, styled } from "@mui/material/styles";
import ApiCrypto from "./ApiCrypto";
import Coin from "./Coin";
const theme = createTheme({
  palette: {
    primary: {
      main: "#52b202"
    },
    secondary: {
      main: "#f44336"
    }
  }
});

function App() {
  const [value, setValue] = React.useState(0);

  const handleTabs = (e, val) => {
    console.warn(val);
    setValue(val);
  };

  return (
    <div style={{ margin: "100px" }}>
      <div id="appbar">
        {" "}
        <AppBar position="static" style={{ backgroundColor: "green" }}>
          <Tabs value={value} onChange={handleTabs}>
            <Tab label="BANK DEPOSITS"></Tab>
            <Tab label="STOCKS"></Tab>
            <Tab label="CRYPTO"> </Tab>
            <Tab label="NPS"> </Tab>
            <Tab label="MUTUAL FUNDS"> </Tab>
          </Tabs>
        </AppBar>
      </div>
      <TabPanel value={value} index={0}>
        <CustomizedTables />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <h3 style={{ textAlign: "center" }}>
          Click the button to get details about Stocks
        </h3>
        <Demo
          mainColor="secondary"
          secondaryColor="primary"
          url="https://www.nseindia.com/"
        />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <ApiCrypto> </ApiCrypto>
      </TabPanel>
      <TabPanel value={value} index={3}>
        <Typography align="justify">
          National Pension System Trust (NPS Trust) is a specialised division of
          Pension Fund Regulatory and Development Authority which is under the
          jurisdiction of Ministry of Finance of the Government of India. The
          National Pension System (NPS) is a voluntary defined contribution
          pension system in India. National Pension System, like PPF and EPF is
          an EEE (Exempt-Exempt-Exempt) instrument in India where the entire
          corpus escapes tax at maturity and entire pension withdrawal amount is{" "}
          <b>
            <i>TAX FREE</i>
          </b>
          .
          <br />
          <br />
          NPS started with the decision of the Government of India to stop
          defined benefit pensions for all its employees who joined after 1
          April 2004. While the scheme was initially designed for government
          employees only, it was opened up for all citizens of India between the
          age of 18 and 65 in 2009, for OCI card holders and PIO's in October
          2019.On 26 August 2021, PFRDA increased the entry age for the National
          Pension System (NPS) from 65 years to 70 years. As per the revised
          norms, any Indian Citizen, resident or non-resident and Overseas
          Citizen of India (OCI) between the age of 65–70 years can join NPS and
          continue or defer their NPS Account up to the age of 75 years. It is
          administered and regulated by the Pension Fund Regulatory and
          Development Authority (PFRDA).
          <br />
          <br />
          <b>Click the button to get details about National Pension Scheme</b>
        </Typography>
        <br />
        <ThemeProvider theme={theme}>
          <Demo
            mainColor="secodary"
            secondaryColor="primary"
            url="https://enps.nsdl.com/eNPS/NationalPensionSystem.html"
          />
        </ThemeProvider>
      </TabPanel>
      <TabPanel value={value} index={4}>
        <Typography align="justify">
          A mutual fund is a company that pools money from many investors and
          invests the money in securities such as stocks, bonds, and short-term
          debt. The combined holdings of the mutual fund are known as its
          portfolio. Investors buy shares in mutual funds. Each share represents
          an investor’s part ownership in the fund and the income it generates.
          <br />
          <br />
          Mutual funds are a popular choice among investors because they
          generally offer the following features:
          <br />
          <br />
          <b>Professional Management</b>. The fund managers do the research for
          you. They select the securities and monitor the performance.
          <br />
          <br />
          <b>Diversification </b>or “Don’t put all your eggs in one basket.”
          Mutual funds typically invest in a range of companies and industries.
          This helps to lower your risk if one company fails.
          <br />
          <br />
          <b>Affordability</b>. Most mutual funds set a relatively low dollar
          amount for initial investment and subsequent purchases.
          <br />
          <br />
          <b>Liquidity</b>. Mutual fund investors can easily redeem their shares
          at any time, for the current net asset value (NAV) plus any redemption
          fees.
        </Typography>
        <br />
        <Demo
          mainColor="secondary"
          secondaryColor="primary"
          url="https://www.mutualfundindia.com/"
        />
      </TabPanel>
    </div>
  );
}

function TabPanel(props) {
  const { children, value, index } = props;
  return <div>{value == index && <h1> {children} </h1>}</div>;
}

export default App;
