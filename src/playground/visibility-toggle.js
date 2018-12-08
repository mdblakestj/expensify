class Visibility extends React.Component{
  constructor (props) {
    super(props)
    this.toggleVis = this.toggleVis.bind(this)
    this.state = {
      toggle: true
    }
  }
  toggleVis () {
    this.setState((prevState) =>{
      return {
      toggle: !prevState.toggle
    }
    })
  }
  render() {

    return(
      <div>
      <h1>Visibility Toggle</h1>
      <button onClick={this.toggleVis}>{this.state.toggle ? 'Show Details' : 'Hide details'}</button>
      <p>{!this.state.toggle ? 'Details': ''}</p>
      </div>
    )

    }
  }



//methods render, constructor, togglevis
//visibility - false

ReactDOM.render(<Visibility />, document.getElementById('app'))



// const appRoot = document.getElementById('app')
//
//
// const options = {
//   message: "Show details",
//   messageTwo: "Hide details",
//   details: ""
// }
//
//
// let counter = true;
// // const toggle = () => {
// //   if (counter){
// //     return <button onClick={toggle}> Hide Details </button>
// //     <p>Here are the details</p>
// //   } else {
// //     return <button onClick={toggle}>Show Details</button>
// //   }
// // }
//
// let toggle = () => {
//   if (counter) {
//     options.message = "Hide Details"
//     options.details = "Here are the deets"
//     counter = false;
//     renderIt();
//   } else {
//     options.message = "Show details"
//     counter = true;
//     options.details = ""
//     renderIt();
//   }
// }
//
// const renderIt = () => {
//   const template = (
//     <div>
//     <h1>Visibility Toggle</h1>
//     <button onClick={toggle}>{options.message}</button>
//     <h1>{options.details}</h1>
//     </div>
//   )
//   ReactDOM.render(template, appRoot);
// }
//
// renderIt()
//
//
// //show details
// //hide details
