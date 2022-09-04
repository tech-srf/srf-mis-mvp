import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import Search from '../../components/Search'

const Signup = (props) => (

    <tr>
        <td>{props.signup.firstname} {props.signup.middlename} {props.signup.lastname}</td>
        <td>{props.signup.team}</td>
        <td>{props.signup.clinic}</td>
        <td><Link to="/signupcard" className="btn btn-success">View</Link></td>
        <td><Link to="/registration" className="btn btn-success">Register</Link></td>
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

    export default function SignupList() {
    const [signups, setSignups] = useState([]);

    // This method fetches the signups from the database.
    useEffect(() => {
        async function getSignups() {
        const response = await fetch(`http://localhost:5000/signup/`);

        if (!response.ok) {
            const message = `An error occured: ${response.statusText}`;
            window.alert(message);
            return;
        }

        const signups = await response.json();
        setSignups(signups);
        }

        getSignups();

        return; 
    }, [signups.length]);

    // This method will delete a record
    async function deleteSignup(id) {
        await fetch(`http://localhost:5000/${id}`, {
        method: "DELETE"
        });

        const newSignups = signups.filter((el) => el._id !== id);
        setSignups(newSignups);
    }

    // This method will map out the signups on the table
    function signupList() {
        return signups.map((signup) => {
        return (
            <Signup
            signup={signup}
            deleteSignup={() => deleteSignup(signup._id)}
            key={signup._id}
            />
        );
        });
    }

    // This following section will display the table with the signed up players.
    return (
        
        <div className="table">
            <Search />
        <table className="table table-striped" style={{ marginTop: 20 }}>
            <thead>
            <tr>
                {/* <th>Id</th> */}
                <th>Names</th>
                <th>Team</th>
                <th>Clinic</th>
            </tr>
            </thead>
            <tbody>{signupList()}</tbody>
        </table>
        </div>
    );
}
