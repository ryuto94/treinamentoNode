import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

class Header extends React.Component {
  render() {
    return (
      <div>
        <div className="">
          <AppBar position="static" color="default">
            <Toolbar>
              <Typography variant="h6" color="inherit">
                Treinamento Node
              </Typography>
            </Toolbar>
          </AppBar>
        </div>
      </div>
    );
  }
}

export default Header;