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
        <div id={props.id} className="header-btn" style={{background: "rgba(255,255,255," + props.opacity + ")"}}>
            {props.text && <h2 className="header-btn-font">{props.text}</h2>}
            <div className="header-btn-bar"></div>
            {props.text && <div className="header-btn-bar-end"></div>}
        </div>
    );
}

export class Header extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        
        return (
            <header id="header">
                <div id="header-wrapper">
                    <div id="header-mobile"></div>
                    <img className="header-img" src="../images/header-desktop.png"></img>
                    <h1 className="header-name">ankit patel</h1>
                    <div id="header-btn-down">
                        <div id="header-btn-down-img"></div>
                    </div>
                    <HeaderBar id="header-about" text="about me" />
                    <HeaderBar id="header-resume" text="my resumé" />
                    <HeaderBar id="header-portfolio" text="my portfolio" />
                    <HeaderBar id="header-empty-1" opacity="0.27" />
                    <HeaderBar id="header-empty-2" opacity="0.23" />
                    <HeaderBar id="header-empty-3" opacity="0.19" />
                    <HeaderBar id="header-empty-4" opacity="0.15" />
                    <HeaderBar id="header-empty-5" opacity="0.13" />
                    <HeaderBar id="header-empty-6" opacity="0.11" />
                    <HeaderBar id="header-empty-7" opacity="0.1" />
                </div>
            </header>
        );
    }
}

/** 
 * About Section 
 */
export class About extends React.Component {
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