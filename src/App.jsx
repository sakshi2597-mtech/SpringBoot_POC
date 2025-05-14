import './App.css'

import { FooterComponent } from './components/FooterComponent'
import { HeaderComponent } from './components/HeaderComponent'
import { ListEmployeesComponents } from './components/ListEmployeesComponents'
import { BrowserRouter ,Routes,Route} from 'react-router-dom'
import { EmployeeComponent } from './components/EmployeeComponent'
import { HomeComponent } from './components/HomeComponent'


function App() {
   
  

  return (
    <>

     <BrowserRouter>
        <HeaderComponent />
        <Routes>
          {/* /* // http://localhost:3000 */ }
          <Route path='/' element={<HomeComponent />}></Route>
          {/* // http://localhost:3000/employees */}
          <Route path='/employees' element={<ListEmployeesComponents />}></Route>
          {/* // http://localhost:3000/add-employee */}
          <Route path='/add-employee' element={<EmployeeComponent />}></Route>
           {/* // http://localhost:3000/edit-employee/1 */}
           <Route path='/edit-employee/:id' element={<EmployeeComponent />}></Route>
        </Routes>
       
        <FooterComponent /> 
     </BrowserRouter>  
      
       
      
    </>
  )
}

export default App
