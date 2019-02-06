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

  addBotToArmy = (bot) => {
      let botInArmy = this.state.botArmy.find(foundBot => bot.id == foundBot.id)
      if (botInArmy != bot) {
      this.setState({
        botArmy: [...this.state.botArmy, bot]
      })
    }
  }

  removeFromBotArmy = (bot) => {
    let newBotArray = this.state.botArmy.filter(foundBot => bot.id != foundBot.id)
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
