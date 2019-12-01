
import React from 'react';
import ListContacts from './ListContacts'
/* eslint-disable */
class Team extends React.Component {
    state = {
        contacts: [
            {
                "id": "karen",
                "name": "Karen Isgrigg",
                "handle": "karen_isgrigg",
                "avatarURL": "./icons/profile01.png"
            },
            {
                "id": "richard",
                "name": "Richard Kalehoff",
                "handle": "richardkalehoff",
                "avatarURL": "./icons/profile02.png"
            },
            {
                "id": "tyler",
                "name": "Tyler McGinnis",
                "handle": "tylermcginnis",
                "avatarURL": "./icons/profile03.png"
            }
        ]
    }
    removeContact = (contact) => {
        this.setState((currentState) => ({
            contacts: currentState.contacts.filter((c) => {
                return c.id !== contact.id
            })
        }))
    }

    handleSubmit(event) {
        event.preventDefault();
        console.log('headr');

    }
    render() {
        return (
            <div>
                <header class="masthead">
                    <div class="container">
                        <div class="intro-text overlay">
                            <div class="intro-lead-in">Welcome To Our Studio!</div>
                            <div class="intro-heading text-uppercase">It's Nice To Meet You</div>
                            <a class="btn btn-xl text-uppercase " href="#services">Tell Me More</a>
                        </div>
                    </div>
                </header>
                <ListContacts
                    contacts={this.state.contacts}
                    onDeleteContact={this.removeContact}
                />
            </div>
        )
    }
}
export default Team;


