import React from 'react'

class Footer extends React.Component {
  render() {
    return (
      <div id="footer">
        <div className="inner">
          <ul className="icons">
            <li>
              <a
                href="https://twitter.com/anaveecodes"
                target="_blank"
                className="icon fa-twitter"
              >
                <span className="label">Twitter</span>
              </a>
            </li>
            <li>
              <a
                href="https://instagram.com/anaveecodes"
                target="_blank"
                className="icon fa-instagram"
              >
                <span className="label">Instagram</span>
              </a>
            </li>
            {/* <li><a href="https://conradlin.com/subscribe/" target="_blank" className="icon fa-envelope-o"><span className="label">Email</span></a></li> */}
          </ul>
          <ul className="copyright">
            <li>Copyright &copy; 2020</li>
          </ul>
        </div>
      </div>
    )
  }
}

export default Footer
