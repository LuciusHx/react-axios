import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios';

function App() {

  const [data, setDados] = useState();

useEffect(() => {
  console.log('chamei cuida'), []
});

const realizarRequest = async () => {
  try {
    const res1 = await axios('https://api.discogs.com/releases/15752776')
    console.log(res2)
  } catch(erro) {
    console.log(erro)
  }
 } 

 realizarRequest()


  return (
    <div>
      <div>imagem</div>
      <div>{dados.title}</div>
      <div>{dados.artist_sort}</div>
      <div>
        <div>tag 1</div>
        <div>tag 2</div>
      </div>
    </div>
  );
}

export default App
