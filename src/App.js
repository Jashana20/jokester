import React from 'react';
import './App.css';
import JokeContainer from './components/JokeContainer'
import 'semantic-ui-css/semantic.min.css'

class App extends React.Component{


  state = {
    tenRandomJokes : []
  }

  componentDidMount(){
      fetch("https://official-joke-api.appspot.com/random_ten")
      .then(res => res.json())
      .then(json => this.setState({ tenRandomJokes: json }))
      // .then(res => console.log(res))
  } 

  render(){
    return (
      <JokeContainer jokes={this.state.tenRandomJokes} />
    )
  }
}

export default App;
