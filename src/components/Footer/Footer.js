import { Component } from 'react';
import './Footer.css';

class Footer extends Component {
  render() {
    return (
      <footer>
        <p>
          Made by <span>Matei Mircea</span> @ {new Date().getFullYear()}
        </p>
      </footer>
    );
  }
}

export default Footer;
