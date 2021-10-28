import React from "react";

const UPDATE_TIME = 1000;

export class Clock extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            secCounter: props.startSec
        };
    }

    componentDidMount() {
        this.tickTimerId = setInterval(
            () => this.tick(),
            UPDATE_TIME);
    }

    tick() {
        this.setState((prevState) => {
                return {secCounter: prevState.secCounter + 1 };
            }
        )
        if (this.state.secCounter === this.props.finishSec) {
            this.stopClock();
        }
    }

    stopClock() {
        clearInterval(this.tickTimerId);
    }

    componentWillUnmount() {
        this.stopClock();
    }

    render() {
        return (
            <div className="counterStyle">
                <p className="centreText">This is {this.props.numberTimer} counter!</p>
                <p className="numberText centreText">{this.state.secCounter}</p>
            </div>
        );
    }
}