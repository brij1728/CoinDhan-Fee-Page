import * as React from "react";

import { Box, Grid, Tab, Tabs, Typography } from "@mui/material";

import { DepositWithdrawalTable } from "../DepositWithdrawalTable";
import { TradingTable } from "../TradingTable";
import { useStyles } from "./styles";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
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
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export const Tabbar = () => {
  const [value, setValue] = React.useState(0);
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  const classes = useStyles();
  return (
    <>
      <Grid
        container
        direction="column"
        alignItems="center"
        justifyContent="center"
      >
        {/* <Box
          sx={{ width: "100", alignItems: "center", justifyContent: "center" }}
        > */}
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
          >
            <Tab label="Trading Fees" {...a11yProps(0)} />
            <Tab label="Deposit & Withdrawal" {...a11yProps(1)} />
          </Tabs>
        </Box>
        <Box className={classes.root}>
          <TabPanel value={value} index={0}>
            <TradingTable />
          </TabPanel>
          <TabPanel value={value} index={1}>
            <DepositWithdrawalTable />
          </TabPanel>
        </Box>
        {/* </Box> */}
      </Grid>
    </>
  );
};
