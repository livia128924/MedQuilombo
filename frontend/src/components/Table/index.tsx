import { DataGrid } from "@mui/x-data-grid";
import Paper from "@mui/material/Paper";

const paginationModel = { page: 0, pageSize: 5 };
interface ICol {
  field: string;
  headerName: string;
  width: number;
}
interface IDataTable {
  rows: any;
  columns: any;
}

export default function DataTable({ rows, columns }: IDataTable) {
  return (
    <Paper sx={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{ pagination: { paginationModel } }}
        pagination
        //   pageSizeOptions={[5, 10]}
        // checkboxSelection
        sx={{ border: 0 }}
      />
    </Paper>
  );
}
