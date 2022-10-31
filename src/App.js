import './App.css';

function App() {
  const getCoffee = () => {
    fetch('https://api.sampleapis.com/coffee/hot')
      .then(responce => responce.json())
      .then(data => console.log(data))
      .catch((err) => { console.error(err) })

  }
  return (
    <div className="App">
      <header className="App-header">
        <h1>My Coffees App</h1>
        <button onClick={() => getCoffee()}>Get Me Coffee</button>
      </header>
      <main>
        <h1>Coffees by Sample API</h1>
        <div className='menu-items'>
          <div className="menu-items__items">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/A_small_cup_of_coffee.JPG/640px-A_small_cup_of_coffee.JPG" alt="" />
            <div>
              <h3>1. Black American Coffee</h3>
              <p>Black Coffee is as simple as it gets</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
