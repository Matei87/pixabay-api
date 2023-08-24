import { Component } from 'react';
import SearchButton from '../SearchButton/SearchButton';
import SearchButtonResults from '../SearchButtonResults/SearchButtonResults';

class Homepage extends Component {
  state = {
    images: [],
    error: 'Please provide a value !!!',
  };

  howdy = async (event) => {
    event.preventDefault();
    let serciValue = event.target.searchValue.value;
    let URL = `https://pixabay.com/api/?key=${process.env.REACT_APP_API_KEY}&q=${serciValue}&image_type=photo&pretty=true`;
    let request = await fetch(URL);
    let response = await request.json();
    if (!serciValue) {
      this.setState({ error: 'Please provide a value !!!' });
    } else {
      this.setState({ images: response.hits, error: null });
    }
  };

  render() {
    return (
      <>
        {this.state.error !== null ? (
          <>
            <SearchButton appRequests={this.howdy} />
            <h1 style={{ textAlign: 'center', marginBottom: '3rem' }}>
              {this.state.error}
            </h1>
          </>
        ) : this.state.images.length === 0 ? (
          <>
            <SearchButton appRequests={this.howdy} />
            <h1 style={{ textAlign: 'center', marginBottom: '3rem' }}>
              No result !!!
            </h1>
          </>
        ) : (
          <>
            <SearchButton appRequests={this.howdy} />
            <SearchButtonResults imagez={this.state.images} />
          </>
        )}
      </>
    );
  }
}

export default Homepage;
