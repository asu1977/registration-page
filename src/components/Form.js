import React, {Component} from 'react';

class Form extends Component {

	constructor(props) {
    super(props);
    const firstName = '';
    const lastName = '';
    const email = '';
    const phone = '';
    this.state = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      phone: phone,
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.isSubmitEnabled = this.isSubmitEnabled.bind(this);
	}

	handleSubmit(event) {
    const user = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      email: this.state.email,
      phone: this.state.phone,
    }
    console.log(user);
    event.preventDefault();
  }

  isSubmitEnabled() {
    if(this.state.firstName && this.state.lastName && this.state.email && this.state.phone){
       return true;
    }
    return false;
  }

  onNameChange = e => {
    const val = e.target.value;
    this.setState({firstName: val})
  }

  onLastNameChange = e => {
    const val = e.target.value;
    this.setState({lastName: val})
  }

  onMailChange = e => {
    const val = e.target.value;
    this.setState({email: val})
  }

  onPhoneChange = e => {
    const val = e.target.value;
    this.setState({phone: val})
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

export default Form;
