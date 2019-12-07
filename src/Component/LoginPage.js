import React from 'react'
import {Link} from "react-router-dom";
import UserService from "../services/UserService";

export default class LoginPage extends React.Component {
    constructor(props) {
        super(props)
        this.userService = new UserService();
        this.state = {
            editingTextUserName: "",
            editingTextPassword: "",
        }

        this.userNameChangeRegister = this.userNameChangeRegister.bind(this)
        this.passwordChangeRegister = this.passwordChangeRegister.bind(this)
    }

    userNameChangeRegister = (event) => {
        event.persist()
        this.setState(prevState => ({
            ...prevState,
            editingTextUserName: event.target.value
        }))

    }

    passwordChangeRegister = (event) => {
        event.persist()
        this.setState(prevState => ({
            ...prevState,
            editingTextPassword: event.target.value
        }))

    }

    loginUser = () => {
        if(this.state.editingTextUserName === "" || this.state.editingTextPassword === "") {
            alert("Please fill in all necessary fields")
        } else {
            this.userService.loginUser({
                "username": this.state.editingTextUserName,
                "password": this.state.editingTextPassword,
            }, this.submitUserInfoCallback)
        }
    }

    submitUserInfoCallback = (responseCode) => {
        if(responseCode === -1) {
            alert("Incorrect credentials exists!")
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
                                    <h3>Sign In</h3>
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
                                    <button
                                       className="btn btn-primary btn-block wbdv-button wbdv-login" type="button" onClick={this.loginUser}>Sign
                                        In</button>
                                    <div className="row justify-content-center mt-2">
                                        <div className="col-sm-12" style={{'text-align': 'center'}}>
                                            <span>By Continuing, you agree to NuBay's <a
                                                href="#">Privacy Policy</a></span>
                                        </div>
                                    </div>
                                    <br/>
                                    {/*<div className="row justify-content-center mt-2">*/}
                                    {/*    <div className="col-sm-10">*/}
                                    {/*        <a className="wbdv-link wbdv-forgot-password" href="#">Forgot Your Password?</a>*/}
                                    {/*    </div>*/}
                                    {/*</div>*/}

                                    <div className="row heading-1 mt-5 justify-content-center">
                                        <span>New To NuBay?</span>
                                    </div>

                                    <div className="row">
                                        <Link to="/register"
                                              className="btn btn-link btn-block wbdv-button wbdv-login" role="button">Sign
                                            Up</Link>

                                    </div>
                                </div>
                            </form>

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}