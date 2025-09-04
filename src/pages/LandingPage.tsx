// src/pages/LandingPage.tsx (MUI)
import React from "react";
import { Box, Typography } from "@mui/material";

const LandingPage: React.FC = () => {
  return (
    <Box
      sx={{
        minHeight: "80vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        bgcolor: "background.default",
        px: 2,
      }}
    >
      <Typography
        component="h1"
        sx={{ fontSize: { xs: 48, md: 96 }, fontWeight: 700, textAlign: "center" }}
      >
        Welcome!
      </Typography>
    </Box>
  );
};

export default LandingPage;
