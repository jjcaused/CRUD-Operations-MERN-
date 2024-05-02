import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function SelectDesignation() {
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <Box>
      <FormControl sx={{ width: "250px" }}>
        
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          onChange={handleChange}
        >
          <MenuItem value={10}>HR</MenuItem>
          <MenuItem value={20}>Manager</MenuItem>
          <MenuItem value={30}>Sales</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
