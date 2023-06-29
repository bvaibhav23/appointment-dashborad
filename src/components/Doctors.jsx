import {
  Autocomplete,
  Box,
  Button,
  Card,
  CardContent,
  Divider,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React, { useContext, useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";
import { DataContext } from "./dataContext";
import FormDialog from "./DoctorForm";

const Doctors = () => {
  const { currentDoctorsData } = useContext(DataContext);
  const navTo = useNavigate();
  const [filterData, setFilterData] = useState(currentDoctorsData);
  const [specialty, setSpecialty] = useState(null);

  const [open, setOpen] = useState(false);
  useEffect(() => {
    if (specialty === null) setFilterData(currentDoctorsData);
    else
      setFilterData(
        currentDoctorsData.filter((val) => val.Specialization === specialty)
      );
  }, [specialty, currentDoctorsData]);
  // console.log(filterData);
  return (
    <Box p={5}>
      <Typography
        variant="h6"
        fontWeight="bold"
        display="inline-block"
        borderBottom={".2rem solid #7575ff"}>
        DOCTORS LIST
      </Typography>
      <Box display="flex" justifyContent="end">
        <Autocomplete
          id="specialization"
          options={[
            ...new Set(currentDoctorsData.map((val) => val.Specialization)),
          ]}
          onChange={(e, val) => {
            setSpecialty(val);
          }}
          size="small"
          sx={{ width: "30vh" }}
          renderInput={(params) => (
            <TextField {...params} placeholder="Select a specialization" />
          )}
        />
        <Button
          sx={{
            ml: 1,
            bgcolor: "#7575ff",
            fontSize: { xs: ".5rem", md: ".8rem" },
            ":hover": { bgcolor: "#7f7fed" },
          }}
          variant="contained"
          onClick={() => {
            setOpen(true);
          }}>
          Add New Doctor
        </Button>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: 5,
          mt: 3,
          justifyContent: { xs: "center", md: "start" },
        }}>
        {filterData.map((info) => (
          <Card
            key={info.Id}
            sx={{
              width: { xs: "90%", md: "45%" },
              ":hover": { boxShadow: " .1rem .1rem 2rem .1rem #7575ff" },
            }}
            onClick={() => navTo(`/doctor/${info.Id}`)}>
            <CardContent>
              <Stack direction="row" gap={2}>
                <img
                  src={info.imgURL}
                  alt={info.title}
                  style={{ borderRadius: "50%" }}
                  width="80vh"
                  height="80vh"
                />
                <Stack gap={1}>
                  <Stack>
                    <Typography>{`DR. ${info.title}`}</Typography>
                    <Typography variant="p" fontSize={12}>
                      {info.Education}
                    </Typography>
                  </Stack>
                  <Stack direction="row" gap={2}>
                    <Stack>
                      <Typography variant="p" fontSize={12} color={"GrayText"}>
                        Designation
                      </Typography>
                      <Typography>{info.Designation}</Typography>
                    </Stack>
                    <Divider orientation="vertical" />
                    <Stack>
                      <Typography variant="p" fontSize={12} color={"GrayText"}>
                        Experience
                      </Typography>
                      <Typography>{info.Experience}</Typography>
                    </Stack>
                  </Stack>
                </Stack>
              </Stack>
            </CardContent>
          </Card>
        ))}
      </Box>
      <FormDialog open={open} setOpen={setOpen} />
    </Box>
  );
};

export default Doctors;
