import React from "react"

const Button = ({title, isLight, href}) => {
  return (
    <a
      className="btn"
      href={href}
      style={{
        background: isLight
          ? `linear-gradient(0deg, #F0D683 0%, #F0D683 100%)`
          : `linear-gradient(90deg, #67310A -108.98%, #F0D683 129.77%)`,
      }}
    >
      <span
        style={{
          border: "1px solid #9F734C",
          padding: " 1.7rem 3rem",
          borderRadius: ".8rem",
        }}
      >
        {title}
      </span>
    </a>
  )
}

export default Button
