import React from 'react'
import Header from "../components/Layout/Header";
import Hero from "../components/Route/Hero/Hero";
import Categories from "../components/Route/Categories/Categories";
import BestDeals from "../components/Route/BestDeals/BestDeals";
import FeaturedProduct from "../components/Route/FeaturedProduct/FeaturedProduct";
import Events from "../components/Events/Events";
import Sponsored from "../components/Route/Sponsored";
import Footer from "../components/Layout/Footer";
import { FloatingWhatsApp } from 'react-floating-whatsapp'
const HomePage = () => {
  return (
    <div>
        <Header activeHeading={1} />
        <Hero />
        <Categories />
        <BestDeals />
        <Events />
        <FeaturedProduct />
        {/* <Sponsored /> */}
        <FloatingWhatsApp
          phoneNumber="03146146470"
          avatar="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
          accountName="Auto Care"
        />
        <Footer />

    </div>
  )
}

export default HomePage