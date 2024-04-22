//import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="primary">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link to="/" style={{ textDecoration: 'none', color: 'white' }}>
              Inicio
            </Link>
          </Typography>
          <Button color="inherit">
            <Link to="/about" style={{ textDecoration: 'none', color: 'white' }}>
              Sobre mí
            </Link>
          </Button>
          <Button color="inherit">
            <Link to="/book" style={{ textDecoration: 'none', color: 'white' }}>
              Lee mi Libro
            </Link>
          </Button>
          <Button color="inherit">
            <Link to="/contact" style={{ textDecoration: 'none', color: 'white' }}>
              Contacto
            </Link>
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default NavBar;