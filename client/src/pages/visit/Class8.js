import React, { useState, Fragment } from 'react'
import Image from '../../assets/img/man.png'
import { useNavigate } from "react-router"

const Class8 = () => {

    const [form, setForm] = useState({
        sessiondate:"",
        respondent: "",
        numberofdependents: "",
        currentperformance: "",
        finalexamscore: "",
        highschoolexpectation: "",
        highschoolreason: "",
        numberofsrfbeneficiaries: "",
        activemembers: "",
        reasonforinactivity: "",
        srfimpact: "",
        recommendationstosrf: "",
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

        await fetch("http://localhost:5000/class8/add", {
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
        respondent: "",
        numberofdependents: "",
        currentperformance: "",
        finalexamscore: "",
        highschoolexpectation: "",
        highschoolreason: "",
        numberofsrfbeneficiaries: "",
        activemembers: "",
        reasonforinactivity: "",
        srfimpact: "",
        recommendationstosrf: "",
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
                <h3>Create New Class 8 Visit Record</h3>
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
                    id="respondent"
                    value={form.respondent}
                    onChange={(e) => updateForm({ respondent: e.target.value })}
                >
                    <option>Select Respondent</option>
                    <option value="Father">Father</option>
                    <option value="Mother">Mother</option>
                    <option value="Guardian">Guardian</option>
                </select>            
                            </div>
                            <div className="form-group">
                            <select 
                className="form-control"
                id="numberofdependents"
                value={form.numberofdependents}
                onChange={(e) => updateForm({ numberofdependents: e.target.value })}
                            >
                <option>Select no. of dependants in Class 8</option>
                <option value="0">0</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                            </select>            
                            </div>
                            <div className="form-group">
                            <select 
                className="form-control"
                id="currentperformance"
                value={form.currentperformance}
                onChange={(e) => updateForm({ currentperformance: e.target.value })}
                            >
                <option>What is the current academic performance of the class 8 dependents?</option>
                <option value="High">High (above 350)</option>
                <option value="Average">Average (250 - 300)</option>
                <option value="Below Average">Below Average (250 & below) </option>
                            </select>            
                            </div>
                            <div className="form-group">
                            <textarea 
                className="form-control" 
                row="5"
                id="finalexamscore"
                placeholder="What do you expect your child/children to score in thier final exam and why?"
                value={form.finalexamscore}
                onChange={(e) => updateForm({ finalexamscore: e.target.value })}
                >
                            </textarea>
                            </div>
                            <div className="form-group">
                            <select 
                className="form-control"
                id="highschoolexpectation"
                value={form.highschoolexpectation}
                onChange={(e) => updateForm({ highschoolexpectation: e.target.value })}
                            >
                <option>Do you expect your child/children to join High School</option>
                <option value="No">No</option>
                <option value="Yes">Yes</option>
                            </select>            
                            </div>
                            <div className="form-group">
                            <textarea 
                className="form-control" 
                row="5"
                id="highschoolreason"
                placeholder="If No, why? If Yes how well have you prepared for your child/children for secondary school"
                value={form.highschoolreason}
                onChange={(e) => updateForm({ highschoolreason: e.target.value })}
                >
                            </textarea>
                            </div>
                            <div className="form-group">
                            <input
                className="form-control" 
                id="numberofsrfbeneficiaries"
                placeholder="How many of your children are SFR beneficaries?"
                value={form.numberofsrfbeneficiaries}
                onChange={(e) => updateForm({ numberofsrfbeneficiaries: e.target.value })}
                />
                            </div>
                            <div className="form-group">
                            <select 
                className="form-control"
                id="activemembers"
                value={form.activemembers}
                onChange={(e) => updateForm({ activemembers: e.target.value })}
                            >
                <option>Are all of them still active members</option>
                <option value="No">No</option>
                <option value="Yes">Yes</option>
                            </select>            
                            </div>
                            <div className="form-group">
                            <textarea 
                className="form-control" 
                row="5"
                id="reasonforinactivity"
                placeholder="If No,do you know the reason that has made them inactive."
                value={form.reasonforinactivity}
                onChange={(e) => updateForm({ reasonforinactivity: e.target.value })}
                >
                            </textarea>
                            </div>
                            <div className="form-group">
                            <select 
                className="form-control"
                id="srfimpact"
                value={form.srfimpact}
                onChange={(e) => updateForm({ srfimpact: e.target.value })}
                            >
                <option>Has SRF made an impact on your child/children since thet joined the program</option>
                <option value="No">No</option>
                <option value="Yes">Yes</option>
                            </select>            
                            </div>
                            <div className="form-group">
                            <textarea 
                className="form-control" 
                row="5"
                id="srfimpactyes"
                placeholder="If Yes, what has the impact been?"
                value={form.srfimpactyes}
                onChange={(e) => updateForm({ srfimpactyes: e.target.value })}
                >
                            </textarea>
                            </div>
                            <div className="form-group">
                            <textarea 
                className="form-control" 
                row="5"
                id="recommendationstosrf"
                placeholder="What recommendation can you give SRF for their programs?"
                value={form.recommendationstosrf}
                onChange={(e) => updateForm({ recommendationstosrf: e.target.value })}
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
            </>
        </div>
    )}
export default Class8