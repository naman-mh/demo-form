import React from "react";
import { Box, Grid, TextField } from "@mui/material";


function MachineQues() {
  return (
    <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", height: "93vh" }}>
      <Grid container  >
        <Grid item xs={12} md={6} >
          <item>
            <Box
              bgcolor={"grey"}
              marginTop={{ xs: "90px", md: "auto" }}
              sx={{
                height: "340px",
                display: "flex",
                flexDirection: "column", alignItems: "center", justifyContent: "center"
              }} >
              <TextField sx={{ width: { xs: "300px", md: "400px" }, mt: "16px" }} >Title</TextField>
              <TextField sx={{ width: { xs: "300px", md: "400px" }, mt: "16px" }} >Description</TextField>
              <TextField sx={{ width: { xs: "300px", md: "400px" }, mt: "16px" }} >Hint</TextField>
            </Box></item>
        </Grid>
        <Grid item xs={12} md={6} >
          <item> <Box bgcolor={"pink"} sx={{ height: "440px" }} >
            <TextField   sx={{ height: "340px", '& .MuiInputBase-root': { height: "100%" , overflow:"scroll" }, width: { xs:"100%",md:"360px"}, }}  multiline  ></TextField>
          </Box></item>
        </Grid>
      </Grid>
    </Box>
  );
}

export default MachineQues;
