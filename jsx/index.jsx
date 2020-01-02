import React from 'react';
import ReactDOM from 'react-dom';

import { Header, About, Resume, Portfolio, Footer } from './sections.jsx';

/* Utility functions */

/**
 * Checks if a font is available to be used on a web page.
 *
 * @param {String} fontName The name of the font to check
 * @return {Boolean}
 * @license MIT
 * @copyright Sam Clarke 2013
 * @author Sam Clarke <sam@samclarke.com>
 */
(function (document) {
    var width;
    var body = document.body;
  
    var container = document.createElement('span');
    container.innerHTML = Array(100).join('wi');
    container.style.cssText = [
      'position:absolute',
      'width:auto',
      'font-size:128px',
      'left:-99999px'
    ].join(' !important;');
  
    var getWidth = function (fontFamily) {
      container.style.fontFamily = fontFamily;
  
      body.appendChild(container);
      width = container.clientWidth;
      body.removeChild(container);
  
      return width;
    };
  
    // Pre compute the widths of monospace, serif & sans-serif
    // to improve performance.
    var monoWidth  = getWidth('monospace');
    var serifWidth = getWidth('serif');
    var sansWidth  = getWidth('sans-serif');
  
    window.isFontAvailable = function (font) {
      return monoWidth !== getWidth(font + ',monospace') ||
        sansWidth !== getWidth(font + ',sans-serif') ||
        serifWidth !== getWidth(font + ',serif');
    };
  })(document);

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
        if (isFontAvailable('BlinkMacSystemFont')) {
            document.getElementsByTagName("body")[0].style.letterSpacing = "0.5px";
        }
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