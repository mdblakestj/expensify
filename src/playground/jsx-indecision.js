console.log("hello react")

const app = {
  title: 'Indecision App',
  subtitle: 'What Should I do? I cannot decide',
  options: []

}
const onMakeDecision = () => {
  const rnum = Math.floor(Math.random() * app.options.length);
  const option = app.options[rnum];
  alert(option);
}
const numbers = [55,100,1000];

const renderIt = () => {
  const template = (
    <div>
    <h1>{app.title}</h1>
    {app.subtitle && <p>{app.subtitle}</p>}
    {app.options.length > 0 ? "Here are your options:": "No options"}
    <button disabled={app.options.length === 0} onClick={onMakeDecision}>What Should i do?</button>
    <button onClick={removeAll}>Remove All</button>
    {

    }
    <ol>
      {app.options.map((option) =>{
        return <li key={option}>{option}</li>

      })}

    </ol>
    <form onSubmit={onFormSubmit}>
        <input type="text" name="option"/>
        <button>Add Option</button>
    </form>
    </div>
  )
  ReactDOM.render(template, appRoot);
}
const removeAll = (e) =>{
  app.options = [];
  renderIt();
}
const onFormSubmit = (e) => {
  e.preventDefault();
  const option = e.target.elements.option.value;
  if (option) {
    app.options.push(option)
    e.target.elements.option.value = '';
    renderIt();

  }
}
// const template = (
//   <div>
//   <h1>{app.title}</h1>
//   {app.subtitle && <p>{app.subtitle}</p>}
//   {app.options.length > 0 ? "Here are your options:": "No options"}
//   <p>{app.options.length}</p>
//   <ol>
//     <li>Item one</li>
//     <li>Item two</li>
//     <li>Item three</li>
//   </ol>
//   <form onSubmit={onFormSubmit}>
//       <input type="text" name="option"/>
//       <button>Add Option</button>
//   </form>
//   </div>
// )

const appRoot = document.getElementById('app')
// ReactDOM.render(template, appRoot);
renderIt();
