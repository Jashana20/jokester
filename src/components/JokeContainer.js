import React from 'react'
import JokeCard from './JokeCard'
import 'semantic-ui-css/semantic.min.css'

class JokeContainer extends React.Component{
    render(){
        return (
            <div>
                 {this.props.jokes.map(joke => <JokeCard joke={joke} key={joke.id} />)}
            </div>
        )
    }
}

export default JokeContainer