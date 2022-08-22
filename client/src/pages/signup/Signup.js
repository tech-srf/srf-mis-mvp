import React, { useState } from 'react'
import NavSideBar from '../../components/NavSideBar'
import BoxContainer  from '../../components/BoxContainer'
import { Fragment } from 'react'
import { useNavigate } from "react-router"
import { Link } from 'react-router-dom'
import SignupList from './signupList';



const Signup = () => {
    const [form, setForm] = useState({
        firstname: "",
        middlename: "",
        lastname: "",
        dateofbirth: "",
        gender: "",
        caregivernames: "",
        phonenumber: "",
        relationship:"",
        clinic:"",
        team:"",
    });
    
    // const { id } = useParams("");
    // console.log(id);

    const navigate = useNavigate();

 //These methods will update the state properties.
 // eslint-disable-next-line 
    function updateForm(value) {
        return setForm((prev) => {
        return { ...prev, ...value };
        });
    }

      // This function will handle the submission. 
      // eslint-disable-next-line 
    async function onSubmit(e) {
        e.preventDefault();

    // When a post request is sent to the create url, we'll add a new record to the database.
    const newPlayer = { ...form };

    await fetch("http://localhost:5000/signup/add", {
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
        firstname: "",
        middlename: "",
        lastname: "",
        dateofbirth: "",
        gender: "",
        caregivernames: "",
        phonenumber: "",
        relationship:"",
        clinic:"",
        team:"",
    });
    navigate("/signup");
}


    return (
        <Fragment>
            <NavSideBar />
            <BoxContainer>
            <div className="flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                <div className="row">
                    <div className="col">
                        <h3 className="h2 text-success">Signed Players</h3>
                    </div>
                    <div className="col">
                    <Link to="/signupcreate" className="btn btn-success">
                        New Signup
                    </Link>
                    </div>
                </div>
            </div>
                <SignupList />
            </BoxContainer>
            <br />
        </Fragment>
    )
}

export default Signup