// Allrouter.js
import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home'; // Import the Home component
import Product from '../pages/Product'; // Import the Product component
import Shop from '../pages/Shop';
import Footer from '../component/Footer';
import FeaturedProducts from '../component/FeaturedProducts';
import FAQ from '../component/FAQ';
import ContactUs from '../component/ContactUs';
import TermsAndConditions from '../pages/TermsAndConditions';
import Privacy from '../pages/Privacy';


export default class Allrouter extends Component {
    render() {
        return (
            <>
                <Router>
                    <Routes>
                        <Route path="/" element={<><Home /> <Footer /></>} />
                        <Route path="/shop" element={<><Shop /> <Footer /></>} />
                        <Route
                            path="/product/:title"
                            element={
                                <>
                                    <Product />              <FeaturedProducts />                      <Footer />
                                </>
                            }
                        />

                        <Route path="/faq" element={<><FAQ /><ContactUs /><Footer /></>} />
                        <Route path="/terms&condition" element={<> <TermsAndConditions /> <Footer /></>} />
                      <Route path="/privacy" element={<> <Privacy /> <Footer /></>} />

                    </Routes>
                </Router >

            </>
        );
    }
}
