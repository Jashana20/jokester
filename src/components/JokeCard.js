import React from 'react'
import 'semantic-ui-css/semantic.min.css'

class JokeCard extends React.Component{

    state = {
        likes: false,
        dislikes: false
    }

    increaseLikes = () => {
        this.setState({likes: !this.state.likes})
    }

    increaseDislikes = () => {
        this.setState({dislikes: !this.state.dislikes})
    }

    render(){
        const {setup, punchline} = this.props.joke
        const {likes, dislikes} = this.state
        const buttonColour = {backgroundColor: '#E5E5E5'}
        const likedColour = {backgroundColor: '#7DE4A6'}
        const dislikedColour = {backgroundColor: '#FA8775'}
        const cardColor = {backgroundColor: '#FFE6E2'}

        return (
            <div className="ui cards">
                <div className="card" style={cardColor}>
                <h2>{setup}</h2>
                <h3>{punchline}</h3>
                {likes ? <button style={likedColour} onClick={this.increaseLikes}>:)</button>
                : <button style={buttonColour} onClick={this.increaseLikes}>:)</button>}
                {dislikes ? <button style={dislikedColour} onClick={this.increaseDislikes}>:(</button>
                : <button style={buttonColour} onClick={this.increaseDislikes}>:(</button>}
            </div>
            </div>
        )
    }
}

export default JokeCard