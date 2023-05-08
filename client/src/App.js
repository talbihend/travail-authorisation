import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import Profile from './components/Profile';


function App() {
  return (
    <div className="App">

     
      <Router>
        <Routes>
          <Route  path="/" element={<SignUp/>} />
          <Route  path="/signin" element={<SignIn/>}/>
          <Route  path="/profile" element={<Profile/>}/>

        </Routes>
      </Router>
    </div>
  );
}

export default App;
