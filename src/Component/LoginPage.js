import React from 'react'

const LoginPage = () => {
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
                    <h3>Sign In</h3>
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
                        <a href="../profile/profile.template.client.html"
                           className="btn btn-primary btn-block wbdv-button wbdv-login" role="button">Sign In</a>
                        <div className="row justify-content-center mt-2">
                            <div className="col-sm-10">
                            <span>By Continuing, you agree to NuBay's <a href="#">Privacy Policy</a></span>
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
                            <a href="../profile/profile.template.client.html"
                               className="btn btn-link btn-block wbdv-button wbdv-login" role="button">Sign Up</a>
                        </div>
                </div>
            </form>

            </div>
            </div>
            </div>
        </div>
    )
}
export default LoginPage