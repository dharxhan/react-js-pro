import Home from './Project_ax/Home.jsx'

import Create from './Project_ax/Create.jsx'

import {BrowserRouter,Routes,Route} from 'react-router-dom'


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/create' element={<Create/>}/>
        <Route path='/' element={<Home/>}/>
        <Route path='/read/:id' element={<Read/>}/>
        <Route path='/update/:id' element={<Update/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App