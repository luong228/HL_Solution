import logo from './image/logo.png';
import avatar from './image/avatar.jpg';
import './App.css';

function App() {
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
          A child asked his father, "How were people born?"
          So his father said, "Adam and Eve made babies, then their babies became adults and made babies, and so on."
          The child then went to his mother, asked her the same question and she told him, "We were monkeys then we evolved to become like we are now."
          The child ran back to his father and said, "You lied to me!"
          His father replied, "No, your mom was talking about her side of the family."</p>
        <hr className="container__hr" />
        <div className="container__vote-button">
          <button id="container__vote-button-like">This is Funny!</button>
          <button id="container__vote-button-dislike">This is not funny.</button>
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
