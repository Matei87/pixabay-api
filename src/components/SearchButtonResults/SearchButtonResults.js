import { Component } from 'react';
import { Link } from 'react-router-dom';

import './SearchButtonResults.css';

class SearchButtonResults extends Component {
  render() {
    let { imagez } = this.props;

    return (
      <div className='container'>
        <div className='row'>
          {imagez.map((image) => {
            return (
              <div
                key={image.id}
                className='col-sm-6 col-md-5 col-lg-4 col-xl-3'
              >
                <div className='card'>
                  <div>
                    <img
                      className='card-img-top'
                      src={image.webformatURL}
                      alt={image.tags}
                    />
                  </div>
                  <div className='card-body'>
                    <p className='card-text'>Owner: {image.user}</p>
                    <div>
                      <span>#{image.id}</span>
                      <span>
                        <i className='far fa-thumbs-up' /> {image.likes}
                      </span>
                    </div>
                    <Link
                      to={{
                        pathname: `/image/${image.id}`,
                        state: { image: image },
                      }}
                    >
                      <button className='btn btn-outline-primary'>
                        Details
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default SearchButtonResults;
