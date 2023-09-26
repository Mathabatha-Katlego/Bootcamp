import React, { Component } from 'react';
import { Table, Button, Modal } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/database';


class User extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: [],
            showDeleteDialog: false, //don't show delete dialog
            selectedUser: {}//holds the current selected user to delete
        };
        this.add = this.add.bind(this);
        this.closeDeleteDialog = this.closeDeleteDialog.bind(this);
        this.delete = this.delete.bind(this);
    }

    componentDidMount() {
        firebase.database().ref('/')
            .on('value', snapshot => {
                let returnArr = []; //decalre empty array
                snapshot.forEach(data => {
                    var user = data.val(); // we retrieve for each object
                    user['key'] = data.key; // assign key proprty value to user object
                    returnArr.push(user); //Push object into returnArr
                });
                this.setState({
                    users: returnArr
                })
                console.log(snapshot.val())
            });
    }
    render() {
        const listUsers = this.state.users.map((user) =>
            <tr key={user.key}>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>
                    <Link to={`/edit/${user.key}`}>
                        Edit
                    </Link>
                </td>
                <td>
                    <Button //bind c;lick event to opendeletedialog
                        onClick={this.openDeleteDialog.bind(this, user)}>Remove</Button> 
                </td>
            </tr>
        );
        return (
            <div>
                <Button variant="primary" onClick={this.add}>Add</Button>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Username</th>
                            <th>Email</th>
                            <th>Edit</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {listUsers}
                    </tbody>
                </Table>
                <Modal show={this.state.showDeleteDialog} onHide={this.closeDeleteDialog}>
                    <Modal.Header closeButton>
                        <Modal.Title>Delete User</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <p>Are you sure you want to delete
                            {this.state.selectedUser.username}?</p>
                        <hr />
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={this.delete}>Delete</Button>
                        <Button onClick={this.closeDeleteDialog}>Close</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        );
    }

    add(e) {
        this.props.history.push("/add");//we route to a new page with a form to add new user
    }

    openDeleteDialog(user) {
        this.setState({
            showDeleteDialog: true,// set to true to show dialoge when delete is selected
            selectedUser: user// holds current selected user
        });
    }

    closeDeleteDialog() {
        this.setState({
            showDeleteDialog: false,
            selectedUser: {}
        });
    }

    delete(e) {
        firebase.database().ref('/' + this.state.selectedUser.key).remove()
            .then(x => {
                console.log("SUCCESS");
                this.closeDeleteDialog();
            })
            .catch(error => {
                alert("Could not delete the user.");
                console.log("ERROR", error)
            });
    }
}


export default User;