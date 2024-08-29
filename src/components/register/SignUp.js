import { Box, Button, Input, InputAdornment, Typography } from "@mui/material";
import React from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import HttpsIcon from '@mui/icons-material/Https';
import PhoneEnabledIcon from '@mui/icons-material/PhoneEnabled';
import EmailIcon from '@mui/icons-material/Email';
function SignUp() {
  return (
    <Box bgcolor="#faebd7" height={"93vh"}  >

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
          margin: "0 auto",
          textAlign:"left"
        }}>
        <Typography variant="h5" >Register</Typography>

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
        <Button sx={{ margin: "10px", bgcolor: "#228b22", color: "white" , padding:"auto" ,width:"100px"  }}>Submit</Button>
      </Box>
    </Box>

  );
}

export default SignUp;
