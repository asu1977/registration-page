import React, {Component} from 'react';
import image from '../Images/images.png'
// import 'bootstrap/dist/css/bootstrap.min.css';

class Profile extends Component {
  render() {
    return (

      <div className="container-fluid">
        <div className="images">
          <img src={image} className="img-circle" />
        </div>
        <div className="profile">
          <h2>Name</h2>
          <div className="buttons">
            <button className="exit">Выйти</button>
          </div>
          <div className="phone">
            Телефон
            <div className="phone-number">333</div>
          </div>
        </div>
      </div>
    )
  }
}

export default Profile;