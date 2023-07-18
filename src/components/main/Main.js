import React from "react"
import Navbar from "../navbar"
import Slider from "../slide"
import Showcase from "../showcase"
import Nonloginbanner from "../nonloginbanner"
import Footer from "../footer"

export default function Main() {
  return (
    <div className="">
      <Navbar />
      <Slider />
      <Showcase />
      <Nonloginbanner />
      <Footer />
    </div>
  )
}
