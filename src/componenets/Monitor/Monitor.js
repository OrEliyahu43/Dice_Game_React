import React from "react";
import './Monitor.css'
class Monitor extends React.Component {

    state = {
        rollDice: '',
        isRoll:false,
        maxScore:''
    
    }

    roll = (event) => {
        const num1 = 1 + Math.floor(Math.random() * 6);
        const num2 = 1 + Math.floor(Math.random() * 6);
        const array = this.drawDice(num1, num2);
        this.props.updateTemp(num1+num2);
        this.setState({ rollDice: array , isRoll: true})
        this.props.setMaxScore(this.state.inputValue);
    }
    drawDice(num1, num2) {

        const diceArr = [];
        diceArr.push(<img key="1" className="dice-picture" alt="problem" src={require(`../../assets/dice-game-starter-pack/dice-${num1}.png`)}></img>)
        diceArr.push(<img key="2" className="dice-picture" alt="problem" src={require(`../../assets/dice-game-starter-pack/dice-${num2}.png`)}></img>)
        return diceArr;
    }

    hold = () => {
        if(this.state.isRoll){
            this.props.checkGame()
            this.setState({isRoll:false})
        }
    }

    setMaxScore = (event) => {
        const maxScore = event.target.value;

    }



    render() {

        return (
            <div className="monitor-container">
                <div className="monitor-button">
                    <img className="icon" alt="problem" src={require('./functionality_icons/plus.png')}></img>
                    <span className="content">NEW GAME</span>
                </div>

                <div className="dice-container">

                    {this.state.rollDice !== '' && this.state.rollDice}

                </div>
                <div onClick={this.roll} className="monitor-button">
                    <img className="icon" alt="problem" src={require('./functionality_icons/hand.png')}></img>
                    <span className="content">ROLL DICE</span>
                </div>
                <div onClick= {this.hold} className="monitor-button">
                    <img className="icon" alt="problem" src={require('./functionality_icons/save.png')}></img>
                    <span className="content">HOLD</span>
                </div>

                <div className="final-score-container">
                    <input value={this.state.maxScore} onChange={(e) => {this.setState({maxScore:e.target.value})}} className="no-outline" type="text" placeholder="Final Score"></input>
                </div>
            </div>

        )
    }


}

export default Monitor;