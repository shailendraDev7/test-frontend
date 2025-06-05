import Header from './components/Header'
import Dashboard from './pages/Dashboard'
import AddProject from './pages/AddProject'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import UpdateProject from './pages/UpdateProject'

function App() {
 console.log("Admin App App.jsx is loading!"); // Add this
  return (
    <BrowserRouter basename="/admin">
    {/* <Header/> */}
      <Routes>
        <Route path="/" element={<Dashboard/>}/>
        {/* <Route path="/add" element={<AddProject/>}/>
        <Route path="/update/:id" element={<UpdateProject/>}/> */}
        <Route path ="*" element={<div>Admin 404 not found</div>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
