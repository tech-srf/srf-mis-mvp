import React, { useState } from 'react'
import { useNavigate } from "react-router"
// import PrimaryList from "./primaryList"


const Clinic = () => {
    const [form, setForm] = useState({
        recorddate:"",
        term: "",
        englishmarks: "",
        mathsmarks: "",
        kiswahilimarks:"",
        sciencemarks:"",
        socialmarks: "",
        cremarks:"",
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
        
            await fetch("http://localhost:5000/primaryrecord/add", {
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
                recorddate:"",
                term: "",
                englishmarks: "",
                mathsmarks: "",
                kiswahilimarks:"",
                sciencemarks:"",
                socialmarks: "",
                cremarks:"",
            });
            navigate("/education");
        }
        

    return (
        <div className="attendance-card">
            <>
            <h3>Add Players Performance Record</h3>
                <form onSubmit={onSubmit}>
                <div className="form-group">
                <input
                    type="date"
                    className="form-control"
                    id="recorddate"
                    value={form.recorddate}
                    onChange={(e) => updateForm({ recorddate: e.target.value })}
                />
                </div>
                <div className="form-group">
                <select 
                    className="form-control"
                    id="term"
                    value={form.term}
                    onChange={(e) => updateForm({ term: e.target.value })}
                >
                    <option>Select Term</option>
                    <option value="1">Term 1</option>
                    <option value="2">Term 2</option>
                    <option value="3">Term 3</option>
                </select>            
                </div>
                <div className="form-group">
                <label htmlFor="english">English</label>
                <input
                    type="number"
                    className="form-control"
                    id="englishmarks"
                    placeholder="Add marks"
                    value={form.englishmarks}
                    onChange={(e) => updateForm({ englishmarks: e.target.value })}
                />           
                </div>
                <div className="form-group">
                <label htmlFor="maths">Maths</label>
                <input
                    type="number"
                    className="form-control"
                    id="mathsmarks"
                    placeholder="Add marks"
                    value={form.mathsmarks}
                    onChange={(e) => updateForm({ mathsmarks: e.target.value })}
                />           
                </div>
                <div className="form-group">
                <label htmlFor="kiswahili">Kiswahili</label>
                <input
                    type="number"
                    className="form-control"
                    id="kiswahilimarks"
                    placeholder="Add marks"
                    value={form.kiswahilimarks}
                    onChange={(e) => updateForm({ kiswahilimarks: e.target.value })}
                />           
                </div>
                <div className="form-group">
                <label htmlFor="science">Science</label>
                <input
                    type="number"
                    className="form-control"
                    id="sciencemarks"
                    placeholder="Add marks"
                    value={form.sciencemarks}
                    onChange={(e) => updateForm({ sciencemarks: e.target.value })}
                />           
                </div>
                <div className="form-group">
                <label htmlFor="social">Social Studies</label>
                <input
                    type="number"
                    className="form-control"
                    id="socialmarks"
                    placeholder="Add marks"
                    value={form.socialmarks}
                    onChange={(e) => updateForm({ socialmarks: e.target.value })}
                />           
                </div>
                <div className="form-group">
                <label htmlFor="cre">CRE</label>
                <input
                    type="number"
                    className="form-control"
                    id="cremarks"
                    placeholder="Add marks"
                    value={form.cremarks}
                    onChange={(e) => updateForm({ cremarks: e.target.value })}
                />           
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
                        value="Add performance record"
                        className="btn btn-success"
                    />
                </div>
                    {/* <PrimaryList /> */}
                    <br />
                    <br />
                    <br />
                </form>
            </>
        </div>
    )
}

export default Clinic