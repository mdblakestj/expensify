import React from 'react';




export default class AddOptions extends React.Component {
  state = {
    error: undefined
  };
  
  onFormSubmit = (e) => {
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
