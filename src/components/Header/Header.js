import React, { Component } from "react";
import { Nav, NavItem, Navbar, NavbarBrand, NavLink, Collapse, NavbarToggler } from "reactstrap";

import './Header.css';

class Header extends Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    render () {
        return (
            <Navbar fixed="top" className="header" expand="md">
                <div className="container">
                    <NavbarBrand href="/">
                        SCR
                    </NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <NavLink>Site is still under construction</NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </div>
            </Navbar>
        );
    }
}

export default Header;