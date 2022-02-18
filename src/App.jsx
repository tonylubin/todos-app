import { Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './Components/Header/Header';
import MainPage from './Routes/MainPage';
import HomePage from './Routes/HomePage';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/home" element={<HomePage />} />
      </Routes>
    </div>
  );
}

export default App;
