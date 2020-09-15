import React from "react"
import Link from "gatsby-link";

import {HomePage} from '../styled/all-style'
import Layouts from '../components/layout'




export default function Home() {
  return (
    <Layouts>
      <HomePage>
        <h1>STIP CI</h1>
        <p>Societe de technologies informatique et des prestations</p>
        <Link to="en-savoir-plus" className="cta">En savoir plus</Link>
      </HomePage>
    </Layouts>

  )
  
}


// export default Home
