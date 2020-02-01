import React from "react";
import {Link} from 'react-router-dom';

export default function House({room}) {
  const {name, slug, images, price } = room;

  return (
    <article className="room">
      <div className="img-container">
        <img src={images[0]} alt="single room" />
        <div className="price-top">
          <h6>${price}</h6>
          <p>listing price</p>
        </div>
        <Link to={`/room/${slug}`} className="btn-primary room-link">
          Features
        </Link>
        <p className="room-info">{name}</p>
      </div>

    </article>
  )
}
