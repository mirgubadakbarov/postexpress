import React from "react"
import navLogo from "/logo.svg"

const Logo = () => {
  return (
    <a href="/">
      <img className="object-cover w-[19rem]" src={navLogo} alt="Logo" />
    </a>
  )
}

export default Logo
