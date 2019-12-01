import React from 'react';
import axios from 'axios';

class HomepageForm extends React.Component {
    contactList(newEntry) {
        axios.request({
            method: 'post',
            url: 'http://localhost:1991/api/meetups',
            data: newEntry
        }).then(response => {
            this.newEntry.push();
        }).catch(err => console.log(err));
    }

    onSubmit(e) {
        const newEntry = {
            name: this.refs.name.value,
            email: this.refs.email.value,
            subject: this.refs.subject.value,
            message: this.refs.message.value
        }
        this.contactList(newEntry);
        e.preventDefault();
    }
    render() {
        return (
            <div>
                <section id="contactUs">
                    <div className="container">
                        <div className="section-header">

                            <h3>Contact Us</h3>
                            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque</p>
                        </div>
                        <div className="row contact-info">

                            <div className="col-md-4">
                                <div className="contact-address">
                                    <i className="fa fa-home"></i>
                                    <h3>Address</h3>
                                    <address>A108 Adam Street, NY 535022, USA</address>
                                </div>
                            </div>

                            <div className="col-md-4">
                                <div className="contact-phone">
                                    <i className="fa fa-phone"></i>
                                    <h3>Phone Number</h3>
                                    <p><a href="tel:+155895548855">+1 5589 55488 55</a></p>
                                </div>
                            </div>

                            <div className="col-md-4">
                                <div className="contact-email">
                                    <i className="fa fa-envelope"></i>
                                    <h3>Email</h3>
                                    <p><a href="mailto:info@example.com">info@example.com</a></p>
                                </div>
                            </div>

                        </div>
                        <form onSubmit={this.onSubmit.bind(this)}>
                            <div className="form-row">
                                <div className="form-group col-md-6">
                                    <input type="text" name="name" ref="name" className="form-control" id="name" placeholder="Your Name" />

                                </div>
                                <div className="form-group col-md-6">
                                    <input type="email" name="email" ref="email" className="form-control" id="email" placeholder="Your Email" />

                                </div>
                            </div>
                            <div className="form-group">
                                <input type="text" name="subject" ref="subject" className="form-control" id="subject" placeholder="Subject" />

                            </div>
                            <div className="form-group">
                                <textarea className="form-control" name="message" ref="message" rows="5" placeholder="Message"></textarea>

                            </div>
                            <div className="text-center"><button type="submit">Send Message</button></div>
                        </form>
                    </div>


                </section>
            </div>
        )
    }
}
export default HomepageForm
