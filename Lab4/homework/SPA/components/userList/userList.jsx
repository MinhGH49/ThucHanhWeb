import React from 'react';
import {
  Divider,
  List,
  ListItem,
  ListItemText,
  Typography,
}
from '@material-ui/core';
import './userList.css';
import fetchModel from '../../lib/fetchModelData'
import {HashRouter as Router, Route, Link } from 'react-router-dom'
/**
 * Define UserList, a React componment of UIT project #5
 */
class UserList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { users: [],};
  }

  //fetch data
  componentDidMount() {
    fetchModel('/user/list')
      .then((res) => {
        let users = res['data']
        this.setState({users: users})
      })
      .catch((err) => {
        console.log(err);
      })
  }

  //concate user name
  userFullName(user) {
    if (!user) return "";
    return user.first_name + " " + user.last_name;
  }

  //render list of users based on fetched data (stored in state 'users')
  UserListItems() {
    return (
      <>
        {
          this.state.users.map((user) => (
            <ListItem divider={true} key={user._id}>
             <Link to={"/users/" + user._id} className="user-list-item">
               <ListItemText primary={this.userFullName(user)} />
             </Link>
           </ListItem>
          ))
        }
      </>
    )
  }

  render() {
    return (
      <Router>
        <List component="nav">
          {this.UserListItems()}
        </List>
      </Router>
    )
  }
  // render() {
  //   return (
  //     <div>
  //       <Typography variant="body1">
  //         This is the user list, which takes up 3/12 of the window.
  //         You might choose to use <a href="https://mui.com/components/lists/">Lists</a> and <a href="https://mui.com/components/dividers/">Dividers</a> to
  //         display your users like so:
  //       </Typography>
  //       <List component="nav">
  //         <ListItem>
  //           <ListItemText primary="Item #1" />
  //         </ListItem>
  //         <Divider />
  //         <ListItem>
  //           <ListItemText primary="Item #2" />
  //         </ListItem>
  //         <Divider />
  //         <ListItem>
  //           <ListItemText primary="Item #3" />
  //         </ListItem>
  //         <Divider />
  //       </List>
  //       <Typography variant="body1">
  //         The model comes in from window.UITmodels.userListModel()
  //       </Typography>
  //     </div>
  //   );
  // }
}

export default UserList;
