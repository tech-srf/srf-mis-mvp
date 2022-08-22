import React, { useEffect, useState } from "react";
import BoxContainer from "../../components/BoxContainer"
import { Link } from "react-router-dom";
import NavSideBar from "../../components/NavSideBar";




const Registration = (props) => (
    <div class="card-group">
        <div className="card mb-3">
        <div className="card-body">
        {/* <h5 class="card-title">Names: {props.signup.firstname} {props.signup.middlename} {props.signup.lastname}</h5> */}
        {/* <td>{props.signup.clinic}</td> */}
        <p className="card-subtitle">Registration Date:</p>
            <div className="p card-text">{props.registration.registrationdate}</div>

        <hr />
        <p className="card-subtitle">School Name:</p>
            <div className="p card-text">{props.registration.schoolname}</div>

        <p className="card-subtitle">Academic Level:</p>
            <div className="p card-text">{props.registration.academiclevel} {props.registration.classlevel}</div>

        <hr />
        <p className="card-subtitle">Relationship:</p>
            <div className="p card-text">{props.registration.relationshiphh}</div>
        <p className="card-subtitle">Marital Status:</p>
            <div className="p card-text">{props.registration.maritalstatus}</div>
        <p className="card-subtitle">Deceased Relationship:</p>
            <div className="p card-text">{props.registration.deceasedrelationship}</div>
        <p className="card-subtitle">Year of Death:</p>
            <div className="p card-text">{props.registration.yearofdeath}</div>
        <p className="card-subtitle">Cause of Death:</p>
            <div className="p card-text">{props.registration.causeofdeath}</div>
        <p className="card-subtitle">Death Documentation:</p>
            <div className="p card-text">{props.registration.deathdocumentation}</div>
        <p className="card-subtitle">No Death Documentation:</p>
            <div className="p card-text">{props.registration.nodocuments}</div>
        <p className="card-subtitle">Household Description:</p>
            <div className="p card-text">{props.registration.householddescription}</div>

        <hr />
        <p className="card-subtitle">County:</p>
            <div className="p card-text">{props.registration.county}</div>
        <p className="card-subtitle">Area of Residence:</p>
            <div className="p card-text">{props.registration.area}</div>
        <p className="card-subtitle">Year at Residence:</p>
            <div className="p card-text">{props.registration.yearsatresidence}</div>
        <p className="card-subtitle">Home Condition:</p>
            <div className="p card-text">{props.registration.homecondition}</div>
        <p className="card-subtitle">Home Size:</p>
            <div className="p card-text">{props.registration.homesize}</div>
        <p className="card-subtitle">Bed</p> 
            <div className="p card-text">{props.registration.assetbed}</div>
        <p className="card-subtitle">Mattress</p> 
            <div className="p card-text">{props.registration.assetmattress}</div>
        <p className="card-subtitle">Beddings</p> 
            <div className="p card-text">{props.registration.assetbeddings}</div>
        <p className="card-subtitle">Furniture</p> 
            <div className="p card-text">{props.registration.assetfurniture}</div>
        <p className="card-subtitle">Stove</p> 
            <div className="p card-text">{props.registration.assetstove}</div>
        <p className="card-subtitle">Gas Cooker</p> 
            <div className="p card-text">{props.registration.assetgascooker}</div>
        <p className="card-subtitle">Electricity</p> 
            <div className="p card-text">{props.registration.assetelectricity}</div>
        <p className="card-subtitle">Solar Lamp</p> 
            <div className="p card-text">{props.registration. assetsolarlamp}</div>
        <p className="card-subtitle">Television</p> 
            <div className="p card-text">{props.registration.assettelevision}</div>
        <p className="card-subtitle">Radio</p> 
            <div className="p card-text">{props.registration.assetradio}</div>
        <p className="card-subtitle">Fridge</p> 
            <div className="p card-text">{props.registration.assetfridge}</div>
        <p className="card-subtitle">Where children sleep</p>
            <div className="p card-text">{props.registration.childrensleep}</div>
        <p className="card-subtitle">Access to Water:</p>
            <div className="p card-text">{props.registration.wateraccess}</div>
        <p className="card-subtitle">Ammenities Access</p>
            <div className="p card-text">{props.registration.ammenitiesaccess}</div>
        <p className="card-subtitle">Household Enviroment</p>
            <div className="p card-text">{props.registration.enviroment}</div>

        <hr />
        <p className="card-subtitle">Food Cost:</p>
            <div className="p card-text">Ksh:{props.registration.foodcost} {props.registration.frequency}</div>
        <p className="card-subtitle">Rent Cost:</p>
            <div className="p card-text">Ksh:{props.registration.rentcost} {props.registration.frequency}</div>
        <p className="card-subtitle">Electricity Cost:</p>
            <div className="p card-text">Ksh:{props.registration.electricitycost} {props.registration.frequency}</div>
        <p className="card-subtitle">Water Cost:</p>
            <div className="p card-text">Ksh:{props.registration.watercost} {props.registration.frequency}</div>
        <p className="card-subtitle">Toilet Cost:</p>
            <div className="p card-text">Ksh:{props.registration.toiletcost} {props.registration.frequency}</div>
        <p className="card-subtitle">Medical Cost:</p>
            <div className="p card-text">Ksh:{props.registration.medicalcost} {props.registration.frequency}</div>
        
        <hr />
        <p className="card-subtitle">Member Name:</p>
            <div className="p card-text">{props.registration.membername}</div>
        <p className="card-subtitle">Member Relationship:</p>
            <div className="p card-text">{props.registration.memberrelationship}</div>
        <p className="card-subtitle">Medical Concern:</p>
            <div className="p card-text">{props.registration.medicalconcern}</div>
        <p className="card-subtitle">teatment Status:</p>
            <div className="p card-text">{props.registration.treatmentstatus}</div>
        <p className="card-subtitle">NHIF:</p>
            <div className="p card-text">{props.registration.nhif}</div>
        <p className="card-subtitle">NHIF Number:</p>
            <div className="p card-text">{props.registration.nhifnumber}</div>

        <hr />
        <p className="card-subtitle">Do you or anyone in your household use alcohol or abuse any drug substance:</p>
            <div className="p card-text">{props.registration.substanceabuse}</div>
        <p className="card-subtitle">Member/s who abuses these substances:</p>
            <div className="p card-text">{props.registration.memberabused}</div>
        <p className="card-subtitle">Substance commonly abused:</p>
            <div className="p card-text">{props.registration.substancetype}</div>
        <p className="card-subtitle">Lenght of abuse:</p>
            <div className="p card-text">{props.registration.lenghtofabuse}</div>
        <p className="card-subtitle">Parental Actions:</p>
            <div className="p card-text">{props.registration.parentalaction}</div>
        <p className="card-subtitle">Summary & Observations:</p>
            <div className="p card-text">{props.registration.briefsummary}</div>
        <p className="card-subtitle">Childrens behaviour and Concerns:</p>
            <div className="p card-text">{props.registration.childrensbehaviour}</div>
        <p className="card-subtitle">Physical Abuse</p>
            <div className="p card-text">{props.registration.physicalabuse}</div>
        <p className="card-subtitle">Sexual Abuse</p>
            <div className="p card-text">{props.registration.sexualabuse}</div>
        <p className="card-subtitle">Negligence</p>
            <div className="p card-text">{props.registration.negligenceabuse}</div>
        <p className="card-subtitle">Emotional Abuse</p>
            <div className="p card-text">{props.registration.emotionalabuse}</div>
        <p className="card-subtitle">Other forms of Abuse</p>
            <div className="p card-text">{props.registration.otherabuse}</div>
        <p className="card-subtitle">None</p>
            <div className="p card-text">{props.registration.none}</div>
        <p className="card-subtitle">Explanation for other abuse form</p>
            <div className="p card-text">{props.registration.otherexplanation}</div>
        <p className="card-subtitle">Has any child  in your household suffered any form of child abuse:</p>
            <div className="p card-text">{props.registration.childabuse}</div>
        <p className="card-subtitle">Affected member:</p>
            <div className="p card-text">{props.registration.affectedmember}</div>
        <p className="card-subtitle">Relationship to Household:</p>
            <div className="p card-text">{props.registration.relationship}</div>
        <p className="card-subtitle">Abuse case history:</p>
            <div className="p card-text">{props.registration.abusehistory}</div>
        <p className="card-subtitle">How SRF can assist:</p>
            <div className="p card-text">{props.registration.srfassist}</div>
        <p className="card-subtitle">Beneficairy Name</p>
            <div className="p card-text">{props.registration.beneficiaryname}</div>
        <p className="card-subtitle">Year of Entry:</p>
            <div className="p card-text">{props.registration.yearofentry}</div>
        <p className="card-subtitle">Membership Status:</p>
            <div className="p card-text">{props.registration.membershipstatus}</div>

        <hr />
        <p className="card-subtitle">Caregiver's Consent:</p>
            <div className="p card-text">{props.registration.caregiversconsent}</div>
        <p className="card-subtitle">No Consent:</p>
            <div className="p card-text">{props.registration.noconsent}</div>
        <p className="card-subtitle">Caregiver's Name:</p>
            <div className="p card-text">{props.registration.caregiversname}</div>
        <p className="card-subtitle">Consent Date:</p>
            <div className="p card-text">{props.registration.consentdate}</div>
        <p className="card-subtitle">Other Organisation engaging the children</p>
            <div className="p card-text">{props.registration.otherorganisation}</div>
        <p className="card-subtitle">Additonal Comments:</p>
            <div className="p card-text">{props.registration.additionalcomments}</div>

        <hr />
        <p className="card-subtitle">Social Work Summary:</p>
        <div className="p card-text">{props.registration.socialworkersummary}</div>
        <p className="card-subtitle">Family Burden Observation:</p>
        <div className="p card-text">{props.registration.familyburden}</div>
        <p className="card-subtitle">Additonal Skills of Family Earners:</p>
        <div className="p card-text">{props.registration.additonalskills}</div>
        <p className="card-subtitle">Vulerability Scale:</p>
        <div className="p card-text">{props.registration.vulerabilityscale}</div>
        
        <hr />
        <p className="card-subtitle">Necessary Recommendations:</p>
        <div className="p card-text">{props.registration.necessaryrecommendations}</div>
        </div>
        </div>
    </div>
    );

    export default function RegistrationCard() {
    const [registrations, setRegistrations] = useState([]);

    // This method fetches the registrations from the database.
    useEffect(() => {
        async function getRegistrations() {
        const response = await fetch(`http://localhost:5000/registration/`);

        if (!response.ok) {
            const message = `An error occured: ${response.statusText}`;
            window.alert(message);
            return;
        }

        const registrations = await response.json();
        setRegistrations(registrations);
        }

        getRegistrations();

        return; 
    }, [registrations.length]);

    // This method will delete a registration
    async function deleteRegistration(id) {
        await fetch(`http://localhost:5000/${id}`, {
        method: "DELETE"
        });

        const newRegistrations = registrations.filter((el) => el._id !== id);
        setRegistrations(newRegistrations);
    }

    // This method will map out the registrations on the table
    function registrationCard() {
        return registrations.map((registration) => {
        return (
            <Registration
            registration={registration}
            deleteRegistration={() => deleteRegistration(registration._id)}
            key={registration._id}
            />
        );
        });
    }

    // This following section will display the table with the registrations of individuals.
    return (
        <div>
        <NavSideBar />
            <BoxContainer>
            <div className="row d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
            <div className="col">
                <h3 className="h3">Registered Player Details</h3>
            </div>
            <div className="col">
                <Link to="/registration" className="btn btn-success">
                    Register new player
                </Link>
            </div>
            </div>
            <table className="table table-striped" style={{ marginTop: 20 }}>
                <tbody>{registrationCard()}</tbody>
            </table>
            </BoxContainer>
        </div>
    );
}
