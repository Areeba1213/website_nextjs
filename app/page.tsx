import Header from "./components/Header"
import Hero from "./components/Hero"
import Sale from "./components/Sale";
import Products from "./components/products";
import Footer from "./components/Footer";


function Homepage (){
  return(
    <div>
      <Header/>
     <Hero/>
     <Sale/>
     <Products/>
     <Footer/>
    </div>
  )
}
export default Homepage
