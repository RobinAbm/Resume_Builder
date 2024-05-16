import './App.css';
import { useState } from 'react';
import { Route,Routes,BrowserRouter } from 'react-router-dom';
import Homepage from './Components/Homepage';
import CreateResume from './Components/CreateResume';
import ResumeDisplay from './Components/ResumeDisplay';

function App() {
  const [data,setData]=useState('')
  const getFormData=(crData)=>{
    setData(crData)
  }
  return (
    <BrowserRouter>
    <div> <Routes>
        <Route path='/' element={<Homepage/>} />
        <Route path='/newResume' element={<CreateResume getFormData={getFormData}/>}/>
        <Route path='/Resume' element={<ResumeDisplay  formData={data} />}/>
      </Routes></div>
    </BrowserRouter>

    // <div>
    //   <Homepage/>
    // </div>
  );
}

export default App;
