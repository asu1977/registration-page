import React, {Component} from 'react';
import { connect } from 'react-redux'
import image from '../Images/images.png'

import {
  addFirstNane,
  addLastName,
  addEmail,
  addPhone,
  logoutUser
} from '../actions/userActions'

class Profile extends Component {
  constructor(props) {
    super(props);
  }

  exit = () => (
    this.props.addFirstNane(null),
    this.props.addLastName(null),
    this.props.addEmail(null),
    this.props.addPhone(null),
    this.props.logoutUser()
  )

  render() {
    const {firstName, lastName, phone} = this.props;
    return (
      <div className="container-fluid">
        <div className="images">
          <img src={image} className="img-circle" />
        </div>
        <div className="profile">
          <h2>{firstName} {lastName}</h2>
          <div className="buttons">
            <button className="exit"onClick={this.exit}>Выйти</button>
          </div>
          <div className="phone">
            Телефон
            <div className="phone-number">{phone}</div>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  firstName: state.firstName,
  lastName: state.lastName,
  phone: state.phone,
})

const mapDispatchToProps = {
  addFirstNane,
  addLastName,
  addEmail,
  addPhone,
  logoutUser
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile);