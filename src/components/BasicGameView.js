import React, { Component } from 'react';
import styles from '../styles/BasicGameView.css';

export default class BasicGameView extends Component {
    
    render() {
        return (
            <div className="container">
                <div className="matchTitle">
                    <h3> { this.props.away } </h3>
                    <h4> VS. </h4>
                    <h3> { this.props.home } </h3>
                </div>
                <div className="diamond">
                </div>
            </div>
        )
    }
} 