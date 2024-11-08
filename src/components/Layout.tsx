import Category from "./Category"
import Course from "./Course"
import Footer from "./Footer"
import Header from "./Header"
import Hero from "./Hero"
import Subscribe from "./Subscribe"
import Testimonial from "./Testimonial"

function Layout() {
  return (
    <div className="flex flex-col w-screen h-max bg-white">
      <Header/>
      <Hero/>
      <Category/>
      <Course/>
      <Testimonial/>
      <Subscribe/>
      <Footer/>
    </div>
  )
}

export default Layout
