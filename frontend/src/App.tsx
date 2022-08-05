import axios from 'axios';
import React, { useState } from 'react'
import './App.css'
import Header from './components/Header'
import UserInfo from './components/UserInfo'
import { InfoApi } from './types/infoapi';

function App() {

  const [info, setInfo] = useState<InfoApi>();
  const [text, setText] = useState<string>();


  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setText(event.target.value);
  }

  const handleClick = () => {
    axios.get(`https://api.github.com/users/${text}`)
    .then((response) => {
      setInfo(response.data);
    })
    .catch((error) => {
      setInfo(undefined);
    })
  }

  return (
    <div className="app-container">
      <Header />
      <div className="app-container-input">
        <label>Encontre um perfil</label>
        <input type="text" placeholder="Digite o nome do usuário" value={text} onChange={handleChange}/>
        <button onClick={handleClick}>Pesquisar</button>
      </div>
      <div className="app-container-userinfo">
      {info && <UserInfo info={info}/>}
      </div>
    </div>
  )
}

export default App
