import './App.scss';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home';
import Photos from './components/Photos';
import About from './components/About';
import Contact from './components/Contact';

/*        <Route path='/photos' element={<Photos />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
*/ 

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;