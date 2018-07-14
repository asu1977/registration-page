import React, {Component} from 'react';
import { connect } from 'react-redux'
import Form from './../components/Form';
import Profile from './../components/Profile';

class Homepage extends Component {
	render() {
    const userIsLogin = this.props.userIsLogin
    return (
      <Container name={!userIsLogin} />
    )
  }
}

const Container = ({ name }) => (
  <div className="container">
    {name ? <Form firstName="First Name" lastName="Last Name" email="Email" phone="phone" />
          : <Profile />}
  </div>
);

const mapStateToProps = state => ({
  userIsLogin: state.userIsLogin,
})


export default connect(mapStateToProps, null)(Homepage);
