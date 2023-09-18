import React, { Component } from 'react';
import { IoIosStar, IoIosStarOutline } from 'react-icons/io'

class Rating extends Component {
    constructor(props) {
        super(props);
        this.state = { rating: this.props.rating };
    }
    handleClick(ratingValue) {
        this.setState({ rating: ratingValue });
    }
    render() {
        return (
            <div>
                <h1>Rating is : {this.state.rating}</h1>
                {this.state.rating >= 1 ? ( //if greater than 1, fill up star
                    <IoIosStar onClick={this.handleClick.bind(this,1)} />
                ) : (
                    <IoIosStarOutline  onClick={this.handleClick.bind(this,1)}/> //else show an empty star
                )}
                {this.state.rating >= 2 ? (
                    <IoIosStar onClick={this.handleClick.bind(this,2)}/>
                ) : (
                    <IoIosStarOutline onClick={this.handleClick.bind(this,2)} />
                )}
                {this.state.rating >= 3 ? (
                    <IoIosStar onClick={this.handleClick.bind(this,3)} />
                ) : (
                    <IoIosStarOutline onClick={this.handleClick.bind(this,3)} />
                )}
                {this.state.rating >= 4 ? (
                    <IoIosStar onClick={this.handleClick.bind(this,4)}/>
                ) : (
                    <IoIosStarOutline onClick={this.handleClick.bind(this,4)}/>
                )}
                {this.state.rating >= 5 ? (
                    <IoIosStar onClick={this.handleClick.bind(this,5)} />
                ) : (
                    <IoIosStarOutline onClick={this.handleClick.bind(this,5)}/>
                )}
            </div>
        );
    }
}
export default Rating;