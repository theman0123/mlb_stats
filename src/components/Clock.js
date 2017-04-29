import React, { Component } from 'react';
import Moment from 'moment';

export default class Clock extends Component {
    
    constructor(props) {
        super(props);
        
        this.state = {
            date: ''
        }
    }
    
    componentWillMount () {
    
        this.setState( { date: Moment().format('YYYY/MM/DD') } );
            console.log(Moment().format('L'));
    }
    
    render() {
        return (
            <div>
                Today is: { this.state.date }
            </div>
        )
    }
}