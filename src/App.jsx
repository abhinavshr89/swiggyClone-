import React from 'react'
import Header from './components/header'
import WhatsOnMind from './components/whatsonmind'
import RestaurantChains from './components/restaurantChains'
import OnlineFoodDelivery from './components/onlinefoodDelivery'
const App = () => {
  return (
   <>
   <Header/>
   <WhatsOnMind/>
   {/* <RestaurantChains/> */}
   <OnlineFoodDelivery/>
   </>

  )
}

export default App