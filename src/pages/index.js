import React from 'react'
import Helmet from 'react-helmet'
import { Link } from 'gatsby'

import Layout from '../components/layout'

class HomeIndex extends React.Component {
  render() {
    const siteTitle = 'Ana Vela - Web Developer'
    const siteDescription =
      'Documenting my journey thorough the 100 days of code challenge'

    return (
      <Layout>
        <Helmet>
          <title>{siteTitle}</title>
          <meta name="description" content={siteDescription} />
        </Helmet>

        <div id="main">
          <section id="one">
            <header className="major">
              <h2 style={{color:'#4d6d9a', fontWeight:'900'}} >Welcome!</h2>
            </header>
            <p>
              I'm sharing what I'm learning each day for the 100 Days of Code
              challenge!{' '}
            </p>
            <ul className="actions">
              <li>
                <a
                  href="https://www.100daysofcode.com/"
                  target="_blank"
                  className="button"
                >
                  Learn More about the 100 Days of Code Challenge
                </a>
              </li>
            </ul>
          </section>

          <section id="two">
            <h2 style={{color:' #82699a'}}>Round 2 Daily Learning</h2>

            <ul className="actions">
              <li>
                <Link to={`blog`} className="button">
                  100 Days of Code Blog
                </Link>
              </li>
              {/*  <li><Link to={`subscribe`} className="button">All Newsletters</Link></li> */}
            </ul>
          </section>

          {/*   <section id="three">
                        <h2>Get In Touch</h2>
                        <p>Accumsan pellentesque commodo blandit enim arcu non at amet id arcu magna. Accumsan orci faucibus id eu lorem semper nunc nisi lorem vulputate lorem neque lorem ipsum dolor.</p>
                        <div className="row">
                            <div className="8u 12u$(small)">
                                <form method="post" action="#">
                                    <div className="row uniform 50%">
                                        <div className="6u 12u$(xsmall)"><input type="text" name="name" id="name" placeholder="Name" /></div>
                                        <div className="6u 12u$(xsmall)"><input type="email" name="email" id="email" placeholder="Email" /></div>
                                        <div className="12u"><textarea name="message" id="message" placeholder="Message" rows="4"></textarea></div>
                                    </div>
                                </form>
                                <ul className="actions">
                                    <li><input type="submit" value="Send Message" /></li>
                                </ul>
                            </div>
                            <div className="4u 12u$(small)">
                                <ul className="labeled-icons">
                                    <li>
                                        <h3 className="icon fa-home"><span className="label">Address</span></h3>
                                        1234 Somewhere Rd.<br />
                                        Nashville, TN 00000<br />
                                        United States
                                    </li>
                                    <li>
                                        <h3 className="icon fa-mobile"><span className="label">Phone</span></h3>
                                        000-000-0000
                                    </li>
                                    <li>
                                        <h3 className="icon fa-envelope-o"><span className="label">Email</span></h3>
                                        <a href="#">lets.talk@conradlin.com</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </section>
                    */}
        </div>
      </Layout>
    )
  }
}

export default HomeIndex
