import React from 'react';

import '../assets/nav.css';

function Navi() {
  return (
    <>
 
  <header className="header">
    <div className="logo clear-fix">
      <div className="logo-header">
        <img src="https://i.imgur.com/9daMu3X.png" alt="" />
        <a href="">
          <span className="logo-title">ZEN YOGA</span>
        </a>
      </div>
      <div className="search">
        <i className="fa fa-search" />
        <input
          type="text"
          className="search-box"
          placeholder="What are you searching for?"
        />
      </div>
    </div>
  </header>
  <div className="content clear-fix">
    <div className="side-bar">
      <ul>
        <li>
          <i className="fa fa-tachometer" />
          <a href="">LOGIN</a>
        </li>
        <li className="active">
          <i className="fa fa-line-chart" />
          <a href="">User Study</a>
        </li>
        <li>
          <i className="fa fa-paper-plane" />
          <a href="">Launch Study</a>
        </li>
        <li>
          <i className="fa fa-file-text" />
          <a href="">View Archieve</a>
        </li>
        <li>
          <i className="fa fa-user" />
          <a href="">My Account</a>
        </li>
      </ul>
    </div>
    <div className="itens">
      <div className="title">User Study</div>
      <div className="item">
        <div className="titulo">Your Business</div>
        <div className="description">
          Lorem ipsum dolor sit amet, be a nerd consectetur adipisicing elit.
          Reprehenderit, aperiam.
        </div>
      </div>
      <div className="item">
        <div className="titulo">My Business</div>
        <div className="description">
          Lorem ipsum dolor sit amet, eat your ass and pussy consectetur
          adipisicing elit. Reprehenderit, aperiam.
        </div>
      </div>
      <div className="item">
        <div className="titulo">My Business</div>
        <div className="description">
          Lorem ipsum dolor sit amet, eat your ass and pussy consectetur
          adipisicing elit. Reprehenderit, aperiam.
        </div>
      </div>
      
      <div className="item">
        <div className="titulo">My Business</div>
        <div className="description">
          Lorem ipsum dolor sit amet, eat your ass and pussy consectetur
          adipisicing elit. Reprehenderit, aperiam.
        </div>
      </div>
      </div>
  </div>
</>

     
  );
}

export default Navi;