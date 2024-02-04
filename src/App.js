import './App.css';
import { Route, Router, Routes } from 'react-router-dom';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import Signin from './components/Signin';
import Navbar from './components/Navbar';
import Main from './components/Main';
import HarassmentComplaintForm from './components/HarassmentComplaintForm';
import DonateSection from './components/DonateSection';


function App() {
  return (
    <div className="App">
        <Navbar/>
    
    <Routes>      
    <Route path="/" exact element={<Main/>} />
        <Route path="/login" element={    <Signin/>} /> 
        <Route path="/complain" element={    <HarassmentComplaintForm/>} /> 
        <Route path="/donate" element={<DonateSection/>} />
      </Routes>
    </div>
  );
}

export default App;
