import React, { Component } from 'react';
import axios from 'axios'; // npm install axios
import ReactLoading from 'react-loading';
import { Media, Form, FormGroup, FormControl, Button, Nav } from 'react-bootstrap';

class GitHub extends Component {
    constructor() { //initializes our components
        super();
        this.state = { // ths state object with its properties.
            data: [],
            searchTerm: '',
            isLoading: false //set to flase because no request has been made by the user.
        };
        this.handleChange = this.handleChange.bind(this); // handles the search bar
        this.handleSubmit = this.handleSubmit.bind(this); //handles events
    }
    componentDidMount() {

    }



    getGitHubData(_searchTerm) {
        axios.get("https://api.github.com/search/users?q=" + _searchTerm)
            .then(res => {
                this.setState({
                    isLoading: false,
                    data: res.data.items //consoles api in the data property line 11.
                }) //set to false because results have already been recieved
                console.log(res.data.items);
            });
    }
    render() {
        //we map and create an instance of the users we got from API and displays it on the media component
        const listUsers = this.state.data.map((user) =>
            <Media key={user.id}>
                <Nav.Link href={`/github/user/${user.login}/${user.id}`}>
                    <img
                        width={64}
                        height={64}
                        className="mr-3"
                        src={user.avatar_url}
                        alt="Generic placeholder"
                    />
                </Nav.Link>
        
                <Media.Body>
                    <h5>Login: {user.login}</h5>
                    <p>Id: {user.id}</p>
                </Media.Body>
            </Media>
        );
        return (
            <div>
                <Form inline onSubmit={this.handleSubmit}>
                    <Form.Group controlId="formInlineName">
                        <Form.Control
                            type="text"
                            value={this.state.searchTerm}
                            placeholder="Enter Search Term"
                            onChange={this.handleChange}
                        />
                    </Form.Group>
                    {' '}
                    <Button type="submit">
                        Search
                    </Button>
                </Form>
                <h3>GitHub Users Results</h3>
                {this.state.isLoading && // displays "getting data while still loading"
                    <ReactLoading type="spinningBubbles" color="#444" />
                }
                {listUsers}
            </div>
        );
    }
    handleSubmit(e) {
        e.preventDefault();
        this.setState({
            isLoading: true
        })
        this.getGitHubData(this.state.searchTerm);
    }
    handleChange(e) {
        this.setState({ searchTerm: e.target.value });
    }
}
export default GitHub;