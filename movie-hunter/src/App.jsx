import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Movies from './components/Movies/Movies';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='*' element={<Navigate to='movies' />} />
        <Route path='/' element={<Navigate to='movies' />} />
        <Route path='movies' element={<Movies />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
