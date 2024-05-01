import { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [quotes, setQuotes] = useState([]);
  useEffect(()=>{
    axios.get('/api/quotes')
    .then((response)=>{
      //console.dir(response.data);
      setQuotes(response.data);
    }).catch(error=>{
      console.log(error);
    })
  })
  return (
    <>
      
        <h2>Full stack</h2>
        <p>Quotes: {quotes.length}</p>    
      
      {
        quotes.map((quote, index)=>
           <div key={quote.id}>
              <h3>{quote.title}</h3>
              <p>{quote.content}</p>
          </div>
    )
      }
      
    </>
  );
}

export default App;
