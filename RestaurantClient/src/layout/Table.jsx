import { Table as MuiTable } from "@mui/material";

export default function Table(props) {
  return (
    <MuiTable
      sx={{
        "& tbody td": {
          fontWeight: "300",
        },
        "& tbody tr:hover": {
          backgroundColor: "#d6d6d6",
          cursor: "pointer",
        },
        "& .MuiTableCell-root": {
          border: "none",
        },
      }}
    >
      {props.children}
    </MuiTable>
  );
}
