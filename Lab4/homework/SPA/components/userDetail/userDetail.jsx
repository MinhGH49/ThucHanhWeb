import React from 'react';
import {
  Typography
} from '@material-ui/core';
import './userDetail.css';
import {HashRouter as Router, Link} from 'react-router-dom';
import fetchModel from '../../lib/fetchModelData.js';

/**
 * Define UserDetail, a React componment of UIT project #5
 */
class UserDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = { user : {}, };
  }

  getData() {
    let userId = this.props.match.params.userId;
    // Async call to server
    fetchModel(`/user/${userId}`)
      .then((response) => {
        let user = response['data'];
        if (user.user_id !== this.state.user_id) {
            this.setState({ user : user });
        }

      })
      .catch((e) => {
        console.log(e);
      });
  }
  componentDidMount() {
    console.log('loop by did mount')

    let userId = this.props.match.params.userId;
    // Async call to server
    fetchModel(`/user/${userId}`)
      .then((response) => {
        let user = response['data'];

            this.setState({ user : user });


      })
      .catch((e) => {
        console.log(e);
      });
  }

  componentDidUpdate(_, prevState) {
        console.log('loop by did update')
        console.log(prevState.user._id)
        console.log(this.state.user._id)
        let userId = this.props.match.params.userId;
        // Async call to server
        fetchModel(`/user/${userId}`)
          .then((response) => {
            let user = response['data'];

            if (userId !== this.state.user._id) {
                this.setState({ user : user });
            }

          })
          .catch((e) => {
            console.log(e);
          });





  }

  render() {
    return (
      <Router>
        <div className="user-detail">
          <Link to={"/photos/" + this.state.user._id}>
            <button type="button">Photos:</button>
          </Link>

          <div>
            <span className="h2">Fullname: {this.state.user.first_name + " " + this.state.user.last_name}</span>
          </div>
          <div className="my-2">
            <span className="fw-bold me-2">Location: </span>
            <span>{this.state.user.location}</span>
          </div>
          <div className="my-2">
            <span className="fw-bold me-2">Occupation: </span>
            <span>{this.state.user.occupation}</span>
          </div>
          <div className="my-2">
            <span className="fw-bold me-2">Description: </span>
            <span>{this.state.user.description}</span>
          </div>
        </div>
      </Router>

    );
  }
}

export default UserDetail;
