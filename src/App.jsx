import { useEffect, useState } from 'react'
import './App.css'
import { dataQuotes } from './data';

function App() {
  // const [quotes, setQuotes] = useState([]); for fetching quotes
  const [quote, setQuote] = useState({
    text: "You can observe a lot just by watching.",
    author: "Yogi Berra"
  })
  const [random, setRandom] = useState(0)

  // useEffect(() => {                     for fetching quote
  //   fetch("https://type.fit/api/quotes")
  //     .then(response => response.json())
  //     .then(data => setQuotes(data))
  //     .catch(error => console.error('Error fetching products:', error));
  // }, []);

  const randomizer = () => {
    setRandom(Math.floor(Math.random() * dataQuotes.length))
    setQuote(dataQuotes[random])
    console.log(quote)
  }

  return (
    <>
      <div style={{padding: "15px", width: "500px", border: "2px solid white", borderRadius: "5px"}}>
        <h3>"{quote.text}"</h3>
        <h3>{quote.author}</h3>
        <button onClick={() => randomizer()}>Random Quote</button>
      </div>
    </>
  )
}

export default App
