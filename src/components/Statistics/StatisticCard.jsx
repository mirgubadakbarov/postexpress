import React from "react"

const StatisticCard = ({title, text}) => {
  return (
    <div className="text-center">
      <h2 style={{fontSize: "7rem"}}>{title}</h2>
      <p style={{fontSize: "1.6rem", maxWidth: "20rem"}} className="text-white">
        {text}
      </p>
    </div>
  )
}

export default StatisticCard
