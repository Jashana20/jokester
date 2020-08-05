import React from 'react'
import JokeCard from './JokeCard'
import 'semantic-ui-css/semantic.min.css'
import '../index.css'

class JokeContainer extends React.Component{
    render(){
        return (
            <div className="center">
                <div className="row">
                    {this.props.jokes.map(joke => <JokeCard joke={joke} key={joke.id} />)}
                </div>
            </div>
        )
    }
}

export default JokeContainer