import { Box, Button, Input, InputAdornment, Typography } from "@mui/material";
import React from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import HttpsIcon from '@mui/icons-material/Https';
import PhoneEnabledIcon from '@mui/icons-material/PhoneEnabled';
import EmailIcon from '@mui/icons-material/Email';
import { Login } from "@mui/icons-material";
import { Link } from "react-router-dom";
function SignUp() {
  return (
    <Box bgcolor="#faebd7" height={"93vh"} sx={{
      display: "flex", alignItems: "center",
      justifyContent: "center",
    }} >

      <Box
        sx={{


          height: 540,
          borderRadius: "15px",
          width: { xs: "360px", sm: "450px", md: "550px", lg: "600px" },
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          bgcolor: "#e3d4c1",
          textAlign: "left",
          margin: " auto 0"
        }}>
        <Typography variant="h5">Register</Typography>

        <Box display={"flex"} flexDirection={"column"} sx={{ width: { xs: "360px", sm: "450px", md: "550px" }, }} >
          <Input
            type="text" placeholder="Username"
            id="input-with-icon-adornment"
            sx={{ outline: "none", margin: "10px" }}
            startAdornment={
              <InputAdornment position="start">
                <AccountCircleIcon />
              </InputAdornment>
            }
          />
          <Input
            type="number" placeholder="Phone Number"
            id="input-with-icon-adornment"
            sx={{ outline: "none", margin: "10px" }}
            startAdornment={
              <InputAdornment position="start">
                <PhoneEnabledIcon />
              </InputAdornment>
            }
          />
          <Input
            type="email" placeholder="Email"
            id="input-with-icon-adornment"
            sx={{ outline: "none", margin: "10px" }}
            startAdornment={
              <InputAdornment position="start">
                <EmailIcon />
              </InputAdornment>
            }
          />
          <Input
            type="Password" placeholder="Password"
            id="input-with-icon-adornment"
            sx={{ outline: "none", margin: "10px" }}
            startAdornment={
              <InputAdornment position="start">
                <HttpsIcon />
              </InputAdornment>
            }
          />
          <Input
            type="Password" placeholder="Confirm Password"
            id="input-with-icon-adornment"
            sx={{ outline: "none", margin: "10px" }}
          />

        </Box>
        <Button sx={{ margin: "10px", bgcolor: "#228b22", color: "white", padding: "auto", width: "100px" }}>Submit</Button>
        <Box sx={{ display: "flex" }}>
          <Typography>Already have an account? </Typography>

          <Typography marginLeft={"5px"} component={Link} to="/login" sx={{ textDecoration: "none" }}> Login</Typography>
        </Box>
      </Box>

    </Box>

  );
}

export default SignUp;
