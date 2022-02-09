import React, {useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [response, setResponse] = useState("");

  // Note: the empty deps array [] means
  // this useEffect will run once
  // similar to componentDidMount()
  useEffect(() => {
    fetch("http://localhost:5000/api/park")
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setResponse(result.message);
          console.log(result.message);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }, [])

  
  if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <div>
      {response}
      </div>
    );
  }
}

export default App;
