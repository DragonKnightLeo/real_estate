import React, { Component } from "react";
import buyhome from "../images/Buy_a_home.png"
import renthome from "../images/Rent_a_home.png"
import sellhome from "../images/Sell_a_home.png"
import Title from "./Title";
export default class Services extends Component {
  state = {
    services: [
      {
        icon: buyhome,
      title: "Buy a Home",
        info:
          "Find your place with an immersive photo experience and the most listings"
      },
      {
        icon: renthome,
      title: "Rent a Home",
        info:
          "We're creating a seamless online experience for shopping the largest rental networks"
      },
      {
        icon: sellhome,
      title: "Sell a Home",
        info:
          "We'll help you navigate the path to a successful sale"
      }
    ]
  };
  render() {
    return (
      <section className="services">
        <Title title="We have the most listings At the best prices"/>
        <div className="services-center">
          {this.state.services.map(item => {
            return (
              <article key={`item-${item.title}`} className="service">
                <div><img className="services-img" src={item.icon} /></div>
                <h6>{item.title}</h6>
                <p>{item.info}</p>
              </article>
            );
          })}
        </div>
      </section>
    );
  }
}
