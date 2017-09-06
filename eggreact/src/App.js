import React from 'react';

class App extends React.Component{
  render(){
    return <Title />
  }
}

const Title = (props) => (
  <h1>Title: {props.text}</h1>
)

Title.propTypes = {
  text(props, propName, component){
    if(!(propName in props)){
      return new Error(`missing ${propName}`)
    }
    if(props[propName].length < 6){
      return new Error (`${propName} was too short`);
    }
  }
}










// class App extends React.Component {
//   render(){
//     return <button>I <Heart />React</button>
//   }
// }

// const Button = (props) => {
//   <button>{props.children}</button>
// }

// class Heart extends React.Component{
//   render(){
//     return <span>&hearts;</span>
//   }
// }















// class App extends React.Component {
//   constructor(){
//     super();
//     this.state = {
//       text: 'this is the state text'
//     }
//   }

//   update(event){
//     this.setState({text: event.target.value})
//   }

//   render(){
//     return (
//       <div>
//         <h1>{this.state.text}</h1>
//         <Widget update={this.update.bind(this)} />
//       </div>
//     )
//   }
// }

// const Widget = (props) => (        
// <input type='text' onChange={props.update} />
//)

export default App