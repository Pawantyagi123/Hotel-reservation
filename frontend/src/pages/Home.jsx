import  {Herosection}  from "../components/Herosection.jsx"
import About from "../components/About"
import Quality from "../components/Quality.jsx"
import Menu from "../components/Menu.jsx"
import Services from "../components/Services.jsx"
import Team from "../components/Team.jsx"
import Reservation from "../components/Reservation.jsx"
import Footer from "../components/Footer.jsx"
export default function Home() {
  return (
   <>
   <Herosection/>
   <About/>
   <Quality/>
   <Menu/>
   <Services/>
   <Team/>
  <Reservation/>
  <Footer/>
   </>

  )
}
