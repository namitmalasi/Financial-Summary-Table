import React, { useState } from "react";
import {
  Container,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Typography,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper,
} from "@mui/material";
// import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import data from "../utils/data.json";

const currencyOptions = ["$", "€", "£"];
const decimalOptions = [0, 1, 2];

const FinancialSummaryTable = () => {
  const [currency, setCurrency] = useState("$");
  const [decimals, setDecimals] = useState(2);

  const handleCurrencyChange = (event) => {
    setCurrency(event.target.value);
  };

  const handleDecimalsChange = (event) => {
    setDecimals(event.target.value);
  };

  const formatValue = (value) => {
    return `${currency}${value.toFixed(decimals)}`;
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Financial Summary
      </Typography>
      <FormControl variant="outlined" style={{ marginRight: 20 }}>
        <InputLabel>Currency</InputLabel>
        <Select
          value={currency}
          onChange={handleCurrencyChange}
          label="Currency"
        >
          {currencyOptions.map((option) => (
            <MenuItem key={option} value={option}>
              {option}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormControl variant="outlined">
        <InputLabel>Decimals</InputLabel>
        <Select
          value={decimals}
          onChange={handleDecimalsChange}
          label="Decimals"
        >
          {decimalOptions.map((option) => (
            <MenuItem key={option} value={option}>
              {option}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <TableContainer component={Paper} style={{ marginTop: 20 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Overhead</TableCell>
              {Object.keys(data.Sheet1[0])
                .slice(1)
                .map((month) => (
                  <TableCell key={month}>{month}</TableCell>
                ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {data.Sheet1.map((row, index) => (
              <TableRow key={index}>
                <TableCell>{row.Overhead}</TableCell>
                {Object.values(row)
                  .slice(1)
                  .map((value, idx) => (
                    <TableCell key={idx}>{formatValue(value)}</TableCell>
                  ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default FinancialSummaryTable;
