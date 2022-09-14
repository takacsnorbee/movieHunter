import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import MovieHunter from './components/MovieHunter/MovieHunter';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='*' element={<Navigate to='movies' />} />
        <Route path='/' element={<Navigate to='movies' />} />
        <Route path='movies' element={<MovieHunter />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
