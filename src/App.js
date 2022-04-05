import './styles/App.css'
import MovieList from './components/MovieList'
import { Route, Routes } from 'react-router-dom'

const App = () => {
  return (
    <div className="App">
      <h3>Move Library</h3>
      <Routes>
        <Route path="/" element={<MovieList />} />
        <Route path="/movies/:id" element={<MovieList />} />
      </Routes>
    </div>
  )
}

export default App
