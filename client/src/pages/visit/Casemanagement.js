import React, { useState, Fragment } from 'react'
import Image from '../../assets/img/manResized.png'
import { useNavigate } from "react-router"

const Casemanagement= () => {

    const [form, setForm] = useState({
        sessiondate:"",
        clienttype: "",
        issuesaddressed: "",
        challenges: "",
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
    
        await fetch("http://localhost:5000/casemanagement/add", {
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
            issuesaddressed: "",
            challenges: "",
            nextsteps: "",
            additionalcomments: "",
        });
        navigate("/visits");
    }
    return (
        <div>
            <div class="card shadow-sm mb-4">
                        <div class="row g-0">
                            <div class="col-md-4">
                                <img className="img pt-5 mb-3" width="75%" src={Image} alt="" />
                            </div>
                            <div class="col-md-8">
                                <div class="card-body">
                                    <h5 class="card-title">Players Name</h5>
                                        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                        <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                                </div>
                            </div>
                        </div>
                    </div> 
                    <>
                        <h3>Create New Case Management Record</h3>
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
                                <option value="Community Champion">Community Champion</option>
                                <option value="Coach">Refered by Coach</option>
                                <option value="Counselor">Couselor Initiated</option>
                                <option value="Peer">Peer Initiated</option>
                                <option value="Home Visit">Referred after Home Visit</option>
                            </select>            
                            </div>
                            <div className="form-group">
                            <textarea 
                                className="form-control"
                                row="5"
                                id="issuesaddressed"
                                placeholder="Case Management Issues Addressed"
                                value={form.issuesaddressed}
                                onChange={(e) => updateForm({ issuesaddressed: e.target.value })}
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
                                placeholder="Next Steps"
                                value={form.nextsteps}
                                onChange={(e) => updateForm({ nextsteps: e.target.value })}
                                >
                            </textarea>
                            </div>
                            <div className="form-group">
                            <textarea 
                                className="form-control" 
                                row="5"
                                id="additionalcomments"
                                placeholder="Addtional Comments"
                                value={form.additionalcomments}
                                onChange={(e) => updateForm({ additionalcomments: e.target.value })}
                                >
                            </textarea>
                            </div>
                            <div className="form-group mb-4">
                            <input
                                type="submit"
                                value="Submit Visit Record"
                                className="btn btn-success"
                            />
                            </div>
                        </form>
                    </>
        </div>
    )}
export default Casemanagement