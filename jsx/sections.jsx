import React from 'react';

// Page
// // NavBar
// // Header
// // About
// // Resume
// // Portfolio
// // Footer

/** 
 * Header Section 
 */
function HeaderBar(props) {
    return (
        <div id={props.containerId} className="header-btn">
            {props.text && <h2 id={props.containerId + "-font"} className="header-btn-font">{props.text}</h2>}  
            <div id={props.containerId + "-bar"} className="header-btn-bar">
                {props.text && <div className="header-btn-bar-end"></div>}
            </div>
        </div>
    );
}

export class Header extends React.Component {

    constructor(props) {
        super(props);
    }

    resizeHeader() {
        let viewportHeight = window.innerHeight;
        let imageHeight = document.getElementById("header-img").height;
        document.getElementById("header").style.height = viewportHeight < imageHeight ? viewportHeight + "px" : imageHeight + "px";
    }
    
    componentDidMount() {
        var callback = this.resizeHeader;

        window.addEventListener('load', function load() {
            callback();
            window.removeEventListener('load', load);
        });

        window.addEventListener('resize', callback);
    }

    render() {
        return (
            <header id="header">
                <div id="header-wrapper">
                    <div id="header-mobile"></div>
                    <img id="header-img" src="../images/header-desktop.png"></img>
                    <div id="header-main">
                        <h1 id="header-name">ankit patel</h1>
                        <div id="header-btn-down">
                            <div id="header-btn-down-img"></div>
                        </div>
                    </div>
                    <HeaderBar containerId="header-about" text="about me" />
                    <HeaderBar containerId="header-resume" text="my resumé" />
                    <HeaderBar containerId="header-portfolio" text="my portfolio" />
                    <HeaderBar containerId="header-empty-1" />
                    <HeaderBar containerId="header-empty-2" />
                    <HeaderBar containerId="header-empty-3" />
                    <HeaderBar containerId="header-empty-4" />
                    <HeaderBar containerId="header-empty-5" />
                    <HeaderBar containerId="header-empty-6" />
                    <HeaderBar containerId="header-empty-7" />
                </div>
            </header>
        );
    }
}

/** 
 * About Section 
 */
export function About(props) {
    return (
        <section id="about-section container-fluid">
            <h1 className="section-title">about me</h1>
            <div className="section-title-bar"></div>
            <div className="section-content row">
                <div className="col-sm-12">
                    <p>Hi, my name is ankit patel but some people call me anskeet.</p>
                </div>
            </div>
        </section>
    );
}

/** 
 * Resume Section 
 */
export class Resume extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div></div>
        );
    }
}

/** 
 * Portfolio Section 
 */
export class Portfolio extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div></div>
        );
    }
}

/** 
 * Footer Section 
 */
export class Footer extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div></div>
        );
    }
}