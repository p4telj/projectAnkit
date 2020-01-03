import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';

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
            <AnchorLink href={props.link}>
                {props.text && <h2 id={props.containerId + "-font"} className="header-btn-font">{props.text}</h2>}  
                <div id={props.containerId + "-bar"} className="header-btn-bar">
                    {props.text && <div className="header-btn-bar-end"></div>}
                </div>
            </AnchorLink>
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

        window.addEventListener('load', function loadHeader() {
            callback();
            window.removeEventListener('load', loadHeader);
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
                        <AnchorLink href="#about-section">
                            <h1 id="header-name">ankit patel</h1>
                        </AnchorLink>
                        <AnchorLink href="#about-section">
                            <div id="header-btn-down">
                                <div id="header-btn-down-img"></div>
                            </div>
                        </AnchorLink>
                    </div>
                    <HeaderBar containerId="header-about" text="about me" link="#about-section" />
                    <HeaderBar containerId="header-resume" text="my resumé" link="#resume-section" />
                    <HeaderBar containerId="header-portfolio" text="my portfolio" link="#portfolio-section" />
                    <HeaderBar containerId="header-empty-1" link="" />
                    <HeaderBar containerId="header-empty-2" link="" />
                    <HeaderBar containerId="header-empty-3" link="" />
                    <HeaderBar containerId="header-empty-4" link="" />
                    <HeaderBar containerId="header-empty-5" link="" />
                    <HeaderBar containerId="header-empty-6" link="" />
                    <HeaderBar containerId="header-empty-7" link="" />
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
        <section id="about-section" className="container-fluid">
            <h1 className="section-title">about me</h1>
            <div className="section-title-bar row"></div>
            <div className="section-content row">
                <div className="col-sm-12">
                    <p>tbd</p>
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

        this.state = {
            'width': 0
        }

        this.updateWidth = this.updateWidth.bind(this);
    }

    updateWidth() {
        this.setState({
            'width': parseInt(window.innerWidth)
        });
    }

    componentDidMount() {
        var callback = this.updateWidth;

        window.addEventListener('load', function loadResume() {
            callback();
            window.removeEventListener('load', loadResume);
        });

        window.addEventListener('resize', callback);
    }

    render() {
        return (
            <section id="resume-section" className="container-fluid">
                <div id="resume-section-image-wrapper" className="row">
                    <img id="resume-section-image" src={this.state.width < 757 ? "../images/section-resume-md.jpeg" : "../images/section-resume-lg.jpeg"}></img>
                </div>
                <div id="resume-section-header">
                    <a href="../images/resume.pdf" download="resume.pdf">
                        <h1 className="section-title">my resumé</h1>
                    </a>
                    <a href="../images/resume.pdf" download="resume.pdf">
                        <div id="resume-btn-down">
                            <div id="resume-btn-down-img"></div>
                        </div>
                    </a>
                </div>
                <div className="section-title-bar row"></div>
                <div className="section-content row">
                    <div className="col-sm-12 col-md-6">
                        {/* Education, Activities */}
                        <div className="resume-group">
                            <div className="resume-group-header">
                                <h2>Education</h2>
                            </div>
                            <div className="resume-point">
                                <h3>
                                    University of Michigan<br/>
                                    <i>Taubman College of Architecture</i>
                                </h3>
                                <h4>
                                    Ann Arbor, MI<br/>
                                    April 2020
                                </h4>
                                <span>
                                    <p>
                                        <i>Bachelor of Science in Architecture</i><br/>
                                        <i>Major GPA: 3.36/4.00</i><br/><br/>
                                        Relevant Coursework:
                                    </p>
                                    <ul>
                                        <li>Graphic Communications</li>
                                        <li>Digital Drawing</li>
                                        <li>Physics Architecture Design</li>
                                        <li>Visual Studies</li>
                                        <li>Construction</li>
                                        <li>Design Fundamentals 1 &amp; 2</li>
                                        <li>Environmental Systems</li>
                                        <li>Introduction to AutoCAD</li>
                                    </ul>
                                </span>
                            </div>
                        </div>
                        <div className="resume-group">
                            <div className="resume-group-header">
                                <h2>Activities</h2>
                            </div>
                            <div className="resume-point">
                                <h3>
                                    Indian American Student Association<br/>
                                    <i>Member</i>
                                </h3>
                                <h4>
                                    Fall 2016 - Present
                                </h4>
                                <span>
                                    <ul>
                                        <li>Dances in largest student and most active student organization’s annual Indian
        Cultural show held on campus for students and family</li>
                                        <li>Assists with choreography for dance group to teach and perform for annual show</li>
                                        <li>Volunteers with and for local charities and events; Gandhi Day of community service</li>
                                    </ul>
                                </span>
                            </div>
                            <div className="resume-point">
                                <h3>
                                    Dandia Dhamaka<br/>
                                    <i>Logo Designer</i>
                                </h3>
                                <h4>
                                    Fall 2016 - Present
                                </h4>
                                <span>
                                    <ul>
                                        <li>Designs logos for the reinvention of a new dance competition in Ann Arbor</li>
                                    </ul>
                                </span>
                            </div>
                            <div className="resume-point">
                                <h3>
                                    Laptop Sticker Artist
                                </h3>
                                <h4>
                                    Fall 2016 - Present
                                </h4>
                                <span>
                                    <ul>
                                        <li>Draws original stickers bought and sold nationwide on the website RedBubble</li>
                                    </ul>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-6">
                        {/* Experience, Computer Skills */}
                        <div className="resume-group">
                            <div className="resume-group-header">
                                <h2>Experience</h2>
                            </div>
                            <div className="resume-point">
                                <h3>
                                    English Gardens<br/>
                                    <i>Sales Associate</i>
                                </h3>
                                <h4>
                                    Farmington Hills, MI<br/>
                                    <i>May 2019 - June 2019</i>
                                </h4>
                                <span>
                                    <ul>
                                        <li>Aided customers with answers about specific plants in order to better fit their design decisions</li>
                                        <li>Loaded and unloaded cars for customers with purchases of mulch or large plants that were bought at the nursery</li>
                                        <li>Delivered plants and custom patio furniture that were previously purchased in-store</li>
                                    </ul>
                                </span>
                            </div>
                            <div className="resume-point">
                                <h3>
                                    Michigan Wolveraas<br/>
                                    <i>Captain</i>
                                </h3>
                                <h4>
                                    Ann Arbor, MI<br/>
                                    <i>September 2017 - April 2019</i>
                                </h4>
                                <span>
                                    <ul>
                                        <li>Competitive dance team featuring North Indian style folk; ran practices for team
        and created original choreography</li>
                                        <li>Led team to win first place in 2018 and second place in 2019 at nationwide
        competition in Chapel Hill, North Carolina</li>
                                        <li>Managed tasks for Public Relations Committee, Props Committee, Logistics
        Committee, Finance Committee</li>
                                    </ul>
                                </span>
                            </div>
                            <div className="resume-point">
                                <h3>
                                    Michigan Wolveraas<br/>
                                    <i>Props Chair</i>
                                </h3>
                                <h4>
                                    Ann Arbor, MI<br/>
                                    <i>April 2019 - Present</i>
                                </h4>
                                <span>
                                    <ul>
                                        <li>Creates original props in relation to a theme critiqued by judges performed on stage
        at competitions</li>
                                        <li>Delegates tasks for team members to build and invent props for on stage
        performance</li>
                                        <li>Interfaced with competition organizers to receive constructive feedback on
        performance and set design</li>
                                    </ul>
                                </span>
                            </div>
                        </div>
                        <div className="resume-group">
                            <div className="resume-group-header">
                                <h2>Computer Skills</h2>
                            </div>
                            <div className="resume-point">
                                <span>
                                    <p>Platforms &amp; Applications</p>
                                    <ul>
                                        <li>Windows 10</li>
                                        <li>MacOS</li>
                                        <li>Microsoft Office</li>
                                        <li>Rhinoceros</li>
                                        <li>AutoCAD</li>
                                        <li>Adobe Photoshop</li>
                                        <li>Adobe Illustrator</li>
                                    </ul>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

/** 
 * Portfolio Section 
 */
export function Portfolio(props) {
    return (
        <section name="portfolio-section" id="portfolio-section" className="container-fluid">
            <h1 className="section-title">my portfolio</h1>
            <div className="section-title-bar row"></div>
            <div className="section-content row">
                <div className="col-sm-12">
                    <p>tbd</p>
                </div>
            </div>
        </section>
    );
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