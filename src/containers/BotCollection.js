import React from "react";
import BotCard from "../components/BotCard";
import BotSpecs from "../components/BotSpecs"

class BotCollection extends React.Component {
  //your code here
  constructor(){
    super()
    this.state = {
      details: false,
      botDetails: []
    }
  }


    changeDetailsState = (bot) => {
      this.setState({
        details: !this.state.details,
        botDetails: bot
      })
    }


  render(){
  	return (
  	  <div className="ui four column grid">
    		<div className="row" >
    		  {this.state.details ?
            <BotSpecs bot={this.state.botDetails} displayBotCollection={this.changeDetailsState}  addToArmy={this.props.addBotToArmy}/> :
            this.props.allBotData.map((botData) => <BotCard bot={botData} clickBotCard={this.changeDetailsState} />)}
    		</div>
  	  </div>
  	);
  }

};

export default BotCollection;
