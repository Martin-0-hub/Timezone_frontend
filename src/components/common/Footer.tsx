import React from "react";
import { Box, Typography, IconButton } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Footer: React.FC = () => {
  return (
    <Box
      component="footer"
      className="bg-gray-900 text-gray-400 mt-10"
    >
      {/* Orange Line */}
      <Box className="h-1 bg-orange-500 w-full"></Box>

      {/* Footer Content */}
      <Box sx={{
        maxWidth: "72rem", // same as max-w-6xl
        mx: "auto",
        px: 6,
        py: 8,
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        justifyContent: "space-between",
        alignItems: "center",
      }}>
        {/* Left - Brand */}
        <Typography variant="body1" className="text-white font-bold">
          © {new Date().getFullYear()} TimeZone. All rights reserved.
        </Typography>

        {/* Right - Socials */}
        <Box className="flex space-x-4 mt-4 md:mt-0">
          <IconButton
            href="https://github.com/"
            target="_blank"
            className="text-gray-400 hover:text-orange-500"
          >
            <GitHubIcon />
          </IconButton>
          <IconButton
            href="https://twitter.com/"
            target="_blank"
            className="text-gray-400 hover:text-orange-500"
          >
            <TwitterIcon />
          </IconButton>
          <IconButton
            href="https://linkedin.com/"
            target="_blank"
            className="text-gray-400 hover:text-orange-500"
          >
            <LinkedInIcon />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
