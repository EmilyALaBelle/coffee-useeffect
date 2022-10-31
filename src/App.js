import './App.css';

function App() {
  const getCoffee = () => {
    fetch('https://api.sampleapis.com/coffee/hot')
      .then(responce => responce.json())
      .then(data => console.log(data))
      .catch((err) => {console.error(err)})

  }
  return (
    <div className="App">
      <header className="App-header">
        <h1>My Coffees App</h1>
        <button onClick={() => getCoffee()}>Get Me Coffee</button>
      </header>
    </div>
  );
}

export default App;
