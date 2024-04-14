import {Route, BrowserRouter as Router, Routes} from 'react-router-dom'
import { Navbar } from './components/Navbar'
import About from './pages/About'
import Shop from './pages/Shop'
import NotFound from './pages/NotFound'

import ProductDetails from './pages/ProductDetails' 
import { ShoppingCartPage } from './pages/ShoppingCartPage'








function App() {
  return (
    <Router> 
      <Navbar />

      <div className="container">

        <Routes>
          <Route path='/about' element={<About />} />
          <Route path='/shop' element={<Shop />} />
          <Route path='/details/:id' element={<ProductDetails /> } />  
          <Route path='*' element={ <NotFound />} />
        
          <Route path='/ShoppingCart' element={<ShoppingCartPage />} />
          
        </Routes> 
        

      </div>
        
      

    </Router>
  )
}
export default App