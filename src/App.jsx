import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Importa Routes en lugar de Switch
import Navbar from './components/Navbar';
import ListContainer from './components/ListContainer';
import CartContainer from './components/CartContainer';

function App() {
  const [selectedCategories, setSelectedCategories] = useState([]);

  return (
    <Router>
      <>
        <Navbar selectedCategories={selectedCategories} />
        <Routes> {/* Utiliza Routes en lugar de Switch */}
          <Route path="/" element={<ListContainer selectedCategories={selectedCategories} />} />
          <Route path="/cart" element={<CartContainer />} />
        </Routes>
      </>
    </Router>
  );
}

export default App;
