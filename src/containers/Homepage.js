import React, {Component} from 'react';
import Form from './../components/Form';
import Profile from './../components/Profile';

class Homepage extends Component {
	render() {
    return (
      <Container name="1" />
    )
  }
}

const Container = ({ name }) => (
  <div className="container">
    {name ? <Form firstName="First Name" lastName="Last Name" email="Email" phone="phone" />
          : <Profile />}
  </div>
);

export default Homepage;
