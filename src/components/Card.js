import React from 'react'

const Card = (props) => {
  let badgeText
  if (props.openSpot === 0) {
    badgeText = "SOLD OUT"
  } else if (props.location === "Online") {
    badgeText = "ONLINE"
  }
  return (
    <div className="card">
      {badgeText && <div className='card--soldout'>{badgeText}</div>}
      <img
        src={require(`../images/${props.path}`)}
        alt="event image"
        className="card--image"
      />
      <div className="card--stats">
        <img
          src={require(`../images/${props.starimgpath}`)}
          alt="black star"
          className="card--star"
        />
        <span>{props.rating}</span>
        <span className="gray">({props.numReview}) ⌁ </span>
        <span className="gray">{props.location}</span>
        <p>{props.description}</p>
        <p>
          <span className='bold'>From ${props.price} {props.currency}</span> / {props.eventSession}
        </p>
      </div>
    </div>
  )
}

export default Card