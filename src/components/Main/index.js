import React, { useState } from "react";
import { Box, Grid, Typography, Tabs, Tab, Divider } from "@mui/material";
import PropTypes from "prop-types";
import PersonalInfo from "../Personal Info";
import BillingInfo from "../Billing Info";
import ConfirmPayment from "../Confirm Payment";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 0 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

function Main() {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Box>
      <Grid
        container
        display="flex"
        alignItems="center"
        justifyContent="center"
        flexDirection="column"
        pt={8}
      >
        <Grid item>
          <Typography
            variant="h5"
            color="#4E598C"
            //sx={{ fontSize: "36px", lineHeight: "50px", color: "#4E598C" }}
          >
            Complete your Purchase
          </Typography>
        </Grid>
        <Grid item>
          <Box sx={{ width: "100%", pt: 5 }}>
            <Tabs
              value={value}
              onChange={handleChange}
              textColor="secondary"
              indicatorColor="secondary"
              aria-label="secondary tabs example"
            >
              <Tab label="Personal Info" sx={{ pr: 6 }} {...a11yProps(0)} />
              <Tab label="Billing Info" sx={{ pr: 6 }} {...a11yProps(1)} />
              <Tab label="Confirm Payment" sx={{ pr: 6 }} {...a11yProps(2)} />
            </Tabs>
            <Divider />
            <TabPanel value={value} index={0}>
              <PersonalInfo />
            </TabPanel>
            <TabPanel value={value} index={1}>
              <BillingInfo />
            </TabPanel>
            <TabPanel value={value} index={2}>
              <ConfirmPayment />
            </TabPanel>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Main;
