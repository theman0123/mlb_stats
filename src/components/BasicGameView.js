import React, { Component } from 'react';
import styles from '../styles/css/BasicGameView.css';

export default class BasicGameView extends Component {
    
    render() {
        return (
            <div className="gameContainer">
                <div className="matchupsAndRecords">
                    <div className="awayTeam">
                        <h3> { this.props.away } </h3>
                        
                        <h1> { this.props.awayRuns } </h1>
                        
                        
                        <h4>({this.props.awayWins}-{this.props.awayLosses}) </h4>
                    </div>

                        <h5> VS. </h5>

                    <div className="homeTeam">
                        <h3> { this.props.home } </h3>
                        
                        <h1> { this.props.homeRuns } </h1>
                        
                        
                        <h4>({this.props.homeWins}-{this.props.homeLosses})</h4>
                    </div>
                </div>
                <div className="birdsView">
                    <svg className="diamond" style={ this.props.image }>
                    
                    </svg>
                    <div className="BSO">
                        <div className="balls">Balls:</div>
                        <div className="strikes">Strikes:</div>
                        <div className="outs">Outs:</div>
                    </div>
                </div>
            </div>
        )
    }
} 