import React from 'react';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      text: 'this is the state text'
    }
  }

  update(event){
    this.setState({text: event.target.value})
  }

  render(){
    return (
      <div>
        <h1>{this.state.text}</h1>
        <input type='text'
        onChange={this.update.bind(this)} />
      </div>
    )
  }
}

App.propTypes = {
  txt: React.PropTypes.string,
  cat: React.PropTypes.number.isRequired
}

App.defaultProps = {
  txt: 'this is the default text'
}


export default App