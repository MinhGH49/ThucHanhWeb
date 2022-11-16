import React from 'react';
import {
  List,
  ListItem,
  ListItemText,
} from '@material-ui/core';
import UserPhoto from '../userPhoto/UserPhoto';
import './userPhotos.css';
import fetchModel from '../../lib/fetchModelData.js';

/**
 * Define UserPhotos, a React componment of CS142 project #5
 */
class UserPhotos extends React.Component {
  constructor(props) {
    super(props);
    this.state = { photos : [], user: ''};

  }

  componentDidMount() {
    this.componentDidUpdate();
  }

  componentDidUpdate() {
    let userId = this.props.match.params.userId;
    console.log('loop by did update')
    if (this.state.user !== userId) {
      // Async call to server
      fetchModel(`/photosOfUser/${userId}`)
        .then((response) => {
          let photos = response['data'];


          this.setState({ photos : photos, user: userId});
          // if(userId !== this.state.photos.user_id) {
          //   this.setState({ photos : photos });
          // }
        })
        .catch((e) => {
          console.log(e);
        });
    }

  }

  render() {
    return (
      <List component="div">
        {
          this.state.photos.map((photo) =>
            <div key={photo._id}>
              <ListItem divider={false} >
                <UserPhoto photo={photo}/>
              </ListItem>
            </div>
          )
        }
      </List>
    );
  }
}


export default UserPhotos;
