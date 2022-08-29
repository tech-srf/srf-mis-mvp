import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"


const Registration = (props) => (


    <tr>
        <td>{props.signup.firstname} {props.signup.middlename} {props.signup.lastname}</td>
        <td>{props.registration.schoolname}</td>
        <td>{props.registration.clinic}</td>
        <td><Link to="/registrationcard" className="btn btn-success">View</Link></td>
        {/* <td>
        <Link className="btn btn-link" to={`/edit/${props.signup._id}`}>Edit</Link> |
        <button className="btn btn-link"
            onClick={() => {
            props.deleteRecord(props.record._id);
            }}
        >
            Delete
        </button>
        </td> */}
    </tr>
    );

    export default function RegitrationList() {
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

    // This method will delete a record
    async function deleteRegistration(id) {
        await fetch(`http://localhost:5000/${id}`, {
        method: "DELETE"
        });

        const newRegistrations = registrations.filter((el) => el._id !== id);
        setRegistrations(newRegistrations);
    }

    // This method will map out the registrations on the table
    function registrationList() {
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

    // This following section will display the table with the signed up players.
    return (
        <div className="table">
        <table className="table table-striped" style={{ marginTop: 20 }}>
            <thead>
            <tr>
                {/* <th>Id</th> */}
                <th>Names</th>
                <th>School</th>
                <th>Clinic</th>
            </tr>
            </thead>
            <tbody>{registrationList()}</tbody>
        </table>
        </div>
    );
}