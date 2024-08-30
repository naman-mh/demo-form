import React from 'react'
import { Box, Button, Input, InputAdornment, Typography } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import HttpsIcon from '@mui/icons-material/Https';
import { Link } from 'react-router-dom';

function Login() {
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
        <Typography variant="h5">Login</Typography>
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
            type="Password" placeholder="Password"
            id="input-with-icon-adornment"
            sx={{ outline: "none", margin: "10px" }}
            startAdornment={
              <InputAdornment position="start">
                <HttpsIcon />
              </InputAdornment>
            }
          />
        </Box>
        <Button sx={{ margin: "10px", bgcolor: "#228b22", color: "white", px:"80px", width: "100px" }}>Submit</Button>
        <Typography component={Link} to={"/forgetpassword"} sx={{textDecoration:"none" , color:"green"}} >Frorget password?</Typography>
          <Box display={"flex"}>
            <Typography >New User please SignUp </Typography>
            <Typography marginLeft={"5px"} component={Link} to="/signUp" sx={{ textDecoration: "none", color: "green" }}> Here</Typography>
          </Box>
      </Box>
    </Box>
  )
}

export default Login