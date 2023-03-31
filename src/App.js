
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
        <button onClick={this.handlePick}>What Should I do </button>
      </div>
    );
  }
}

class Option extends React.Component {

  render() {

    return (

      <li>


        <p>{this.props.option}</p>

      </li>
    );
  }
}

class Options extends React.Component {
  handleRemoveAll = () => {

    alert("handleRemoveAll")
  }

  render() {


    console.log("inside options");
    console.log("props are", this.props)

    return (


      <div>
        <button onClick={this.handleRemoveAll}>RemoveAll</button>
        <ol>
          {

            this.props.options.map((option) => {

              return (

                <Option option={option} key={option} />
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

    alert("submit option")
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


  render() {

    const title = "Indecision"
    const subTitle = "Put your life in the hands of a computer"
    const options = ['thing one', 'thing two', 'thing four']

    return (
      <div>

        <Header title={title} subTitle={subTitle} />
        <Action />
        <Options options={options} />
        <AddOption />
      </div>
    );
  }
}

export default App;
