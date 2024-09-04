import React from "react";
import { Box, Grid, TextField, Typography } from "@mui/material";


function MachineQues() {
  return (
    <Box sx={{textAlign:"center",bgcolor:"#faebd7",height: "93vh", }}>
       <Typography variant="h4" bgcolor="#faebd7" py={"20px"}>Machine Coding Question</Typography> 
    
    <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center",  bgcolor:"#faebd7" }}>
    
      <Grid container >
        <Grid item xs={12} md={4} >
          <item>
            <Box
              
              marginTop={{ xs: "90px", md: "auto" }}
              sx={{
                bgcolor:"red",
                
                height: "340px",
                display: "flex",
                flexDirection: "column", alignItems: "center", justifyContent: "center"
              }} >
              <TextField  placeholder="Title" sx={{ width: { xs: "300px", md: "400px" }, mt: "16px" ,
                 "& .MuiOutlinedInput-notchedOutline": {
                  borderColor:"green",
                } }} >Title</TextField>
              <TextField  placeholder="Description"sx={{ width: { xs: "300px", md: "400px" }, mt: "16px" ,  }} >Description</TextField>
              <TextField  placeholder="Hint"sx={{ width: { xs: "300px", md: "400px" }, mt: "16px" ,  }} >Hint</TextField>
            </Box></item>
        </Grid>
        <Grid item xs={12} md={8} >
          <item> 
            <Box  
            sx={{ 
              bgcolor:"pink",
              height: "440px",
              margin: "auto",
              display: "flex",
              alignItems:"center",
              justifyContent:"center" }} >
            <TextField
              variant="outlined"
              type="text"
              multiline
              maxRows={13}
              placeholder="Answer"
              style={{}}


              sx={{
                margin:'0 10px',
                height: "340px",
                width:  { xs: "260px", md: "320px" },
                flexGrow: 1,
                fontSize: "clamp(14px, 2vw, 18px)",
                bgcolor: "#00000026",
                borderRadius: "20px",
                "& .MuiOutlinedInput-root": {
                  padding: "8px 12px",
                  "& .MuiOutlinedInput-input": {
                    boxSizing: "border-box",
                    overflow: "hidden",
                  },
                  color: "white",
                  "&::placeholder": {
                    color: "white",
                  },
                },
                "& .MuiOutlinedInput-notchedOutline": {
                  border: "none",
                },
                "&:focus": {
                  outline: "none",
                },
              }}

            />
          </Box></item>
        </Grid>
      </Grid>
    </Box>
    </Box>
  );
}

export default MachineQues;
