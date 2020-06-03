import React from 'react'
import { Link } from 'react-router-dom'

export default function Landing() {
  return (
    <div>
      <h1>
        Everyone is in conference room. <br />
        Who would like to meet them?
      </h1>
      <Link to='/meet-me/Michael/Scott'>Michael Scott</Link>
      <Link to='/meet-me/Dwight/Schrute'>Dwight Schrute</Link>
      <Link to='/meet-me/Phyllis/Vance'>Phyllis Vance</Link>
      <Link to='/meet-me/Jim/Halgart'>Jim Halgart</Link>
      <Link to='/meet-me/Stan/Hudson'>Stan Hudson</Link>
      <Link to='/meet-me/Pam/Beasely'>Pam Beasely</Link>
      <Link to='/meet-me/Kevin/Malone'>Kevin Malone</Link>
    </div>
  )
}