import React from "react"
import StatisticCard from "./StatisticCard"

const Statistics = ({statistics}) => {
  return (
    <section
      style={{
        borderRadius: "4.1rem",
        background: "#010E0F",
        padding: ".9rem",
      }}
    >
      <div
        style={{
          borderRadius: "3.5rem",
          border: "2px solid #9F734C",
        }}
        className="flex  justify-between gap-20 px-6 py-6  "
      >
        {statistics.map(({id, title, text}) => (
          <StatisticCard key={id} title={title} text={text} />
        ))}
      </div>
    </section>
  )
}

export default Statistics
