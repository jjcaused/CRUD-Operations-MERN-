import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import axios from "axios";
import { Button } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { useNavigate } from "react-router-dom";

export default function DataTable() {
  const [data, setData] = React.useState([]);
  const [deleteName, setDeleteName] = React.useState("");
  const navigate = useNavigate();

  React.useEffect(() => {
    axios
      .get("http://localhost:3003/getTable")
      .then((res) => {
        setData(res.data);
        console.log("Fetched data:", res.data);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const handleEdit = () => {
    navigate("/empeditlist");
  };

  const handleDelete = (name) => {
    // axios
    //   .delete(`http://localhost:3003/deleteEmp/${name}`)
    //   

    //     axios
    //       .get("http://localhost:3003/getTable")
    //       .then((res) => {
    //         setData(res.data);
    //       })
    //       .catch((error) => console.error("Error fetching data:", error));
    //   })
    //   .catch((error) => console.error("Error deleting employee:", error));
  };

  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "Name", headerName: "Name", width: 150 },
    { field: "Email", headerName: "Email", width: 150 },
    { field: "Mobile", headerName: "Mobile No", width: 150 },
    { field: "Designation", headerName: "Designation", width: 150 },
    { field: "Gender", headerName: "Gender", width: 150 },
    { field: "Course", headerName: "Course", width: 150 },
    {
      field: "Edit",
      headerName: "Edit",
      width: 70,
      renderCell: (cellValue) => {
        return (
          <>
            <Button onClick={(event) => handleEdit(event, cellValue)}>
              <EditIcon />
            </Button>
          </>
        );
      },
    },
    {
      field: "Delete",
      headerName: "Delete",
      width: 70,
      renderCell: (cellValue) => {
        return (
          <>
            <Button onClick={(event) => handleDelete(event, cellValue)}>
              <DeleteIcon />
            </Button>
          </>
        );
      },
    },
  ];

  const rows = data.map((item, index) => ({
    id: index + 1,
    Name: item.name,
    Email: item.email,
    Mobile: item.phoneno,
    Designation: item.designation,
    Gender: item.gender,
    Course: item.course,
  }));

  console.log("Rows:", rows);

  return (
    <div style={{ height: 600, width: "100%" }}>
      <DataGrid rows={rows} columns={columns} pageSize={5} checkboxSelection />
    </div>
  );
}
