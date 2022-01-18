import React, { useEffect, useState } from 'react';
import Loading from './Loading';
import Page from './Page';

const url = 'https://api.nasa.gov/planetary/apod?api_key=pz0n8rBkWRF8RMtB4FrLvBEpeNblcimTWVg2qhGc&count=10&thumbs=true';

function App() {

  const [loading, setLoading] = useState(true);

  const [data, setData] = useState([]);

  const fetchData = async () => {
    setLoading(true);

    try {
      const response = await fetch(url);
      const data = await response.json();
      setLoading(false);
      setData(data);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
   }
  
  useEffect(() => {
    fetchData()
  }, [])

  if (loading) {
    return (
      <main>
        <Loading /> 
      </main>
    );
  }

  return (
    <main>
      <Page 
        items = {data}
      />
    </main>
  );
}

export default App;
