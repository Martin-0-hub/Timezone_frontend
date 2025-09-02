import React, { useState } from 'react';
import { AppBar, Toolbar, IconButton, Button, Box, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [open, setOpen] = useState(false);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Features', path: '#features' },
    { name: 'About', path: '#about' },
    { name: 'Contact', path: '#contact' },
    { name: 'Login', path: '/login' },
  ];

  return (
    <AppBar position="sticky" className="bg-gray-900 shadow-md">
      <Toolbar className="flex justify-between">
        {/* Logo / Brand */}
        <Typography variant="h6" className="text-orange-500 font-bold">
          TimeZone
        </Typography>

        {/* Desktop Menu */}
        <Box className="hidden md:flex space-x-6 items-center">
          {navItems.map((item) => (
            <Link key={item.name} to={item.path}>
              <Button className="text-white hover:text-orange-500">
                {item.name}
              </Button>
            </Link>
          ))}
        </Box>

        {/* Mobile Menu Button */}
        <IconButton
          edge="end"
          className="md:hidden text-white"
          onClick={() => setOpen(!open)}
        >
          {open ? <CloseIcon /> : <MenuIcon />}
        </IconButton>
      </Toolbar>

      {/* Mobile Menu */}
      {open && (
        <Box className="md:hidden bg-gray-800 flex flex-col space-y-4 p-4">
          {navItems.map((item) => (
            <Link key={item.name} to={item.path} onClick={() => setOpen(false)}>
              <Button className="w-full text-white hover:text-orange-500">
                {item.name}
              </Button>
            </Link>
          ))}
        </Box>
      )}
    </AppBar>
  );
};

export default Navbar;
