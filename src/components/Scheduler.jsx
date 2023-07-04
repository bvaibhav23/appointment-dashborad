import {
  Box,
  Card,
  CardContent,
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
import { waitingList } from "./DataSource";

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
      <Stack sx={{ display: { xs: "flex", md: "none" } }}>
        <FilterForm
          doctor={doctor}
          handleChange={handleChange}
          currentDoctorsData={currentDoctorsData}
        />
      </Stack>
      <Grid item xs={11} sm={11} md={9}>
        <CalendarDemo />
      </Grid>

      <Grid item xs={11} sm={11} md={2}>
        <Box
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
        </Box>
        <Typography mt={2} align="center">
          {" "}
          Waiting List
        </Typography>

        <WaitingList />
      </Grid>
    </Grid>
  );
};

export default Scheduler;

const FilterForm = ({ doctor, handleChange, currentDoctorsData }) => {
  return (
    <FormControl sx={{ m: 1 }} fullWidth>
      <Typography fontSize={14} color={"GrayText"}>
        Choose Specialist{" "}
      </Typography>
      <Select
        id="demo-simple-select"
        value={doctor}
        size="small"
        variant="outlined"
        sx={{ bgcolor: "#fff" }}
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

const WaitingList = () => {
  return (
    <Box
      display="flex"
      gap={1}
      mt={1}
      justifyContent="space-evenly"
      flexWrap="wrap"
      sx={{
        height: 500,
        overflowY: "scroll",
        "::-webkit-scrollbar ": {
          display: "none",
        },
      }}>
      {waitingList &&
        waitingList.map((list) => (
          <Card
            draggable
            sx={{
              border: "1px solid #a09f9f ",
              height: 70,
              width: { md: 240, xs: 140 },
              bgcolor: "#fff5f5",
            }}>
            <CardContent sx={{ p: 1 }}>
              <Typography fontSize={12} color="text.primary">
                {list.title}
              </Typography>
              <Typography fontSize={12} color="text.primary">
                {list.start && list.start.toLocaleTimeString()}
              </Typography>
              <Typography fontSize={12} color="text.secondary">
                {`${list.DepartmentName} - ${list.Treatment}`}
              </Typography>
            </CardContent>
          </Card>
        ))}
    </Box>
  );
};
