import React from 'react'
import Nav from './Nav'
import { ReactComponent as  Homeimage} from '../images/perfect';

function Home() {
  return (
    <div className='home'>
      <Nav />
      <Homeimage />
    </div>
  )
}

export default Home
