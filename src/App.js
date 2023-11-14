import { useState , useEffect} from 'react';
import Card from './Card/Card';
import { Navbar } from './Navbar/Navbar';

function App() {

  const [animeData, setAnimeData] = useState();
  const getData = async()=>{
    const res = await fetch(`https://api.jikan.moe/v4/anime?q=naruto &sfw`);
    const resData = await res.json();

    setAnimeData(resData.data);
  }

  useEffect(()=>{
    getData();

  },[])
  
  return (
    <div>
      <Navbar/>
      <Card card ={animeData}/>
      

    </div>
  );
}

export default App;
