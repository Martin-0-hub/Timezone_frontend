import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Button,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { Link } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";

interface NavbarProps {
  darkMode: boolean;
  setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
}

const Navbar: React.FC<NavbarProps> = ({ darkMode, setDarkMode }) => {
  const [open, setOpen] = useState(false);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Features", path: "#features" },
    { name: "About", path: "#about" },
    { name: "Contact", path: "#contact" },
    { name: "Login", path: "/login" },
  ];

  return (
    <AppBar position="sticky" className="bg-gray-900 shadow-md">
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
        }}
      >
        {/* Left: Logo */}
        <Typography variant="h6" className="text-orange-500 font-bold">
          TimeZone
        </Typography>

        {/* Center: Nav items */}
        <div className="hidden md:flex space-x-6">
          {navItems
            .filter((item) => item.name !== "Login")
            .map((item) => (
              <Link key={item.name} to={item.path}>
                <Button className="text-white hover:text-orange-500">
                  {item.name}
                </Button>
              </Link>
            ))}
        </div>

        {/* Right: Login + Toggle */}
        <div className="flex items-center space-x-4">
          <Link to="/login">
            <Button className="text-white hover:text-orange-500">Login</Button>
          </Link>

          <ThemeToggle
            darkMode={darkMode}
            toggleDarkMode={() => setDarkMode(!darkMode)}
          />
        </div>
      </Toolbar>

      {/* Mobile Nav */}
      {open && (
        <div className="md:hidden bg-gray-800 flex flex-col space-y-4 p-4">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              onClick={() => setOpen(false)}
            >
              <Button className="w-full text-white hover:text-orange-500">
                {item.name}
              </Button>
            </Link>
          ))}
        </div>
      )}
    </AppBar>
  );
};

export default Navbar;
