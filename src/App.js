
import { useEffect } from 'react';
import Card from './Card/Card';
import { Navbar } from './Navbar/Navbar';

function App() {

  const getData = async()=>{
    const res = await fetch(`https://api.jikan.moe/v4/anime?q=naruto &sfw`);
    const resData = await res.json();

    console.log(resData);
  }

  useEffect(()=>{
    getData();

  },[])

  
  return (
    <div>
      <Navbar/>
      <Card/>
      

    </div>
  );
}

export default App;
