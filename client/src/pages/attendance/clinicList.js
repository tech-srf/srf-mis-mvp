import React, { useEffect, useState } from "react";
//import { Link } from "react-router-dom";

const Clinicsession = (props) => (
  <tr>
    <td>{props.clinicsession.firstname}{props.clinicsession.middlename}{props.clinicsession.lastname} </td>
    <td>{props.clinicsession.clinic}</td>
    <td>{props.clinicsession.team}</td>
    <td>{props.clinicsession.attendance}</td>
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

export default function ClinicsessionList() {
  const [clinicsessions, setClinicsessions] = useState([]);

  // This method fetches the clinicsessions from the database.
  useEffect(() => {
    async function getClinicsessions() {
      const response = await fetch(`http://localhost:5000/clinicsession/`);

      if (!response.ok) {
        const message = `An error occured: ${response.statusText}`;
        window.alert(message);
        return;
      }

      const clinicsessions = await response.json();
      setClinicsessions(clinicsessions);
    }

    getClinicsessions();

    return; 
  }, [clinicsessions.length]);

  // This method will delete a record
  async function deleteClinicsession(id) {
    await fetch(`http://localhost:5000/${id}`, {
      method: "DELETE"
    });

    const newClinicsessions = clinicsessions.filter((el) => el._id !== id);
    setClinicsessions(newClinicsessions);
  }

  // This method will map out the clinicsessions on the table
  function clinicsessionList() {
    return clinicsessions.map((clinicsession) => {
      return (
        <Clinicsession
        clinicsession={clinicsession}
          deleteClinicsession={() => deleteClinicsession(clinicsession._id)}
          key={clinicsession._id}
        />
      );
    });
  }

  // This following section will display the table with the signed up players.
  return (
    <div className="table">
      <h3>Clinic Attendance List</h3>
      <table className="table table-striped" style={{ marginTop: 20 }}>
        <thead>
          <tr>
            <th>Names</th>
            <th>Team</th>
            <th>Clinic</th>
            <th>Presence</th>
          </tr>
        </thead>
        <tbody>{clinicsessionList()}</tbody>
      </table>
    </div>
  );
}
