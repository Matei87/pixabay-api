import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './components/Header/Header';
import SearchButton from "./components/SearchButton/SearchButton";
import SearchButtonResults from './components/SearchButtonResults/SearchButtonResults';
import Details from './components/Details/Details';
import Footer from "./components/Footer/Footer";

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


let API_KEY = '17538426-28a8ebd9211ecf8d22b6cde28';

class App extends Component {
    state = {
      images: [],
        error: null
    };

    howdy = async (event) => {
        event.preventDefault();
        // console.log(event.target[0].value);
        // console.log(event.target.searchValue.value);
        let serciValue = event.target.searchValue.value;
        let URL = `https://pixabay.com/api/?key=${API_KEY}&q=${serciValue}&image_type=photo&pretty=true`;
        let request = await fetch(URL);
        let response = await request.json();
        if (!serciValue) {
            this.setState({ error: "Please provide a value" });
        } else {
            this.setState({ images: response.hits, error: null });
        }

    };


    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <React.Fragment>
                        <Header />

                        {this.state.error !== null ? <Route exact path="/" >
                                <SearchButton appRequests={this.howdy} />
                                <h1 style={{textAlign: 'center', marginBottom: '3rem'}}>{this.state.error}</h1>
                            </Route> : <Route exact path="/" >
                                <SearchButton appRequests={this.howdy} />
                                <SearchButtonResults imagez={this.state.images} />
                            </Route>
                        }

                        <Route exact path="/image/:id" component={Details} />
                        <Footer />
                    </React.Fragment>
                </Switch>
            </BrowserRouter>
        );
    }
}

export default App;
