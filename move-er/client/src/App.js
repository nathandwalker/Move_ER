import React, { Component } from 'react';
import './App.css';
import UserInput from './components/userInput';

class App extends Component {
  constructor() {
    super();
    this.state = {
      renderedResponse: '',
      dispInputOne: 'asdf'
    }
  }

  getResponse = async() => {
    const response = await fetch('/api/hello');
    const body = await response.json();
    if (response.status !== 200) throw Error(body.message);

    return body;
  }

  componentDidMount() {
    this.getResponse()
      .then(res => {
        const someData = res;
        this.setState({ renderedResponse: someData });
      })
  }

  onChangeInputOne(newInput) {
    this.setState({
      dispInputOne: newInput
    })
  }
  render() {
    const { renderedResponse } = this.state

    return (
      <div className="app">
        <h2>Call out to API</h2>
        <p>{ renderedResponse.express }</p>
        <div>
          <UserInput changeInputOne={ this.onChangeInputOne.bind(this) } initialInputOne={ this.state.dispInputOne } />
          <p> Output: { this.state.dispInputOne }</p>
        </div>
      </div>

    );
  }
}
export default App;
