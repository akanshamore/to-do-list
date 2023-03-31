
import './App.css';
import React from 'react';


class Header extends React.Component {

  render() {

    return (
      <div>

        <h1>{this.props.title}</h1>
        <h2>{this.props.subTitle}</h2>
      </div>
    );
  }
}

class Action extends React.Component {
  handlePick = () => {

    alert('hello')
  }

  render() {

    return (
      <div>
        <button onClick={this.handlePick} disabled={!this.props.hasOptions}>What Should I do </button>
      </div>
    );
  }
}

class Option extends React.Component {

  handleRemove = () => {
    this.props.handleDeleteOption(this.props.option)

  }

  render() {

    return (

      <li>


        <p>{this.props.option}</p>
        <button onClick={this.handleRemove}>Delete</button>

      </li>
    );
  }
}

class Options extends React.Component {


  render() {


    return (


      <div>
        <button onClick={this.props.handleDeleteOptions}>Remove All</button>
        <ol>
          {

            this.props.options.map((option, index) => {

              return (

                <Option option={option} key={index} handleDeleteOption={this.props.handleDeleteOption} />
              )


            }

            )
          }

        </ol>
      </div>
    );
  }
}

class AddOption extends React.Component {

  handleOnSubmit = (e) => {
    e.preventDefault()

    const option = e.target.elements.option.value.trim();

    if (option) {
      this.props.handleAddOption(option)

    }
  }

  render() {

    return (
      <div>
        <form onSubmit={this.handleOnSubmit}>
          <input name="option" type="text" />

          <button>Add Option</button>

        </form>

      </div>

    )
  }
}

class App extends React.Component {



  state = {
    options: ['thing one', 'thing two', 'thing four'],

  }

  handleDeleteOptions = () => {


    this.setState({ options: [] })
  }



  handleAddOption = (option) => {




    this.setState({ options: this.state.options.concat(option) })
    // this.setState({ options: [] })
  }



  handleDeleteOption = (option) => {


    this.setState({ options: this.state.options.filter((item) => item !== option) })
  }


  render() {

    const title = "Indecision"
    const subTitle = "Put your life in the hands of a computer"


    return (
      <div>

        <Header title={title} subTitle={subTitle} />
        <Action hasOptions={this.state.options.length > 0} />
        <Options options={this.state.options} handleDeleteOptions={this.handleDeleteOptions} handleDeleteOption={this.handleDeleteOption} />
        <AddOption handleAddOption={this.handleAddOption} />
      </div>
    );
  }
}

export default App;
