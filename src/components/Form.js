import React, {Component} from 'react';
import { connect } from 'react-redux'
import {
  addFirstNane,
  addLastName,
  addEmail,
  addPhone,
  loginUser } from '../actions/userActions'

class Form extends Component {

	constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
    this.isSubmitEnabled = this.isSubmitEnabled.bind(this);
	}

	handleSubmit(event) {
    this.props.loginUser();
    event.preventDefault();
  }

  isSubmitEnabled() {
    const {firstName, lastName, email, phone} = this.props;
    if (lastName && email && phone && firstName){
       return true;
    }
    return false;
  }

  onNameChange = e => {
    const val = e.target.value;
    this.props.addFirstNane(val)
  }

  onLastNameChange = e => {
    const val = e.target.value;
    this.props.addLastName(val)
  }

  onMailChange = e => {
    const val = e.target.value;
    this.props.addEmail(val)
  }

  onPhoneChange = e => {
    const val = e.target.value;
    this.props.addPhone(val)
  }

  render() {
    const isEnabled = this.isSubmitEnabled();

    return (
      <div className="form-new">
				<h2>Регистрация</h2>
        <form onSubmit={this.handleSubmit}>
          <div>
						<label htmlFor="field1">
            	<span>Имя</span><input type="text" name="field1" placeholder={this.props.firstName} onChange={this.onNameChange} required />
						</label>
          </div>
          <div>
						<label htmlFor="field2">
            	<span>Фамилия</span><input type="text" name="field2" placeholder={this.props.lastName} onChange={this.onLastNameChange} required />
						</label>
          </div>
          <div>
						<label htmlFor="field3">
            	<span>Пачта</span><input type="email" name="field3" placeholder={this.props.email} onChange={this.onMailChange} required />
						</label>
          </div>
          <div>
						<label htmlFor="field4">
            	<span>Телефон</span><input type="text" name="field4" placeholder={this.props.phone} onChange={this.onPhoneChange} required />
						</label>
          </div>
          <button type="submit" className="button-style" disabled={!isEnabled}>Зарегистрироваться</button>
        </form>
       </div>
    );
  }
}

const mapStateToProps = state => ({
  firstName: state.firstName,
  lastName: state.lastName,
  email: state.email,
  phone: state.phone,
})

const mapDispatchToProps = {
  addFirstNane,
  addLastName,
  addEmail,
  addPhone,
  loginUser
}

export default connect(mapStateToProps, mapDispatchToProps)(Form);
