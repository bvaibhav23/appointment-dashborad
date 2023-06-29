// import React, { useEffect, useState } from "react";
// import { styled, useTheme } from "@mui/material/styles";
// import Box from "@mui/material/Box";
// import Drawer from "@mui/material/Drawer";
// import CssBaseline from "@mui/material/CssBaseline";
// import MuiAppBar from "@mui/material/AppBar";
// import Toolbar from "@mui/material/Toolbar";
// import List from "@mui/material/List";
// import Typography from "@mui/material/Typography";
// import Divider from "@mui/material/Divider";
// import IconButton from "@mui/material/IconButton";
// import MenuIcon from "@mui/icons-material/Menu";
// import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
// import ChevronRightIcon from "@mui/icons-material/ChevronRight";
// import ListItem from "@mui/material/ListItem";
// import ListItemButton from "@mui/material/ListItemButton";
// import ListItemIcon from "@mui/material/ListItemIcon";
// import ListItemText from "@mui/material/ListItemText";

// import docLogo from "../6014550_coronavirus_doctor_female_white_icon.svg";

// import sideBarData from "../data";
// import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
// import Dashboard from "./Dashboard";
// import Scheduler from "./Scheduler";
// import Doctors from "./Doctors";
// import Patients from "./Patients";
// import Preferences from "./Preferences";
// import About from "./About";
// import DoctorsInfo from "./DoctorsInfo";

// const drawerWidth = 240;

// const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
//   ({ theme, open }) => ({
//     flexGrow: 1,
//     padding: theme.spacing(3),
//     transition: theme.transitions.create("margin", {
//       easing: theme.transitions.easing.sharp,
//       duration: theme.transitions.duration.leavingScreen,
//     }),
//     marginLeft: `-${drawerWidth}px`,
//     ...(open && {
//       transition: theme.transitions.create("margin", {
//         easing: theme.transitions.easing.easeOut,
//         duration: theme.transitions.duration.enteringScreen,
//       }),
//       marginLeft: 0,
//     }),
//   })
// );

// const AppBar = styled(MuiAppBar, {
//   shouldForwardProp: (prop) => prop !== "open",
// })(({ theme, open }) => ({
//   transition: theme.transitions.create(["margin", "width"], {
//     easing: theme.transitions.easing.sharp,
//     duration: theme.transitions.duration.leavingScreen,
//   }),
//   ...(open && {
//     width: `calc(100% - ${drawerWidth}px)`,
//     marginLeft: `${drawerWidth}px`,
//     transition: theme.transitions.create(["margin", "width"], {
//       easing: theme.transitions.easing.easeOut,
//       duration: theme.transitions.duration.enteringScreen,
//     }),
//   }),
// }));

// const DrawerHeader = styled("div")(({ theme }) => ({
//   display: "flex",
//   alignItems: "center",
//   padding: theme.spacing(0, 1),
//   // necessary for content to be below app bar
//   ...theme.mixins.toolbar,
//   justifyContent: "flex-end",
// }));

// export default function SideBar() {
//   const theme = useTheme();
//   const [open, setOpen] = useState(true);

//   const navTo = useNavigate();
//   const currURL = useLocation();
//   const [currPath, setCurrPath] = useState("/");
//   useEffect(() => {
//     setCurrPath(currURL.pathname);
//   }, [currURL]);
//   const handleDrawerOpen = () => {
//     setOpen(true);
//   };

//   const handleDrawerClose = () => {
//     setOpen(false);
//   };

//   return (
//     <Box sx={{ display: "flex" }}>
//       <CssBaseline />
//       <AppBar
//         sx={{
//           backgroundColor: "#7575ff",
//         }}
//         position="fixed"
//         open={open}>
//         <Toolbar>
//           <IconButton
//             color="inherit"
//             aria-label="open drawer"
//             onClick={handleDrawerOpen}
//             edge="start"
//             sx={{ mr: 2, ...(open && { display: "none" }) }}>
//             <MenuIcon />
//           </IconButton>
//           <Typography m="auto" variant="h6" noWrap component="div">
//             {currPath.slice(1) ? currPath.slice(1).toUpperCase() : "DASHBOARD"}
//           </Typography>
//         </Toolbar>
//       </AppBar>
//       <Drawer
//         sx={{
//           width: drawerWidth,
//           flexShrink: 0,
//           "& .MuiDrawer-paper": {
//             width: drawerWidth,
//             boxSizing: "border-box",
//           },
//         }}
//         variant="persistent"
//         anchor="left"
//         open={open}>
//         <DrawerHeader>
//           <IconButton onClick={handleDrawerClose}>
//             {theme.direction === "ltr" ? (
//               <ChevronLeftIcon fontSize="large" />
//             ) : (
//               <ChevronRightIcon />
//             )}
//           </IconButton>
//         </DrawerHeader>
//         <Box display="flex" flexDirection="column" gap={1} alignItems="center">
//           <Box borderRadius={15} boxShadow={3}>
//             <img
//               style={{
//                 padding: "1px",
//                 borderColor: "navy",
//               }}
//               width="75vh"
//               height="75vh"
//               src={docLogo}
//               alt="doc Logo"
//             />
//           </Box>
//           <Typography
//             borderBottom={1}
//             borderColor="navy"
//             mb={1}
//             variant="h6"
//             fontWeight="bold"
//             color="#7575ff">
//             Doctor
//           </Typography>
//         </Box>
//         <Divider />
//         <List>
//           {sideBarData.map((item) => (
//             <ListItem
//               sx={{
//                 bgcolor: currPath === item.routeTo ? "#7575ff" : "white",
//                 mb: 1,
//               }}
//               onClick={() => {
//                 navTo(item.routeTo);
//               }}
//               key={item.name}
//               disablePadding>
//               <ListItemButton>
//                 <ListItemIcon>{item.icon}</ListItemIcon>
//                 <ListItemText primary={item.name} />
//               </ListItemButton>
//             </ListItem>
//           ))}
//         </List>
//         <Divider />
//       </Drawer>
//       <Main sx={{ p: 0, pt: 3 }} open={open}>
//         <DrawerHeader />
//         <Routes>
//           <Route path="/" element={<Dashboard />}></Route>
//           <Route path="/schedule" element={<Scheduler />}></Route>
//           <Route path="/doctors" element={<Doctors />}></Route>
//           <Route path="/patients" element={<Patients />}></Route>
//           <Route path="/preference" element={<Preferences />}></Route>
//           <Route path="/about" element={<About />}></Route>
//           <Route path="/doctor/:doctorId" element={<DoctorsInfo />}></Route>
//         </Routes>
//       </Main>
//     </Box>
//   );
// }
