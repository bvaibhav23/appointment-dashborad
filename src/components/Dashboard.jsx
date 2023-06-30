import { Grid, Stack, Typography } from "@mui/material";
import React, { useContext } from "react";
import EventChart from "./EventChart";
import DashboardCard from "./DashboardCard";
import BasicTable from "./DashboardTable";
import DashboardDoctors from "../DashboardDoctors";
import { Link } from "react-router-dom";
import { DataContext } from "./dataContext";
import RecentActivities from "./RecentActivities";

const Dashboard = () => {
  const { events } = useContext(DataContext);

  //Todays appointments
  const today = new Date();
  const todaysEvents = events.filter(
    (event) => event.start.toDateString() === today.toDateString()
  );
  //Weekly appointment
  const startOfWeek = new Date();
  startOfWeek.setDate(startOfWeek.getDate() - startOfWeek.getDay() - 1);

  const endOfWeek = new Date(startOfWeek);
  endOfWeek.setDate(endOfWeek.getDate() + 7);

  const weeksEvents = events.filter(
    (event) => event.start >= startOfWeek && event.start <= endOfWeek
  );

  // console.log(todaysEvents);
  // console.log("Week", weeksEvents);
  return (
    <Grid
      bgcolor="#f8f9fa"
      container
      sx={{ p: 3 }}
      justifyContent="space-evenly">
      <Grid item gap={2} xs={11} sm={11} md={7}>
        <Grid item display="flex" mb={3} gap={1} justifyContent="space-between">
          <DashboardCard
            title="Total Appointment- Today"
            value={todaysEvents.length}
          />
          <DashboardCard
            title="Total Appointment- This week"
            value={weeksEvents.length}
          />
        </Grid>
        <Grid
          bgcolor="#fff"
          item
          mb={3}
          borderRadius={1}
          overflow={"clip"}
          boxShadow={3}>
          <Stack
            direction="row"
            justifyContent="space-between"
            p={1}
            borderTop="5px solid #7575ff">
            <Typography variant="p" fontWeight="bold">
              Today's Appointments
            </Typography>
            <Link to="/schedule">
              <Typography variant="p">Book appointment</Typography>
            </Link>
          </Stack>

          <BasicTable todaysEvents={todaysEvents} />
        </Grid>
        <Grid
          bgcolor="#fff"
          borderRadius={1}
          overflow="clip"
          item
          mb={3}
          p={1}
          borderTop="5px solid #7575ff"
          boxShadow={3}>
          <Typography variant="p" component="div" fontWeight="bold">
            Consultations
          </Typography>

          <EventChart />
        </Grid>
      </Grid>
      <Grid item gap={2} xs={11} sm={11} md={3}>
        <Grid
          bgcolor="#fff"
          borderRadius={2}
          item
          mb={3}
          boxShadow={3}
          borderTop="5px solid #7575ff"
          overflow={"clip"}>
          <Typography variant="p" component="div" fontWeight="bold" p={1}>
            Recent Activities
          </Typography>

          <RecentActivities />
        </Grid>
        <Grid
          bgcolor="#fff"
          borderRadius={2}
          item
          boxShadow={3}
          borderTop="5px solid #7575ff"
          overflow={"clip"}>
          <DashboardDoctors />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Dashboard;
