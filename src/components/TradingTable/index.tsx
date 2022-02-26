import * as React from "react";

import { DataGrid, GridColDef, GridRowsProp } from "@mui/x-data-grid";

import { Search } from "../Search";
import { useState } from "react";
import { useStyles } from "./styles";

const columns: GridColDef[] = [
  { field: "id", hide: true, flex: 1 },
  { field: "market", headerName: "MARKET", flex: 1 },
  { field: "minimumOrderSize", headerName: "MINIMUM ORDER SIZE", flex: 1 },
  { field: "makerFee", headerName: "MAKER FEE", flex: 1 },
  { field: "takerFee", headerName: "TAKER FEE", flex: 1 },
  { field: "status", headerName: "STATUS", flex: 1 },
];

const originalRows: GridRowsProp = [
  {
    id: 1,
    market: "BTC/USDT",
    minimumOrderSize: "0.00005",
    makerFee: "0.125%",
    takerFee: "0.125%",
    status: "Enabled",
  },
  {
    id: 2,
    market: "BTC/INR",
    minimumOrderSize: "0.00005",
    makerFee: "0.125%",
    takerFee: "0.125%",
    status: "Enabled",
  },
  {
    id: 3,
    market: "ETH/USDT",
    minimumOrderSize: "0.001",
    makerFee: "0.125%",
    takerFee: "0.125%",
    status: "Enabled",
  },
  {
    id: 4,
    market: "ETH/INR",
    minimumOrderSize: "0.001",
    makerFee: "0.125%",
    takerFee: "0.125%",
    status: "Enabled",
  },
  {
    id: 5,
    market: "ETH/BTC",
    minimumOrderSize: "0.001",
    makerFee: "0.125%",
    takerFee: "0.125%",
    status: "Enabled",
  },
  {
    id: 6,
    market: "LTC/USDT",
    minimumOrderSize: "0.01",
    makerFee: "0.125%",
    takerFee: "0.125%",
    status: "Enabled",
  },
  {
    id: 7,
    market: "USDT/INR",
    minimumOrderSize: "1.5",
    makerFee: "0.125%",
    takerFee: "0.125%",
    status: "Enabled",
  },
  {
    id: 8,
    market: "LTC/INR",
    minimumOrderSize: "0.01",
    makerFee: "0.125%",
    takerFee: "0.125%",
    status: "Enabled",
  },
  {
    id: 9,
    market: "SHIB/INR",
    minimumOrderSize: "50000",
    makerFee: "0.125%",
    takerFee: "0.125%",
    status: "Enabled",
  },
  {
    id: 10,
    market: "SHIB/USDT",
    minimumOrderSize: "50000",
    makerFee: "0.125%",
    takerFee: "0.125%",
    status: "Enabled",
  },

  {
    id: 11,
    market: "DOGE/INR",
    minimumOrderSize: "10",
    makerFee: "0.125%",
    takerFee: "0.125%",
    status: "Enabled",
  },
  {
    id: 12,
    market: "DOGE/USDT",
    minimumOrderSize: "10",
    makerFee: "0.125%",
    takerFee: "0.125%",
    status: "Enabled",
  },
  {
    id: 13,
    market: "SOL/INR",
    minimumOrderSize: "0.015",
    makerFee: "0.125%",
    takerFee: "0.125%",
    status: "Enabled",
  },
  {
    id: 14,
    market: "SOL/USDT",
    minimumOrderSize: "0.015",
    makerFee: "0.125%",
    takerFee: "0.125%",
    status: "Enabled",
  },
  {
    id: 15,
    market: "ADA/INR",
    minimumOrderSize: "1",
    makerFee: "0.125%",
    takerFee: "0.125%",
    status: "Enabled",
  },
  {
    id: 16,
    market: "ADA/USDT",
    minimumOrderSize: "1",
    makerFee: "0.125%",
    takerFee: "0.125%",
    status: "Enabled",
  },
  {
    id: 17,
    market: "LTC/BTC",
    minimumOrderSize: "10",
    makerFee: "0.125%",
    takerFee: "0.125%",
    status: "Enabled",
  },
  {
    id: 18,
    market: "ADA/BTC",
    minimumOrderSize: "0.01",
    makerFee: "0.125%",
    takerFee: "0.125%",
    status: "Enabled",
  },
  {
    id: 19,
    market: "XRP/INR",
    minimumOrderSize: "2",
    makerFee: "0.125%",
    takerFee: "0.125%",
    status: "Enabled",
  },
  {
    id: 20,
    market: "XRP/USDT",
    minimumOrderSize: "4",
    makerFee: "0.125%",
    takerFee: "0.125%",
    status: "Enabled",
  },
  {
    id: 21,
    market: "XRP/BTC",
    minimumOrderSize: "8",
    makerFee: "0.125%",
    takerFee: "0.125%",
    status: "Enabled",
  },
  {
    id: 22,
    market: "XRP/USDT",
    minimumOrderSize: "0.00005",
    makerFee: "0.125%",
    takerFee: "0.125%",
    status: "Enabled",
  },
];

export const TradingTable = () => {
  const classes = useStyles();
  const [rows, setRows] = useState(originalRows);
  const [filterdRows, setFilteredRows] = useState(originalRows);
  const [searched, setSearched] = useState<any>("");

  React.useEffect(() => {
    setFilteredRows(filterdRows);
  }, [filterdRows]);

  const handleSearch = (event: any) => {
    const searchWord = event.target.value;
    console.log(searchWord);

    const searchResult = rows.filter((row: any) => {
      return row.market.toLowerCase().includes(searchWord.toLowerCase());
    });
    setSearched(searchWord);

    setRows(searchResult);
  };

  return (
    <>
      <div className={classes.search}>
        <Search handleChange={handleSearch} searchItem={searched}></Search>
      </div>
      <div
        style={{
          display: "table",
          tableLayout: "fixed",
          height: 1000,
          width: "50%",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <DataGrid
          rows={rows}
          columns={columns}
          hideFooterPagination={true}
          autoHeight={true}
        />
      </div>
    </>
  );
};
