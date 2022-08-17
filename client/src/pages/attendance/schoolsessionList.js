import React, { useEffect, useState } from "react";
//import { Link } from "react-router-dom";

const Schoolsession = (props) => (
  <tr>
    <td>{props.schoolsession.firstname} {props.schoolsession.middlename} {props.schoolsession.lastname}</td>
    <td>{props.schoolsession.clinic}</td>
    <td>{props.schoolsession.gender}</td>
    <td>{props.schoolsession.attendance}</td>
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

export default function SchoolsessionList() {
  const [schoolsessions, setSchoolsessions] = useState([]);

  // This method fetches the schoolsessions from the database.
  useEffect(() => {
    async function getSchoolsessions() {
      const response = await fetch(`http://localhost:5000/schoolsession/`);

      if (!response.ok) {
        const message = `An error occured: ${response.statusText}`;
        window.alert(message);
        return;
      }

      const schoolsessions = await response.json();
      setSchoolsessions(schoolsessions);
    }

    getSchoolsessions();

    return; 
  }, [schoolsessions.length]);

  // This method will delete a record
  async function deleteSchoolsession(id) {
    await fetch(`http://localhost:5000/${id}`, {
      method: "DELETE"
    });

    const newSchoolsessions = schoolsessions.filter((el) => el._id !== id);
    setSchoolsessions(newSchoolsessions);
  }

  // This method will map out the schoolsessions on the table
  function schoolsessionList() {
    return schoolsessions.map((schoolsession) => {
      return (
        <Schoolsession
        schoolsession={schoolsession}
          deleteSchoolsession={() => deleteSchoolsession(schoolsession._id)}
          key={schoolsession._id}
        />
      );
    });
  }

  // This following section will display the table with the signed up players.
  return (
    <div className="table">
      <h3>School Attendance List</h3>
      <table className="table table-striped" style={{ marginTop: 20 }}>
        <thead>
          <tr>
            <th>Names</th>
            <th>Clinic</th>
            <th>Gender</th>
            <th>Presence</th>
          </tr>
        </thead>
        <tbody>{schoolsessionList()}</tbody>
      </table>
    </div>
  );
}
