import {
  FormControl,
  Grid,
  MenuItem,
  Select,
  Stack,
  Typography,
} from "@mui/material";
import React, { useContext, useState } from "react";
import CalendarDemo from "./CalendarDemo";
import { DataContext } from "./dataContext";

const Scheduler = () => {
  const { currentDoctorsData } = useContext(DataContext);
  const [doctor, setDoctor] = useState("");

  const handleChange = (event) => {
    setDoctor(event.target.value);
  };

  return (
    <Grid
      bgcolor="#f8f9fa"
      container
      sx={{ mt: 1 }}
      justifyContent="space-evenly">
      <Grid
        sx={{ display: { xs: "block", md: "none" } }}
        item
        xs={11}
        sm={11}
        md={2}>
        <FilterForm
          doctor={doctor}
          handleChange={handleChange}
          currentDoctorsData={currentDoctorsData}
        />
      </Grid>
      <Grid item xs={11} sm={11} md={9}>
        <CalendarDemo />
      </Grid>
      <Grid
        sx={{ display: { xs: "none", md: "block" } }}
        item
        xs={11}
        sm={11}
        md={2}>
        <FilterForm
          doctor={doctor}
          handleChange={handleChange}
          currentDoctorsData={currentDoctorsData}
        />
      </Grid>
    </Grid>
  );
};

export default Scheduler;

const FilterForm = ({ doctor, handleChange, currentDoctorsData }) => {
  return (
    <FormControl sx={{ m: 1 }} fullWidth>
      <Typography color={"GrayText"}>Choose Specialist </Typography>
      <Select
        id="demo-simple-select"
        value={doctor}
        size="small"
        variant="outlined"
        placeholder="Choose Specialist"
        onChange={(e) => handleChange(e)}>
        {currentDoctorsData.map((doc) => (
          <MenuItem value={doc.Id}>
            <Stack direction="row" alignItems="center" gap={1}>
              <img
                src={doc.imgURL}
                alt={doc.title}
                style={{ borderRadius: "50%" }}
                width="30vh"
                height="30vh"
              />
              <Typography>{`DR. ${doc.title}`}</Typography>
            </Stack>
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};
