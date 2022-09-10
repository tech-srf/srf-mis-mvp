import React from 'react'
import BoxContainer from '../components/BoxContainer'
import NavSideBar from '../components/NavSideBar'

function Dashboard() {
    return (
        <div>
            <NavSideBar />
            <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
                <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                    <h3 className="h3">Sections</h3>
                    {/* <div className="btn-toolbar mb-2 mb-md-0"> */}
                    {/* <div className="btn-group me-2">
                        <button type="button" className="btn btn-sm btn-outline-success px-4">Edit</button>
                    </div>
                        <button type="button" className="btn btn-sm btn-outline-success px-4">
                                <span data-feather="calendar"></span>
                                Save
                        </button>
                    </div> */}
                </div>
                
            </main>
            <BoxContainer>
            <div className="container">
                <div className="grid">
                    <div className="col">
                        <a href="/signuplist">
                        <h4>Sign Up</h4>
                        </a>
                    </div>
                    <div className="col">
                        <a href="/registrationlist">
                        <h4>Registration</h4>
                        </a>
                        
                    </div>
                    <div className="col">
                        <a href="/profiles"><h4>Profiles</h4></a>
                        
                    </div>
                    <div className="col">
                    <a href="/education"><h4>Education</h4></a>
                        
                    
                    </div>
                    <div className="col">
                    <a href="/attendance"><h4>Attendance</h4></a>
                        
                    
                    </div>
                    <div className="col">
                    <a href="/visits"><h4>Visits</h4></a>
                    
                    </div>
                    <div className="col">
                    <a href="/counseling"><h4>Counseling</h4></a>
                        
                    
                    </div>
                    <div className="col">
                    <a href="/lifeskills"><h4>Lifeskills</h4></a>
                        
                    
                    </div>
                </div>
            </div>
            </BoxContainer>
            
        </div>
    )
}

export default Dashboard