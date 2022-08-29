import React, { useState } from 'react'
import NavSideBar from '../../components/NavSideBar'
import BoxContainer  from '../../components/BoxContainer'
import { Fragment } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from "react-router"

const Signup = () => {
    const current = new Date();
    const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;
    const [form, setForm] = useState({
        date:"",
        firstname: "",
        middlename: "",
        lastname: "",
        dateofbirth: "",
        age:"",
        gender: "",
        caregivernames: "",
        phonenumber: "",
        relationship:"",
        clinic:"",
        team:"",
    }
    );

    const navigate = useNavigate();

 // These methods will update the state properties.
    function updateForm(value) {
        return setForm((prev) => {
        return { ...prev, ...value };
        });
    }

      // This function will handle the submission.
    async function onSubmit(e) {
    e.preventDefault();

    // When a post request is sent to the create url, we'll add a new record to the database.
    const newPlayer = { ...form };

    await fetch("http://localhost:5000/signup/add", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(newPlayer),
        })
        .catch(error => {
        window.alert(error);
        return;
    });

    setForm({ 
        date:"",
        firstname: "",
        middlename: "",
        lastname: "",
        dateofbirth: "",
        age:"",
        gender: "",
        caregivernames: "",
        phonenumber: "",
        relationship:"",
        clinic:"",
        team:"",
    }
    );
    navigate("/signup");
}


    return (
        <Fragment>
            <NavSideBar />
            <BoxContainer>
            <div className="flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                <div className="row">
                    <div className="col">
                    <h3 className="text-success">Sign Up Player</h3>
                    </div>
                    <div className="col">
                        <Link to="/signup" className="btn btn-success">
                        View Signups
                        </Link>
                    </div>
                </div>
            </div>

            <div className="flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                <h4 className="section-header text-success">Players Details</h4>
            </div>
            <form onSubmit={onSubmit}>
            <div className="form-group">
            <p 
            onChange={(e) => updateForm({ date: e.target.value })}
            >
                Date:{date}
            </p>
            <label htmlFor="playerbio">Player Bio</label>
            
            <input
                type="text"
                className="form-control"
                id="firstname"
                placeholder="First Name"
                value={form.firstname}
                onChange={(e) => updateForm({ firstname: e.target.value })}
            />
            </div>
            <div className="form-group">
            <input
                type="text"
                className="form-control"
                id="middlename"
                placeholder="Middle Name"
                value={form.middlename}
                onChange={(e) => updateForm({ middlename: e.target.value })}
            />
            </div>
            <div className="form-group">
            <input
            type="text"
            className="form-control"
            id="lastname"
            placeholder="Last Name"
            value={form.lastname}
            onChange={(e) => updateForm({ lastname: e.target.value })}
            />
            </div>
            <div className="form-group">
                <input
                    type="date"
                    className="form-control"
                    id="dateofbirth"
                    value={form.dateofbirth}
                    onChange={(e) => updateForm({ dateofbirth: e.target.value })}
                />
            </div>
            <div className="form-group">
                <p>Age: </p>
            </div>
            <div className="form-group">
            <select 
                className="form-control"
                id="gender"
                onChange={(e) => updateForm({ gender: e.target.value })}
            >
                <option>Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
            </select>            
            </div>
            <div className="form-group">
            <label htmlFor="carergiverdetails">Caregiver Details</label>
            <input
                type="text"
                className="form-control"
                id="caregivernames"
                placeholder="Caregiver Names"
                value={form.caregivernames}
                onChange={(e) => updateForm({ caregivernames: e.target.value })}
            />
            </div>
            <div className="form-group">
            <input
                type="phonenumber"
                className="form-control"
                id="phonenumber"
                placeholder="Phone Number"
                value={form.phonenumber}
                onChange={(e) => updateForm({ phonenumber: e.target.value })}
            />
            </div>
            <div className="form-group">
            <select 
                className="form-control"
                id="relationship"
                value={form.relationship}
                onChange={(e) => updateForm({ relationship: e.target.value })}
            >
                <option>Select Relationship</option>
                <option value="Father">Father</option>
                <option value="Mother">Mother</option>
                <option value="Guardian">Guardian</option>
            </select>            
            </div>
            <div className="form-group">
            <label htmlFor="carergiverdetails">SRF Details</label>
            <select 
                className="form-control"
                id="clinic"
                value={form.clinic}
                onChange={(e) => updateForm({ clinic: e.target.value })}
            >
                <option>Select Clinic</option>
                <option value="Eastlands">Eastlands</option>
                <option value="Kangemi">Kangemi</option>
                <option value="Kibera">Kibera</option>
                <option value="Korogocho">Korogocho</option>
                <option value="Mathare">Mathare</option>
                <option value="Ngewe">Ngewe</option>
                <option value="Tatu City">Tatu City</option>
            </select>            
            </div>
            <div className="form-group">
            <select 
                className="form-control"
                id="team"
                value={form.team}
                onChange={(e) => updateForm({ team: e.target.value })}
            >
                <option>Select a Team</option>
                <option value="Under 10s">Under 10s</option>
                <option value="Under 12s">Under 12s</option>
                <option value="Under 16s">Under 16s</option>
                <option value="Junior">Junior</option>
                <option value="Senior">Senior</option>
            </select>            
            </div>
            <input
                type="submit" className="btn btn-success"
                value="Sign up player"
            />
            </form>
            </BoxContainer>
            <br />
        </Fragment>
    )
}

export default Signup