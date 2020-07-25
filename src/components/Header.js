import React from 'react'
import { Link } from 'gatsby'
import Footer from './Footer'
import avatar from '../assets/images/anavee.jpg'

class Header extends React.Component {
  render() {
    return (
      <header id="header">
        <div className="inner">
        {/*  <Link to="/" className="image avatar">
            <img src={avatar} alt="" />
          </Link> */}
          <h1>100 Days of Code Challenge</h1>
          <br />
          <h2>
            {' '}
            Documenting My Journey Learning JavaScript, React, and more!
          </h2>

          <br />

          <h3>
            <Link to={`/`}>Home</Link>
          </h3>

          <h3>
            <Link to={`/blog`}>Blog</Link>
          </h3>
        </div>

        <Footer />
      </header>
    )
  }
}

export default Header
