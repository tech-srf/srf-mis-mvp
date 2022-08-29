import React, { useState } from 'react'
import { useNavigate } from "react-router";
// import Image from '../assets/img/man.png'
// import BoxContainer from '../components/BoxContainer'

const School = () => {
    const [form, setForm] = useState({
        sessiondate:"",
        firstname: "",
        middlename: "",
        lastname: "",
        clinic:"",
        gender:"",
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
        
            await fetch("http://localhost:5000/schoolsession/add", {
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
            sessiondate:"",
            firstname: "",
            middlename: "",
            lastname: "",
            clinic:"",
            gender:"",
        });
        navigate("/attendance");
    }

    return (
        <div className="attendance-card">
            <form onSubmit={onSubmit}>
                <div className="form-group">
                    <input
                        type="date"
                        className="form-control"
                        id="sessiondate"
                        value={form.sessiondate}
                        onChange={(e) => updateForm({ sessiondate: e.target.value })}
                    />
                </div>
                {/* <div className="form-group">
                <label htmlFor="playerbio">Player Details</label>
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
                </div> */}
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
                    id="gender"
                    value={form.gender}
                    onChange={(e) => updateForm({ gender: e.target.value })}
                >
                    <option>Select gender</option>
                    <option value="Female">Female</option>
                    <option value="Male">Male</option>
                </select>            
                </div>
                {/* <div className="form-group">
                <input
                    type="checkbox"
                    className="form-control"
                    id="attendance"
                    name="attendance"
                    placeholder="Present"
                    value={form.attendance}
                    onChange={(e) => updateForm({ attendance: e.target.value })}
                />
                </div> */}
                <div className="form-group">
                <input
                    type="submit"
                    value="Record attendance"
                    className="btn btn-success"
                />
                </div>
                <br />
                <br />
                <br />
            </form>
        </div>
    )
}

export default School