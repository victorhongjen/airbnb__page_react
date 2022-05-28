import React from "react"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Card from "./components/Card"
import data from "./data"

const App = () => {
  // console.log(data)
  const card = data.map(item => {
    return (
      <Card
        key={item.id}
        path={item.coverImg}
        starimgpath="blackstar.png"
        rating={item.stats.rating}
        numReview={item.stats.reviewCount}
        location={item.location}
        description={item.description}
        price={item.price}
        eventSession={item.stats.eventUnit}
        openSpot={item.openSpot}
        currency={item.currency}
      />
    )
  })
  return (
    <div>
      <Navbar />
      <Hero />
      <section className="card--list">
        {card}
      </section>
    </div>
  )
}

export default App