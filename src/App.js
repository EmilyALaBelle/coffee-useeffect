import { useState, useEffect } from 'react'
import './App.css';
import SingleCoffee from './SingleCoffee';

function App() {
  const [data, setData] = useState([{ name: 'Colada', price: '40 cents' }])

  useEffect(() => {
    getCoffee()
  }, [])

  const getCoffee = () => {
    fetch('https://api.sampleapis.com/coffee/hot')
      .then(responce => responce.json())
      .then(data => setData(data))
      .catch((err) => { console.error(err) })

  }

  console.log('my data', data)

  return (
    <div className="App">
      <main>
        <h1>Coffees by Sample API</h1>
        <button onClick={() => getCoffee()}>Get Me Coffee</button>
        <div className='menu-items'>
          {data.map(item => {
            console.log('each item', item)
            return <SingleCoffee entireObject={item} />
          })}


        </div>
      </main>
    </div>
  );
}

export default App;
