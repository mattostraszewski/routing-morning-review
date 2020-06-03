import React from 'react'
import { Link } from 'react-router-dom'


export default function Header() {
  return (
    <div>
      <h2>Nice To Meet You</h2>
      <Link to='/' > {`< Back to the conference room`} </Link>
    </div>
  )
}