import { Route,Routes, BrowserRouter} from 'react-router-dom'

import Home from './components/home';
import PostComponent from './components/posts';
import Contact from './components/contact';

const Router = () => {
  return(
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="contact" element={<Contact/>}/>
          <Route path="article/:id" element={<PostComponent/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default Router;