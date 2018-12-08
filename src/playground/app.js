class IndecisionApp extends React.Component {
  constructor (props) {
    super(props);
    this.handleDelete = this.handleDelete.bind(this)
    this.handleDeleteOption = this.handleDeleteOption.bind(this)
    this.addOption = this.addOption.bind(this)
    this.handlePick =this.handlePick.bind(this)
    this.state = {
      options: props.options
    }
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
  addOption(option) {
    if (!option) {
      return 'Please enter a valid value';
    } else if (this.state.options.indexOf(option) > -1){
      return 'This option already exists';
    } else {
      this.setState((prevState) => ({options: prevState.options.concat(option)}))
    }
  }
  handlePick() {
    const rnum = Math.floor(Math.random() * this.state.options.length);
    const option = this.state.options[rnum];
    alert(option);
  }
  handleDelete() {
    this.setState(() => ({ options: []}))
  }
  handleDeleteOption(option) {
    console.log("hdo", option);
    const index = this.state.options.indexOf(option);
    this.setState((prevState) => ({options: prevState.options.filter(opt => opt != option )}))
    console.log(this.state.options)
  }
  render () {
    // const title = 'Indecision App'
    // const subtitle = 'Put your life in the hands of a computer'
    return (
      <div>
        <Header />
        <Action hasOptions={this.state.options.length > 0}
        handlePick={this.handlePick}/>
        <Options options={this.state.options}
        handleDelete={this.handleDelete} handleDeleteOption={this.handleDeleteOption}/>
        <Addoptions addOption={this.addOption} />
      </div>
    )
  }
}

const Header = (props) => {
  return (
      <div>
        <h1>{props.title}</h1>
        {props.subtitle && <h2>{props.subtitle}</h2>}
      </div>
    );
  }

Header.defaultProps = {
  title: 'Indecision App',
  subtitle: 'Put your life in the hands of a computer'
};
const Action = (props) => {
  return (
    <div>
      <button onClick={props.handlePick}
       disabled = {!props.hasOptions}
      >What Should I do?</button>
    </div>
  )
}

const Options = (props) => {
  return (
    <div>
      <button onClick={props.handleDelete}>Remove All</button>
      {props.options.length === 0 && <p>Please add an option to get started</p>}
      {props.options.map((option) => ( <Option key={option} optionText ={option} handleDeleteOption = {props.handleDeleteOption}/> ))}


    </div>
  )
}

const Option = (props) => {

    return (
      <div> {props.optionText}
            <button onClick ={(e) => {props.handleDeleteOption(props.optionText)}}>Remove Option</button>
      </div>
      // <Option/>
      // {props.options.map((option) => { return <p key={option}>{option} <button onClick={props.handleDeleteOption}>Remove Option</button></p>})}
    )
}


class Addoptions extends React.Component {
  constructor(props){
    super(props)
    this.onFormSubmit = this.onFormSubmit.bind(this);
    this.state = {
      error: undefined
    }
  }
  onFormSubmit(e){
    e.preventDefault();
    const option = e.target.elements.option.value;
    const error = this.props.addOption(option);
    this.setState(() =>({ error: error }))
    if (!error) {
      e.target.elements.option.value = ''
    }

  }
  render() {
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.onFormSubmit}>
          <input type="text" name="option"/>
          <button>Add Option</button>
        </form>

      </div>
    )
  }
}


IndecisionApp.defaultProps = {
  options: []
}


ReactDOM.render(<IndecisionApp />, document.getElementById('app'))
