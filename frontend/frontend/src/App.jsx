import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import CreatePost from './pages/CreatePost'
const App = () => {
  return (
    <div className=''>
      <Router>
        <Routes>
          <Route path='/create-post' element={<CreatePost />} />
          <Route path='/about' element={<h1>About us</h1>} />

        </Routes>
      </Router>

    </div>
  )
}

export default App
