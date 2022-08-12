import React, { useEffect, useState } from "react";
//import { Link } from "react-router-dom";



const Signup = (props) => (
  <div class="card-group">
    <div class="card mb-3">
      <div class="card-body">
      <h5 class="card-title">Player Names: {props.signup.name} {props.signup.middlename} {props.signup.lastname}</h5>
      <p class="card-text">Caregiver's Name: {props.signup.caregivernames}</p>
      <p class="card-text">Relationship: {props.signup.relationship}</p>
      <p class="card-text">Clinic: {props.signup.clinic}</p>
      <p class="card-text">Team: {props.signup.team}</p>
      </div>
    </div>
  </div>
);

export default function SignupCard() {
  const [signups, setSignups] = useState([]);

  // This method fetches the signupss from the database.
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

  // This method will delete a signup
  async function deleteSignup(id) {
    await fetch(`http://localhost:5000/${id}`, {
      method: "DELETE"
    });

    const newSignups = signups.filter((el) => el._id !== id);
    setSignups(newSignups);
  }

  // This method will map out the signups on the table
  function signupCard() {
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

  // This following section will display the table with the signups of individuals.
  return (
    <div>
      <h3>Signed Up Players</h3>
      <div>
        <input
          type="submit"
          value="Add a new player"
          className="btn btn-success"
        />
      </div>
      
      <table className="table table-striped" style={{ marginTop: 20 }}>
        {/* <thead>
          <tr>
            <th>Name</th>
            <th>Position</th>
            <th>Level</th>
            <th>Action</th>
          </tr>
        </thead> */}
        <tbody>{signupCard()}</tbody>
      </table>
    </div>
  );
}
