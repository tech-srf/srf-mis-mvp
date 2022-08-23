import React from 'react'
import NavSideBar from '../../components/NavSideBar'
import BoxContainer  from '../../components/BoxContainer'
import { Fragment } from 'react'
import { Link } from 'react-router-dom'
import SignupList from './signupList';



const Signup = () => {
    return (
        <Fragment>
            <NavSideBar />
            <BoxContainer>
            <div className="flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                <div className="row">
                    <div className="col">
                        <h3 className="h2 text-success">Signed Players</h3>
                    </div>
                    <div className="col">
                    <Link to="/signupcreate" className="btn btn-success">
                        New Signup
                    </Link>
                    </div>
                </div>
            </div>
                <SignupList />
            </BoxContainer>
            <br />
        </Fragment>
    )
}

export default Signup