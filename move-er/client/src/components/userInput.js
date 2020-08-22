import React, { Component } from 'react';

class UserInput extends Component {
  constructor(props) {
    super();
    this.state = {
      inputOne: props.initialInputOne
    }
  }

  onSubmit() {
    this.props.changeInputOne(this.state.inputOne);
  }

  onHandleChange(event) {
    this.setState({
      inputOne: event.target.value
    });
  }


  render () {
    return(
      <div>
        <p>Input One:
        <input type="text" value={ this.state.inputOne }
               onChange={ (event) => this.onHandleChange(event) } /></p>
        <button onClick={ this.onSubmit.bind(this) }>Submit Input One</button>
      </div>
    )
  }
}

export default UserInput;
