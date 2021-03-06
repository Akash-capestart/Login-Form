import logo from './logo.svg';
import './App.css';
import Login from './Components/Login';
import LifeCycleComponents from './Components/lifecycle';
import Dashboard from './Components/Dashboard';
import Home from './Components/Home'
import {Routes,Route} from "react-router-dom"



function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Dashboard/>}/>
        <Route path='/login' element={<Login/>} />
        <Route path='/lifecycle' element={<LifeCycleComponents/>}/>
        <Route path='/home' element={<Home/>}/>
        

      </Routes>
      
      {/* <LifeCycleComponents/> */}
      {/* <Login/>
      <Home/> */}
    </div>
  );
}

export default App;
