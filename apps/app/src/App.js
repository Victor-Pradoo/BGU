import React, {Component} from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';

// CSS
import './App.css'
import './login/Login.css'
import './mala/Create.css'
import './mala/Navbar.css'
import './mala/Historico.css'
import './mala/Mala.css'
import './login/Background.css'
import './generic.css'

// JSX
// import NavBar from './Nav';
import Login from './login/Login'
import Create from './mala/Create'
import Historico from './mala/Historico'
import Mala from './mala/Mala'
import Background from './login/Background';
import Navbar from './mala/Navbar.js'

class App extends Component {
  render() {
    return (      
       <BrowserRouter>
        <Navbar/>
        <Background/>
        <Routes>
          <Route path="/bag-it-up/" element={<Login/>}/>
          <Route path="/" element={<Login/>}/>
          <Route path="/create" element={<Create/>}/>
          <Route path="/Historico" element={<Historico/>}/>
          <Route path="/Historico/:id_viagem" element={<Mala/>}/>
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;
// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
