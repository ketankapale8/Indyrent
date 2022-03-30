import Header from './components/Header';
import Home from './components/Home';
import {BrowserRouter, Routes, Route } from 'react-router-dom'
import ApplicationSupport from './components/ApplicationSupport';
import ExistingStaff from './components/ExistingStaff';
import NewStaff from './components/NewStaff';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Header />
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path="/application-support" element={<ApplicationSupport/>}/>
          <Route path="/existing-staff" element={<ExistingStaff/>}/>
          <Route path="/new-staff" element={<NewStaff/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
