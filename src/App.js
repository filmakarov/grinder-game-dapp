import React, { useState, useEffect } from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";

// Pages
import Index from './components/pages/Index'; // Index page
import NoMatch from './components/pages/NoMatch'; // 404 page

// Common components
const AppName = process.env.REACT_APP_WEB_NAME;
const AppUrl = process.env.REACT_APP_WEB_URL;

function App() {

  const [currentPage, setCurrentPage] = useState(''); 

  return (
    <BrowserRouter>
      <>
        <main>
          <div id="content">
            {/* <div onClick={web3Connect}>Connect</div> */}
            <Routes>
                <Route path='/' exact strict element={<Index AppName={AppName} AppUrl={AppUrl} setCurrentPage={setCurrentPage} />} />                
                
                <Route path="*" element={<NoMatch AppName={AppName} AppUrl={AppUrl} setCurrentPage={setCurrentPage} />} /> 
            </Routes>
          </div>
        </main>
      </>
    </BrowserRouter>
  );
}

export default App;
