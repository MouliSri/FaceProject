
import './App.css';
import { useState } from 'react';
// import { BrowserRouter ,Routes,Route } from 'react-router-dom';
import Login from "./components/login/Login.jsx";
import Home from "./components/home/Home";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div>
     {isLoggedIn ? (
         <Home setIsLoggedIn={setIsLoggedIn} />

      ) : (
        <Login setIsLoggedIn={setIsLoggedIn} />
      )}
    
    </div>
  );
}

export default App;


// //<Routes>
// <Route path="/" element={<Login />} exact/>
// <Route path="/home" element={<Home />} />

// </Routes>