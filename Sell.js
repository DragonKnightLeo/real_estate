import React from 'react'
import { Link } from "react-router-dom";
import Hero from "../components/Hero";
import Title from "../components/Title";


class Sell extends React.Component {
  render () {
    return (
      <div>
        <h1 className="sell-title">Sell with Confidence</h1>
        <div className="sell">
          <h2 style={{fontWeight: "800"}}>Real Estate Offers</h2>
          <p>Skip the hassle and sell your home directly to Real Estate Partners.
          No prep work or showings required.
          Available in select areas with more coming soon.</p>
        </div>
        <Hero hero="sellHero"></Hero>
      </div>
    )
  }
}

export default Sell;
