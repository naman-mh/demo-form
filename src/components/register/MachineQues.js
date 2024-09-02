import React from "react";
import { Box, Button, Input,  Typography } from "@mui/material";


function MachineQues() {
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
          width: { xs: "360px", sm: "450px", md: "550px", lg: "780px" },
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          bgcolor: "#e3d4c1",
          textAlign: "left",
          margin: " auto 0",
        }}
      >
        <Typography variant="h5">Machine Coding Round</Typography>
        <Box
          display={"flex"}
          flexDirection={"column"}
          sx={{ width: { xs: "360px", sm: "450px", md: "780px" } }}
        >
          <Input type="text" placeholder="Title" />
          <Input type="text" placeholder="Description" />
          <Input  type="text" placeholder="Hint"/>
          <Input type="text" placeholder="Answer" />
        </Box>
        <Button
          sx={{
            margin: "10px",
            bgcolor: "#228b22",
            color: "white",
            px: "80px",
            width: "100px",
          }}
        >
          Submit
        </Button>
      </Box>
    </Box>
  );
}

export default MachineQues;
