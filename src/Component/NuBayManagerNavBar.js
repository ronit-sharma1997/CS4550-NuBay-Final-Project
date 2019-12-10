import React from 'react'
import BookmarkIcon from '@material-ui/icons/Bookmark';
import Badge from '@material-ui/core/Badge';
import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/Add';
import {createMuiTheme, makeStyles, MuiThemeProvider} from '@material-ui/core/styles';
import {
    withRouter, Link
} from 'react-router-dom';
import { Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    Dropdown, Button } from 'reactstrap';
import NuBayManagerHeaderBar from "./NuBayManagerHeaderBar";

const theme = createMuiTheme({
    overrides: {
        MuiSvgIcon: {
            root: {
                color: "rgba(255, 255, 255, 0.5)",
            }
        }
    }
});

class NuBayManagerNavBar extends React.Component {
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.toggleDropDownSearch = this.toggleDropDownSearch.bind(this);
        this.toggleDropDownSignIn = this.toggleDropDownSignIn.bind(this);
        this.toggleDropDownAddObject = this.toggleDropDownAddObject.bind(this)
        this.onMouseEnterSignIn = this.onMouseEnterSignIn.bind(this);
        this.onMouseLeaveSignIn = this.onMouseLeaveSignIn.bind(this);
        this.onMouseEnterSearch = this.onMouseEnterSearch.bind(this);
        this.onMouseLeaveSearch = this.onMouseLeaveSearch.bind(this);
        this.onMouseEnterAddObject = this.onMouseEnterAddObject.bind(this);
        this.onMouseLeaveAddObject = this.onMouseLeaveAddObject.bind(this);
        this.state = {
            dropdownOpenSignIn: false,
            dropdownSearch: false,
            addObjectOpen: false,
            isOpen: false
        };
        if(props.match) {


        }

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

    toggleDropDownAddObject() {
        this.setState(prevState => ({
            ...prevState,
            addObjectOpen: !prevState.addObjectOpen
        }))
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

    onMouseEnterAddObject() {
        this.setState(prevState => ({
            ...prevState,
            addObjectOpen: true
        }))
    }

    onMouseLeaveAddObject() {
        this.setState(prevState => ({
            ...prevState,
            addObjectOpen: false
        }))
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

    afterSubmission(event, searchText) {
        event.preventDefault()
        this.props.resetCount()
        this.props.history.push(`/search/${searchText}`)
    }

    loginSelected() {
        this.props.hideNavBar()
        this.props.history.push(`/login`)
    }

    addItemSelected() {
        this.props.hideNavBar()
        if(this.props.loggedIn) {
            this.props.history.push('/add/item')
        } else {
            this.props.history.push('/login')
        }

    }

    addServiceSelected() {
        this.props.hideNavBar()
        if(this.props.loggedIn) {
            this.props.history.push('/add/service')
        } else {
            this.props.history.push('/login')
        }
    }

    registerSelected() {
        this.props.hideNavBar()
        this.props.history.push(`/register`)
    }

    logOutSelected() {
        this.props.hideNavBar()
        this.props.logOut();
        this.props.history.push('/')
    }

    navigateToProfile() {
        this.props.hideNavBar()
        if(this.props.loggedIn) {
            this.props.history.push('/profile')
        } else {
            this.props.history.push('/login')
        }
    }

    navigateToBookmarks() {
        this.props.hideNavBar()
        if(this.props.loggedIn) {
            this.props.history.push({
                pathname: '/profile',
                state: { tab: 2 }
            })
        } else {
            this.props.history.push('/login')
        }
    }


    render() {
        console.log(this.props.userInfo.id, this.props.loggedIn)
        return (
            <div>
                <Navbar color="dark" dark expand="md">
                <Link to={{pathname:'/', state: {user_id: this.props.userInfo.id, logged_in: this.props.loggedIn}}}>
                    <NavbarBrand>
                        NuBay
                    </NavbarBrand>
                    </Link>
                    <NavbarToggler onClick={() => this.toggle()} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <UncontrolledDropdown className="mr-3" onMouseOver={this.onMouseEnterSearch} onMouseLeave={this.onMouseLeaveSearch} isOpen={this.state.dropdownSearch} toggle={this.toggleDropDownSearch} nav inNavbar>
                                <DropdownToggle className="mt-1" nav>
                                    <i className="fa fa-search"></i> Search
                                </DropdownToggle>
                                <div id="searchBar">
                                <DropdownMenu right>
                                    <form onSubmit={(event) => this.afterSubmission(event, this.props.searchText)}>
                                    <input height={'200px'} type="text" className="form-control"
                                           placeholder="What can we help you find?"
                                           value={this.props.searchText}
                                           onChange={this.props.onSearchTextChanged}
                                           />
                                    </form>
                                </DropdownMenu>
                                </div>
                            </UncontrolledDropdown>
                            <UncontrolledDropdown onMouseOver={this.onMouseEnterSignIn}
                            onMouseLeave={this.onMouseLeaveSignIn}
                            isOpen={this.state.dropdownOpenSignIn} toggle={this.toggleDropDownSignIn} nav inNavbar>
                                {!this.props.loggedIn && <DropdownToggle className="mt-1" nav caret>
                                    Sign In
                                </DropdownToggle>}
                                {this.props.loggedIn && <DropdownToggle className="mt-1" nav caret>
                                    Hello, {this.props.userInfo.firstName}!
                                </DropdownToggle>}
                                <DropdownMenu className="col-4" right>
                                    {!this.props.loggedIn && <Button size={"md"} onClick={() => this.loginSelected()} className="btn btn-primary CenterSignIn">
                                        Sign In
                                    </Button>}
                                    {!this.props.loggedIn && <DropdownItem disabled/>}
                                    {!this.props.loggedIn && <DropdownItem disabled/>}
                                    {!this.props.loggedIn && <DropdownItem disabled/>}
                                    {!this.props.loggedIn && <Button size={"md"} onClick={() => this.registerSelected()} className="btn btn-primary CenterRegister">
                                        Register
                                    </Button>}
                                    {this.props.loggedIn && <Button size={"md"} onClick={() => this.logOutSelected()} className="btn btn-primary CenterRegister">
                                        Log Out
                                    </Button>}
                                    <DropdownItem divider />
                                    <DropdownItem onClick={() => this.navigateToProfile()}>
                                        <b className="ml-2">Your Profile</b>
                                    </DropdownItem>
                                </DropdownMenu>
                            </UncontrolledDropdown>
                            {this.props.userInfo && (this.props.userInfo.userRole === "SELLER" || !this.props.loggedIn) && <UncontrolledDropdown onMouseOver={this.onMouseEnterAddObject}
                                                  onMouseLeave={this.onMouseLeaveAddObject}
                                                  isOpen={this.state.addObjectOpen} toggle={this.toggleDropDownAddObject} nav inNavbar>
                                <DropdownToggle nav>
                                    <i className="fa fa-plus fa-lg mt-2 ml-4 ml-md-2"></i>
                                </DropdownToggle>
                                <DropdownMenu className="col-4" right>
                                    <Button size={"md"} onClick={() => this.addItemSelected()} className="btn btn-primary CenterAddItem">
                                        Add Item
                                    </Button>
                                    <DropdownItem divider />
                                    <Button size={"md"} onClick={() => this.addServiceSelected()} className="btn btn-primary CenterAddService">
                                        Add Service
                                    </Button>

                                </DropdownMenu>
                            </UncontrolledDropdown>}
                            <IconButton onClick={() => this.navigateToBookmarks()} className="col-1 ml-2 my-auto" >
                                <MuiThemeProvider theme={theme}>
                                <Badge badgeContent={this.props.bookmarkCount} color="primary">
                                    <BookmarkIcon className={"bookmark-icon"} />
                                </Badge>
                                </MuiThemeProvider>
                            </IconButton>
                        </Nav>
                    </Collapse>
                </Navbar>
                <div className={!this.props.displayHeader ? "d-none" : "container-fluid"}>
                    <NuBayManagerHeaderBar itemlength={this.props.searchResultCount} searchResult={this.props.searchKeyword}/>
                </div>
            </div>
        )
    }
}
export default withRouter(NuBayManagerNavBar)