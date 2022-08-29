import React, { useState, Fragment } from 'react'
import NavSideBar from '../../components/NavSideBar'
import BoxContainer  from '../../components/BoxContainer'
import { Col  } from 'react-bootstrap'
import Button from 'react-bootstrap/Button'
import { useParams, useNavigate } from "react-router"
import { Link } from "react-router-dom"
import { v4 as uuidv4 } from 'uuid'


const Registration = () => {
    const [form, setForm] = useState({
        registrationdate: "",
        schoolname: "",
        academiclevel: "",
        classlevel: "",
        relationshiphh: "",
        maritalstatus: "",
        deceasedrelationship: "",
        yearofdeath:"",
        causeofdeath:"",
        deathdocumentation:"",
        nodocuments: "",
        householddescription: "",
        county: "",
        area: "",
        yearsatresidence: "",
        homecondition: "",
        homesize: "",
        assetbed:"",
        assetmattress:"",
        assetbeddings:"",
        assetfurniture:"",
        assetstove:"",
        assetgascooker:"",
        assetelectricity:"",
        assetsolarlamp:"",
        assettelevision:"",
        assetradio:"",
        assetfridge:"",
        childrensleep: "",
        wateraccess: "",
        ammenitiesaccess: "",
        enviroment: "",
        foodcost: "",
        foodfrequency: "",
        rentcost: "",
        rentfrequency: "",
        electricitycost: "",
        electricityfrequency: "",
        watercost: "",
        waterfrequency: "",
        toiletcost: "",
        toiletfrequency: "",
        medicalcost: "",
        medicalfrequency: "",
        membername: "",
        memberrelationship: "",
        medicalconcern: "",
        membertreatmentstatus: "",
        nhif: "",
        nhifnumber: "",
        substanceabuse: "",
        memberabused: "",
        substancetype: "",
        lenghtofabuse: "",
        parentalaction: "",
        briefsummary:"",
        communitybehaviour: "",
        physicalabuse: "",
        sexualabuse: "",
        negligenceabuse: "",
        emotionalabuse: "",
        otherabuse: "",
        none: "",
        otherexplanation: "",
        childabuse: "",
        affectedmember: "",
        relationship: "",
        abusehistory: "",
        srfassist: "",
        beneficiaryname: "",
        yearofentry: "",
        membershipstatus: "",
        caregiversconsent: "",
        noconsent: "",
        caregiversname: "",
        consentdate: "",
        otherorganisation: "",
        additionalcomments: "",
        socialworkersummary: "",
        familyburden: "",
        additonalskills: "",
        vulerabilityscale: "",
        necessaryrecommendations:"",
    });
    const params = useParams();
    const [inputFields, setInputFields] = useState([
        { id: uuidv4(), 
            membername: "",
            memberrelationship: "",
            medicalconcern: "",
            membertreatmentstatus: "",
            beneficiaryname: "",
            yearofentry: "",
            membershipstatus: "",
        }
    ])
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
    console.log("InputFields", inputFields);

    // When a post request is sent to the create url, we'll add a new record to the database.
    const newPlayer = { ...form };

    await fetch("http://localhost:5000/registration/add", {
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
        registrationdate: "",
        schoolname: "",
        academiclevel: "",
        classlevel: "",
        relationshiphh: "",
        maritalstatus: "",
        deceasedrelationship: "",
        yearofdeath:"",
        causeofdeath:"",
        deathdocumentation:"",
        nodocuments: "",
        householddescription: "",
        county: "",
        area: "",
        yearsatresidence: "",
        homecondition: "",
        homesize: "",
        assetbed:"",
        assetmattress:"",
        assetbeddings:"",
        assetfurniture:"",
        assetstove:"",
        assetgascooker:"",
        assetelectricity:"",
        assetsolarlamp:"",
        assettelevision:"",
        assetradio:"",
        assetfridge:"",
        childrensleep: "",
        wateraccess: "",
        ammenitiesaccess: "",
        enviroment: "",
        foodcost: "",
        foodfrequency: "",
        rentcost: "",
        rentfrequency: "",
        electricitycost: "",
        electricityfrequency: "",
        watercost: "",
        waterfrequency: "",
        toiletcost: "",
        toiletfrequency: "",
        medicalcost: "",
        medicalfrequency: "",
        membername: "",
        memberrelationship: "",
        medicalconcern: "",
        membertreatmentstatus: "",
        nhif: "",
        nhifnumber: "",
        substanceabuse: "",
        memberabused: "",
        substancetype: "",
        lenghtofabuse: "",
        parentalaction: "",
        briefsummary:"",
        communitybehaviour: "",
        physicalabuse: "",
        sexualabuse: "",
        negligenceabuse: "",
        emotionalabuse: "",
        otherabuse: "",
        none: "",
        otherexplanation: "",
        childabuse: "",
        affectedmember: "",
        relationship: "",
        abusehistory: "",
        srfassist: "",
        beneficiaryname: "",
        yearofentry: "",
        membershipstatus: "",
        caregiversconsent: "",
        noconsent: "",
        caregiversname: "",
        consentdate: "",
        otherorganisation: "",
        additionalcomments: "",
        socialworkersummary: "",
        familyburden: "",
        additonalskills: "",
        vulerabilityscale: "",
        necessaryrecommendations:"",
    });
    navigate("/registration");
}

const handleChangeInput = (id, event) => {
    const newInputFields = inputFields.map(i => {
        if(id === i.id) {
        i[event.target.name] = event.target.value
        }
        return i;
    })
    
    setInputFields(newInputFields);
}

const handleAddFields = () => {
    setInputFields([...inputFields, { 
    
    membername: "",
    memberrelationship: "",
    medicalconcern: "",
    membertreatmentstatus: "", 
    beneficiaryname: "",
    yearofentry: "",
    membershipstatus: "",
    id: uuidv4(), 
}])
}

const handleRemoveFields = id => {
    const values  = [...inputFields];
    values.splice(values.findIndex(value => value.id === id), 1);
    setInputFields(values);
}

    return (
        <Fragment>
        <NavSideBar />
            <BoxContainer>
                <div className="flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                    <div className="row">
                        <div className="col">
                            <h3 className="text-success">Registration</h3>
                        </div>
                        <div className="col">
                            <Link to="/profiles" className="btn btn-success">
                                View Record
                            </Link>
                        </div>
                    </div>
                </div>
                {/* <div className="card-group">
                    <div className="card mb-3">
                        <div className="card-body">
                            <h5 className="card-title">Player Names: </h5>
                            <p className="card-text">Caregiver's Name: </p>
                            <p className="card-text">Relationship: </p>
                            <p className="card-text">Clinic: </p>
                            <p className="card-text">Team: </p>
                        </div>
                    </div>
                </div> */}
                
                <form onSubmit={onSubmit}>
                <div className="form-group">
                    <label>Registration Date</label>
                    <input
                        type="date"
                        className="form-control"
                        id="registrationdate"
                        value={form.registrationdate}
                        onChange={(e) => updateForm({ registrationdate: e.target.value })}
                    />
                </div>
{/* SCHOOL DETAILS */}
                <div className="flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                    <h5 className="section-header text-success">School Details</h5>
                </div>
                <div className="form-group">
                    <select 
                        className="form-control"
                        id="schoolname"
                        value={form.schoolname}
                        onChange={(e) => updateForm({ schoolname: e.target.value })}
                    >
                            <option>Select School</option>
                            <option>Ayany Primary</option>
                            <option>Dr Kraph Primary</option>
                            <option>Harambee Primary</option>
                            <option>Heidemarie Primary</option>
                            <option>Ngewe Primary</option>
                            <option>Kongo Primary</option>
                            <option>Mathare North Primary</option>
                            <option>Ofafa Primary</option>
                            <option>Oakland Primary</option>
                            <option>Raila Primary</option>
                            <option>St Michaels Primary</option>
                            <option>Tatu Primary</option>
                            <option>Toi Primary</option>
                            <option>Uthiru Primary</option>
                    </select>            
                </div>
                <div className="form-group">
                <label>Select Academic level</label>
                    <div className="form-check form-check-block">
                        <input
                        className="form-check-input"
                        type="checkbox"
                        name="levelOptions"
                        id="levelClass"
                        value="Class"
                        checked={form.academiclevel === "Class"}
                        onChange={(e) => updateForm({ academiclevel: e.target.value })}
                        />
                        <label htmlFor="levelClass" className="form-check-text">Class</label>
                    </div>
                    <div className="form-check form-check-block">
                        <input
                        className="form-check-input"
                        type="checkbox"
                        name="levelOptions"
                        id="levelGrade"
                        value="Grade"
                        checked={form.academiclevel === "Grade"}
                        onChange={(e) => updateForm({ academiclevel: e.target.value })}
                        />
                        <label htmlFor="levelGrade" className="form-check-text">Grade</label>
                    </div>
                    <div className="form-check form-check-block">
                        <input
                        className="form-check-input"
                        type="checkbox"
                        name="levelOptions"
                        id="levelForm"
                        value="Form"
                        checked={form.academiclevel === "Form"}
                        onChange={(e) => updateForm({ academiclevel: e.target.value })}
                        />
                        <label htmlFor="levelForm" className="form-check-text">Form</label>
                    </div>
                </div>
                <div className="form-group">
                    <label>Indicate Class/Form</label>
                    <input
                        type="text"
                        className="form-control"
                        id="classlevel"
                        value={form.classlevel}
                        onChange={(e) => updateForm({ classlevel: e.target.value })}
                    />
                </div>                
                <hr />
{/* HOUSEHOLD DEMOGRAPHICS */}
                <div className="flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                    <h5 className="section-header text-success">Household Demography</h5>
                </div>
                <div className="form-group">
                    <select 
                        className="form-control"
                        id="relationshiphh"
                        value={form.relationshiphh}
                        onChange={(e) => updateForm({ relationshiphh: e.target.value })}
                    >
                        <option>Relationship of the care giver to the beneficiary</option>
                        <option value="Father">Father</option>
                        <option value="Mother">Mother</option>
                        <option value="Guardian">Guardian</option>
                    </select>            
                </div>
                <div className="form-group">
                    <select 
                        className="form-control"
                        id="maritalstatus"
                        value={form.maritalstatus}
                        onChange={(e) => updateForm({ maritalstatus: e.target.value })}
                    >
                        <option>Marital status of the caregiver</option>
                        <option value="Single">Single</option>
                        <option value="Married">Married</option>
                        <option value="Divorced">Divorced</option>
                        <option value="Separated">Separated</option>
                        <option value="Widowed">Widowed</option>
                    </select>            
                </div>
                <div className="form-group">
                    <select 
                        className="form-control"
                        id="deceasedrelationship"
                        value={form.deceasedrelationship}
                        onChange={(e) => updateForm({ deceasedrelationship: e.target.value })}
                    >
                        <option>Deceased relationship to the family</option>
                        <option value="Father">Father</option>
                        <option value="Mother">Mother</option>
                        <option value="Guardian">Guardian</option>
                        <option value="Not Applicable">Not Applicable</option>
                    </select>            
                </div>
                <div className="form-group">
                    <label>Insert Year of Death</label>
                    <input
                        type="text"
                        className="form-control"
                        id="yearofdeath"
                        value={form.yearofdeath}
                        onChange={(e) => updateForm({ yearofdeath: e.target.value })}
                    />
                </div>
                <div className="form-group">
                    <textarea 
                        className="form-control" 
                        row="3"
                        id="causeofdeath"
                        placeholder="Cause Of Death"
                        value={form.causeofdeath}
                        onChange={(e) => updateForm({ causeofdeath: e.target.value })}
                        >
                    </textarea>
                </div>
                <div className="form-group">
                    <select 
                        className="form-control"
                        id="deathdocumentation"
                        value={form.deathdocumentation}
                        onChange={(e) => updateForm({ deathdocumentation: e.target.value })}
                    >
                        <option>Do you have any documentation of the death</option>
                        <option value="Yes">Yes</option>
                        <option value="No">No</option>
                    </select>            
                </div>
                <div className="form-group">
                    <textarea 
                        className="form-control" 
                        row="3"
                        id="nodocuments"
                        placeholder="If NO death documentation - Explain why"
                        value={form.nodocuments}
                        onChange={(e) => updateForm({ nodocuments: e.target.value })}
                        >
                    </textarea>
                </div>
                <div className="form-group">
                    <textarea 
                        className="form-control" 
                        row="3"
                        id="householddescription"
                        placeholder="Decribe the household and total number of members residing in the household"
                        value={form.householddescription}
                        onChange={(e) => updateForm({ householddescription: e.target.value })}
                        >
                    </textarea>
                </div>
{/* HOUSEHOLD AND COMMUNITY */}
                <div className="flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                        <h5 className="section-header text-success">Household and Community Relations</h5>
                </div>
                <div className="form-group">
                <label>Family Residence</label>
                    <input
                        type="text"
                        className="form-control"
                        id="county"
                        value={form.county}
                        placeholder="County"
                        onChange={(e) => updateForm({ county: e.target.value })}
                    />
                </div>
                <div className="form-group">
                    <input
                        type="text"
                        className="form-control"
                        id="area"
                        value={form.area}
                        placeholder="Area"  
                        onChange={(e) => updateForm({ area: e.target.value })}
                    />
                </div>
                <div className="form-group">
                    <input
                        type="text"
                        className="form-control"
                        id="yearsatresidence"
                        value={form.yearsatresidence}
                        placeholder="Years at residence"
                        onChange={(e) => updateForm({ yearsatresidence: e.target.value })}
                    />
                </div>
                <div className="form-group">
                    <select 
                        className="form-control"
                        id="homecondition"
                        value={form.homecondition}
                        onChange={(e) => updateForm({ homecondition: e.target.value })}
                    >
                        <option>Condition of home</option>
                        <option value="Temporary">Temporary</option>
                        <option value="Semi Permanent">Semi-Permanent</option>
                        <option value="Permanent">Permanent</option>
                    </select>            
                </div>
                <div className="form-group">
                    <select 
                        className="form-control"
                        id="homesize"
                        value={form.homesize}
                        onChange={(e) => updateForm({ homesize: e.target.value })}
                    >
                        <option>Size of home</option>
                        <option value="Single room">Single Room</option>
                        <option value="Double room">Double Room</option>
                        <option value="One bedroom and above">One Bedroom and above</option>
                    </select>            
                </div>
                
                <label>Does this family posses the following services or assets? (Check all that apply)</label>
                <div className="form-group">
                    <div className="form-check form-check-block">
                        <input
                        className="form-check-input"
                        type="checkbox"
                        name="assetOptions"
                        id="assetBed"
                        value="Bed"
                        onChange={(e) => updateForm({ assetbed: e.target.value })}
                        />
                        <label htmlFor="bed" className="form-check">Bed</label>
                    </div>
                    <div className="form-check form-check-block">
                        <input
                        className="form-check-input"
                        type="checkbox"
                        name="assetOptions"
                        id="assetMattress"
                        value="Mattress"
                        onChange={(e) => updateForm({ assetmattress: e.target.value })}
                        />
                        <label htmlFor="mattress" className="form-check">Mattress</label>
                    </div>
                    <div className="form-check form-check-block">
                        <input
                        className="form-check-input"
                        type="checkbox"
                        name="assetOptions"
                        id="assetBeddings"
                        value="Beddings"
                        onChange={(e) => updateForm({ assetbeddings: e.target.value })}
                        />
                        <label htmlFor="beddings" className="form-check">Beddings</label>
                    </div>
                    <div className="form-check form-check-block">
                        <input
                        className="form-check-input"
                        type="checkbox"
                        name="assetOptions"
                        id="assetFurniture"
                        value="Furniture"
                        onChange={(e) => updateForm({ assetfurniture: e.target.value })}
                        />
                        <label htmlFor="furniture" className="form-check">Furniture</label>
                    </div>
                    <div className="form-check form-check-block">
                        <input
                        className="form-check-input"
                        type="checkbox"
                        name="assetOptions"
                        id="assetStove"
                        value="Stove"
                        onChange={(e) => updateForm({ assetstove: e.target.value })}
                        />
                        <label htmlFor="stove" className="form-check">Stove</label>
                    </div>
                    <div className="form-check form-check-block">
                        <input
                        className="form-check-input"
                        type="checkbox"
                        name="assetOptions"
                        id="assetGascooker"
                        value="Gas Cooker"
                        onChange={(e) => updateForm({ assetgascooker: e.target.value })}
                        />
                        <label htmlFor="gascooker" className="form-check">Gas Cooker</label>
                    </div>
                    <div className="form-check form-check-block">
                        <input
                        className="form-check-input"
                        type="checkbox"
                        name="assetOptions"
                        id="assetElectricity"
                        value="Electricity"
                        onChange={(e) => updateForm({ assetelectricity: e.target.value })}
                        />
                        <label htmlFor="electricity" className="form-check">Electricity</label>
                    </div>
                    <div className="form-check form-check-block">
                        <input
                        className="form-check-input"
                        type="checkbox"
                        name="assetOptions"
                        id="assetSolarlamp"
                        value="Solar Lamp"
                        onChange={(e) => updateForm({ assetsolarlamp: e.target.value })}
                        />
                        <label htmlFor="solarlamp" className="form-check">Solar Lamp</label>
                    </div>
                    <div className="form-check form-check-block">
                        <input
                        className="form-check-input"
                        type="checkbox"
                        name="assetOptions"
                        id="assetTelevision"
                        value="Television"
                        onChange={(e) => updateForm({ assettelevision: e.target.value })}
                        />
                        <label htmlFor="television" className="form-check">Television</label>
                    </div>
                    <div className="form-check form-check-block">
                        <input
                        className="form-check-input"
                        type="checkbox"
                        name="assetOptions"
                        id="assetRadio"
                        value="Radio"
                        onChange={(e) => updateForm({ assetradio: e.target.value })}
                        />
                        <label htmlFor="radio" className="form-check">Radio</label>
                    </div>
                    <div className="form-check form-check-block">
                        <input
                        className="form-check-input"
                        type="checkbox"
                        name="assetOptions"
                        id="assetFridge"
                        value="Fridge"
                        onChange={(e) => updateForm({ assetfridge: e.target.value })}
                        />
                        <label htmlFor="fridge" className="form-check">Fridge</label>
                    </div>  
                </div>
                <div className="form-group">
                <label>Where do the children sleep?</label>
                    <textarea 
                        className="form-control" 
                        row="3"
                        id="childrensleep"
                        placeholder="Please explain in detail"
                        value={form.childrensleep}
                        onChange={(e) => updateForm({ childrensleep: e.target.value })}
                        >
                    </textarea>
                </div>
                <div className="form-group">
                    <select 
                        className="form-control"
                        id="wateraccess"
                        value={form.wateraccess}
                        onChange={(e) => updateForm({ wateraccess: e.target.value })}
                    >
                        <option>How does the family access water?</option>
                        <option value="Tapped">Tapped</option>
                        <option value="Well/dam/borehole">Well/Dam/Borehole</option>
                        <option value="Rain Water">Rain Water</option>
                        <option value="River">River</option>
                    </select>            
                </div>
                <div className="form-group">
                    <select 
                        className="form-control"
                        id="ammenitiesaccess"
                        value={form.ammenitiesaccess}
                        onChange={(e) => updateForm({ ammenitiesaccess: e.target.value })}
                    >
                        <option>Does the family have access to any of the following?</option>
                        <option value="House Toilet">In house toilet</option>
                        <option value="Communal Toilet">Communal Toilet</option>
                        <option value="External Toilet">External Paid Toilet</option>
                    </select>            
                </div>
                <div className="form-group">
                    <select 
                        className="form-control"
                        id="enviroment"
                        value={form.enviroment}
                        onChange={(e) => updateForm({ enviroment: e.target.value })}
                    >                        
                        <option>What is the condition of the environment around the house?</option>
                        <option value="Maintained">Well maintained</option>
                        <option value="Garbage">Garbage</option>
                        <option value="Open Sewage">Open sewage & drains present</option>
                    </select>            
                </div>
                <hr />
{/* FAMILY EARNERS & FINANCIAL EXPENDITURE */}
            <div className="flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                    <h5 className="section-header text-success">Family Earners & Financial Expenditure</h5>
            </div>
            <label>How much does the family spend on the following needs?</label>
            <div className="form-group">
                <div className="row">
                    <Col>Food</Col>
                    <Col>
                        <input
                            className="form-control"
                            type="text"
                            name="foodcost"
                            id="Ksh"
                            value={form.foodcost}
                            placeholder="Ksh"
                            onChange={(e) => updateForm({ foodcost: e.target.value })}
                        />
                    </Col>
                    <Col>
                        <select 
                            className="form-control"
                            id="foodfrequency"
                            value={form.foodfrequency}
                            onChange={(e) => updateForm({ foodfrequency: e.target.value })}
                        >   
                            <option>Frequency</option>
                            <option value="Daily">Daily</option>
                            <option value="Weekly">Weekly</option>
                            <option value="Monthly">Monthly</option>
                        </select> 
                    </Col>
                </div>         
            </div>
            <div className="form-group">
                <div className="row">
                    <Col>Rent</Col>
                    <Col>
                        <input
                            className="form-control"
                            type="text"
                            name="rentcost"
                            id="Ksh"
                            placeholder="Ksh"
                            onChange={(e) => updateForm({ rentcost: e.target.value })}
                        />
                    </Col>
                    <Col>
                        <select 
                            className="form-control"
                            id="rentfrequency"
                            value={form.rentfrequency}
                            onChange={(e) => updateForm({ rentfrequency: e.target.value })}
                        >
                            <option>Frequency</option>
                            <option value="Daily">Daily</option>
                            <option value="Weekly">Weekly</option>
                            <option value="Monthly">Monthly</option>
                        </select> 
                    </Col>
                </div>
            </div>
            <div className="form-group">
                <div className="row">
                    <Col>Electricity</Col>
                    <Col>
                        <input
                            className="form-control"
                            type="text"
                            name="electricitycost"
                            id="Ksh"
                            placeholder="Ksh"
                            onChange={(e) => updateForm({ electricitycost: e.target.value })}
                        />
                    </Col>
                    <Col>
                        <select 
                            className="form-control"
                            id="electricityfrequency"
                            value={form.electricityfrequency}
                            onChange={(e) => updateForm({ electricityfrequency: e.target.value })}
                        >
                            <option>Frequency</option>
                            <option value="Daily">Daily</option>
                            <option value="Weekly">Weekly</option>
                            <option value="Monthly">Monthly</option>
                        </select>
                    </Col>
                </div>
            </div>
            <div className="form-group">
                <div className="row">
                    <Col>Water</Col>
                    <Col>
                        <input
                            className="form-control"
                            type="text"
                            name="watercost"
                            id="Ksh"
                            placeholder="Ksh"
                            onChange={(e) => updateForm({ watercost: e.target.value })}
                        />
                    </Col>
                    <Col>
                        <select 
                            className="form-control"
                            id="waterfrequency"
                            value={form.waterfrequency}
                            onChange={(e) => updateForm({ waterfrequency: e.target.value })}
                        >
                            <option>Frequency</option>
                            <option value="Daily">Daily</option>
                            <option value="Weekly">Weekly</option>
                            <option value="Monthly">Monthly</option>
                        </select>
                    </Col>
                </div>           
            </div>
            <div className="form-group">
                <div className="row">
                    <Col>Toilet</Col>
                    <Col>
                        <input
                            className="form-control"
                            type="text"
                            name="toiletcost"
                            id="Ksh"
                            placeholder="Ksh"
                            onChange={(e) => updateForm({ toiletcost: e.target.value })}
                        />   
                    </Col>
                    <Col>
                        <select 
                            className="form-control"
                            id="toiletfrequency"
                            value={form.toiletfrequency}
                            onChange={(e) => updateForm({ toiletfrequency: e.target.value })}
                        >
                            <option>Frequency</option>
                            <option value="Daily">Daily</option>
                            <option value="Weekly">Weekly</option>
                            <option value="Monthly">Monthly</option>
                        </select>                         
                    </Col>
                </div>          
            </div>
            <div className="form-group">
                <div className="row">
                    <Col>Medical</Col>
                    <Col>
                        <input
                            className="form-control"
                            type="text"
                            name="medicalcost"
                            id="Ksh"
                            placeholder="Ksh"
                            onChange={(e) => updateForm({ medicalcost: e.target.value })}
                        />   
                    </Col>
                    <Col>
                        <select 
                            className="form-control"
                            id="medicalfrequency"
                            value={form.medicalfrequency}
                            onChange={(e) => updateForm({ medicalfrequency: e.target.value })}
                        >
                            <option>Frequency</option>
                            <option value="Daily">Daily</option>
                            <option value="Weekly">Weekly</option>
                            <option value="Monthly">Monthly</option>
                        </select>                         
                    </Col>
                </div>          
            </div>
{/* PHYSICAL HEALTH */}
            <div className="flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                    <h5 className="section-header text-success">Physical Health</h5>
            </div>
            <div className="form-group">
            <label>List the family members with medical conditions including allergies and disabilities.</label>
                { inputFields.map(inputField => (
                    <div key={inputField.id}>
                        <input
                    type="text"
                    className="form-control"
                    id="membername"
                    placeholder="Name"
                    value={form.membername}
                    onChange={(e) => updateForm({ membername: e.target.value })}
                />
                <br />
                <input
                    type="text"
                    className="form-control"
                    id="memberrelationship"
                    placeholder="Relationship"
                    value={form.memberrelationship}
                    onChange={(e) => updateForm({ memberrelationship: e.target.value })}
                />
                <br />
                <input
                    type="text"
                    className="form-control"
                    id="medicalconcern"
                    placeholder="Medical Concern"
                    value={form.medicalconcern}
                    onChange={(e) => updateForm({ medicalconcern: e.target.value })}
                />
                <br />
                <input
                    type="text"
                    className="form-control"
                    id="membertreatmentstatus"
                    placeholder="Treatment Status"
                    value={form.membertreatmentstatus}
                    onChange={(e) => updateForm({ membertreatmentstatus: e.target.value })}
                />
                <br />
                <div className="mb-4">
                    <Col>
                        <Button 
                            className="btn btn-success" 
                            sm="6"
                            onClick={handleAddFields}>
                            Add Family member</Button>
                    </Col>
                    <br />
                    <Col>
                        <Button 
                        disabled={inputFields.length === 1} onClick={() => handleRemoveFields(inputField.id)}
                        className="btn btn-success" 
                        sm="6">
                        Remove Family member</Button>
                    </Col>
                </div>
                    </div>
                ))}
            </div>
            <div className="form-group">
                <label>Does the family have a medical cover? (NHIF) If no kindly advice on the importance of it?</label>
                    <select 
                        className="form-control"
                        id="nhif"
                        value={form.nhif}
                        onChange={(e) => updateForm({ nhif: e.target.value })}
                    >
                        <option value="Yes">Yes</option>
                        <option value="No">No</option>
                    </select>
                    <br />
                    <input
                    type="text"
                    className="form-control"
                    id="nhifnumber"
                    placeholder="NHIF No."
                    value={form.nhifnumber}
                    onChange={(e) => updateForm({ nhifnumber: e.target.value })}
                />            
            </div>
            <hr />
{/* CHILD SAFETY WITHIN THE FAMILY SETUP */}
            <div className="flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                    <h5 className="section-header text-success">Child Safety within the Family Setup</h5>
            </div>
            <div className="form-group">
            {/* (CONDITIONAL) */}
                <label>Do you or anyone in your household use alcohol or abuse any drug substance?</label>
                    <select 
                        className="form-control"
                        id="substanceabuse"
                        value={form.substanceabuse}
                        onChange={(e) => updateForm({ substanceabuse: e.target.value })}
                    >
                        <option value="Yes">Yes</option>
                        <option value="No">No</option>
                    </select>
                    <br />
                    <textarea 
                        className="form-control" 
                        row="3"
                        id="memberabused"
                        placeholder="If Yes, which member of the family abuses these substances?"
                        value={form.memberabused}
                        onChange={(e) => updateForm({ memberabused: e.target.value })}
                        >
                    </textarea>
                    <br />
                    <textarea 
                        className="form-control" 
                        row="3"
                        id="substancetype"
                        placeholder="Which substance/s do they commonly use?"
                        value={form.substancetype}
                        onChange={(e) => updateForm({ substancetype: e.target.value })}
                        >
                    </textarea>
                    <br />
                    <textarea 
                        className="form-control" 
                        row="3"
                        id="lenghtofabuse"
                        placeholder="For how long have they been using the substance/s?"
                        value={form.lenghtofabuse}
                        onChange={(e) => updateForm({ lenghtofabuse: e.target.value })}
                        >
                    </textarea>
            </div>
            <div className="form-group">
                <label>As a concerned parent which actions do you take concerning the above behavior/reactions/traits?</label>
                <div className="form-check">
                    <input
                    className="form-check-input"
                    type="checkbox"
                    name="actionOptions"
                    id="actionNothing"
                    value="I keep silent and assume nothing happens"
                    checked={form.parentalaction === "I keep silent and assume nothing happens"}
                    onChange={(e) => updateForm({ parentalaction: e.target.value })}
                    />
                    <label htmlFor="nothing" className="form-check">I keep silent and assume nothing happens</label>
                </div>
                <div className="form-check">
                    <input
                    className="form-check-input"
                    type="checkbox"
                    name="actionOptions"
                    id="actionFightback"
                    value="I react and fight back most of the time (quarrel)"
                    checked={form.parentalaction === "I react and fight back most of the time (quarrel)"}
                    onChange={(e) => updateForm({ parentalaction: e.target.value })}
                    />
                    <label htmlFor="fightback" className="form-check">I react and fight back most of the time (quarrel)</label>
                </div>
                <div className="form-check">
                    <input
                    className="form-check-input"
                    type="checkbox"
                    name="actionOptions"
                    id="actionReportpolice"
                    value="I report him/her to the police"
                    checked={form.parentalaction === "I report him/her to the police"}
                    onChange={(e) => updateForm({ parentalaction: e.target.value })}
                    />
                    <label htmlFor="reportpolice" className="form-check">I report him/her to the police</label>
                </div>
                <div className="form-check">
                    <input
                    className="form-check-input"
                    type="checkbox"
                    name="actionOptions"
                    id="actionReportchurch"
                    value="I report him/her to the church/ village leaders"
                    checked={form.parentalaction === "I report him/her to the church/ village leaders"}
                    onChange={(e) => updateForm({ parentalaction: e.target.value })}
                    />
                    <label htmlFor="reportchurch" className="form-check">I report him/her to the church/ village leaders</label>
                </div>
                <div className="form-check">
                    <input
                    className="form-check-input"
                    type="checkbox"
                    name="actionOptions"
                    id="actionNotApplicable"
                    value="Not applicable"
                    checked={form.parentalaction === "Not applicable"}
                    onChange={(e) => updateForm({ parentalaction: e.target.value })}
                    />
                    <label htmlFor="reportchurch" className="form-check">Not applicable</label>
                </div>
            </div>
            <div>
                <textarea 
                    className="form-control" 
                    row="3"
                    id="briefsummary"
                    placeholder="Brief summary on the family including any other additional observations"
                    value={form.briefsummary}
                    onChange={(e) => updateForm({ briefsummary: e.target.value })}
                >
                </textarea>
            </div>
            <hr />
{/* CHILD SAFETY WITHIN THE COMMUNITY */}
            <div className="flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                    <h5 className="section-header text-success">Child Safety within the Community</h5>
            </div>
            <div className="form-group">
                <textarea 
                    className="form-control" 
                    row="5"
                    id="communitybehaviour"
                    placeholder="List some of the behaviors/concerns that you have observed in your 
                    community that would affect the well-being /welfare of your child/children?"
                    value={form.communitybehaviour}
                    onChange={(e) => updateForm({ communitybehaviour: e.target.value })}
                    >
                </textarea>
            </div>
            <div className="form-group">
            <label>What type/form of child abuse is most common within your community?(Check all that apply)</label>
                <div className="form-check form-check-block">
                    <input
                    className="form-check-input"
                    type="checkbox"
                    name="physicalabuse"
                    id="physicalabuse"
                    value="Physical Abuse"
                    onChange={(e) => updateForm({ physicalabuse: e.target.value })}
                    />
                    <label htmlFor="physicalabuse" className="form-check">Physical</label>
                </div>
                <div className="form-check form-check-block">
                    <input
                    className="form-check-input"
                    type="checkbox"
                    name="sexualabuse"
                    id="sexualabuse"
                    value="Sexual Abuse"
                    onChange={(e) => updateForm({ sexualabuse: e.target.value })}
                    />
                    <label htmlFor="sexualabuse" className="form-check">Sexual</label>
                </div>
                <div className="form-check form-check-block">
                    <input
                    className="form-check-input"
                    type="checkbox"
                    name="negligenceabuse"
                    id="negligenceabuse"
                    value="Negligence Abuse"
                    onChange={(e) => updateForm({ negligenceabuse: e.target.value })}
                    />
                    <label htmlFor="negligenceabuse" className="form-check">Negligence</label>
                </div>
                <div className="form-check form-check-block">
                    <input
                    className="form-check-input"
                    type="checkbox"
                    name="emotionalabuse"
                    id="emotionalabuse"
                    value="Emotional Abuse"
                    onChange={(e) => updateForm({ emotionalabuse: e.target.value })}
                    />
                    <label htmlFor="emotionalabuse" className="form-check">Emotional</label>
                </div>
                <div className="form-check form-check-block">
                    <input
                    className="form-check-input"
                    type="checkbox"
                    name="otherabuse"
                    id="otherabuse"
                    value="Other Abuse"
                    onChange={(e) => updateForm({ otherabuse: e.target.value })}
                    />
                    <label htmlFor="otherabuse" className="form-check">Other</label>
                </div>
                <div className="form-check form-check-block">
                    <input
                    className="form-check-input"
                    type="checkbox"
                    name="none"
                    id="none"
                    value="None"
                    onChange={(e) => updateForm({ none: e.target.value })}
                    />
                    <label htmlFor="none" className="form-check">None</label>
                </div>
            </div>
            <div className="form-group">
                <textarea 
                    className="form-control" 
                    row="5"
                    id="otherexplanation"
                    placeholder="If the response to the question is other - Please add an explanation"
                    value={form.otherexplanation}
                    onChange={(e) => updateForm({ otherexplanation: e.target.value })}
                    >
                </textarea>
            </div>
{/* (CONDITIONAL) */}
            <div className="form-group">
            <label>Has any child in your household suffered any form of child abuse?</label>
                <select 
                    className="form-control"
                    id="childabuse"
                    value={form.childabuse}
                    onChange={(e) => updateForm({ childabuse: e.target.value })}
                >   
                    <option>Has any child in your household suffered any form of child abuse?</option>
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                </select>
                <br />
                <textarea 
                className="form-control" 
                row="5"
                id="affectedmember"
                placeholder="Who in your family is affected"
                value={form.affectedmember}
                onChange={(e) => updateForm({ affectedmember: e.target.value })}
                >
                </textarea>
                <br />
                <textarea 
                className="form-control" 
                row="5"
                id="relationship"
                placeholder="Relationship to the household"
                value={form.relationship}
                onChange={(e) => updateForm({ relationship: e.target.value })}
                >
                </textarea>
                <br />
                <textarea 
                className="form-control" 
                row="5"
                id="abusehistory"
                placeholder="Give a history on the case. Type of abuse/ What happened / Who was involved / Was the concerned person assisted?"
                value={form.abusehistory}
                onChange={(e) => updateForm({ abusehistory: e.target.value })}
                >
                </textarea>
                <br />
                <textarea 
                className="form-control" 
                row="5"
                id="srfassist"
                placeholder="How can SRF assist in this matter"
                value={form.srfassist}
                onChange={(e) => updateForm({ srfassist: e.target.value })}
                >
                </textarea>         
            </div>
            <hr />
{/* BENEFICIARIES WHO ARE SRF MEMBERS */}
            <div className="flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                    <h5 className="section-header text-success">Beneficiaries who are SRF members</h5>
            </div>
            <div className="form-group">
            <label>List any other SRF Beneficiaries.</label>
                { inputFields.map(inputField =>(
                    <div key={inputField.id}>
                        <input
                            type="text"
                            className="form-control"
                            id="beneficiaryname"
                            placeholder="Name"
                            value={form.beneficiaryname}
                            onChange={(e) => updateForm({ beneficiaryname: e.target.value })}
                        />
                    <br />
                        <input
                            type="text"
                            className="form-control"
                            id="yearofentry"
                            placeholder="Year of Entry"
                            value={form.yearofentry}
                            onChange={(e) => updateForm({ yearofentry: e.target.value })}
                        />
                    <br />
                        <input
                            type="text"
                            className="form-control"
                            id="membershipstatus"
                            placeholder="Membership Status"
                            value={form.membershipstatus}
                            onChange={(e) => updateForm({ membershipstatus: e.target.value })}
                        />
                    <br />
                        <div className="mb-4">
                            <Col>
                                <Button 
                                        className="btn btn-success" 
                                        sm="6"
                                        onClick={handleAddFields}
                                    >Add Beneficiary</Button>
                            </Col>
                            <br />
                            <Col>
                                <Button 
                                disabled={inputFields.length === 1} onClick={() => handleRemoveFields(inputField.id)}
                                className="btn btn-success" 
                                sm="6"
                                >
                                Remove Beneficiary</Button>
                            </Col>
                        </div>
                    </div>
                ))}
                </div>
            <hr />
{/* CAREGIVER CONSENT */}
            <div className="flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                    <h5 className="section-header text-success">Caregiver Consent</h5>
            </div>
            <div className="form-group">
                <select 
                    className="form-control"
                    id="caregiversconsent"
                    value={form.caregiversconsent}
                    onChange={(e) => updateForm({ caregiversconsent: e.target.value })}
                    >
                    <option>As the concerned caregiver, do you prefer your child/children being involved in SRF programs? *(CONDITIONAL)</option>
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                </select>
                <br />
                    <textarea 
                    className="form-control" 
                    row="5"
                    id="noconsent"
                    placeholder="If Yes, kindly give us your consent by signing to allow us to continue working with your child/children. If No, kindly give a reason"
                    value={form.noconsent}
                    onChange={(e) => updateForm({ noconsent: e.target.value })}
                    >
                    </textarea>
                <br />
                    <input
                        type="text"
                        className="form-control"
                        id="caregiversname"
                        placeholder="Caregiver's Name"
                        value={form.caregiversname}
                        onChange={(e) => updateForm({ caregiversname: e.target.value })}
                    />
            </div>
            <div className="form-group">
                <label>Consent Date</label>
                <input
                    type="date"
                    className="form-control"
                    id="consentdate"
                    value={form.consentdate}
                    onChange={(e) => updateForm({ consentdate: e.target.value })}
                />
            </div>
            <div className="button mt-4">
                <button className="btn btn-success mb-4 mx-4" type="submit">
                    Signature
                </button>
                <button className="btn btn-success mb-4  mx-4" type="submit">
                    Archive
                </button>
            </div>
            <div className="form-group">
                <textarea 
                    className="form-control" 
                    row="5"
                    id="otherorganisation"
                    placeholder="Which other organisation are you children involved with or supported by?"
                    value={form.otherorganisation}
                    onChange={(e) => updateForm({ otherorganisation: e.target.value })}
                    >
                </textarea>
            </div>
            <div className="form-group">
                <textarea 
                    className="form-control" 
                    row="5"
                    id="additionalcomments"
                    placeholder="Any other additional comment on SRF program/s"
                    value={form.additionalcomments}
                    onChange={(e) => updateForm({ additionalcomments: e.target.value })}
                    >
                </textarea>
            </div>
            <hr />
{/* SOCIAL WORKER SUMMARY */}
            <div className="flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                    <h5 className="section-header text-success">Social Worker Summary</h5>
            </div>
            <div className="form-group">
                <textarea 
                    className="form-control" 
                    row="5"
                    id="socialworkersummary"
                    placeholder="Brief summary on the family including any other additional observations"
                    value={form.socialworkersummary}
                    onChange={(e) => updateForm({ socialworkersummary: e.target.value })}
                    >
                </textarea>
            </div>
            <div className="form-group">
                <textarea 
                    className="form-control" 
                    row="5"
                    id="familyburden"
                    placeholder="Observations on the family burden of care including various needs/conditions."
                    value={form.familyburden}
                    onChange={(e) => updateForm({ familyburden: e.target.value })}
                    >
                </textarea>
            </div>
            <div className="form-group">
                <textarea 
                    className="form-control" 
                    row="5"
                    id="additonalskills"
                    placeholder="Note any other additional skills of the family earners"
                    value={form.additonalskills}
                    onChange={(e) => updateForm({ additonalskills: e.target.value })}
                    >
                </textarea>
            </div>
            <div className="form-group">
            <label>Scale the family and to give the necessary recommendations</label>
                <div className="form-check form-check-block">
                    <input
                        className="form-check-input"
                        type="checkbox"
                        name="scaleOptions"
                        id="scaleLeastvulnerable"
                        value="Least Vulnerable"
                        checked={form.vulerabilityscale === "Least Vulnerable"}
                        onChange={(e) => updateForm({ vulerabilityscale: e.target.value })}
                    />
                    <label htmlFor="leastvulnerable" className="form-check">Least Vulnerable</label>
                </div>
                <div className="form-check form-check-block">
                    <input
                        className="form-check-input"
                        type="checkbox"
                        name="scaleOptions"
                        id="scaleVulnerable"
                        value="Vulnerable"
                        checked={form.vulerabilityscale === "Vulnerable"}
                        onChange={(e) => updateForm({ vulerabilityscale: e.target.value })}
                    />
                    <label htmlFor="vulnerable" className="form-check">Vulnerable</label>
                </div>
                <div className="form-check form-check-block">
                    <input
                        className="form-check-input"
                        type="checkbox"
                        name="scaleOptions"
                        id="scaleHighlyvulnerable"
                        value="Highly Vulnerable"
                        checked={form.vulerabilityscale === "Highly Vulnerable"}
                        onChange={(e) => updateForm({ vulerabilityscale: e.target.value })}
                    />
                    <label htmlFor="highlyvulnerable" className="form-check">Highly Vulnerable</label>
                </div>
            </div>
            <div className="form-group">
                <textarea 
                    className="form-control" 
                    row="5"
                    id="necessaryrecommendations"
                    placeholder="Give necessary recommendations"
                    value={form.necessaryrecommendations}
                    onChange={(e) => updateForm({ necessaryrecommendations: e.target.value })}
                    >
                </textarea>
            </div>
            <hr />
{/* DOCUMENT UPLOADS */}
            
            <hr />
{/* FORM SUBMIT */}
            <div className="form-group row pt-2">
                <div className="col-sm-4">
                    <button type="submit" className="btn btn-success mb-4">Submit</button>
                </div>
            </div>
            <br />
            </form>
            </BoxContainer>
        </Fragment>
    )
}

export default Registration