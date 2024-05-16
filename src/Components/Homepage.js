import React from 'react'
import './Homepage.css'
import { Link} from 'react-router-dom'
function Homepage() {
  return (
    <div className="homepage">
      <header className="homepage-header">
        <h1>Welcome to Resume Builder</h1>
        <p>Your one-stop solution to create a professional resume in minutes. Our user-friendly tools and templates make it easy for you to showcase your skills and experience to potential employers.</p>
       <Link to='/newResume'><button className="create-button">Create</button></Link>
      </header>
    </div>
  )
}

export default Homepage