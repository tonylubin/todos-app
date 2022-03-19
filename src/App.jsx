import { Routes, Route } from "react-router-dom";
import { createContext, useState } from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import MainPage from "./Routes/MainPage";
import HomePage from "./Routes/HomePage";

export const UserContext = createContext();

function App() {
  const [currentUser, setCurrentUser] = useState();

  return (
    <div className="App">
      <UserContext.Provider value={{ currentUser, setCurrentUser }}>
        <Header />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/home" element={<HomePage />} />
        </Routes>
      </UserContext.Provider>
    </div>
  );
}

export default App;
