import React, { useState } from 'react'
import NavSideBar from '../components/NavSideBar'
import BoxContainer  from '../components/BoxContainer'
import { Fragment } from 'react'
import { useNavigate } from "react-router";


const Signup = () => {
    const [form, setForm] = useState({
        firstname: "",
        middlename: "",
        lastname: "",
        dateofbirth: "",
        gender: "",
        caregivernames: "",
        phonenumber: "",
        relationship:"",
        clinic:"",
        team:"",
    });
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
        firstname: "",
        middlename: "",
        lastname: "",
        dateofbirth: "",
        gender: "",
        caregivernames: "",
        phonenumber: "",
        relationship:"",
        clinic:"",
        team:"",
    });
    navigate("/signup");
}


    return (
        <Fragment>
            <NavSideBar />
            <BoxContainer>
            <div className="flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                <h2 className="h2 text-success">Sign Up Player</h2>
            </div>

            <div className="flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                <h4 className="section-header text-success">Players Details</h4>
            </div>
            <form onSubmit={onSubmit}>
            <div className="form-group">
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
            <select 
                className="form-control"
                id="gender"
                onChange={(e) => updateForm({ gender: e.target.value })}
            >
                <option>Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
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
                type="number"
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
                <option value="father">Father</option>
                <option value="mother">Mother</option>
                <option value="guardian">Guardian</option>
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
                <option value="Tatucity">Tatu City</option>
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
                <option value="Under10s">Under 10s</option>
                <option value="Under12s">Under 12s</option>
                <option value="Under16s">Under 16s</option>
                <option value="Junior">Junior</option>
                <option value="Senior">Senior</option>
            </select>            
            </div>
            <div className="form-group">
            <input
                type="submit"
                value="Sign up player"
                className="btn btn-success"
            />
            </div>
        </form>
            </BoxContainer>
            <br />
        </Fragment>
    )
}

export default Signup