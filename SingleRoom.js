import React, { Component } from "react";
import defaultBcg from "../images/home1.jpg";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import { RoomContext } from "../Context";

import StyledHero from "../components/StyledHero";
export default class SingleRoom extends Component {
  constructor(props) {
    super(props);
    console.log(this.props);
    this.state = {
      slug: this.props.match.params.slug,
      defaultBcg: defaultBcg
    };
  }
  static contextType = RoomContext;

  // componentDidMount() {
  //   console.log(this.props);
  // }
  render() {
    const { getRoom } = this.context;
    const room = getRoom(this.state.slug);

    if (!room) {
      return (
        <div className="error">
          <h3> no such room could be found...</h3>
          <Link to="/rooms" className="btn-primary">
            back to rooms
          </Link>
        </div>
      );
    }
    const {
      name,
      description,
      capacity,
      size,
      price,
      extras,
      patio,
      garage,
      images
    } = room;
    const [main, ...defaultImages] = images;
    console.log(defaultImages);

    return (
      <div>
        <StyledHero img={images[0] || this.state.defaultBcg}>
          <Banner title={`${name}`}>
            <Link to="/rooms" className="btn-primary">
              back to rooms
            </Link>
          </Banner>
        </StyledHero>
        <section className="single-room">
          <div className="single-room-images">
            {defaultImages.map((item, index) => (
              <img key={index} src={item} alt={name} />
            ))}
          </div>
          <div className="single-room-info">
            <article className="desc">
              <h3>details</h3>
              <p>{description}</p>
            </article>
            <article className="info">
              <h3>info</h3>
              <h6>price : ${price}</h6>
              <h6>size : {size} SQFT</h6>
              <h6>
                max capacity :
                {capacity > 1 ? `${capacity} people` : `${capacity} person`}
              </h6>
              <h6>{garage ? "has garage" : "does not have garage"}</h6>
              <h6>{patio && "has patio"}</h6>
            </article>
          </div>
        </section>
        <section className="room-extras">
          <h6>extras </h6>
          <ul className="extras">
            {extras.map((item, index) => (
              <li key={index}>- {item}</li>
            ))}
          </ul>
        </section>
      </div>
    );
  }
}
