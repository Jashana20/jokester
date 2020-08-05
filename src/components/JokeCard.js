import React from 'react'
import 'semantic-ui-css/semantic.min.css'
import '../index.css'


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
                {dislikes ? 
                <button style={dislikedColour} id="button" className="ui left floated button" onClick={this.increaseDislikes}><img className="icon" src="./images/frown.png" alt=""/></button>
                : 
                <button style={buttonColour} id="button" className="ui left floated button" onClick={this.increaseDislikes}><img className="icon"  src="./images/frown.png" alt=""/></button>}
                {likes ? 
                <button style={likedColour} id="button" className="ui right floated button" onClick={this.increaseLikes}><img className="icon" src="./images/small-smile.png" alt=""/></button>
                : 
                <button style={buttonColour} id="button" className="ui right floated button" onClick={this.increaseLikes}><img className="icon" src="./images/small-smile.png" alt=""/></button>}
            </div>
            </div>
        )
    }
}

export default JokeCard