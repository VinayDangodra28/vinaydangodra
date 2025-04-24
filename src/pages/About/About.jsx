import React from 'react'
import { Link } from 'react-router-dom'

function About() {
  return (
    <div className="about" style={{ opacity: 1, textAlign: "center" }}>
      <h1>About Page</h1>
      <p>Learn more about our company and mission.</p>
      <Link to="/">Go tohome</Link>
    </div>
  )
}

export default About
