import React from "react";
import YourBotArmy from './YourBotArmy'
import BotCollection from './BotCollection'

class BotsPage extends React.Component {
  //start here with your code for step one
  constructor(){
    super()
    this.state = {
      allBotData: [],
      botArmy: []
    }
  }

  componentDidMount(){
    fetch('https://bot-battler-api.herokuapp.com/api/v1/bots')
    .then(res => res.json())
    .then(botData => {
      this.setState({
        allBotData: botData
      })
    })
  }

  addBotToArmy = (botKey) => {
      let botToAdd = this.state.allBotData.find(bot => botKey == bot.id)
      let botInArmy = this.state.botArmy.find(bot => botKey == bot.id)
      if (botInArmy != botToAdd) {
      this.setState({
        botArmy: [...this.state.botArmy, botToAdd]
      })
    }
  }

  removeFromBotArmy = (botKey) => {
    let newBotArray = this.state.botArmy.filter(bot => botKey != bot.id)
    this.setState({
      botArmy: newBotArray
    })
  }

  render() {
    return (
      <div>
        <YourBotArmy botArmy={this.state.botArmy} removeFromBotArmy={this.removeFromBotArmy}/>
        <BotCollection allBotData={this.state.allBotData} addBotToArmy={this.addBotToArmy} />
      </div>
    );
  }

}

export default BotsPage;
