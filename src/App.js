import { Component } from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Details from './components/Details/Details';
import Footer from './components/Footer/Footer';
import Homepage from './components/Homepage/Homepage';

import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  render() {
    return (
      <Router>
        <NavBar />
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/image/:id' element={<Details />} />
        </Routes>
        <Footer />
      </Router>
    );
  }
}

export default App;
