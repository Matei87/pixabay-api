import React, { Component } from 'react';
import logo from '../../2111575.svg';
import { Link } from 'react-router-dom';

import './Header.css'

class Header extends Component {
    render() {
        return (
            <header>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <Link to="/"><img src={logo} alt="pixabay" /></Link>
                            <p>Pixabay Image Search</p>
                        </div>
                    </div>
                </div>

            </header>
        );
    }
}

export default Header;