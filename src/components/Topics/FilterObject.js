import React, {Component} from 'react'

class FilterObject extends Component{
    constructor(){
        super()
        this.state = {
            hockeyPlayers: [
                {
                    name: "Joe Sakic",
                    position: "center",
                },
                {
                    name: "Peter Forsberg",
                    position: "left wing",
                    injury: "charlie leg"
                },
                {
                    name: "Patrick Roy",
                    position: "goalie",
                    maskColor: "red"
                }
            ],

            userInput: '',
            filteredPlayers: []
        }
    }

    handleChange(val){
        this.setState({userInput: val})
    }

    filterPlayers(prop){
        let hockeyPlayers = this.state.hockeyPlayers
        let filteredPlayers = []

        for(let i = 0; i < hockeyPlayers.length; i++){
            if(hockeyPlayers[i].hasOwnProperty(prop)){
                filteredPlayers.push(hockeyPlayers[i])
            }
        }
        this.setState({filteredPlayers: filteredPlayers})
    }

    render(){
        return(
            <div className="puzzleBox filterObjectPB">
                <h4>Filter Object</h4>
                <span className="puzzleText">Original: {JSON.stringify(this.state.hockeyPlayers, null, 10)}</span>
                <input className="inputLine" onChange={(e) => this.handleChange(e.target.value)}/>
                <button className="confirmationButton" onClick={() => this.filterPlayers(this.state.userInput)} > Filter</button>
                <span className="resultsBox filterObjectRB"> Filtered: {JSON.stringify(this.state.filteredPlayers, null, 10)}</span>
            </div>
        )
    }
}

export default FilterObject