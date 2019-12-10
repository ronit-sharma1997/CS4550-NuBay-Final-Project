import React from 'react'
import {Link} from "react-router-dom";
import UserService from "../services/UserService";
import {Button, Modal, ModalBody, ModalFooter, ModalHeader} from "reactstrap";

export default class LoginPage extends React.Component {
    constructor(props) {
        super(props)
        this.userService = new UserService();
        this.state = {
            editingTextUserName: "",
            editingTextPassword: "",
            isOpen: false
        }

        this.userNameChangeRegister = this.userNameChangeRegister.bind(this)
        this.passwordChangeRegister = this.passwordChangeRegister.bind(this)

        props.hideNavBar();
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
                                                href="#" onClick={() => this.toggle()}>Privacy Policy</a></span>
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
                        <Button color="secondary" onClick={() => this.toggle()}>Close</Button>{' '}
                    </ModalFooter>
                </Modal>
            </div>
        )
    }
}