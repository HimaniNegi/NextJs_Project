import { Button, FormControl, FormLabel, Grid, TextField } from "@mui/material";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Typography from "@mui/material/Typography";
import React from "react";
import { useState } from "react";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const ModelPopupAddUser = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  //form values
  const [fname, setFisrtName] = useState("");
  const [lname, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [Password, setPassword] = useState("");
  const [ConfirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("values", e.target);
  };

  return (
    <>
      <Button
        variant="contained"
        endIcon={<AddCircleOutlineIcon />}
        onClick={handleOpen}
      >
        Add User
      </Button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <Grid xs={12} container>
              <Grid item xs={11}>
                <Typography
                  id="transition-modal-title"
                  variant="h6"
                  component="h2"
                >
                  Add User
                </Typography>
              </Grid>
              <Grid item xs={1}></Grid>
            </Grid>
            <hr />
            <FormControl>
              <Grid xs={12} container sx={{ my: 2 }}>
                <Grid xs={6} item>
                  <FormLabel>First Name</FormLabel>

                  <TextField
                    type="text"
                    value={fname}
                    placeholder="First Name"
                    onChange={(e) => setFisrtName(e.target.value)}
                  />
                </Grid>
                <Grid xs={6} item>
                  <FormLabel>Last Name</FormLabel>

                  <TextField
                    type="text"
                    value={lname}
                    placeholder="Last Name"
                    onChange={(e) => setLastName(e.target.value)}
                  />
                </Grid>
              </Grid>
              <Grid xs={12} container sx={{ my: 2 }}>
                <Grid xs={6} item>
                  <FormLabel>Email ID</FormLabel>

                  <TextField
                    type="text"
                    value={email}
                    placeholder="Email"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </Grid>
                <Grid xs={6} item>
                  <FormLabel>Phone number</FormLabel>

                  <TextField
                    type="text"
                    value={mobileNumber}
                    placeholder="Phone number"
                    onChange={(e) => setMobileNumber(e.target.value)}
                  />
                </Grid>
              </Grid>
              <Grid xs={12} container sx={{ my: 2 }}>
                <Grid xs={6} item>
                  <FormLabel>Password</FormLabel>
                  <TextField
                    type="text"
                    value={Password}
                    placeholder="Password"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </Grid>
                <Grid xs={6} item>
                  <FormLabel>Confirm Password</FormLabel>
                  <TextField
                    type="text"
                    value={ConfirmPassword}
                    placeholder="Confirm Password"
                    onChange={(e) => setConfirmPassword(e.target.value)}
                  />
                </Grid>
              </Grid>
              <Grid xs={12} container sx={{ my: 2 }}>
                <Grid xs={2} item>
                  <Button variant="contained" onClick={handleSubmit}>
                    Save
                  </Button>
                </Grid>
                <Grid xs={3} item>
                  <Button variant="outlined">Clear</Button>
                </Grid>
              </Grid>
            </FormControl>
          </Box>
        </Fade>
      </Modal>
    </>
  );
};

export default ModelPopupAddUser;
