import './App.css';
import {Route, Routes} from 'react-router-dom'
import Home from './pages/Home';
import SearchAppBar from './components/AppBar';
import Tour from './pages/Tour';


function App() {

  return (
  <>
        <SearchAppBar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path="/:slug" element={<Tour />} />
        </Routes>
  </>
    
  );
}

export default App;
