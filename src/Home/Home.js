import React from 'react'
import './Home.css'
const Home = () => {
  return (
    <div className="home">
      <div className="overlay d-flex align-items-center justify-content-center text-center pt-5">
        <div className="content text-white">
          <h1 className="welcome-text">WELCOME TO</h1>
          <div className="main-heading-container">
            <h2 className="main-heading">ZEST IN PG</h2>
          </div>
          <p className="lead">Enjoy a luxury experience</p>
          <p className="sub-text">We are the Best Colive in Bangalore</p>
          <button className="btn btn-light btn-lg px-5 text-danger-emphasis fw-semibold ">LEARN MORE</button>
        </div>
      </div>
    </div>
  )
}

export default Home