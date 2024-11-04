import React, {useState} from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import logo from "../assets/logo-clean.svg";
import {Link} from "react-router-dom";
import {
    AiOutlineHome,
    AiOutlineFundProjectionScreen,
    AiOutlineUser, AiOutlineContacts
} from "react-icons/ai";
import {
    ImStack
} from "react-icons/im";
import {GiNotebook} from "react-icons/gi";
import {BsFileEarmark} from "react-icons/bs";

function NavBar() {
    const [expand, updateExpanded] = useState(false);
    const [navColour, updateNavbar] = useState(false);

    function scrollHandler() {
        if (window.scrollY >= 20) {
            updateNavbar(true);
        } else {
            updateNavbar(false);
        }
    }

    window.addEventListener("scroll", scrollHandler);

    return (
        <Navbar
            expanded={expand}
            fixed="top"
            expand="md"
            className={navColour ? "sticky" : "navbar"}
        >
            <Navbar.Brand style={{marginRight: 0}} href="/" className="navBrand d-flex nav-link">
                <img src={logo} className="navBrand img-fluid logo" alt="brand"/>
            </Navbar.Brand>
            <Navbar.Toggle
                aria-controls="responsive-navbar-nav"
                onClick={() => {
                    updateExpanded(expand ? false : "expanded");
                }}
            >
                <span></span>
                <span></span>
                <span></span>
            </Navbar.Toggle>
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="ms-auto" defaultActiveKey="#home">
                    <Nav.Item>
                        <Nav.Link as={Link} to="/" onClick={() => updateExpanded(false)}>
                            <AiOutlineHome style={{marginBottom: "2px"}}/> Home
                        </Nav.Link>
                    </Nav.Item>

                    <Nav.Item>
                        <Nav.Link
                            as={Link}
                            to="/about"
                            onClick={() => updateExpanded(false)}
                        >
                            <AiOutlineUser style={{marginBottom: "2px"}}/> About
                        </Nav.Link>
                    </Nav.Item>

                    <Nav.Item>
                        <Nav.Link
                            as={Link}
                            to="/stack"
                            onClick={() => updateExpanded(false)}
                        >
                            <ImStack style={{marginBottom: "2px"}}/> Tech&nbsp;stack
                        </Nav.Link>
                    </Nav.Item>

                    <Nav.Item>
                        <Nav.Link
                            as={Link}
                            to="/projects"
                            onClick={() => updateExpanded(false)}
                        >
                            <AiOutlineFundProjectionScreen
                                style={{marginBottom: "2px"}}
                            /> Projects
                        </Nav.Link>
                    </Nav.Item>

                    <Nav.Item>
                        <Nav.Link
                            as={Link}
                            to="/cv"
                            onClick={() => updateExpanded(false)}
                        >
                            <BsFileEarmark
                                style={{marginBottom: "2px"}}
                            /> CV
                        </Nav.Link>
                    </Nav.Item>

                    <Nav.Item>
                        <Nav.Link
                            as={Link}
                            to="/contacts"
                            onClick={() => updateExpanded(false)}
                        >
                            <AiOutlineContacts
                                style={{marginBottom: "2px"}}
                            />{" "}
                            Contacts
                        </Nav.Link>
                    </Nav.Item>

                    <Nav.Item>
                        <Nav.Link
                            as={Link}
                            to="https://surkoff.com/blog"
                            onClick={() => updateExpanded(false)}
                        >
                            <GiNotebook style={{marginBottom: "2px"}}/> Blog
                        </Nav.Link>
                    </Nav.Item>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default NavBar;
