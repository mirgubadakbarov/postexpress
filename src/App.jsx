import {useState} from "react"
import "./App.css"
import Navbar from "./components/Navbar"
import Intro from "./components/Home/Intro"
import Statistics from "./components/Statistics"
import About from "./components/About"
import Info from "./components/Info"

function App() {
  return (
    <>
      <Navbar />
      <Intro />
      <About />
      <Info/>
    </>
  )
}

export default App
