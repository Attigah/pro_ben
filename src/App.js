import './App.css';


const Person = (props) => {
  return (
    <>
    <h1>Name: {props.name}</h1>
    <h2>Last Name:{props.LastName}</h2>
    <h2>Age: {props.age}</h2>
    </>
  )
}
const App = () => {
  return (
    <div className="App">
      <Person name={'John'} LastName={'Doe'} age={25}/>
      <Person name={'Mary'} LastName={'Doa'} age={24}/>
      <Person />
      <Person />
      <Person />
    </div>
  );
}

export default App;
