import './App.css';
import {Route, Routes} from 'react-router-dom'
import Home from './pages/Home';
import SearchAppBar from './components/AppBar';
import Tour from './pages/Tour';
import ContextProvider from './context/TourContext'


function App() {
  return (
  <ContextProvider>
    <SearchAppBar />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path="/:slug" element={<Tour />} />
    </Routes>
  </ContextProvider>
    
  );
}

export default App;
