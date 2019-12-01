import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import axios from 'axios';


/* eslint-disable */
class ListContact extends React.Component {
    state = {
        loading: true,
        people: []
    };

    async componentDidMount() {
        const url = "http://localhost:1991/api/emp_lists";
        const response = await fetch(url);
        const data = await response.json();
        this.setState({ people: data, loading: false });

    }

    render() {
        return (
            <div>
                <Container>
                    <Row>
                        {this.state.people.map(person => (
                            <div>
                        <Col md={4}>
                            {this.state.loading || !this.state.people.length ? (
                                <div>loading...</div>
                            ) : (
                                    <div className='contact-list-itme'>
                                        <button
                                            onClick={() => props.onDeleteContact(contact)}
                                            className='close'>&times;</button>

                                        <div className='contact-avatar'><img src={person.picture} /></div>
                                        <div>
                                            <p>{person.name}</p>
                                            <p>{person.designation}</p>
                                        </div>

                                    </div>

                                )}

                            
                                </Col>
                            </div>
                        ))}
                        <div className='AddMore'>
                            <Link to="/team/addmember">Add Member</Link>
                        </div>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default ListContact;
