import * as React from "react";

import { DataGrid, GridColDef, GridRowsProp } from "@mui/x-data-grid";

import { Search } from "../Search";
import { useState } from "react";
import { useStyles } from "./styles";

const columns: GridColDef[] = [
  { field: "id", hide: true, flex: 1 },
  { field: "name", headerName: "NAME", flex: 1 },
  { field: "withdrawFee", headerName: "WITHDRAW FEE", flex: 1 },
  { field: "minDepositAmount", headerName: "MIN DEPOSIT AMOUNT", flex: 1 },
  { field: "minWithdrawAmount", headerName: "MIN WITHDRAW AMOUNT", flex: 1 },
  { field: "confirmations", headerName: "CONFIRMATIONS", flex: 1 },
];

const originalRows: GridRowsProp = [
  {
    id: 1,
    name: "Indian Rupee ( INR )",
    withdrawFee: "10.0",
    minDepositAmount: "100.0",
    minWithdrawAmount: "100.0",
    confirmations: "-",
  },
  {
    id: 2,
    name: "Tether ( USDT )",
    withdrawFee: "20.0",
    minDepositAmount: "1.0",
    minWithdrawAmount: "22.0",
    confirmations: "6",
  },
  {
    id: 3,
    name: "Bitcoin ( BTC )",
    withdrawFee: "0.0005",
    minDepositAmount: "0.0002",
    minWithdrawAmount: "0.0006",
    confirmations: "3",
  },
  {
    id: 4,
    name: "Ethereum ( ETH )",
    withdrawFee: "0.001",
    minDepositAmount: "0.002",
    minWithdrawAmount: "0.002",
    confirmations: "6",
  },
  {
    id: 5,
    name: "Binance coin ( BNB )",
    withdrawFee: "0.01",
    minDepositAmount: "0.02",
    minWithdrawAmount: "0.02",
    confirmations: "12",
  },
  {
    id: 6,
    name: "Litecoin ( LTC )",
    withdrawFee: "0.05",
    minDepositAmount: "0.001",
    minWithdrawAmount: "0.06",
    confirmations: "12",
  },
  {
    id: 7,
    name: "Solana ( SOL )",
    withdrawFee: "0.0",
    minDepositAmount: "0.0",
    minWithdrawAmount: "0.0",
    confirmations: "1",
  },
  {
    id: 8,
    name: "Shiba Inu ( SHIB )",
    withdrawFee: "0.0",
    minDepositAmount: "0.0",
    minWithdrawAmount: "0.0",
    confirmations: "1",
  },
  {
    id: 9,
    name: "Dogecoin ( DOGE )",
    withdrawFee: "0.0",
    minDepositAmount: "0.0",
    minWithdrawAmount: "0.0",
    confirmations: "1",
  },
  {
    id: 10,
    name: "Cardano ( ADA )",
    withdrawFee: "0.0",
    minDepositAmount: "0.0",
    minWithdrawAmount: "0.0",
    confirmations: "1",
  },
  {
    id: 11,
    name: "BitcoinCash ( BCH )",
    withdrawFee: "0.0001",
    minDepositAmount: "0.0001",
    minWithdrawAmount: "0.0001",
    confirmations: "3",
  },
  {
    id: 12,
    name: "Ripple ( XRP )",
    withdrawFee: "0.0",
    minDepositAmount: "0.0",
    minWithdrawAmount: "0.0",
    confirmations: "1",
  },
  {
    id: 13,
    name: "Indian Rupee ( INR )",
    withdrawFee: "0.0",
    minDepositAmount: "0.0",
    minWithdrawAmount: "0.0",
    confirmations: "1",
  },
  {
    id: 14,
    name: "Tron ( TRX )",
    withdrawFee: "0.0",
    minDepositAmount: "0.0",
    minWithdrawAmount: "0.0",
    confirmations: "1",
  },
  {
    id: 15,
    name: "Polkadot ( DOT )",
    withdrawFee: "0.0",
    minDepositAmount: "0.0",
    minWithdrawAmount: "0.0",
    confirmations: "1",
  },
  {
    id: 16,
    name: "Terra ( LUNA )",
    withdrawFee: "0.0",
    minDepositAmount: "0.0",
    minWithdrawAmount: "0.0",
    confirmations: "1",
  },
  {
    id: 17,
    name: "Steller ( XLM )",
    withdrawFee: "0.0",
    minDepositAmount: "0.0",
    minWithdrawAmount: "0.0",
    confirmations: "1",
  },
  {
    id: 18,
    name: "Binance USD ( BUSD )",
    withdrawFee: "0.0",
    minDepositAmount: "0.0",
    minWithdrawAmount: "0.0",
    confirmations: "1",
  },
  {
    id: 19,
    name: "Avalanche ( AVAX )",
    withdrawFee: "0.0",
    minDepositAmount: "0.0",
    minWithdrawAmount: "0.0",
    confirmations: "1",
  },
  {
    id: 20,
    name: "Uniswap (ERC20) ( UNI )	",
    withdrawFee: "0.0",
    minDepositAmount: "0.0",
    minWithdrawAmount: "0.0",
    confirmations: "1",
  },
  {
    id: 21,
    name: "Matic Token ( MATIC )",
    withdrawFee: "0.0",
    minDepositAmount: "0.0",
    minWithdrawAmount: "0.0",
    confirmations: "1",
  },
  {
    id: 22,
    name: "FTX Token ( FTT )",
    withdrawFee: "0.0",
    minDepositAmount: "0.0",
    minWithdrawAmount: "0.0",
    confirmations: "1",
  },
];
export const DepositWithdrawalTable = () => {
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
      return row.name.toLowerCase().includes(searchWord.toLowerCase());
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
