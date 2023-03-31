
import './App.css';
import React from 'react';


class Header extends React.Component {

  render() {

    console.log("inside header");
    console.log("props are", this.props)
    return (
      <div>

        <h1>{this.props.title}</h1>
        <h2>{this.props.subTitle}</h2>
      </div>
    );
  }
}

class Action extends React.Component {

  render() {

    return (
      <div>
        <button>What Should I do </button>
      </div>
    );
  }
}

class Option extends React.Component {

  render() {

    return (

      <div>

        <p>Option component here</p>
      </div>
    );
  }
}

class Options extends React.Component {

  render() {

    return (

      <div>
        <p>options component here</p>
        <Option />
        <Option />
        <Option />
        <Option />

      </div>
    );
  }
}

class AddOption extends React.Component {

  render() {

    return (

      <p>AddOption component here</p>
    )
  }
}

class App extends React.Component {
  render() {

    return (
      <div>

        <Header title="Indecision" subTitle="Put your life in the hands of a computer" />
        <Action />
        <Options />
        <AddOption />
      </div>
    );
  }
}

export default App;
