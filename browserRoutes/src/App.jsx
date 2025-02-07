import React from "react";
import Navbar from "./navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Aboutus from "./components/aboutus";
import Contactus from "./components/contactus";
import HomePage from "./components/homepage";

export const UserContext = React.createContext();

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/homepage" element={<HomePage />} />
        <Route path="/aboutus" element={<Aboutus />} />
        <Route
          path="/contactus"
          element={
            <UserContext.Provider value={<h1>User context example</h1>}>
              <Contactus />
            </UserContext.Provider>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
