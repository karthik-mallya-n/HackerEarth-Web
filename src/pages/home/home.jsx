import "./home.css"
import Navbar from "../../components/Navbar/Navbar"
import Header from "../../components/Header/Header"
import Featured from "../../components/featured/Featured"
import Property from "../../components/Property/Property"
import FeaturedProperties from "../../components/FeaturedProperties/FeaturedProperties"
import MailList from "../../components/MailList/MailList"
import Footer from "../../components/Footer/Footer"

const home = () => {
  return (
    <div>
      <Navbar/>
      <Header/>
      <div className="homeContainer">
      <Featured/>
      <h1 className="HomeTitle">Browse by property Type</h1>
      <Property/>
      <h1 className="HomeTitle">Homes guest love</h1>
      <FeaturedProperties/>
      <MailList/>
      <Footer/>
      </div>
    </div>
  )
}

export default home
