import "./app.css"
import { BrowserRouter, Route, Routes } from 'react-router'
import Home from './Home/Home'
import Navber from './Feature/Navber'
import About from "./About/About"
import Contract from "./Contract/Contract"
import Service from "./Service/Service"
import Signin from "./Auth/Signin"
import Register from "./Auth/Register"
import Blogs from "./Blog/Blogs"
import Blog from "./Blog/Blog"

const App = () => {
  return (
    <BrowserRouter>
      <Navber/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/blogs" element={<Blogs/>} />
        <Route path="/blogs/:title" element={<Blog/>} />
        <Route path="/contract" element={<Contract/>} />
        <Route path="/service" element={<Service/>} />
        <Route path="/login" element={<Signin/>} />
        <Route path="/signin" element={<Register/>} />
      </Routes>
    </BrowserRouter>



  )
}

export default App