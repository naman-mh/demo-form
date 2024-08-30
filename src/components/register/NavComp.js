import {  Box, Button, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

function NavComp() {
  return (
    <Box
      sx={{
        height: "7vh",
        position: "sticky",
        display: "flex",
        alignItems: "center",
        bgcolor: "#334a52",
        justifyContent: "space-between",
        
      }}
    >
      <Typography color="white">Logo</Typography>
      <Box sx={{ display: "flex" }}>
        <Button LinkComponent={Link} to="/login" sx={{ color: "white" }}>Login</Button>
        <Button LinkComponent={Link} to="/signup" sx={{ color: "white" }}>SignIn</Button>
      </Box>
    </Box>
  );
}

export default NavComp;
