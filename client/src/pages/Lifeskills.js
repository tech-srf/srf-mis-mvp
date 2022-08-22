import React, { useState, Fragment } from 'react'
import NavSideBar from '../components/NavSideBar'
import BoxContainer  from '../components/BoxContainer'
import { useNavigate } from "react-router";

const Lifeskills = () => {

    const [form, setForm] = useState({
        sessiondate:"",
        clinic: "",
        class: "",
        secondary: "",
        topics: "",
        nextsteps: "",
        additionalcomments: "",
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
    
        await fetch("http://localhost:5000/lifeskillssession/add", {
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
            clinic: "",
            class: "",
            secondary: "",
            topics: "",
            nextsteps: "",
            additionalcomments: "",
        });
        navigate("/lifeskills");
    }
    

    
    return (
        <Fragment>
            <NavSideBar />
            <BoxContainer>
                <div className="flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                    <h2 className="h2 text-success">Lifeskills</h2>
                </div>
                <h3>Record new Lifeskills Session</h3>
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
                    <div className="form-group">
                    <select 
                        className="form-control"
                        id="clinic"
                        value={form.clinic}
                        onChange={(e) => updateForm({ clinic: e.target.value })}
                    >
                        <option>Select a Clinic</option>
                        <option value="Eastlands">Eastlands</option>
                        <option value="Kangemi">Kangemi</option>
                        <option value="Kibera">Kibera</option>
                        <option value="Korogocho">Korogocho</option>
                        <option value="Mathare">Mathare</option>
                        <option value="Ngewe">Ngewe</option>
                        <option value="Tatu City">Tatu City</option>
                    </select>            
                    </div>
                    <label>Class</label>
                    <div className="form-group">
                    <div className="form-check form-check-inline">
                        <input
                        className="form-check-input"
                        type="radio"
                        name="classOptions"
                        id="class5"
                        value="5"
                        checked={form.class === "5"}
                        onChange={(e) => updateForm({ class: e.target.value })}
                        />
                        <label htmlFor="class5" className="form-check-label">5</label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input
                        className="form-check-input"
                        type="radio"
                        name="classOptions"
                        id="class6"
                        value="Class6"
                        checked={form.class === "6"}
                        onChange={(e) => updateForm({ class: e.target.value })}
                        />
                        <label htmlFor="class6" className="form-check-label">6</label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input
                        className="form-check-input"
                        type="radio"
                        name="classOptions"
                        id="class7"
                        value="7"
                        checked={form.class === "7"}
                        onChange={(e) => updateForm({ class: e.target.value })}
                        />
                        <label htmlFor="class7" className="form-check-label">7</label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input
                        className="form-check-input"
                        type="radio"
                        name="classOptions"
                        id="class8"
                        value="8"
                        checked={form.class === "8"}
                        onChange={(e) => updateForm({ class: e.target.value })}
                        />
                        <label htmlFor="class8" className="form-check-label">8</label>
                    </div>
                    </div>
                    <label>Select Form</label>
                    <div className="form-group">
                    <div className="form-check form-check-inline">
                        <input
                        className="form-check-input"
                        type="radio"
                        name="classOptions"
                        id="form1"
                        value="1"
                        checked={form.secondary === "1"}
                        onChange={(e) => updateForm({ secondary: e.target.value })}
                        />
                        <label htmlFor="form1" className="form-check-label">1</label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input
                        className="form-check-input"
                        type="radio"
                        name="classOptions"
                        id="form2"
                        value="2"
                        checked={form.secondary === "2"}
                        onChange={(e) => updateForm({ secondary: e.target.value })}
                        />
                        <label htmlFor="form1" className="form-check-label">2</label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input
                        className="form-check-input"
                        type="radio"
                        name="classOptions"
                        id="form3"
                        value="3"
                        checked={form.secondary === "3"}
                        onChange={(e) => updateForm({ secondary: e.target.value })}
                        />
                        <label htmlFor="form3" className="form-check-label">3</label>
                    </div>
                    </div>        
                    <div className="form-group">
                    <textarea 
                        className="form-control" 
                        row="10"
                        id="topics"
                        placeholder="Topics Discussed"
                        value={form.topics}
                        onChange={(e) => updateForm({ topics: e.target.value })}
                        >
                    </textarea>
                    </div>
                    <div className="form-group">
                    <textarea 
                        className="form-control" 
                        row="10"
                        id="additionalcomments"
                        placeholder="Additional Comments"
                        value={form.additionalcomments}
                        onChange={(e) => updateForm({ additionalcomments: e.target.value })}
                        >
                    </textarea>
                    </div>
                    <div className="form-group">
                    <input
                        type="submit"
                        value="Submit Record"
                        className="btn btn-success"
                    />
                    </div>
                </form>
                <br />
                <br />
                <br />
                {/* <RegistrationList />   */}
                {/* <div className="form-group row pt-2" controlId='submitButton'>
                    <div className="col-sm-4">
                        <button type="submit" className="btn btn-success mb-4">Submit</button>
                    </div>
                </div> */}
            </BoxContainer>
        </Fragment>
    )
}
export default Lifeskills