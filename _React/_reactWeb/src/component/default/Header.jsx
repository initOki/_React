import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Header extends Component {

  render() {
    return (
      <React.Fragment>
        <header>
          <div className="header-box">
            <div className="logo-box">
              <span>더치커피</span>
            </div>
            <div>
              <ul className="infor-box">
                <li><Link to="/">서버소개</Link></li>
                <li><Link to="/">직업소개</Link></li>
                <li><Link to="/">지역소개</Link></li>
              </ul>
            </div>
          </div>
        </header>
      </React.Fragment>
    )
  }

}

export default Header