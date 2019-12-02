import React from 'react'

const RegisterPage = () => {
    return(
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
                            <div className="form-group">
                                <label htmlFor="firstname" className="col-form-label float-left">
                                    First Name </label>
                                <input className="form-control wbdv-field wbdv-firstname" id="firstname" placeholder="First Name"/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="lastname" className="col-form-label float-left">
                                    Last Name </label>
                                <input className="form-control wbdv-field wbdv-lastname" id="lastname" placeholder="Last Name"/>
                            </div>

                            <div className="form-group">
                                <label htmlFor="username" className="col-form-label float-left">
                                    Username </label>
                                <input className="form-control wbdv-field wbdv-username" id="username" placeholder="Alice"/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="password" className="float-left col-form-label">
                                    Password </label>
                                <input type="password" className="form-control wbdv-field wbdv-password" id="password"
                                       placeholder="123qwe#$%"/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="verifypassword" className="float-left col-form-label">
                                    Verify Password </label>
                                <input type="password" className="form-control wbdv-field wbdv-verify-password" id="verifypassword"
                                       placeholder="123qwe#$%"/>
                            </div>
                            <div className="form-group">
                                <a href="../profile/profile.template.client.html"
                                   className="btn btn-primary btn-block wbdv-button wbdv-login" role="button">Create Account</a>
                                <div className="row justify-content-center mt-2">
                                    <div className="col-sm-10">
                                        <span>By Continuing, you agree to NuBay's <a href="#">Privacy Policy</a></span>
                                    </div>
                                </div>
                                <br/>

                                <div className="row heading-1 justify-content-center">
                                    <span>Already have an Account?</span>
                                </div>

                                <div className="row">
                                    <a href="../profile/profile.template.client.html"
                                       className="btn btn-link btn-block wbdv-button wbdv-login" role="button">Sign In</a>
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
export default RegisterPage