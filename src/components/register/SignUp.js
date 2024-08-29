import { Box, Input,InputAdornment ,TextField } from "@mui/material";
import React from "react";
import { Search } from '@mui/icons-material'
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
function SignUp() {
  return (
    <Box bgcolor="#ADD8E6" height={"93vh"} display={"flex"} alignItems={"center"} justifyContent={"center"} >
      <Box 
        sx={{
          border: "5px solid red",
          height:540,
          color: "blue",
          
          width:{xs:"360px",sm:"450px",md:"550px", lg:"600px"},
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        
        <Box display={"flex"} flexDirection={"column"}>
        {/* <div style={{
         display:"flex",
         justifyContent:"space-between"
        }}> */}
        
        <Input
          id="input-with-icon-adornment"
          sx={{border:"2px solid black",outline:"none" }}
          startAdornment={
            <InputAdornment position="start">
              <AccountCircleIcon />
            </InputAdornment>
          }
        />
        
        <Input  type="text" placeholder="Username" bgcolor="red"></Input>
        <Input type="number" placeholder="Phone Number"></Input>
        <Input type="email" placeholder="Email"></Input>
        <Input type="password" placeholder="Password"></Input>
        <Input type="password" placeholder="Confirm Password"></Input>
        </Box>
        
        
        
      </Box>
    </Box>
  );
}

export default SignUp;
