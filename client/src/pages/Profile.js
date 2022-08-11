import React from 'react'
import NavSideBar from '../components/NavSideBar'
import Image from '../assets/img/man.png'

function Profile() {
    return (
        <div>
            <NavSideBar />
            <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
                <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                    <h3 className="h3">Player Profile</h3>
                    {/* <div className="btn-toolbar mb-2 mb-md-0">
                        <div className="btn-group me-2">
                            <button type="button" className="btn btn-sm btn-outline-success px-4">Edit</button>
                        </div>
                        <button type="button" className="btn btn-sm btn-outline-success px-4">
                                <span data-feather="calendar"></span>
                                Save
                        </button>
                    </div> */}
                </div>
                <div className="row">
                <div className="col">
                    <div className="grid-photo">
                        <main>
                        <div className="album py-5 bg-light">
                            <div className="container my-6">
                                
                            </div>
                        </div>
                        </main>
                    </div>
                </div>
            </div>
            </main>

        </div>
            
    )
}

export default Profile