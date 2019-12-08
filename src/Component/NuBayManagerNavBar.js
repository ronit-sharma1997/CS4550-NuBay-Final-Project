import React from 'react'
import BookmarkIcon from '@material-ui/icons/Bookmark';
import Badge from '@material-ui/core/Badge';
import IconButton from '@material-ui/core/IconButton';
import {createMuiTheme, makeStyles, MuiThemeProvider} from '@material-ui/core/styles';
import {
    withRouter
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
        // this.classes = useStyles();

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

    afterSubmission(event, searchText) {
        event.preventDefault()
        this.props.history.push(`/search/${searchText}`)
    }

    loginSelected() {
        this.props.history.push(`/login`)
    }

    registerSelected() {
        this.props.history.push(`/register`)
    }

    logOutSelected() {
        this.props.logOut();
        this.props.history.push('/')
    }

    navigateToProfile() {
        if(this.props.loggedIn) {
            this.props.history.push('/profile')
        } else {
            this.props.history.push('/login')
        }
    }


    render() {
        return (
            <div>
                <Navbar color="dark" dark expand="md">
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
                                {!this.props.loggedIn && <DropdownToggle nav caret>
                                    Sign In
                                </DropdownToggle>}
                                {this.props.loggedIn && <DropdownToggle nav caret>
                                    Hello, {this.props.userInfo.firstName}!
                                </DropdownToggle>}
                                <DropdownMenu right>
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
                            <IconButton aria-label="4 pending messages" className="col-1 col-md-2" >
                                <MuiThemeProvider theme={theme}>
                                <Badge badgeContent={0} color="primary">
                                    <BookmarkIcon className={"bookmark-icon"} />
                                </Badge>
                                </MuiThemeProvider>
                            </IconButton>
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        )
    }
}
export default withRouter(NuBayManagerNavBar)