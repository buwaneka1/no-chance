import React, { Component } from 'react';

class Vote extends Component {
    render() {
        return (
            <div className="score">
                <div className="score__up layout--center">++</div>
                <div className="score__board layout--center">100</div>
                <div className="score__down layout--center">--</div>
            </div>
        );
    }
}

export default Vote;