import React, { useState, Fragment } from 'react'
import NavSideBar from '../../components/NavSideBar'
import BoxContainer  from '../../components/BoxContainer'
import { useNavigate } from "react-router"

const Counseling = () => {
    const [form, setForm] = useState({
        sessiondate:"",
        clienttype: "",
        sessioncategory: "",
        sessiontype: "",
        issuesaddressed: "",
        attitudebehaviour: "",
        challenges: "",
        nextsteps: "",
        treatmentplan: "",
        comments: "",
        casestatus: "",
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
    
        await fetch("http://localhost:5000/counseling/add", {
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
            clienttype: "",
            sessioncategory: "",
            sessiontype: "",
            issuesaddressed: "",
            attitudebehaviour: "",
            challenges: "",
            nextsteps: "",
            treatmentplan: "",
            comments: "",
            casestatus: "",
        });
        navigate("/counseling");
    }
    
    return (
        <Fragment>
            <NavSideBar />
                <BoxContainer>
                    <div className="flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-2 border-bottom">
                        <p className="h4  text-success">Create New Counseling Session</p>
                    </div>
                    <>
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
                                    id="clienttype"
                                    value={form.clienttype}
                                    onChange={(e) => updateForm({ clienttype: e.target.value })}
                                >
                                    <option>Select Client Type</option>
                                    <option value="CommunitynChampion">Community Champion</option>
                                    <option value="Coach">Refered by Coach</option>
                                    <option value="Counselor">Couselor Initiated</option>
                                    <option value="Peer">Peer Initiated</option>
                                    <option value="Home Visit">Referred after Home Visit</option>
                                </select>            
                            </div>
                            <div className="form-group">
                            <select 
                                className="form-control"
                                id="sessioncategory"
                                value={form.sessioncategory}
                                onChange={(e) => updateForm({ sessioncategory: e.target.value })}
                            >
                                <option>Select Session Category</option>
                                <option value="Individual">Individual</option>
                                <option value="Group">Group</option>
                                <option value="Family">Family</option>
                            </select>            
                            </div>
                            <div className="form-group">
                            <select 
                                className="form-control"
                                id="sessiontype"
                                value={form.sessiontype}
                                onChange={(e) => updateForm({ sessiontype: e.target.value })}
                            >
                                <option>Select Session Type</option>
                                <option value="New Issue">New Issue</option>
                                <option value="Follow up issue">Follow Up Issue</option>
                            </select>            
                            </div>
                            <div className="form-group">
                            <textarea 
                                className="form-control" 
                                row="5"
                                id="issuesaddressed"
                                placeholder="Counselling Issues addressed"
                                value={form.issuesaddressed}
                                onChange={(e) => updateForm({ issuesaddressed: e.target.value })}
                                >
                            </textarea>
                            </div>
                            <div className="form-group">
                                <textarea 
                                    className="form-control" 
                                    row="5"
                                    id="attitudebehaviour"
                                    placeholder="Observe general appearance of Client, dressing, emotions being projected, e.t.c"
                                    value={form.attitudebehaviour}
                                    onChange={(e) => updateForm({ attitudebehaviour: e.target.value })}
                                    >
                                </textarea>
                            </div>
                            <div className="form-group">
                            <textarea 
                                className="form-control" 
                                row="5"
                                id="challenges"
                                placeholder="Challenges"
                                value={form.challenges}
                                onChange={(e) => updateForm({ challenges: e.target.value })}
                                >
                            </textarea>
                            </div>
                            <div className="form-group">
                            <textarea 
                                className="form-control" 
                                row="5"
                                id="nextsteps"
                                placeholder="Next steps"
                                value={form.nextsteps}
                                onChange={(e) => updateForm({ nextsteps: e.target.value })}
                                >
                            </textarea>
                            </div>
                            <div className="form-group">
                            <textarea 
                                className="form-control" 
                                row="5"
                                id="treatmentplan"
                                placeholder="Treament plan"
                                value={form.treatmentplan}
                                onChange={(e) => updateForm({ treatmentplan: e.target.value })}
                                >
                            </textarea>
                            </div>
                            <div className="form-group">
                            <textarea 
                                className="form-control" 
                                row="5"
                                id="comments"
                                placeholder="Comments"
                                value={form.comments}
                                onChange={(e) => updateForm({ comments: e.target.value })}
                                >
                            </textarea>
                            </div>
                            <div className="form-group">
                                <div className="form-check form-check-inline">
                                    <input
                                    className="form-check-input"
                                    type="checkbox"
                                    name="statusOptions"
                                    id="statusIntern"
                                    value="Follow up"
                                    checked={form.casestatus === "Follow up"}
                                    onChange={(e) => updateForm({ casestatus: e.target.value })}
                                    />
                                    <label htmlFor="statusFollowup" className="form-check-label">Follow Up</label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <input
                                    className="form-check-input"
                                    type="checkbox"
                                    name="statusOptions"
                                    id="statusJunior"
                                    value="Refferal"
                                    checked={form.casestatus === "Refferal"}
                                    onChange={(e) => updateForm({ casestatus: e.target.value })}
                                    />
                                    <label htmlFor="statusRefferalr" className="form-check-label">Refferal</label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <input
                                    className="form-check-input"
                                    type="checkbox"
                                    name="statusOptions"
                                    id="statusSenior"
                                    value="Session Closed"
                                    checked={form.casestatus === "Session Closed"}
                                    onChange={(e) => updateForm({ casestatus: e.target.value })}
                                    />
                                    <label htmlFor="statusSessionclosed" className="form-check-label">Session Closed</label>
                                </div>
                            </div>
                            <div className="form-group pb-4">
                            <input
                                type="submit"
                                value="Submit Record"
                                className="btn btn-success"
                            />
                            </div>
                        </form>
                    </>
                </BoxContainer>
        </Fragment>
    )}
export default Counseling