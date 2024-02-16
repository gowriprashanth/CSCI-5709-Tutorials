import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Register from './Register';
import Profile from './Profile';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <Router>
        <Routes>
          <Route path="/" element={<Register/>}/>
          <Route path="/profile" element={<Profile/>}/>
        </Routes>
       </Router>
       </header>
    </div>
  );
}

export default App;
