import React, { useEffect, useState } from "react";
import BoxContainer from "../../components/BoxContainer"
import { Link } from "react-router-dom";
import NavSideBar from "../../components/NavSideBar";




const Signup = (props) => (
  <div class="card-group">
    <div class="card mb-3">
      <div class="card-body">
      <h5 class="card-title">{props.signup.firstname} {props.signup.middlename} {props.signup.lastname}</h5>
      <div className="p card-title"></div>
      <p class="card-subtitle">Gender:</p>
      <div className="p card-text">{props.signup.gender}</div>
      <p class="card-subtitle">Age:</p>
      <div className="p card-text">{props.signup.age}</div>
      <p class="card-subtitle">Caregiver:</p>
      <div className="p card-text">{props.signup.caregivernames}</div>
      <p class="card-subtitle">Relationship:</p>
      <div className="p card-text">{props.signup.relationship}</div>
      <p class="card-subtitle">Phone Number:</p>
      <div className="p card-text">{props.signup.phonenumber}</div>
      <p class="card-subtitle">Clinic:</p>
      <div className="p card-text">{props.signup.clinic}</div>
      <p class="card-subtitle">Team: </p>
      <div className="p card-text">{props.signup.team}</div>
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
      <NavSideBar />
        <BoxContainer>
        <div className="row d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
          <div className="col">
              <h3 className="h3">Signed Up Players</h3>
          </div>
          <div className="col">
              <Link to="/registration" className="btn btn-success">
                  Register new player
              </Link>
          </div>
        </div>
            <div className="col d-flex justify-content-center">
              <tbody className="signup-card">{signupCard()}</tbody>
            </div>
        </BoxContainer>
    </div>
  );
}
