import * as React from "react";

import { InputAdornment, TextField } from "@mui/material";

import SearchIcon from "@mui/icons-material/Search";
import { useStyles } from "./styles";

export interface SearchProps {
  handleChange: (e: any) => void;
  searchItem: string;
}

export const Search: React.FC<SearchProps> = ({
  handleChange,
  searchItem,
}: SearchProps) => {
  const classes = useStyles();
  return (
    <div className={classes.searchText}>
      <TextField
        style={{ height: "14px" }}
        fullWidth
        size="small"
        type="search"
        placeholder="Search"
        value={searchItem}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
        onChange={handleChange}
      />
    </div>
  );
};
