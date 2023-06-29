// import React, { useState } from "react";
// import Button from "@mui/material/Button";
// import TextField from "@mui/material/TextField";
// import Dialog from "@mui/material/Dialog";
// import DialogActions from "@mui/material/DialogActions";
// import DialogContent from "@mui/material/DialogContent";
// import DialogTitle from "@mui/material/DialogTitle";
// import { Autocomplete } from "@mui/material";

// export default function FormDialog() {
//   const [open, setOpen] = useState(false);

//   const handleClickOpen = () => {
//     setOpen(true);
//   };

//   const handleClose = () => {
//     setOpen(false);
//   };

//   return (
//     <div>
//       <Button variant="outlined" onClick={handleClickOpen}>
//         Open form dialog
//       </Button>
//       <Dialog open={open} onClose={handleClose}>
//         <DialogTitle>Add Appointment</DialogTitle>
//         <DialogContent>
//           <Autocomplete
//             disablePortal
//             id="name"
//             options={["vaibhav", "aman", "kartik"]}
//             fullWidth
//             sx={{ mt: 1 }}
//             size="small"
//             renderInput={(params) => (
//               <TextField {...params} label="Patient Name" />
//             )}
//           />
//           {/* <TextField
//             label="Patient Name"
//             type="text"
//             size="small"
//             sx={{ mt: 1 }}
//             variant="outlined"
//           /> */}
//           <TextField
//             id="outlined-basic1"
//             size="small"
//             label="Title"
//             sx={{ mt: 1, width: "49%" }}
//             variant="outlined"
//           />
//           <TextField
//             id="outlined-basic2"
//             size="small"
//             label="Location"
//             variant="outlined"
//             sx={{ mt: 1, ml: 1, width: { xs: "48%", md: "49%" } }}
//           />
//           <TextField
//             id="outlined-basic1"
//             size="small"
//             type="date"
//             sx={{ mt: 1, width: "49%" }}
//             variant="outlined"
//           />

//           <TextField
//             id="outlined-basic2"
//             size="small"
//             variant="outlined"
//             type="date"
//             sx={{ mt: 1, ml: 1, width: { xs: "48%", md: "49%" } }}
//           />
//           <Autocomplete
//             disablePortal
//             id="department"
//             options={["vaibhav", "aman", "kartik"]}
//             fullWidth
//             sx={{ mt: 1 }}
//             size="small"
//             renderInput={(params) => (
//               <TextField {...params} label="Department" />
//             )}
//           />
//           <Autocomplete
//             disablePortal
//             id="consultation"
//             options={["vaibhav", "aman", "kartik"]}
//             fullWidth
//             sx={{ mt: 1 }}
//             size="small"
//             renderInput={(params) => (
//               <TextField {...params} label="Consultation" />
//             )}
//           />
//           <TextField
//             id="outlined-multiline-static"
//             label="Symptoms"
//             multiline
//             fullWidth
//             sx={{ mt: 1 }}
//             size="small"
//             rows={2}
//           />
//         </DialogContent>
//         <DialogActions>
//           <Button onClick={handleClose}>Cancel</Button>
//           <Button sx={{ mr: 2 }} variant="contained" onClick={handleClose}>
//             Add
//           </Button>
//         </DialogActions>
//       </Dialog>
//     </div>
//   );
// }
