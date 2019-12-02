import React from 'react'
import { Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    Dropdown, Button } from 'reactstrap';

export class NuBayManagerNavBar extends React.Component {
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.toggleDropDownSearch = this.toggleDropDownSearch.bind(this);
        this.toggleDropDownSignIn = this.toggleDropDownSignIn(this);
        this.onMouseEnterSignIn = this.onMouseEnterSignIn.bind(this);
        this.onMouseLeaveSignIn = this.onMouseLeaveSignIn.bind(this);
        this.onMouseEnterSearch = this.onMouseEnterSearch.bind(this);
        this.onMouseLeaveSearch = this.onMouseLeaveSearch.bind(this);
        this.state = {
            dropdownOpenSignIn: false,
            dropdownSearch: false,
            isOpen: false
        };
    }

    toggle() {
        this.setState(prevState => ({
            ...prevState,
            isOpen: !prevState.isOpen
        }))

    }

    toggleDropDownSignIn() {
        this.setState(prevState => ({
            ...prevState,
            dropdownOpenSignIn: !prevState.dropdownOpenSignIn
        }));
    }

    toggleDropDownSearch() {
        this.setState(prevState => ({
            ...prevState,
            dropdownSearch: !prevState.dropdownSearch
        }));
    }


    onMouseEnterSignIn() {
        this.setState(prevState => ({
            ...prevState,
            dropdownOpenSignIn: true
        }));
    }

    onMouseLeaveSignIn() {
        this.setState(prevState => ({
            ...prevState,
            dropdownOpenSignIn: false
        }));
    }

    onMouseEnterSearch() {
        this.setState(prevState => ({
            ...prevState,
            dropdownSearch: true
        }));
    }

    onMouseLeaveSearch() {
        this.setState(prevState => ({
            ...prevState,
            dropdownSearch: false
        }));
    }

    afterSubmission(event, onSearchPressed, searchText) {
        event.preventDefault()
        onSearchPressed(searchText)
    }


    render() {
        return (
            <div>
                <Navbar sticky={true} color="dark" dark expand="md">
                    <NavbarBrand href="/">NuBay</NavbarBrand>
                    <NavbarToggler onClick={() => this.toggle()} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <UncontrolledDropdown className="mr-3" onMouseOver={this.onMouseEnterSearch} onMouseLeave={this.onMouseLeaveSearch} isOpen={this.state.dropdownSearch} toggle={this.toggleDropDownSearch} nav inNavbar>
                                <DropdownToggle nav>
                                    <i className="fa fa-search"></i> Search
                                </DropdownToggle>
                                <div id="searchBar">
                                <DropdownMenu right>
                                    <form onSubmit={(event) => this.afterSubmission(event, this.props.onSearchPressed, this.props.searchText)}>
                                    <input height={'200px'} type="text" className="form-control"
                                           placeholder="What can we help you find?"
                                           value={this.props.searchText}
                                           onChange={this.props.onSearchTextChanged}
                                           />
                                    </form>
                                </DropdownMenu>
                                </div>
                            </UncontrolledDropdown>
                            <UncontrolledDropdown onMouseOver={this.onMouseEnterSignIn} onMouseLeave={this.onMouseLeaveSignIn} isOpen={this.state.dropdownOpenSignIn} toggle={this.toggleDropDownSignIn} nav inNavbar>
                                <DropdownToggle nav caret>
                                    Sign In
                                </DropdownToggle>
                                <DropdownMenu right>
                                    <Button size={"md"} className="btn btn-primary CenterSignIn">
                                        Sign In
                                    </Button>
                                    <DropdownItem disabled/>
                                    <DropdownItem disabled/>
                                    <DropdownItem disabled/>
                                    <Button size={"md"} className="btn btn-primary CenterRegister">
                                        Register
                                    </Button>
                                    <DropdownItem divider />
                                    <DropdownItem>
                                        <b className="ml-2">Your Account</b>
                                    </DropdownItem>
                                </DropdownMenu>
                            </UncontrolledDropdown>
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        )
    }
}
export default NuBayManagerNavBar