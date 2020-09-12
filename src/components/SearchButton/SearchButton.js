import React, { Component } from 'react';
import './SearchButton.css'

class SearchButton extends Component {
    state = {
        inputText: ''
    };

    render() {
        return (
            <>
                <form className="form-inline" onSubmit={this.props.appRequests} >
                    <input type="text" autoComplete="off" name="searchValue" className="form-control" placeholder="Image Search..." />
                    <button type="submit" className="btn btn-outline-primary" >Submit</button>
                </form>
            </>
        );
    }
}

export default SearchButton;