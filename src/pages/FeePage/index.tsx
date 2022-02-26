import * as React from "react";

import { useEffect, useState } from "react";

import { Navbar } from "../../components/Navbar";
import { Tabbar } from "../../components/Tabbar";
import axios from "axios";
import { useStyles } from "./styles";

export const FeePage = () => {
  const apiUrl = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false`;

  const classes = useStyles();
  const [coins, setCoins] = useState();

  const getData = async () => {
    try {
      const response = await axios.get(apiUrl);
      setCoins(response.data);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  });

  return (
    <>
      <Navbar />
      <div style={{ alignItems: "center", justifyContent: "center" }}>
        <Tabbar />
      </div>
    </>
  );
};
