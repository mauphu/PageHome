"use client"
import Advantages from "@/components/Advantages/Advantages";
import BusinessFeature from "@/components/BusinessFeature/BusinessFeature";
import Carousels from "@/components/Carousels/Carousels";
import Contact from "@/components/Contact/Contact";
import Footer from "@/components/Footer/Footer";
import Hero from "@/components/Hero/Hero";
import NavBar from "@/components/NavBar/NavBar";
import Partner from "@/components/Partner/Partner";
import Products from "@/components/Products/Products";
import Solutions from "@/components/Solutions/Solutions";
import { Carousel } from "flowbite";


export default function Home() {
  return (
    <>
      <NavBar/>
      <Hero/>
      <Products/>
      <BusinessFeature/>
      <Advantages/>
      {/* <Partner/> */}
      <Partner/>
      <Solutions/>
      <Contact/>
      <Footer/>
    </>
  )
}
