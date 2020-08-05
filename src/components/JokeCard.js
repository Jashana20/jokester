import React from 'react'
import 'semantic-ui-css/semantic.min.css'


class JokeCard extends React.Component{

    state = {
        likes: false,
        dislikes: false
    }

    increaseLikes = () => {
        this.setState({
            likes: !this.state.likes, 
            dislikes: false
        })
    }

    increaseDislikes = () => {
        this.setState({
            dislikes: !this.state.dislikes, 
            likes: false
        })
    }

    render(){
        const {setup, punchline} = this.props.joke
        const {likes, dislikes} = this.state
        const buttonColour = {backgroundColor: '#E5E5E5'}
        const likedColour = {backgroundColor: '#7DE4A6'}
        const dislikedColour = {backgroundColor: '#FA8775'}
        const cardColor = {backgroundColor: '#FFE6E2'}

        return (
            <div className="cards">
                <div className="card" style={cardColor}>
                <h2>{setup}</h2>
                <h3>{punchline}</h3>
                {dislikes ? <button style={dislikedColour} className="ui left floated button" onClick={this.increaseDislikes}>:(</button>
                : <button style={buttonColour} className="ui left floated button" onClick={this.increaseDislikes}>:(</button>}
                {likes ? <button style={likedColour} className="ui right floated button" onClick={this.increaseLikes}>:)</button>
                : <button style={buttonColour} className="ui right floated button" onClick={this.increaseLikes}>:)</button>}
            </div>
            </div>
        )
    }
}

export default JokeCard