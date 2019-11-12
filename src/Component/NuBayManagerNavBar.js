import React from 'react'

const NuBayManagerNavBar = ({onSearchPressed, searchText, onSearchTextChanged}) => {
        return (
            <div className="row">
                <div className="col-12">
                <nav className="navbar sticky-top navbar-expand-xl navbar-dark bg-dark">
                    <div className="col-1">
                    <a href="#" className="wbdv-field wbdv-hamburger">
                        <i className="fa fa-bars fa-2x"></i>
                    </a>
                    </div>

                    <div className="col-1">
                    <div className="d-sm-inline-block d-none">
                        <span className="navbar-brand wbdv-label wbdv-course-manager" href="#">
                            <b>NuBay</b>
                        </span>
                    </div>
                    </div>

                    <div className="col-7 mr-0 pr-0">
                    <form className="form my-auto wbdv-new-course-form">
                        <input
                            className="form-control wbdv-field wbdv-new-course"
                            type="text"
                            placeholder="Search Item Here"
                            value={searchText}
                            onChange={onSearchTextChanged}
                        />
                    </form>
                    </div>
                    <div className="col-1 pl-0 ml-0 my-auto justify-content-start">
                        <button
                            className="btn wbdv-button wbdv-add-course float-left bg-danger"
                            type='button'
                            onClick={() => onSearchPressed(searchText)}
                        >
                            <i className="fa fa-search fa-2x" style={{color:'white'}}></i>
                        </button>

                    </div>

                    <div className="col-1 ">
                        <div className="d-sm-inline-block d-none">
                        <span className="navbar-brand wbdv-label wbdv-course-manager" href="#">
                            <b>Hello!<br/>Jose</b>
                        </span>
                        </div>
                    </div>

                    <div className="col-2 my-auto justify-content-start">
                        <button
                            className="btn wbdv-button wbdv-add-course float-left"
                            type='button'
                            
                                >
                            }
                            <i className="fa fa-shopping-cart fa-2x" style={{color:'white'}}></i>
                        </button>

                    </div>

                </nav>
            </div>
            </div>
        )
}
export default NuBayManagerNavBar