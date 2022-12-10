import logo from './image/logo.png';
import avatar from './image/avatar.jpg';
import axios from 'axios';
import {useState, useEffect} from 'react';
import './App.css';

function App() {
  const [jokes, setJokes] = useState([])
  const [idJoke, setIdJoke] = useState(0)
  useEffect(() => {
    if(localStorage.getItem('readedJoke')) {
      setIdJoke (parseInt(localStorage.getItem('readedJoke')))
      console.log(idJoke);
    }
    else {
      localStorage.setItem('readedJoke', idJoke);
    }
  }, [])
  
  useEffect(() => {
    axios.get(`http://127.0.0.1:8000/api/joke`)
    .then(res => {
      const data = res.data;
      setJokes(data);
      console.log(data);
    })
    .catch(error => console.log(error));
  }, [])
  const handleLikeButton = () => {
    const newIdJoke = idJoke + 1
    setIdJoke(newIdJoke)
    localStorage.setItem('readedJoke', idJoke);
    console.log(newIdJoke);
    
  }
  const handleDislikeButton = () => {
    const newIdJoke = idJoke + 1
    setIdJoke(newIdJoke)
    localStorage.setItem('readedJoke', idJoke);
    console.log(newIdJoke);
  }

  return (
    <div id="App">
    <div className="header">
      <div className="header__logo">
        <img src={logo} alt="logo" className="header__logo-img" />
      </div>
      <div className="header__profile">
        <div className="header__profile-text">
          <p className="credit">Handicrafted by</p>
          <p className="author-name">Jim HLS</p>
        </div>
        <div className="header__profile-avatar">
          <img className="header__profile-avatar-img" src={avatar} alt="profile-img" />
        </div>
      </div>
    </div>
    <div id="content">
      <div className="banner">
        <h1 className="banner__title">A joke a day keeps the doctor away</h1>
        <p className="banner__desc">If you joke wrong way, your teeth have to pay. (Serious)</p>
      </div>
      <div className="container">
        <p className="container__joke-text">
          {
            jokes.map((joke) => {
             if(idJoke == joke.idJoke) {
              return joke.content
             }
            }
            )
          }
        </p>
        <hr className="container__hr" />
        <div className="container__vote-button">
          <button 
          id="container__vote-button-like"
          onClick ={() => handleLikeButton()}>
            This is Funny!
            </button>
          <button 
          id="container__vote-button-dislike"
          onClick ={() =>  handleDislikeButton()}>
            This is not funny.
          </button>
        </div>
      </div>
    </div>
    <hr />
    <div id="footer">
      <div className="footer__desc">
        This website is created as part of Hlsolutions program. The materials contained on this website are provided
        for general information only and do not constitute any form of advice.
        HLS assumes no responsibility for the accuracy of any particular statement and accepts no liability for any loss
        or damage which may arise from reliance on the information contained on this site.
      </div>
      <div className="footer__copyright">
        Copyright 2022 HLS
      </div>
    </div>
  </div>
  );
}

export default App;
