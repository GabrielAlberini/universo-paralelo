import { Home } from '../Screens/Home/Home'
import { ContainerNoticiaDetail } from '../components/ContainerNoticiaDetail/ContainerNoticiaDetail'
import { NotFound } from '../Screens/NotFound/NotFound'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

function Router() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/noticia/:id' element={ <ContainerNoticiaDetail /> } />
          <Route path='/*' element={ <NotFound /> } />
        </Routes>
      </BrowserRouter>
    );
  }
  
  export {Router};