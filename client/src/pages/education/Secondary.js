import React, { useState } from 'react'
import { useNavigate } from "react-router";
// import SecondaryList from "./secondaryList";



const School = () => {
    const [form, setForm] = useState({
        recorddate: "",
        term: "",
        englishmarks: "",
        mathsmarks: "",
        kiswahilimarks:"",
        biologymarks:"",
        physicsmarks:"",
        chemistrymarks:"",
        historymarks:"",
        geographymarks:"",
        cremarks:"",
        businessmarks:"",
        computermarks:"",
        agriculturemarks:"",
        fineartmarks:"",
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
        
            await fetch("http://localhost:5000/secondaryrecord/add", {
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
            recorddate: "",
            term: "",
            englishmarks: "",
            mathsmarks: "",
            kiswahilimarks:"",
            biologymarks:"",
            physicsmarks:"",
            chemistrymarks:"",
            historymarks:"",
            geographymarks:"",
            cremarks:"",
            businessmarks:"",
            computermarks:"",
            agriculturemarks:"",
            fineartmarks:"",
        });
        navigate("/education");
    }

    return (
        <div className="attendance-card">
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
                    type="text"
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
                    type="text"
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
                    type="text"
                    className="form-control"
                    id="kiswahilimarks"
                    placeholder="Add marks"
                    value={form.kiswahilimarks}
                    onChange={(e) => updateForm({ kiswahilimarks: e.target.value })}
                />           
                </div>
                <div className="form-group">
                <label htmlFor="biology">Biology</label>
                <input
                    type="text"
                    className="form-control"
                    id="biologymarks"
                    placeholder="Add marks"
                    value={form.biologymarks}
                    onChange={(e) => updateForm({ biologymarks: e.target.value })}
                />           
                </div>
                <div className="form-group">
                <label htmlFor="physics ">Physics</label>
                <input
                    type="text"
                    className="form-control"
                    id="physicsmarks"
                    placeholder="Add marks"
                    value={form.physicsmarks}
                    onChange={(e) => updateForm({ physicsmarks: e.target.value })}
                />           
                </div><div className="form-group">
                <label htmlFor="chemistry">Chemistry</label>
                <input
                    type="text"
                    className="form-control"
                    id="chemistrymarks"
                    placeholder="Add marks"
                    value={form.chemistrymarks}
                    onChange={(e) => updateForm({ chemistrymarks: e.target.value })}
                />           
                </div>
                <div className="form-group">
                <label htmlFor="history">History</label>
                <input
                    type="text"
                    className="form-control"
                    id="historymarks"
                    placeholder="Add marks"
                    value={form.historymarks}
                    onChange={(e) => updateForm({ historymarks: e.target.value })}
                />           
                </div>
                <div className="form-group">
                <label htmlFor="geography">Geography</label>
                <input
                    type="text"
                    className="form-control"
                    id="geographymarks"
                    placeholder="Add marks"
                    value={form.geographymarks}
                    onChange={(e) => updateForm({ geographymarks: e.target.value })}
                />           
                </div>
                <div className="form-group">
                <label htmlFor="cre">CRE</label>
                <input
                    type="text"
                    className="form-control"
                    id="cremarks"
                    placeholder="Add marks"
                    value={form.cremarks}
                    onChange={(e) => updateForm({ cremarks: e.target.value })}
                />           
                </div>
                <div className="form-group">
                <label htmlFor="business">Business Studies</label>
                <input
                    type="text"
                    className="form-control"
                    id="businessmarks"
                    placeholder="Add marks"
                    value={form.businessmarks}
                    onChange={(e) => updateForm({ businessmarks: e.target.value })}
                />           
                </div>
                <div className="form-group">
                <label htmlFor="computer">Computer Studies</label>
                <input
                    type="text"
                    className="form-control"
                    id="computermarks"
                    placeholder="Add marks"
                    value={form.computermarks}
                    onChange={(e) => updateForm({ computermarks: e.target.value })}
                />           
                </div>
                <div className="form-group">
                <label htmlFor="agriculture">Agriculture</label>
                <input
                    type="text"
                    className="form-control"
                    id="agriculturemarks"
                    placeholder="Add marks"
                    value={form.agriculturemarks}
                    onChange={(e) => updateForm({ agriculturemarks: e.target.value })}
                />           
                </div>
                <div className="form-group">
                <label htmlFor="fineart">Fine Art</label>
                <input
                    type="text"
                    className="form-control"
                    id="fineartmarks"
                    placeholder="Add marks"
                    value={form.fineartmarks}
                    onChange={(e) => updateForm({ fineartmarks: e.target.value })}
                />           
                </div>
                <div className="form-group">
                    <input
                    type="submit"
                    value="Add performance record"
                    className="btn btn-success"
                    />
                </div>
                {/* <SecondaryList /> */}
                <br />
                            <br />
                            <br />
            </form>
        </div>
    )
}

export default School