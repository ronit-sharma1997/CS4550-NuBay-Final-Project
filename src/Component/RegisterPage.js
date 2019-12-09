import React from 'react'
import {Link} from "react-router-dom";
import UserService from "../services/UserService";

export default class RegisterPage extends React.Component {
    constructor(props) {
        super(props)
        this.userService = new UserService();
        this.state = {
            editingTextFirstName: "",
            editingTextLastName: "",
            editingTextEmail: "",
            editingTextUserName: "",
            editingTextPassword: "",
            editingTextVerifyPassword: "",
            editingDropDownRole: "BUYER"
        }

        this.firstNameChangeRegister = this.firstNameChangeRegister.bind(this)
        this.lastNameChangeRegister = this.lastNameChangeRegister.bind(this)
        this.userNameChangeRegister = this.userNameChangeRegister.bind(this)
        this.passwordChangeRegister = this.passwordChangeRegister.bind(this)
        this.verifyPasswordChangeRegister = this.verifyPasswordChangeRegister.bind(this)
    }

    firstNameChangeRegister(event){
        event.persist()
        this.setState(prevState => ({
            ...prevState,
            editingTextFirstName: event.target.value
        }))


    }

    lastNameChangeRegister = (event) => {
        event.persist()
        this.setState(prevState => ({
            ...prevState,
            editingTextLastName: event.target.value
        }))
        console.log(event.target.value)

    }

    userNameChangeRegister = (event) => {
        event.persist()
        this.setState(prevState => ({
            ...prevState,
            editingTextUserName: event.target.value
        }))

    }

    emailChangeRegister = (event) => {
        event.persist()
        this.setState(prevState => ({
            ...prevState,
            editingTextEmail: event.target.value
        }))

    }

    passwordChangeRegister = (event) => {
        event.persist()
        this.setState(prevState => ({
            ...prevState,
            editingTextPassword: event.target.value
        }))

    }

    verifyPasswordChangeRegister = (event) => {
        event.persist()
        this.setState(prevState => ({
            ...prevState,
            editingTextVerifyPassword: event.target.value
        }))
    }

    selectRoleChange = (event) => {
        event.persist();
        this.setState(prevState => ({
            ...prevState,
            editingDropDownRole: event.target.value
        }))
    }

    createUser = () => {
        var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if(this.state.editingTextUserName === "" || this.state.editingTextFirstName === ""
            || this.state.editingTextLastName === "" || this.state.editingTextPassword === ""
            || this.state.editingTextVerifyPassword === "") {
            alert("Please fill in all necessary fields")
        } else if (!re.test(this.state.editingTextEmail)) {
            alert("Please enter a valid email")
        } else if (this.state.editingTextPassword !== this.state.editingTextVerifyPassword) {
            alert("Please make sure both passwords typed are the same")
        } else {
            this.userService.createUser({
                "firstName": this.state.editingTextFirstName,
                "lastName": this.state.editingTextLastName,
                "username": this.state.editingTextUserName,
                "password": this.state.editingTextPassword,
                "userRole": this.state.editingDropDownRole,
                "items": [],
                "serviceItems": [],
                "bookmarkedItems": [],
                "email": this.state.editingTextEmail,
                "phoneNumber": "1111111111",
            }, this.submitUserInfoCallback)
        }
    }

    submitUserInfoCallback = (responseCode) => {
        if(responseCode === -1) {
            alert("User already exists!")
        } else if(responseCode === -2) {
            alert("Please use a Northeastern certified email(husky.neu.edu) if you are signing up as a seller")
        } else {
            this.props.setLoggedInUser(responseCode)
            this.props.history.push(`/profile`)
        }
    }

    render() {
        return (
            <div className="container justify-content-center">
                <div className="row justify-content-center">
                    <h1>NuBay</h1>
                </div>
                <div className="row justify-content-center mt-3">
                    <div className="card  w-50">
                        <div className="card-body">

                            <form>
                                <div className="form-group">
                                    <h4>Create An Account</h4>
                                </div>
                                <div className="form-row">
                                <div className="form-group col-md-6">
                                    <label htmlFor="firstname" className="col-form-label float-left">
                                        First Name </label>
                                    <input className="form-control wbdv-field wbdv-firstname" id="firstname"
                                           value={this.state.editingTextFirstName}
                                           placeholder="First Name" onChange={this.firstNameChangeRegister}/>
                                </div>
                                <div className="form-group col-md-6 mt-0">
                                    <label htmlFor="lastname" className="col-form-label float-left">
                                        Last Name </label>
                                    <input className="form-control wbdv-field wbdv-lastname" id="lastname"
                                           placeholder="Last Name"
                                            value={this.state.editingTextLastName} onChange={this.lastNameChangeRegister}/>
                                </div>
                                </div>
                                <div className="form-row">
                                <div className="form-group col-md-6">
                                    <label htmlFor="role" className="col-form-label float-left">
                                        Role </label>
                                        <select className="custom-select wbdv-field wbdv-role" id="role" onChange={this.selectRoleChange}>
                                            <option value="BUYER">Buyer</option>
                                            <option value="SELLER">Seller</option>
                                        </select>
                                </div>

                                <div className="form-group col-md-6">
                                    <label htmlFor="email" className="col-form-label float-left">
                                        Email </label>
                                    <input className="form-control wbdv-field wbdv-username" id="email"
                                           placeholder="alice@husky.neu.edu" onChange={this.emailChangeRegister} value={this.state.editingTextEmail}/>
                                </div>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="username" className="col-form-label float-left">
                                        Username </label>
                                    <input className="form-control wbdv-field wbdv-username" id="username"
                                           placeholder="Alice" onChange={this.userNameChangeRegister} value={this.state.editingTextUserName}/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="password" className="float-left col-form-label">
                                        Password </label>
                                    <input type="password" className="form-control wbdv-field wbdv-password"
                                           id="password"
                                           placeholder="123qwe#$%"
                                            onChange={this.passwordChangeRegister} value={this.state.editingTextPassword}/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="verifypassword" className="float-left col-form-label">
                                        Verify Password </label>
                                    <input type="password" className="form-control wbdv-field wbdv-verify-password"
                                           id="verifypassword"
                                           placeholder="123qwe#$%"
                                            onChange={this.verifyPasswordChangeRegister} value={this.state.editingTextVerifyPassword}/>
                                </div>
                                <div className="form-group">
                                    <button
                                       className="btn btn-primary btn-block wbdv-button wbdv-login" type="button" onClick={this.createUser}>Create
                                        Account</button>
                                    <div className="row justify-content-center mt-2" style={{'textAlign': 'center'}}>
                                        <div className="col-sm-12">
                                            <span>By Continuing, you agree to NuBay's <a
                                                href="#">Privacy Policy</a></span>
                                        </div>
                                    </div>
                                    <br/>

                                    <div className="row heading-1 justify-content-center">
                                        <span>Already have an Account?</span>
                                    </div>

                                    <div className="row">
                                        <Link to="/login"
                                              className="btn btn-link btn-block wbdv-button wbdv-login" role="button">Sign
                                            In</Link>
                                    </div>
                                </div>
                            </form>

                        </div>
                    </div>
                </div>
                <br/>
                <br/>
            </div>
        )
    }
}