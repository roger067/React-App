import React from 'react';

const Navbar = () => {
    return (
        <nav className="navbar navbar-inverse">
            <div className="container-fluid">
                <div className="navbar-header">
                    <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1"
                        aria-expanded="false">
                        <span className="sr-only">Toggle navigation</span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                    </button>
                    <a className="navbar-brand" href="#home">
                        <img className="logo" src="logo.svg" alt="logo"/>
                    </a>
                </div>

                <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                    <ul className="nav navbar-nav">
                    </ul>
                    <ul className="nav navbar-nav navbar-right">
                        <li>
                            <a href="www.linkedin.com/in/rogermoura12" target="_blank">
                                <i className="fa fa-linkedin"></i>
                            </a>
                        </li>
                        <li>
                            <a href="https://github.com/roger067" target="_blank">
                                <i className="fa fa-github"></i>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar