import React from 'react';
import {
  AppBar, Toolbar, Typography
} from '@material-ui/core';
import './TopBar.css';

/**
 * Define TopBar, a React componment of UIT project #5
 */
class TopBar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <AppBar className="UIT-topbar-appBar" position="absolute">
        <Toolbar>
          <Typography variant="h5" color="inherit">
              Tran Quang Minh - 19521856
          </Typography>
        </Toolbar>
      </AppBar>
    );
  }
}

export default TopBar;
