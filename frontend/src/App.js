// import style and images
import logo from './logo.svg';
import './App.css';

// import dependencies
import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// import data
import products from './data/products.js';

// import component and pages
import Nav from './components/Nav.js';
import HomePage from './pages/HomePage.js';
import GalleryPage from './pages/GalleryPage.js';
import StaffPage from './pages/StaffPage.js';
import OrderPage from './pages/OrderPage.js';
import LogPage from './pages/LogPage.js';
import CreatePage from './pages/CreatePage.js';
import EditPage from './pages/EditPage.js';
import TopicsPage from './pages/TopicsPage.js';

function App() {

  const [match, setMatchToEdit] = useState([])

  return (
    <div className="App">
      <BrowserRouter>

        <header className="App-header">
          <h1>Richard Le</h1>
        </header>

        <Nav />

        <main>
          <section>

            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/gallery" element={<GalleryPage />} />
              <Route path="/staff" element={<StaffPage />} />
              <Route path="/order" element={<OrderPage products={products} />} />
              <Route path="/log" element={<LogPage setMatch={setMatchToEdit} />} />
              <Route path="/create" element={<CreatePage />} />
              <Route path="/edit" element={<EditPage matchToEdit={match} />} />
              <Route path="/topics" element={<TopicsPage />} />
            </Routes>

          </section>
        </main>

        <footer>
          <p>&copy; 2023 Richard Le, Inc. All rights reserved.</p>
        </footer>

      </BrowserRouter>
    </div>
  );
}

export default App;
