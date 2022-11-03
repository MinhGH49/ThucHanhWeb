import 'typeface-roboto'
import React, { useState } from 'react'
import {Drawer, Button, List, ListItem, ListItemText ,Typography} from '@mui/material'
import { BrowserRouter as Router, Route, Routes, Link, Switch } from 'react-router-dom'

import Exercise4 from './exercise4'
import Exercise5 from './exercise5/main'
import Exercise6 from './exercise6'

export default function NavBar({ links }) {

  const [open, setOpen] = useState(false);

  function toggleDrawer({type, key}) {
    if (type === 'keydown' && (key==="Tab" || key==="Shift")) {
      return;
    }

    setOpen(!open)
  }

  return (
    <>
      <Button onClick={toggleDrawer}>Open Nav</Button>
      <section>
        <Routes>
          <Route path="/ex4" element={<Exercise4/>} />
          <Route path="/ex5" element={<Exercise5/>} />
          <Route path="/ex6" element={<Exercise6/>} />
        </Routes>
      </section>
      <Drawer open={open} onClose={toggleDrawer}>
        <div style={{ width: 250}} role="presentation" onClick={toggleDrawer} onKeyDown={toggleDrawer}>
          <List>
            {links.map((link) => (
                console.log(link.name),
                <ListItem button key={link.url} component={Link} to={link.url}>
                  <Routes>
                    <Route
                      exact
                      path={link.url}
                      render={() => (
                        <ListItemText
                          primary={link.name}
                          primaryTypographyProps={{ color: "primary"}}
                        />
                      )}
                    />
                    <Route
                      path='/'
                      render={() => <ListItemText priamry={link.name} />}
                    />
                  </Routes>
                </ListItem>
              ))}
          </List>
        </div>
      </Drawer>
  </>
  );
}

NavBar.defaultProps = {
  links: [
    {url: '/ex4', name: "Exercise 4"},
    {url: '/ex5', name: "Exercise 5"},
    {url: '/ex6', name: "Exercise 6"},
  ]
}
