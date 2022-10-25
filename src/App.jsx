import { Routes, Route } from "react-router-dom";
import { createContext, useEffect, useState } from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import MainPage from "./Routes/MainPage";
import PrivatePage from "./Routes/PrivatePage";
import HomePage from "./Routes/HomePage";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";

export const UserContext = createContext();

function App() {
  const [currentUser, setCurrentUser] = useState();

  // Observer for checking authentication(user) status & clean-effect for event listener
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <div className="App">
      <UserContext.Provider value={{ currentUser, setCurrentUser }}>
        <Header />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route
            path="/home"
            element={
              <PrivatePage currentUser={currentUser}>
                <HomePage />
              </PrivatePage>
            }
          />
        </Routes>
      </UserContext.Provider>
    </div>
  );
}

export default App;
