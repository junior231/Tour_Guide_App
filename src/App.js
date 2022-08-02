import './App.css';
import {Route, Routes} from 'react-router-dom'
import Home from './pages/Home';
import SearchAppBar from './components/AppBar';
import Tour from './pages/Tour';
import ContextProvider from './context/TourContext'
import { dividerClasses } from '@mui/material';



function App() {
  return (
 <div>
    <ContextProvider>
    <SearchAppBar />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path="/:slug" element={<Tour />} />
    </Routes>
  </ContextProvider>
 </div>
    
  );
}

export default App;
