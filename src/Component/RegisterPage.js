import React from 'react'
import {Link} from "react-router-dom";
import UserService from "../services/UserService";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

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
            editingDropDownRole: "BUYER",
            isOpen: false
        }

        this.firstNameChangeRegister = this.firstNameChangeRegister.bind(this)
        this.lastNameChangeRegister = this.lastNameChangeRegister.bind(this)
        this.userNameChangeRegister = this.userNameChangeRegister.bind(this)
        this.passwordChangeRegister = this.passwordChangeRegister.bind(this)
        this.verifyPasswordChangeRegister = this.verifyPasswordChangeRegister.bind(this)

        props.hideNavBar();
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

    toggle() {
        this.setState(prevState => ({
            ...prevState,
            isOpen: !prevState.isOpen
        }))

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
                                                href="#" onClick={() => this.toggle()}>Privacy Policy</a></span>
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
                <Modal className="w-100" isOpen={this.state.isOpen} toggle={() => this.toggle()}>
                    <ModalHeader toggle={() => this.toggle()}>NuBay Privacy Policy</ModalHeader>
                    <ModalBody>
                        <p>This privacy policy discloses the privacy and data practices for NuBay. This policy aims to notify you of the following: what data is going to be collected from you via the website (both identifiable and non-identifiable), what the data is going to be used for, with whom the data will be shared, your choices available regarding the use of your data, the security measures in place to protect your data, and what you can do to contact us further.</p>

                        <p>First, we would like to be open about the data that we are going to collect from you. When you create an account with us, you provide us with your first name, last name, email, and phone number -- all of which is stored in our database. When you bookmark an item or service, we store your user id along with the id of the item you have bookmarked. When you create an item or service to be sold, we store all of the pertinent information regarding that listing that you provide to us. The significant information for each listing that you provide is the following: your payment options, location, price, quantity, category, and refund policy.</p>

                        <p>Now, here’s what we do with the information you provide to us. From your account information, we do nothing, despite storing and having access to your email and phone number, which are heavily secured (more on this later in the document). From each time you bookmark an item, however, we do count the number of times that item has been bookmarked in a non-identifiable manner (meaning that we only look at the number of bookmarks for an item, not who has bookmarked said item) in order to determine our most-bookmarked items. These items tend to be best sellers, and we determine which items to post on the front page by how many times they have been bookmarked. In terms of the personal data that you provide to us when generating a listing, such as the listing location and payment options, we do not use this information and do not plan on selling this information to interested third parties. Your safety and security is our utmost concern.</p>

                        <p>The data that you provide to us that has been mentioned in this document thus far is not shared in any form with any third parties. Although there are many interested groups in our data, we are not looking to sell this information at this point in time. In addition, we make a great effort to maintain a fortified layer of security for your data. All of our messages transmitted from our website to our servers is heavily encrypted, and we enlist the latest cyber security measures to ensure your privacy.</p>

                        <p>Lastly, if you have any further questions or concerns, or feel that we are not abiding by our own policies set forth in this document, please contact us at billah.s@husky.neu.edu, sharma.ro@husky.neu.edu, or dahan.a@husky.neu.edu.</p>

                        <p>Thank you for using NuBay! We wouldn’t be here without you.</p>

                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={() => this.toggle()}>Confirm</Button>{' '}
                        <Button color="secondary" onClick={() => this.toggle()}>Cancel</Button>
                    </ModalFooter>
                </Modal>
            </div>
        )
    }
}