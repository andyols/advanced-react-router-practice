import React from 'react'
import { Link } from 'react-router-dom'

function SideNav() {
  return (
    <div className="collapse navbar-collapse navbar-ex1-collapse">
      <ul className="nav navbar-nav side-nav">
        <li>
          <Link to="/">
            <i className="fa fa-fw fa-dashboard" /> Dashboard
          </Link>
        </li>
        <li>
          <Link to="/charts">
            <i className="fa fa-fw fa-bar-chart-o" /> Charts
          </Link>
        </li>
        <li>
          <Link to="/tables">
            <i className="fa fa-fw fa-table" /> Tables
          </Link>
        </li>
        <li>
          <Link to="/settings">Settings</Link>
        </li>
        <li>
          <Link to="/wall">Wall</Link>
        </li>
        <li>
          <Link to="/profiles">Profiles</Link>
        </li>
        <li>
          <Link to="/marquee/this is the marquee component">Marquee</Link>
        </li>
      </ul>
    </div>
  )
}

export default SideNav
