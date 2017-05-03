import React, { Component } from 'react';
import './styles/css/App.css';
import axios from 'axios';
import Moment from 'moment';
import Clock from './components/Clock.js';
import BasicGameView from './components/BasicGameView.js';
import who from './styles/img/who.svg';
import what from './styles/img/what.svg';
import IDontKnow from './styles/img/IDontKnow.svg';
import who_What from './styles/img/who_What.svg';
import what_IDontknow from './styles/img/what_IDontknow.svg';
import who_IDontKnow from './styles/img/who_IDontKnow.svg';
import who_What_IDontknow from './styles/img/who_What_IDontknow.svg';
import bases_empty from './styles/img/bases_empty.svg';


class App extends Component {
    constructor(props) {
        super(props) 
        
        this.state = {
            date: Moment().format( 'YYYY/MM/DD' ),
            person: '',
            games: [],
            data: '',
            loading: true,
            games_in_progress: []
        }
    
    }
    
    /*hitting the api with error: 'developer inactive' and/or 596*/
    componentWillMount() {
           
        axios.get('https://api.sportradar.us/mlb-t6/games/' + this.state.date + '/boxscore.json?api_key=a3g3zas4endwah44ane2jpxf')
            .then(res => {
                let DailyGames = res.data.league.games;
                console.log('res', res)
                this.setState( { 
                    games: this.state.games.concat( DailyGames )
                } )
            
        } )
            .catch(function(res) {
                if(res instanceof Error) {
                console.log(res.message);
            } else {
                console.log(res.data);
        }
        });
        {/*need to chain these two api calls together to get game_id for the majority of the other information*/}
        this.state.games.forEach(game => {
            console.log(game_id)
            let game_id = game.game.id;
        axios.get('https://api.sportradar.us/mlb-t6/games/' + game_id + '/boxscore.json?api_key=a3g3zas4endwah44ane2jpxf')
          .then(res => {
              console.log(res)
          });
        })
    }
    componentDidMount() {
        setTimeout(() => {
        console.log(this.state)
        }, 2000);
    }
        
    
  render() {
      
      var runnersOn = (baserunners) => {
          {/*check baserunners*/}
          switch(baserunners) {
              case(1):
                  return { backgroundImage: `url(${ who })` };
                  break;
              case(2):
                  return { backgroundImage: `url(${ who_What })` };
                  break;
              default:
                  return { backgroundImage: `url(${ bases_empty })` }
          }
      }

      const games = this.state.games.map( game => (
          //switch statement that sets a variable image based on baserunners//
          
          <BasicGameView
              away={ game.game.home.name }
              home={ game.game.away.name }
              key={ game.game.id}
              awayWins={ game.game.away.win }
              awayLosses={ game.game.away.loss }
              homeWins={ game.game.home.win }
              homeLosses={ game.game.away.loss }
              awayRuns= { game.game.away.runs }
              awayHits= { game.game.away.hits }
              homeRuns= { game.game.home.runs }
              homeHits= { game.game.home.hits }
              image={ runnersOn(2) }
          />
              
      ));

    return (
      <div className="App">
        
        <Clock />
        
        <div className="App">
            
            { games }
        
        </div>
      </div>
    );
  }
}

export default App;
