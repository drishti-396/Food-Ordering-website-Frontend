import Home from './pages/Homepag'
import './App.css'
import 'react-toastify/dist/ReactToastify.css';
  import { ToastContainer, toast } from 'react-toastify';
  import Header from './components/Header';
  import About from './components/about';
  import { useState } from 'react';
import Contact from './components/contact';
function App() {
   const [currentPage, setCurrentPage] = useState('home');

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <>
<div>
  <Header
  currentPage={currentPage} onPageChange={handlePageChange}
  />
 {currentPage === 'home' && <Home />}
      {currentPage === 'about' && <About />}
       {currentPage === 'contact' && <Contact />} 


<ToastContainer/>
</div>
 


       
    </>
  )
}

export default App
