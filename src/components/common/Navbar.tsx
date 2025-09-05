import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Button,
  Typography,
  MenuItem,
  Menu,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { Link, useNavigate } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";

interface NavbarProps {
  darkMode: boolean;
  setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
}

const Navbar: React.FC<NavbarProps> = ({ darkMode, setDarkMode }) => {
  const [open, setOpen] = useState(false);
  const [anchorEl,setAnchorE1] = useState<null | HTMLElement>(null);
  const token = localStorage.getItem("accessToken");
  const navigate = useNavigate();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Features", path: "#features" },
    { name: "About", path: "#about" },
    { name: "Contact", path: "#contact" },
    { name: "Login", path: "/login" },
  ];
  
  const handleLogoClick = (event:React.MouseEvent<HTMLElement>) => {
    setAnchorE1(event.currentTarget);
  }

  const handleClose = () => {
    setAnchorE1(null);
  }

  const handleLogout = () => {
    localStorage.removeItem("accessToken");
    navigate("/login");
  }

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
          {
            !token? (
              <>
              <Link to="/login">
                <Button className="text-white hover:text-orange-500">SignIn</Button>
              </Link>

              <Link to="/register">
                <Button className="text-white hover:text-orange-500">SignUp</Button>
              </Link>
              </>
            ):(
              <>
              <IconButton onClick={handleLogoClick} className="p-0">
                <img
                  src="/logo.png" // replace with your logo path
                  alt="Logo"
                  className="w-10 h-10 rounded-full border border-white"
                />
              </IconButton>

              <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem
                  onClick={() => {
                    handleClose();
                    navigate("/profile");
                  }}
                >
                  Profile
                </MenuItem>
                <MenuItem
                  onClick={() => {
                    handleClose();
                    handleLogout();
                  }}
                >
                  Logout
                </MenuItem>
              </Menu>
              </>
            )
          }
          
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

          {!token ? (
            <>
              <Link to="/login">
                <Button className="w-full text-white hover:text-orange-500">SignIn</Button>
              </Link>
              <Link to="/register">
                <Button className="w-full text-white hover:text-orange-500">SignUp</Button>
              </Link>
            </>
          ) : (
            <>
              <Button
                className="w-full text-white hover:text-orange-500"
                onClick={() => navigate("/profile")}
              >
                Profile
              </Button>
              <Button
                className="w-full text-white hover:text-orange-500"
                onClick={handleLogout}
              >
                Logout
              </Button>
            </>
          )}
        </div>
      )}
    </AppBar>
  );
};

export default Navbar;
