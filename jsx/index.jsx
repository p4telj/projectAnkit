import React from 'react';
import ReactDOM from 'react-dom';

import { Header, About, Resume, Portfolio, Footer } from './sections.jsx';

// Page
// // NavBar
// // Header
// // About
// // Resume
// // Portfolio
// // Footer

/**
 * Scrollable Page
 */
class Page extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        window.scroll({behavior: 'smooth'});
    }

    render() {
        return (
            <React.Fragment>
                <NavBar />
                <Header />
                <About />
                <Resume />
                <Portfolio />
                <Footer />
            </React.Fragment>
        );
    }
}

/**
 * Navigation Bar
 */
class NavBar extends React.Component {
    
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div></div>
        );
    }
}

ReactDOM.render (
    <Page />,
    document.getElementById('reactNode')
);