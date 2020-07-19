import React, { Component } from 'react';
import './Details.css';

class Details extends Component {
    render() {
        let { image } = this.props.location.state;

        return (
            <>
                <h2 className="details-title" style={{textAlign: 'center'}}>Details Page</h2>
                <div className="container details-container">
                    <div className="row">
                        <div className="col-12">
                            <img src={image.webformatURL} alt={image.tags} />
                            <div className="credits">
                                <h4>Credit: {image.user}</h4>
                                <p><i className="far fa-eye" /> {image.views}</p>
                                <p>{<a href={image.webformatURL} target="_blank" rel="noopener noreferrer">Download</a>}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default Details;