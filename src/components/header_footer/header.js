import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar'
import Button from '@material-ui/core/Button';

import { Link } from 'react-router-dom';


class Header extends Component {
    render()
     {
        return (
            <AppBar
                position="fixed"
                style={{
                    backgroundColor:'#98c5e9',
                    boxShadow: 'none',
                    padding:'10px 0',
                    borderBottom: '2px solid #00285e'
                }}
            >
                <Toolbar style={{display:'flex',
                  padding:'10px 10px'
              }}>



                    <Link to="/Favourite">
                      <Button color="inherit">Favourite </Button>
                    </Link>


                </Toolbar>
            </AppBar>
        );
    }
}

export default Header;
