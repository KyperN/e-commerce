import React from 'react';
import './Header.scss';
import AppBar from '@mui/material/AppBar';
import { CssBaseline, Toolbar } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import HomeIcon from '@mui/icons-material/Home';
import { Container } from '@mui/system';
import { Link } from 'react-router-dom';
export default function Header() {
  return (
    <div>
      <CssBaseline />
      <Container maxWidth="sm">
        <AppBar className="app-bar">
          <Toolbar className="app-bar-icons">
            <Link to="/cart">
              <ShoppingCartIcon />
            </Link>
            <Link to="/home">
              <HomeIcon />
            </Link>
          </Toolbar>
        </AppBar>
      </Container>
    </div>
  );
}
