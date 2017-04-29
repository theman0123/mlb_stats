import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import Moment from 'moment';
import Clock from './components/Clock.js';
import BasicGameView from './components/BasicGameView.js';


class App extends Component {
    constructor(props) {
        super(props) 
        
        this.state = {
            date: Moment().format( 'YYYY/MM/DD' ),
            person: '',
            games: [],
            data: '',
            loading: true
        }
    
    }
    
    /*hitting the api with error: 'developer inactive' and/or 596*/
    componentWillMount() {
           
        axios.get('https://api.sportradar.us/mlb-t6/games/' + this.state.date + '/boxscore.json?api_key=a3g3zas4endwah44ane2jpxf')
            .then(res => {
                let DailyGames = res.data.league.games;
                console.log('res', res)
                this.setState( { games: this.state.games.concat( DailyGames ) } )
            
        } )
            .catch(function(res) {
                if(res instanceof Error) {
                console.log(res.message);
            } else {
                console.log(res.data);
        }
        });
    }
    componentDidMount() {
//        setTimeout(() => {
//        console.log(this.state)
//        }, 2000);
    }
        
    
  render() {

      const games = this.state.games.map( game => (
          <BasicGameView
              away={ game.game.home.name }
              home={ game.game.away.name }
              key={ game.game.id}
          />
              
      ));

    return (
      <div className="App">
        Let's return some data!
        <Clock />
        <div>
            { games }
        </div>
      </div>
    );
  }
}

export default App;
