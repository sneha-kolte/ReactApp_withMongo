import React, { Component } from 'react';
import Services from './components/Services'
import './App.css';
import './index.css';
import HomepageForm from './components/HomepageForm';



class App extends Component {
    render() {
        return (
            <div>
                <header class="masthead">
                    <div class="container">
                        <div class="intro-text">
                            <div class="intro-lead-in">Welcome To Our Studio!</div>
                            <div class="intro-heading text-uppercase">It's Nice To Meet You</div>
                            <a class="btn btn-xl text-uppercase " href="#services">Tell Me More</a>
                        </div>
                    </div>
                </header>
                <Services />

                <section id="call-to-action">
                    <div class="text-center callToAct container">
                        <h3>Call To Action</h3>
                        <p> Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        <a class="cta-btn" href="#">Call To Action</a>
                    </div>
                </section>
                <HomepageForm />

                <footer id="footer">
                    <div class="footer-top">
                        <div class="container">
                            <div class="row">
                                <div class="col-lg-3 col-md-6 footer-info">
                                    <h3>REACT</h3>
                                    <p>Cra~~s fermentum odio eu feugiat lide par naso tierra. Justo eget nada terra videa magna derita valies darta donna mare fermentum iaculis eu non diam phasellus. Scelerisque felis imperdiet proin fermentum leo. Amet volutpat consequat mauris nunc congue.</p>
                                </div>

                                <div class="col-lg-3 col-md-6 footer-links">
                                    <h4>Useful Links</h4>
                                    <ul>
                                        <li><i class="fa fa-arrow-right"></i> <a href="#">Home</a></li>
                                        <li><i class="fa fa-arrow-right"></i> <a href="#">About us</a></li>
                                        <li><i class="fa fa-arrow-right"></i> <a href="#">Services</a></li>
                                        <li><i class="fa fa-arrow-right"></i> <a href="#">Terms of service</a></li>
                                        <li><i class="fa fa-arrow-right"></i> <a href="#">Privacy policy</a></li>
                                    </ul>
                                </div>
                                <div class="col-lg-3 col-md-6 footer-contact">
                                    <h4>Contact Us</h4>


                                    <div class="social-links">
                                        <a href="#" class="twitter"><i class="fa fa-twitter"></i></a>
                                        <a href="#" class="facebook"><i class="fa fa-facebook"></i></a>
                                        <a href="#" class="instagram"><i class="fa fa-instagram"></i></a>
                                        <a href="#" class="google-plus"><i class="fa fa-google-plus"></i></a>
                                        <a href="#" class="linkedin"><i class="fa fa-linkedin"></i></a>
                                    </div>

                                </div>
                                <div class="col-lg-3 col-md-6 footer-newsletter">
                                    <h4>Our Newsletter</h4>
                                    <p>Tamen quem nulla quae legam multos aute sint culpa legam noster magna veniam enim veniam illum dolore legam minim quorum culpa amet magna export quem marada parida nodela caramase seza.</p>

                                </div>


                            </div>
                        </div>
                    </div>
                </footer>

            </div>
        )
    }
}
export default App;
