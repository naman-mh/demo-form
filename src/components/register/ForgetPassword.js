import { Box, Typography, Input, Button,  } from "@mui/material";
import React from "react";

function ForgetPassword() {
  return (
    <Box
      bgcolor="#faebd7"
      height={"93vh"}
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
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
          margin: " auto 0",
        }}
      >
        <Typography variant="h5">Enter your New password</Typography>
        <Box
          display={"flex"}
          flexDirection={"column"}
          sx={{ width: { xs: "360px", sm: "450px", md: "550px" } }}
        >
          <Input
            type="password"
            placeholder="New password"
            sx={{ outline: "none", margin: "20px" }}
          />
          <Input
            type="password"
            placeholder="Confirm Password"
            sx={{ outline: "none", margin: "20px" }}
          />
          
        </Box>
        <Button sx={{bgcolor:"green", color:'white'}}>Reset password</Button>
      </Box>
    </Box>
  );
}
export default ForgetPassword;
