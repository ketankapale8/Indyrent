import Header from './components/common/Header';
import Home from './components/Home';
import {BrowserRouter, Routes, Route } from 'react-router-dom'
import ApplicationSupport from './components/ApplicationSupport';
import NewStaff from './components/NewStaff';
import CloseExistingStaff from './components/CloseExistingStaff';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Header />
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path="/application-support" element={<ApplicationSupport title="Support Request Tool"/>}/>
          <Route path="/new-staff" element={<NewStaff title="Register New Staff"/>} />
          <Route path="/close-existing-staff" element={<CloseExistingStaff title="Close Existing Staff"/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
