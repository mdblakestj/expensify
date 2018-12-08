import React from 'react'
import Addoptions from './AddOption.js'
import Option from './Option.js'
import Header from './Header.js'
import Action from './Action.js'
import Options from './Options.js'
import OptionModal from './OptionsModal.js'



class IndecisionApp extends React.Component {
  state = {
    options: [],
    selectedOption: undefined
  }


  componentDidMount(){
    try {
      const json = localStorage.getItem('options')
      const options = JSON.parse(json);
      if (options) {
        this.setState(() => ({options}))
      }

    } catch(e) {

    }
  };
  componentDidUpdate(prevProps, prevState){
    if(prevState.options.length !== this.state.options.length) {
      const jsonOptions = JSON.stringify(this.state.options)
      localStorage.setItem('options', jsonOptions);

    }

      console.log("Component Did Update")};
  componentWillUnmount(){console.log("Component unmounted")}
  changeSelectedOption = () => {
    this.setState(() => ({selectedOption: undefined}))
  }
  addOption = (option) => {
    if (!option) {
      return 'Please enter a valid value';
    } else if (this.state.options.indexOf(option) > -1){
      return 'This option already exists';
    } else {
      this.setState((prevState) => ({options: prevState.options.concat(option)}))
    }
  }
  handlePick = () => {
    const rnum = Math.floor(Math.random() * this.state.options.length);
    const option = this.state.options[rnum];
    this.setState(() => ({selectedOption: option}));

  }
  handleDelete = () => {
    this.setState(() => ({ options: []}))
  }
  handleDeleteOption = (option) => {
    console.log("hdo", option);
    const index = this.state.options.indexOf(option);
    this.setState((prevState) => ({options: prevState.options.filter(opt => opt != option )}))

  }
  render () {

    return (
      <div>
        <Header />
        <Action hasOptions={this.state.options.length > 0}
        handlePick={this.handlePick}/>
        <Options options={this.state.options}
        handleDelete={this.handleDelete} handleDeleteOption={this.handleDeleteOption}/>
        <Addoptions addOption={this.addOption} />
        <OptionModal
          selectedOption={this.state.selectedOption} changeSelectedOption={this.changeSelectedOption}
          />
      </div>
    )
  }

}


IndecisionApp.defaultProps = {
  options: []
}

export default IndecisionApp
