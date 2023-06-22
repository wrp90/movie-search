import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MoviesPage from './components/MoviesPage/MoviesPage';
import SingleMovie from './components/SingleMovie/SingleMovie';

function App() {
  return (
    <div className="container">
      <h1>React Movie App</h1>
      <BrowserRouter basename={ `/${process.env.PUBLIC_URL}`}>
        <Routes>
          <Route path="/" element={<MoviesPage />}/>
          <Route path="/movie/:movieId" element={<SingleMovie />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
