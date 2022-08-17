import React from 'react'
import NavSideBar from '../../components/NavSideBar'
import RegistrationList from '../registration/registrationList'
import { Link } from "react-router-dom"

function Profile() {
    return (
        <div>
            <NavSideBar />
            <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
                <div className="row d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                    <div className="col">
                        <h3 className="h3">Registered Player Profiles</h3>
                    </div>
                    <div className="col">
                        <Link to="/registration" className="btn btn-success">
                            Register new player
                        </Link>
                    </div>
                </div>
                <RegistrationList />
            </main>

        </div>
            
    )
}

export default Profile